<template>
	<div>
		<!-- Ask user to upload -->
		<!-- dropzone -->
		<!-- :style="fileType == 'image' && fileName !== '' ? `background-image: url('${fileLink}')` : ''" -->
		<div v-if="uploadStatus === ''">
			<label for="" class="form-label">{{ label }}</label>
			<div class="dropzone" v-bind="getRootProps()">
				<div>{{ instruction }}</div>
				<input v-bind="getInputProps()" />
			</div>
		</div>

		<!-- Uploading file -->
		<div v-if="uploadStatus === 'uploading'" class="uploading">
			<label for="" class="form-label"
				>Uploading! Please wait until the upload is complete.</label
			>

			<v-progress-linear v-model="progress" color="success" height="25">
				<template v-slot:default="{ value }">
					<strong>{{ progress <= 100 ? progress.toFixed(1) : 100 }}%</strong>
				</template>
			</v-progress-linear>
			<div class="mt-2">
				<v-btn size="small" @click="restartUpload" elevation="0">Cancel</v-btn>
			</div>
		</div>

		<!-- Uploaded - file upload completed -->
		<div v-if="uploadStatus === 'uploaded'" class="uploaded">
			<div class="msg">
				<v-icon
					color="success"
					class="icon"
					icon="fluent:checkmark-circle-24-filled"
				></v-icon>
				<div>{{ titleCase(fileType) }} uploaded!</div>
				<v-btn size="small" @click="restartUpload" elevation="0">Reset</v-btn>
			</div>
			<div v-if="fileType === 'image'">
				<img :src="fileLink" />
			</div>
			<div v-if="fileType === 'video'">
				<video
					controls
					height="150"
					ref="videoRef"
					@loadeddata="videoLoadedData"
				>
					<source :src="fileLink" type="video/mp4" />
				</video>
			</div>
			<div v-if="fileType === 'pdf'">
				<embed :src="`${fileLink}#toolbar=0&view=FitH`" height="150" />
			</div>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		label: {
			type: String,
			required: true,
		},
		instruction: {
			type: String,
			required: true,
		},
		fileType: {
			type: String,
			required: true,
		},
		path: {
			type: String,
			default: "",
		},
		refresh: {
			type: Boolean,
			default: false,
		},
	});

	console.log("props.path", props.path);

	const emit = defineEmits(["uploaded", "videoDuration"]);

	//const spinner = ref(false)
	const config = useRuntimeConfig();
	//const fileName = ref('')
	const fileLink = ref("");
	// const auth = useState('auth')
	const $notify = useNuxtApp().$notify;
	const progress = ref(0);

	const mimeType = ref("");
	const extention = ref("");
	if (props.fileType == "image") {
		mimeType.value = "image/jpeg,image/png";
		extention.value = "jpeg, jpg or png";
	} else if (props.fileType == "pdf") {
		mimeType.value = "application/pdf";
		extention.value = "pdf";
	} else if (props.fileType == "video") {
		mimeType.value = "video/mp4";
		extention.value = "mp4";
	} /* else if (props.fileType == 'zip') {
  mimeType.value = 'application/zip'
  extention.value = 'zip'
} */

	// upload status
	const uploadStatus = ref(""); // '', uploading, uploaded

	// File rejected
	const onDropRejected = (fileRejections) => {
		$notify({
			title: "Error",
			text: `Please select the appropriate file type, ${extention.value} file.`,
			type: "error",
		});
	};
	// Dropzone upload to s3
	const onDropAccepted = async (acceptFiles) => {
		uploadStatus.value = "uploading";
		const estematedBytesPerSecond = 800000;
		const totalSeconds = acceptFiles[0].size / estematedBytesPerSecond;
		const valuePerSecond = 100 / totalSeconds;
		const blob = new Blob(acceptFiles, { type: acceptFiles[0].type });
		// Get s3 upload signed url
		const key = `${year()}/${generateFileName(acceptFiles[0])}`;
		console.log("key", props.path + key);
		//const keyFull = key
		const res = await $fetch.raw(`${config.public.awsApiGatewayUrl}/uploads`, {
			method: "GET",
			query: {
				fileName: props.path + key,
				fileType: acceptFiles[0].type,
			},
		});

		if (res.ok) {
			// progress bar
			setInterval(() => {
				if (progress.value <= 100) {
					progress.value += valuePerSecond;
				}
			}, 1000);

			// Upload to s3
			const uploadRes = await $fetch.raw(res._data.signedUrl, {
				method: "PUT",
				body: blob,
			});

			if (uploadRes.ok) {
				progress.value = 100;
				fileLink.value = `${config.public.awsCloudfront}/${props.path}${key}`;
				uploadStatus.value = "uploaded";
				emit("uploaded", key);
			}
		}

		/*   setTimeout(() => {
    uploadStatus.value = 'uploaded'
  }, 10000) */
	};
	// Init dropzone
	const { $dropzoner } = useNuxtApp();
	const { getRootProps, getInputProps, ...rest } = $dropzoner({
		onDropAccepted,
		onDropRejected,
		accept: mimeType,
	});

	const generateRandomString = (length) => {
		const characters = "abcdefghijklmnopqrstuvwxyz"; //const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
		let randomString = "";
		for (let i = 0; i < length; i++) {
			randomString += characters.charAt(
				Math.floor(Math.random() * characters.length)
			);
		}
		return randomString;
	};

	const year = () => {
		const currentYear = new Date().getFullYear();
		const twoDigitYear = currentYear.toString().slice(-2);
		return twoDigitYear;
	};

	const generateFileName = (file) => {
		const timestamp = Math.round(Date.now() / 1000);
		const fileName = file.name.split(".");
		const ext = fileName[fileName.length - 1];
		const randomString = generateRandomString(6);
		return `${timestamp}-${randomString}.${ext}`;
	};

	const videoRef = ref(null);
	const videoLoadedData = () => {
		emit("videoDuration", videoRef.value.duration);
	};

	// watch
	watch(
		() => props.refresh,
		(current, previous) => {
			if (current || previous) {
				uploadStatus.value = "";
				progress.value = 0;
			}
		}
	);

	const restartUpload = () => {
		uploadStatus.value = "";
		progress.value = 0;
	};
</script>

<style scoped>
	.dropzone {
		border: 1px solid #c1c5c2;
		border-radius: 0.375rem;
		/* background-color: #eaedeb; */
		display: flex;
		justify-content: center;
		align-items: center;
		color: #666;
		cursor: pointer;
	}

	.uploading {
		display: flex;
		flex-direction: column;
		justify-content: center;
		border: 1px solid #c1c5c2;
		padding: 0 2rem;
		border-radius: 0.375rem;
	}

	.uploaded {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 80px;
		border-radius: 0.375rem;
		border: 1px solid #c1c5c2;
		padding: 1rem 2rem;
		border-radius: 0.375rem;
	}

	.dropzone,
	.uploading,
	.uploaded {
		width: 100%;
		height: 160px;
	}
	.uploaded .msg {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}
	.uploaded img {
		width: auto;
		height: 150px;
	}
	.uploaded i,
	.uploaded .icon {
		font-size: 4rem;
		color: var(--brandGreen);
	}

	.progress {
		font-family: "Courier New", Courier, monospace;
		font-size: 0.8rem;
	}
</style>

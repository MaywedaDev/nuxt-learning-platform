<template>
  <v-main class="min-h-screen bg-gray-50">
    <v-container class="py-16">
      <v-card
        id="card"
        ref="pdfCont"
        class="mx-auto max-w-3xl d-flex"
        height="860"
      >
        <div class="side-cont">
          <div class="image">
            <img src="assets/images/logos/Certificate.png" alt="" />
          </div>
          <div
            style="background-color: grey; padding: 10px 0 10px 0"
            class="mt-10"
          >
            <h4 class="text-white text-center">Courses</h4>
          </div>
          <ul class="mt-6">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div class="main-cont d-flex flex-column">
          <div class="image mb-6">
            <img src="assets/images/logos/33512849_8070152.jpg" alt="" />
          </div>
          <div style="flex-grow: 1" class="w-full d-flex ga-8">
            <div style="flex-grow: 1" class="w-full d-flex flex-column ga-2">
              <h3 class="text-h5 font-weight-bold">{{ completionDate }}</h3>
              <h2 class="text-h4 font-weight-bold">{{ studentName }}</h2>
              <p>
                has successfully completed the online, non-credit Specialization
              </p>

              <h1 class="text-h2 font-weight-bold">
                {{ courseName }}
              </h1>

              <p>
                This specialization is intended for individuals who wish to
                improve their programming skills and harness the reliability and
                efficiency of Google's programming language - Golang. Because it
                is an introductory program, there are no specific prerequisites
                other than an interest in computer software. Some previous
                coding experience required.
              </p>

              <span class="mt-auto"
                >The online specialization named in this certificate may draw on
                material from courses taught on-campus, but the included courses
                are not equivalent to on-campus courses. Participation in this
                online specialization does not constitute enrollment at this
                university. This certificate does not confer a University grade,
                course credit or degree, and it does not verify the identity of
                the learner.</span
              >
            </div>
            <div class="d-flex ga-1 flex-column">
              <div class="sign mb-3"></div>
              <span>Jane Doe</span>
              <span>Professor</span>
              <span>Department of Computer Science</span>
            </div>
          </div>
        </div>
      </v-card>

      <v-btn class="mt-10" color="primary" @click="downloadCertificate"
        >Download Certificate</v-btn
      >

      <v-container v-if="canvasResult" class="py-16">
        <img
          style="width: 100%; object-fit: scale-down"
          :src="canvasResult"
          alt=""
        />
      </v-container>
    </v-container>
  </v-main>
</template>

<script setup>
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
const studentName = ref("John Doe");
const courseName = ref("Advanced Web Development");
const completionDate = ref(new Date().toLocaleDateString());
const certificateId = ref(
  "CERT-" + Math.random().toString(36).substring(2, 10).toUpperCase()
);
const pdfCont = ref(null);
const canvasResult = ref(null);

const downloadCertificate = () => {
  //   if (!pdfCont.value) {
  //     console.error("PDF container not found");
  //     return;
  //   }

  const canvas = document.getElementById("card");
  const { offsetWidth: width, offsetHeight: height } = canvas;

  console.log("pdf container", canvas);
  // Create a new jsPDF instance
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: "a4",
    hotfixes: ["px_scaling"],
  });

  // Use html2canvas to take a screenshot of the PDF container
  html2canvas(canvas, {
    width,
    height,
  }).then((canvas) => {
    // Convert the canvas to an image
    const imgData = canvas.toDataURL("image/png");

    canvasResult.value = imgData;

    // Add the image to the PDF
    doc.addImage(imgData, "PNG", 0, 0, width - 50, height - 50);
    doc.save(`${certificateId.value}.pdf`);
  });
};

const printCertificate = () => {
  // Implement certificate download logic
  console.log("Downloading certificate...");
};

const shareCertificate = () => {
  // Implement share functionality
  console.log("Sharing certificate...");
};
</script>

<style scoped>
* {
  font-weight: 700;
}

.v-card {
  border: 2px solid #e0e0e0;
  background: linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%);
}

.image {
  width: 190px;
  height: 190px;
  background-color: grey;
}

.side-cont,
.main-cont {
  padding: 20px;
}

.side-cont {
  flex-shrink: 0;
  width: fit-content;
}

p {
  font-size: 1.2rem;
  color: #555;
  max-width: 100%;
}

.sign {
  width: 140px;
  height: 30px;
  background-color: grey;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

li {
  list-style: none;
}
</style>

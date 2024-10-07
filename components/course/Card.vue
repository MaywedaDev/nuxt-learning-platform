<template>
    <v-card class="mx-auto" variant="flat">
            <v-img src="https://img-b.udemycdn.com/course/240x135/2485240_d405_7.jpg" alt="Course image" height="200px" />
            <v-card-title class="text-h6">{{ props.course.title }}</v-card-title>
            <v-card-subtitle class="text-body-2 mb-2">{{ props.course.instructor }}</v-card-subtitle>
            <v-card-actions>
                <v-btn color="primary" text>Start Course</v-btn>
            </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
    const props = defineProps({
        course: {
            type: Object,
            required: true
        }})

</script>
<template>
    <v-container class="mb-16">
        <h3 class="text-h5 mb-4">Learners are viewing</h3>
        <div class="d-flex ga-4" style="overflow: scroll;">
                <course-card v-for="(course, index) in webDevelopmentCourses" key="index" :course="course" />
        </div>
    </v-container>
</template>

<script setup lang="ts">

    // Mock data
    const webDevelopmentCourses = [
    {
        "title": "The Complete Python Bootcamp From Zero to Hero...",
        "instructor": "Jose Portilla, Pierian Training",
        "rating": "4.6",
        "reviews": "(510,106)",
        "price": "₦41,900"
    },
    {
        "title": "100 Days of Code: The Complete Python Pro...",
        "instructor": "Dr. Angela Yu, Developer and Lead...",
        "rating": "4.7",
        "reviews": "(326,006)",
        "price": "₦41,900",
        "is_bestseller": true
    },
    {
        "title": "Automate the Boring Stuff with Python Programming",
        "instructor": "Al Sweigart",
        "rating": "4.6",
        "reviews": "(114,334)",
        "price": "₦41,900"
    },
    {
        "title": "Python for Data Science and Machine Learning Bootcamp",
        "instructor": "Jose Portilla, Pienan Training",
        "rating": "4.6",
        "reviews": "(146,340)",
        "price": "₦41,900"
    },
    {
        "title": "Python: Master Programming and Development with 15...",
        "instructor": "Dieu Niewal, Ritu Antil",
        "rating": "4.3",
        "reviews": "(1385)",
        "price": "₦31,900"
    }];
</script>
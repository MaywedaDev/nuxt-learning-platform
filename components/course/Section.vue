<template>
    <v-container class="mb-16">
        <h2 class="text-h4 mb-4">A broad selection of courses</h2>
        <p class="text-body-1 mb-3">Choose from over 250,000 online video courses with new additions published every month</p>

        <v-tabs v-model="tab">
            <v-tab :value="0" label="Python">
                Python
            </v-tab>
            <v-tab :value="1" label="Microsoft Excel">
                Microsoft Excel
            </v-tab>
            <v-tab :value="2" label="Web Development">
                Web Development
            </v-tab>
            <v-tab :value="3" label="JavaScript">
                JavaScript
            </v-tab>
            <v-tab :value="4" label="Data Science">
                Data Science
            </v-tab>
            <v-tab :value="5" label="Amazon AWS">
                Amazon AWS
            </v-tab>
            <v-tab :value="6" label="Drawing">
                Drawing
            </v-tab>
            
            
            
        </v-tabs>
        <v-card class="pa-8 py-10" :rounded="0" variant="outlined">
            <h3 class="text-h5 mb-2">Expand your career opportunities with Python</h3>
            <p class="w-50 mb-3">Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to</p>
            <v-btn :height="40" variant="outlined" :rounded="0" class="text-none mb-6 text-body-1">Explore Python</v-btn>
            <v-tabs-window v-model="tab">
                <v-tabs-window-item v-for="i in 6" :key="i" :value="i">
                    <v-row class="my-4">
                        <v-col cols="2" v-for="course in webDevelopmentCourses" :key="course.id">
                            <course-card :course="course" />
                        </v-col>
                    </v-row>
                </v-tabs-window-item>
                
            </v-tabs-window>
        </v-card>
    </v-container>
</template>

<script setup lang="ts">
    const tab = ref(0)

    // Mock data
    const webDevelopmentCourses = [
    {
        "title": "The Complete Python Bootcamp From Zero to Hero...",
        "instructor": "Jose Portilla, Pierian Training",
        "rating": "4.6",
        "reviews": "(510,106)",
        "price": "N41,900"
    },
    {
        "title": "100 Days of Code: The Complete Python Pro...",
        "instructor": "Dr. Angela Yu, Developer and Lead...",
        "rating": "4.7",
        "reviews": "(326,006)",
        "price": "N41,900",
        "is_bestseller": true
    },
    {
        "title": "Automate the Boring Stuff with Python Programming",
        "instructor": "Al Sweigart",
        "rating": "4.6",
        "reviews": "(114,334)",
        "price": "N41,900"
    },
    {
        "title": "Python for Data Science and Machine Learning Bootcamp",
        "instructor": "Jose Portilla, Pienan Training",
        "rating": "4.6",
        "reviews": "(146,340)",
        "price": "N41,900"
    },
    {
        "title": "Python: Master Programming and Development with 15...",
        "instructor": "Dieu Niewal, Ritu Antil",
        "rating": "4.3",
        "reviews": "(1385)",
        "price": "N31,900"
    }];
</script>

<!-- <v-row class="my-4">
    <v-col cols="12" sm="6" md="4" v-for="course in webDevelopmentCourses" :key="course.id">
        
    </v-col>
</v-row> -->

<!-- [
    {
        "title": "The Complete Python Bootcamp From Zero to Hero...",
        "instructor": "Jose Portilla, Pierian Training",
        "rating": "4.6",
        "reviews": "(510,106)",
        "price": "N41,900"
    },
    {
        "title": "100 Days of Code: The Complete Python Pro...",
        "instructor": "Dr. Angela Yu, Developer and Lead...",
        "rating": "4.7",
        "reviews": "(326,006)",
        "price": "N41,900",
        "is_bestseller": true
    },
    {
        "title": "Automate the Boring Stuff with Python Programming",
        "instructor": "Al Sweigart",
        "rating": "4.6",
        "reviews": "(114,334)",
        "price": "N41,900"
    },
    {
        "title": "Python for Data Science and Machine Learning Bootcamp",
        "instructor": "Jose Portilla, Pienan Training",
        "rating": "4.6",
        "reviews": "(146,340)",
        "price": "N41,900"
    },
    {
        "title": "Python: Master Programming and Development with 15...",
        "instructor": "Dieu Niewal, Ritu Antil",
        "rating": "4.3",
        "reviews": "(1385)",
        "price": "N31,900"
    } -->
]

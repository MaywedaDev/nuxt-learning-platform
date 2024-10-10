<template>
    <div class="w-100">
        <div class="w-100 mb-10 py-10 px-12 hero">
            <v-container class="w-full flex-column-reverse flex-md-row d-flex ga-10 justify-between">
                <div class="text-primary hero-text">
                    <h3 class="text-h4 mb-4">The Complete 2024 Web Development Bootcamp</h3>
                    <p class="mb-5 text-body-1">Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</p>
                    <div class="d-flex ga-2 mb-3">
                        <span>Bestseller</span>
                        <span>4.7</span>
                        <a href="">405,894</a>
                        <span>1,350,062 students</span>
                    </div>
                    <p class="mb-3">Created by
                        <a href="">Dr Angela Yu, Developer and Lead Instructor</a>
                    </p>
                    <div class="d-flex ga-3">
                        <span>Last updated 8/2024</span>
                        <span>English</span>
                        <span>English, Arabic [Auto]</span>
                    </div>
                </div>
                <course-purchase-card />
            </v-container>
        </div>
        <v-container class="content mb-16">
            <v-card class="py-6 px-8 d-flex flex-column mb-10" :max-height="500" :rounded="0" variant="outlined" >
                <h3 class="text-h5 mb-4" >What you will Learn</h3>
                <ul class="w-100">
                    <li>Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.</li>
                    <li>Learn the latest technologies, including Javascript, React, Node and even Web3 development.</li>
                    <li>After the course you will be able to build ANY website you want.</li>
                    <li>Build fully-fledged websites and web apps for your startup or business.</li>
                    <li>Work as a freelance web developer.</li>
                    <li>Master frontend development with React</li>
                    <li>Master backend development with Node</li>
                    <li>Learn professional developer best practices</li>
                </ul>
            </v-card>
            <div class="w-100">
                <h3 class="text-h5 mb-4">Course Content</h3>
                <div class="d-flex ga-2 w-100">
                    <span>44 sections</span>
                    <span>373 lectures</span>
                    <span>61h 44m total length</span>
                    <v-btn variant="text" class="text-none ml-auto" color="accent">Expand all sections</v-btn>
                </div>
                <v-expansion-panels elevation="0" variant="accordion">
                    <v-expansion-panel
                        v-for="i in 3"
                        :key="i" >
                        <v-expansion-panel-title>
                            <v-row>
                                <v-col cols="12" sm="12" md="6" class="text-left"><span>Frontend Web Development</span></v-col>
                                <v-col cols="12" sm="12" md="6" class="text-right"><span>9 lectures</span><span>37 mins</span></v-col>
                            </v-row>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </v-expansion-panel-text>
                </v-expansion-panel>
                </v-expansion-panels>
                <v-btn class="w-100 mt-4 mb-10" height="40" rounded="0" variant="outlined">Show 34 more sections</v-btn>
            </div>
            <div class="w-">
                <h3 class="mb-5">Requirements</h3>
                <ul>
                    <li>No programming experience needed - I'll teach you everything you need to know</li>
                    <li>A computer with access to the internet</li>
                    <li>No paid software required</li>
                    <li>I'll walk you through, step-by-step how to get all the software installed and set up</li>
                </ul>
            </div>
            <div class="w-">
                <h3 class="mb-5">Description</h3>
                <div class="w-100">
                    <p>Welcome to the Complete Web Development Bootcamp, the only course you need to learn to code and become a full-stack web developer. With 150,000+ ratings and a 4.8 average, my Web Development course is one of the HIGHEST RATED courses in the history of NuxtLearn! </p>
                </div>
                <v-btn variant="text" class="text-none ml-auto" color="accent">Show more</v-btn>
            </div>

            <div class="w-">
                <h3 class="mb-5">More Courses by Angela Yu, Developer and Lead Instructor</h3>
                <v-row>
                    <v-col v-for="(course, index) in moreCoures" :key="index">
                        <course-card :course="course" />
                    </v-col>
                </v-row>
                <v-btn class="w-100 mt-4 mb-10" height="40" rounded="0" variant="outlined">Report Abuse</v-btn>
            </div>
        </v-container>
    </div>  
</template>

<style lang="scss" scoped>
.v-card{
    border-color: mix($color-gray-400, #fff, 30%);
}

ul{
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 45%);
    column-gap: 10%;
    row-gap: 15px;
}
.v-expansion-panels{
    border: solid 1px mix($color-gray-400, #fff, 30%);
    border-radius: 4px;
}

.content{
    padding-right: 380px;
    > * {
        margin-right: 30px;
    }
    @media screen and (max-width: 1280px){
        padding-right: 450px;
    }
    @media screen and (max-width: 960px){
        padding-right: 20px;
    }

}
.v-container:nth-of-type(1){
    height: 300px;
    @media screen and (max-width: 960px){
        height: auto;
    }

}

.hero{
    background-color: $color-gray-550;
    @media screen and (max-width: 960px){
        background-color: white;
        .hero-text{
            color: black !important;
        }
    }
    
}
</style> 

<script setup>


const moreCoures = [
    {
      "title": "100 Days of Code: The Complete Python Pro...",
      "instructor": "Dr. Angela Yu, Developer and Lead...",
      "rating": "4.7 ★★★★★ ",
      "reviews": "(327,226)",
      "price": "₩39,900"
    },
    {
      "title": "iOS & Swift - The Complete iOS App Development...",
      "instructor": "Dr. Angela Yu, Developer and Lead...",
      "rating": "4.7 ★★★★★",
      "reviews": "(333,145)",
      "price": "#39,900"
    },
    {
      "title": "The Complete Flutter Development Bootcamp wi...",
      "instructor": "Dr. Angela Yu, Developer and Lead...",
      "rating": "4.5 ★★★★★",
      "reviews": "(342,567)",
      "price": "#39,900"
    }
  ]



</script>
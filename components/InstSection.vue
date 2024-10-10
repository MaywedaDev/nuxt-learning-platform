<template>
    <v-container class="flex-md-row flex-column d-flex ga-10 align-center mb-16" max-width="900px">
        <nuxt-img src="heros/instructor-1x-v3.jpg" />

        <div class="main_cont">
            <h3 class="text-h4">Become an instructor</h3>
            <p class="text-body-1">Instructors from around the world teach millions of learners on NuxtLearn. We provide the tools and skills to teach what you love.</p>
            <v-btn :height="40"  class="text-none" :rounded="0" variant="flat" color="#000">Start teaching today</v-btn>
        </div>
    </v-container>
</template>
<style lang="scss">
    .main_cont > * {
        margin-bottom: 8px;
    }
    p{
        max-width: 450px;
    }
</style>
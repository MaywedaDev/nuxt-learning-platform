<template>
    <div class="w-100 bg-secondary mb-10 py-10 px-12">
        <v-container :height="300"  class="w-full d-flex ga-10 justify-between">
            <div class="text-primary">
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
</template>
<template>
    <div class="w-100">
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
        <v-container class="content mb-16">
            <v-card class="py-6 px-8 d-flex flex-column mb-10" :max-width="600" :max-height="500" :rounded="0" variant="outlined" >
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
                            Item
                            <template v-slot:actions="{ expanded }">
                                <v-icon :color="!expanded ? 'teal' : ''" :icon="expanded ? 'mdi-pencil' : 'mdi-check'"></v-icon>
                            </template>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </v-expansion-panel-text>
                </v-expansion-panel>
                </v-expansion-panels>
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
    padding-right: 340px;
}
</style> 
<template>
    <v-container class="flex-md-row flex-column-reverse d-flex ga-10 align-center mb-16" max-width="900px">
        <div class="main_cont">
            <h3 class="text-h4">Upskill your team with NuxtLearn Business</h3>
            <ul>
                <li>Unlimited access to 27,000+ top NuxtLearn courses, anytime, anywhere</li>
                <li>International course collection in 14 languages</li>
                <li>Top certifications in tech and business</li>
            </ul>
            <v-btn :height="40"  class="text-none" :rounded="0" variant="flat" color="#000">Get NuxtLearn Business</v-btn>
            <v-btn :height="40"  class="text-none ml-3" :rounded="0" variant="outlined" color="#000">Learn More</v-btn>
        </div>

        <nuxt-img :width="400" src="heros/UB_Promo_800x800.jpg" />
    </v-container>
</template>
<style lang="scss" scoped>
    .main_cont > * {
        margin-bottom: 12px;
    }
    li{
        font-size: 1.1em;
        list-style-type: disc;
        list-style-position: outside;
        margin-left: 16px;
        &:not(:last-child){
            margin-bottom: 8px;
        }
    }
</style>
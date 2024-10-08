<template>
    <v-card class="bg-primary text-black h-auto" rounded="0" variant="outlined" color="#ffffff" :width="340">
        <nuxt-img class="mb-6 w-100" src="heros/1565838_e54e_18.jpg" />

        <div class="w-100 pa-6">
            <h3 class="text-h4 mb-4">#41000</h3>
            <v-btn class="w-100 mb-2" color="secondary" height="45" :rounded="0" variant="flat">Add to cart</v-btn>
            <v-btn class="w-100 mb-2" color="secondary" height="45" :rounded="0" variant="outlined">Buy now</v-btn>

            <p class="text-center w-100 text-caption mb-6">30 day money back guarantee</p>
            <h6 class="text-body-1 mb-4">This course includes</h6>
            <ul>
                <li class="mb-2 text-body-2">61 hours on-demand video</li>
                <li class="mb-2 text-body-2">7 coding exercises</li>
                <li class="mb-2 text-body-2">65 articles</li>
                <li class="mb-2 text-body-2">194 downloadable resources</li>
                <li class="mb-2 text-body-2">Access on mobile and TV</li>
                <li class="mb-2 text-body-2">Full lifetime access</li>
                <li class="mb-2 text-body-2">Certificate of completion</li>
            </ul>
            <div class="w-100 d-flex justify-space-between text-body-2 ga-2">
                <a href="">Share</a><a href="">Gift this coupon</a><a href="">Apply coupon</a>
            </div>
        </div>

    </v-card>
</template>

<style scoped>
    .v-card{
        min-height: fit-content;
        height: fit-content;
        flex-shrink: 0;
    }
    li{
        list-style: none;
    }
</style>
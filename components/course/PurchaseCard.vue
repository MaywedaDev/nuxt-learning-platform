<template>
    <v-card class="bg-primary text-black h-auto" rounded="0" variant="outlined" color="primary" :max-width="340">
        <nuxt-img class="mb-6 w-100" src="heros/1565838_e54e_18.jpg" />

        <div class="w-100 pa-6">
            <h3 class="text-h4 mb-4">#41000</h3>
            <v-btn class="w-100 mb-2" color="secondary" height="45" :rounded="0" variant="flat">Add to cart</v-btn>
            <v-btn class="w-100 mb-2" color="secondary" height="45" :rounded="0" variant="outlined">Buy now</v-btn>

            <span class="text-center">30 day money back guarantee</span>
        </div>

    </v-card>
</template>

<style scoped>
    .v-card{
        min-height: fit-content;
        height: fit-content;
    }
</style>
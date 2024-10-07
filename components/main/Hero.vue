<template>
    <v-container class="mb-16" >
        <v-card class="px-4 py-6" :max-width="400" :elevation="1" position="absolute">
            <v-card-title class="text-h4 text-break text-bold">
                Jump into Learning for less
            </v-card-title>
            <v-card-text class="text-body-1">
                <p>If you’re new to Udemy, we’ve got good news: For a limited time, courses start at just ₦3,900 for new learners! Shop now</p>
            </v-card-text>
        </v-card>
        <nuxt-img class="w-100" height="400" src="heros/0661bb90-3d05-4709-95a2-c61f927cf78c.jpg" />
    </v-container>
</template>

<style lang="scss" scoped>
    *{
        white-space: normal;

        .text-h4{
            line-height: 1.175;
        }
    
    }
    .v-container{
        position: relative;
    }
    .v-card{
        top: calc((100% - 230px)/2)
    }
</style>
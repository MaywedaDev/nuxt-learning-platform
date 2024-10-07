<template>
    <v-toolbar :elevation="2" :height="72">
        <v-toolbar-title class="mr-6">NuxtLearn</v-toolbar-title>
        <div class="d-flex align-center ga-6 w-100 py-3 fill-height pr-6">
            <nuxt-link class="text-body-2">Categories</nuxt-link>
            <div class="d-flex border rounded-xl w-100 h-100 px-5 py-3 ipt-border">
                <input placeholder="Search for anything" />
            </div>
            <nuxt-link class="text-body-2">Udemy Business</nuxt-link>
            <nuxt-link class="text-body-2">Teach on Udemy</nuxt-link>
            <nuxt-link class="text-body-2"><v-icon icon="$vuetify" /></nuxt-link>
            <div class="d-flex ga-2">
                <v-btn class="text-none text-body-1" :height="40" :rounded="0" variant="outlined">Log In</v-btn>
                <v-btn class="text-none text-body-1" :height="40" :rounded="0" variant="flat" color="#000">Sign Up</v-btn>
                <v-btn :height="40" density="default" icon="$vuetify" variant="outlined" :rounded="0" ></v-btn>
            </div>
        </div>
    </v-toolbar>
</template>

<style lang="scss" scoped>
.v-toolbar-title{
    min-width: 100px;
}
a{
    white-space: nowrap;
}
input{
    outline: none;
}
.ipt-border{
    border-color: #101112 !important;
}
</style>
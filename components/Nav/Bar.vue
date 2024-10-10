<template>
    <v-toolbar :elevation="2" :height="72">
        <nuxt-link class="mx-6 text-h5 w-100" to="/" >NuxtLearn</nuxt-link>
        <div class="d-flex align-center ga-6 w-sm-100 py-3 fill-height pr-6">
            <nuxt-link to="/"class="text-body-2 d-none d-sm-inline">Categories</nuxt-link>
            <div class="d-none d-sm-flex border rounded-xl w-100 h-100 px-5 py-3 ipt-border">
                <v-icon icon="mdi-magnify" color="grey" />
                <input class="w-100 ml-3 text-body-2" placeholder="Search for anything" />
            </div>
            <nuxt-link to="/"  class="text-body-2 d-none d-lg-inline">NuxtLearn Business</nuxt-link>
            <nuxt-link to="/" class="text-body-2 d-none d-md-inline">Teach on NuxtLearn</nuxt-link>
            <nuxt-link to="/" class="text-body-2"><v-icon
          icon="mdi-cart-outline"
          end
        ></v-icon></nuxt-link>
            <div class="d-flex ga-2">
                <v-btn class="text-none text-body-1 d-none d-md-inline" :height="40" :rounded="0" variant="outlined">Log In</v-btn>
                <v-btn class="text-none text-body-1 d-none d-md-inline" :height="40" :rounded="0" variant="flat" color="#000">Sign Up</v-btn>
                <v-btn class="d-inline d-sm-none"><v-icon
          icon="mdi-magnify"
          end
        ></v-icon></v-btn>
                <v-btn :height="40" density="default" icon="mdi-web" variant="outlined" :rounded="0" ></v-btn>
            </div>
        </div>
    </v-toolbar>
</template>

<style lang="scss" scoped>
.v-toolbar-title{
    min-width: 100px;
    .v-toolbar-title__placeholder{
        overflow: none;
        text-overflow: none;
    }
}
a{
    white-space: nowrap;
    color: inherit;
    text-decoration: inherit;
}
input{
    outline: none;
}
.ipt-border{
    border-color: #101112 !important;
}
</style>
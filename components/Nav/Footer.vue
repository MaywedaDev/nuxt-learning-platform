<template>
    <v-footer class="px-12 py-8 flex-column" color="grey-600">
        <div class="flex-wrap flex-md-nowrap d-flex mb-16 w-100" :class="$style.links">
            <ul>
                <li>NuxtLearn Business</li>
                <li>Teach on NuxtLearn</li>
                <li>Get the app</li>
                <li>About us</li>
                <li>Contact us</li>
            </ul>
            <ul>
                <li>Careers</li>
                <li>Blog</li>
                <li>Help and Support</li>
                <li>Affiliate</li>
                <li>Investors</li>
            </ul>
            <ul>
                <li>Terms</li>
                <li>Privacy policy</li>
                <li>Cookie Settings</li>
                <li>Sitemap</li>
                <li>Accessibility statement</li>
            </ul>
            <v-btn class="text-none text-body-1 ml-auto" variant="outlined" :rounded="0" color="white">English</v-btn>
        </div>
        <div class="d-flex justify-space-between align-center w-100">
            <h2>NuxtLearn</h2>
            <p class="text-caption">@2024 NuxtLearn,Inc</p>
        </div>
    </v-footer>
</template>

<style lang="scss" scoped module>
    .links{
        gap: 90px;
    }
    li{
        list-style-type: none;
        margin-bottom: 10px;
        a{
            color: white;
            text-decoration: none;
        }
    }
</style>
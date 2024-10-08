<template>
    <v-card class="mx-auto w-100" variant="flat">
            <nuxt-img class="w-100 border" src="https://img-b.udemycdn.com/course/240x135/2485240_d405_7.jpg" alt="Course image" />
            <h4>{{ props.course.title }}</h4>
            <p>{{ props.course.instructor }}</p>
            <p><span>{{ props.course.rating }}</span> {{ props.course.reviews }}</p>
            <span>N41900</span>
    </v-card>
</template>

<script setup lang="ts">
    const props = defineProps({
        course: {
            type: Object,
            required: true
        }})

</script>

<style scoped lang="scss">
    .v-card{
        & > *:not(img) {
            margin-bottom: 5px;
        }
        h4{
            font-size: 1em;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        p{
            font-size: 0.75em;
            color: $color-gray-400;
            span{
                font-size: 0.875rem;
                color: $color-orange-500;
                font-weight: 700;
            }
        }
        span{
            font-size: 1em;
        }
    }
</style>
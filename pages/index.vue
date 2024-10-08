<template>
    <v-main>
        <main-hero/>
        <course-section />
        <course-common />
        <featured-topics />
        <business-section />
        <inst-section />
        
    </v-main>
</template>

<style scoped lang="scss">
   .page {
        background-color: lightgray;
        padding: 20px;
        display: grid;
        place-content: center;
        p{
            color: red;
            font-size: 40px;
        }
    }
</style>
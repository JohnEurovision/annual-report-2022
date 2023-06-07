<template>
    <div class="image-half w-full lg:w-full">
        <img class="w-full h-full object-center object-cover lg:w-full lg:h-full" :src="image.photo" alt="image" />
    </div>
</template>

<script setup>
    const { image } = defineProps(['image'])
</script>

<style scoped>
.image-half {
    height: 50vh;
}

@media screen and (max-width: 1023px) {
    .image-half {
        height: 100%;
    }
}
</style>
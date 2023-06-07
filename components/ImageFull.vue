<template>
    <div class="image-full w-full">
        <img class="w-full aspect-h-16 lg:min-h-screen object-cover" :src="image.photo" alt="image" />
    </div>
</template>

<script setup>
    const { image } = defineProps(['image'])
</script>

<style scoped>

</style>
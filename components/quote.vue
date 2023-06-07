<template>
    <div class="quote p-6 sm:p-10 md:p-14 xl:p-20 2xl:p-24 h-1/6 w-full lg:h-1/2 bg-orange">       
        This is where the quote will go
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
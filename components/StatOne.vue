<template>
    <div class="stat-one w-full h-full flex flex-col">
        <h5 class=" font-light tracking-widest opacity-50 mb-5">IN NUMBERS</h5>
        <h2 class=" text-blue font-black text-7xl mb-3">{{ stat }}</h2>
        <h3 class=" text-blue font-bold text-2xl">{{ detail }}</h3>
    </div>
</template>

<script>

export default {
  props: {
    stat: {
      type: String,
      required: true
    },
    detail: {
      type: String,
      required: true
    }
  }
}

</script>

<style scoped>

@media screen and (min-width: 1023px) {
    /*.stat-one { 
        width: fit-content;
        height: fit-content;   
        top: 50%;
        left: 50%;
        margin-left: -6rem;
        margin-top: -6rem
    }*/
}
</style>
<template>
  <div class="hyphenate">
    <h2 class=" font-black uppercase text-orange text-3xl leading-7 my-8 lg:text-4xl lg:leading-9 lg:mt-10 lg:mb-10 2xl:text-6xl 2xl:mb-14">
        {{ content }}
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

.hyphenate {
  word-break: break-all; /* Standard */
  word-break: break-all; /* For Chrome, Safari, and Opera */
  word-break: break-word; /* For IE and Edge */
  word-break: break-word; /* For Firefox */
}

</style>
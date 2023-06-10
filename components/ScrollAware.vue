<template>
  <div class="scroll-aware" :class="{ 'fade-out': !isVisible }">
    <!-- Content of your scroll-aware component -->
    <div
      class="h-52 flex place-content-center items-center bg-gradient-to-t from-white"
    ></div>
    <div
      class="uppercase text-blue tracking-wider h-20 flex place-content-center items-center bg-white"
    >
      Keep scrolling
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
    };
  },
  mounted() {
    // Add a scroll event listener to the window
    window.addEventListener("scroll", this.handleScroll);
    this.checkScrollable();
  },
  beforeUnmount() {
    // Remove the scroll event listener when the component is unmounted
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Check if the user has started scrolling
      if (window.scrollY > 20) {
        this.isVisible = false;
      }
    },
    checkScrollable() {
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      const windowHeight = window.innerHeight;

      if (documentHeight <= windowHeight) {
        this.isVisible = false;
      }
    },
  },
};
</script>

<style scoped>
.scroll-aware {
  position: fixed;
  bottom: 0;
  right: 0;
  transition: opacity 0.5s;
  width: 100%;
}
.fade-out {
  opacity: 0;
}

@media screen and (min-width: 1024px) {
  .scroll-aware {
    width: calc(50% - 32px);
  }
}
</style>

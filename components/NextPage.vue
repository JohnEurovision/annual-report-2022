<template>
  <NuxtLink
    :to="link"
    class="z-30 border-t border-t-white border-opacity-50 w-full block fixed bottom-0 bg-blue-static"
  >
    <div
      class="fixed-component flex-col px-10 py-5 sm:px-12 md:px-16 lg:py-8 xl:px-24 xl:py-12 2xl:px-32 2xl:py-16"
      v-show="showComponent || !needsScrolling"
      ref="componentToMeasure"
    >
      <div
        class="lg:w-5/12 transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
      >
        <h3
          class="font-normal uppercase text-sm md:text-lg pb-px lg:pb-1 xl:text-2xl text-orange tracking-widest leading-none"
        >
          Next:
        </h3>
        <h2
          class="font-black uppercase text-xl text-white tracking-wide leading-none lg:text-2xl lg:leading-6 xl:text-4xl xl:leading-9"
        >
          {{ title }}
        </h2>
        <svg
          class="hidden lg:flex lg:mt-2"
          width="66"
          height="22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.555 14.151c7.565-.117 14.515.718 40.364.95 6.027.054 12.132.325 18.14-.283.9-.091 2.015-.14 2.688-.806"
            stroke="#FF7800"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M59.824 13.509c-1.896-1.372-6.846-3.648-7.195-6.421-.012-.094-.007-.706.014-.642.617 1.91-.433 5.932-.846 7.9-.108.517-1.725 5.897-1.236 5.72 4.6-1.66 9.18-5.28 13.557-7.563"
            stroke="#FF7800"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    linkText: {
      type: String,
      default: "Read more",
    },
  },
  data() {
    return {
      showComponent: false,
      needsScrolling: false,
    };
  },
  mounted() {
    this.$emit("componentHeight", this.$refs.componentToMeasure.offsetHeight);
    window.addEventListener("scroll", this.handleScroll);
    this.checkScrolling();
    window.addEventListener("resize", this.checkScrolling);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.checkScrolling);
  },
  methods: {
    handleScroll() {
      if (this.needsScrolling) {
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const scrollTop = window.pageYOffset;

        if (scrollHeight - scrollTop - clientHeight < 100) {
          // Show the component when the scroll position is near the bottom
          this.showComponent = true;
        } else {
          // Hide the component for other scroll positions
          this.showComponent = false;
        }
      }
    },
    checkScrolling() {
      const bodyHeight = document.body.clientHeight;
      const windowHeight = window.innerHeight;
      this.needsScrolling = bodyHeight > windowHeight;
      this.handleScroll();
    },
  },
};
</script>

<style scoped>
.stretched-link {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
}
</style>

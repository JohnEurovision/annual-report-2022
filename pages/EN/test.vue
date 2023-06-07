<template>
    <div>
      <div class="source-element" ref="sourceElement">Source Element</div>
      <div class="target-element" v-resize-margin="sourceElementHeight">Target Element</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sourceElementHeight: 0
      };
    },
    mounted() {
      this.calculateHeight();
      window.addEventListener('resize', this.calculateHeight);
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.calculateHeight);
    },
    methods: {
      calculateHeight() {
        const sourceElement = this.$refs.sourceElement;
        if (sourceElement) {
          this.sourceElementHeight = sourceElement.offsetHeight;
        }
      }
    },
    directives: {
      resizeMargin: {
        mounted(el, binding) {
          const marginValue = binding.value;
          el.style.marginBottom = marginValue + 'px';
        },
        updated(el, binding) {
          const marginValue = binding.value;
          el.style.marginBottom = marginValue + 'px';
        }
      }
    }
  };
  </script>
  
  <style>
  .source-element {
    background-color: lightblue;
    padding: 20px;
  }
  
  .target-element {
    background-color: lightgray;
    padding: 20px;
  }
  </style>
<template>
  <section
    id="enabling-our-members"
    class="lg:ml-16 w-full"
    :style="{ paddingBottom: componentHeight + 'px' }"
  >
    <VideoIntros
      :introsheading="introsheading"
      :introstitle="introstitle"
      :introSubtitle="introsubtitle"
      :videoCaption="videocaption"
      :videoCaptionTwo="videocaptiontwo"
    />
    <NextPage
      :title="linkTitle"
      :link="link"
      @componentHeight="updateComponentHeight"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      linkTitle: "AIDI Initiative",
      link: "/en/aidi-initiative",
      introsheading: "Our mission",
      introstitle:
        "Enable our Members to build the public service media of tomorrow",
      introsubtitle:
        "We will inspire our Members to stay in front of rapidly shifting markets and technology.",
      videocaption:
        "Director of Technology & Innovation Antonio Arcidiacono on XXX (2min video)",
      videocaptiontwo:
        "Deputy Director General and Director of Media Jean Philip De Tender on how the EBU are supporting Members in their transformation journey (2min video)",
      componentHeight: 0, // New property to store component height
    };
  },
  methods: {
    updateComponentHeight(height) {
      this.componentHeight = height;
    },
  },
};
</script>

<style scoped>
.panel-one {
  @media (min-width: 1024px) {
    width: calc(50% - 32px);
  }
}
</style>

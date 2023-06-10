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
    <NextPageFR
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
      linkTitle: "Initiative AIDI",
      link: "/fr/aidi-initiative",
      introsheading: "Our mission",
      introstitle:
        "Permettre à nos Membres de façonner les médias de service public de demain",
      introsubtitle:
        "Nous serons une source d’inspiration pour nos Membres, afin qu’ils restent à l’avant-garde de marchés et de technologies en rapide mutation",
      videocaption:
        "Antonio Arcidiacono, directeur du département Technologie et Innovation, au sujet de XXX (vidéo 2 mn)",
      videocaptiontwo:
        "Jean Philip De Tender, directeur général adjoint et directeur du département Médias, s’exprime sur l’aide apportée par l’UER aux Membres désireux de se transformer (vidéo 2 mn)",
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

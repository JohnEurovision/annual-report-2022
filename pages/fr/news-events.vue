<template>
  <div
    class="flex flex-col mt-16 lg:mt-0 lg:flex-row lg:ml-16 lg:w-full lg:justify-end"
  >
    <div
      class="panel-one relative lg:fixed lg:left-16 w-full h-full flex flex-row lg:flex-col lg:max-h-screen overflow-hidden"
    >
      <ImageHalf :image="image" v-for="image in images" :key="image.id" />
    </div>
    <div
      class="panel-two bg-white w-full h-full lg:w-1/2 lg:min-h-screen"
      :style="{ paddingBottom: componentHeight + 'px' }"
    >
      <div class="flex flex-col p-10 sm:p-12 md:p-16 xl:p-24 2xl:p-32">
        <div>
          <Headline :content="headline" />
        </div>
        <div v-for="(paragraph, index) in paragraphArray" :key="index">
          <Paragraph :content="paragraph" />
        </div>
      </div>
      <NextPageFR
        :title="linkTitle"
        :link="link"
        @componentHeight="updateComponentHeight"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myStat: "999",
      myDetail: "description",
      headline: "Actualité internationale",
      linkTitle: "Coproductions et collaborations télévisées",
      link: "/fr/tv-co-productions-and-collaborations",
      images: [
        {
          id: 1,
          photo: "/state-funeral-HRH-queen-elizabeth.jpg",
        },
      ],
      paragraphArray: [
        "L’actualité internationale a été particulièrement chargée cette année. Le service News Events Eurovision est resté en première ligne, aussi bien pour l’actualité brûlante que pour les événements prévus.",
        "C’est bien évidemment la guerre en Ukraine qui a continué d’occuper le devant de la scène, avec l’anniversaire de l’invasion russe en février 2023.",
        'Les <a href="https://www.ebu.ch/fr/news/2022/09/from-coronation-to-funeral---eurovision-news-bears-witness-to-life-of-the-queen" target="_blank">obsèques de la reine Élizabeth II</a> ont aussi eu une résonance extraordinaire à l’international. Grâce à 26 positions face caméra réparties sur 8 sites, notre équipe a réalisé 783 retransmissions, pour un total de 26 630 minutes, ce qui représente une durée incroyable de 18,5 jours, le tout sur dix jours ! Et pour la première fois dans l’histoire des événements royaux, les Membres Radio de l’UER ont pu émettre depuis les mêmes emplacements que leurs collègues de la télévision.',
      ],
      componentHeight: 0, // New property to store component height
    };
  },
  methods: {
    updateComponentHeight(height) {
      this.componentHeight = height;
    },
  },
};

definePageMeta({
  layout: "french",
});
</script>

<style scoped>
.panel-one {
  @media (min-width: 1024px) {
    width: calc(50% - 32px);
  }
}
</style>

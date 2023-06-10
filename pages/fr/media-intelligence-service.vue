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
        <StatCircle :stat="myStat" :detail="myDetail" class="flex" />
        <div>
          <Headline :content="headline" />
        </div>
        <div v-for="(paragraph, index) in paragraphArray" :key="index">
          <Paragraph :content="paragraph" />
        </div>
        <ScrollAware />
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
      myStat: "",
      myDetail: "",
      headline: "Service d’Analyse Médias",
      linkTitle: "Affaires juridiques et publiques",
      link: "/fr/legal-and-policy",
      images: [
        {
          id: 1,
          photo: "/mis-publications.jpg",
        },
      ],
      paragraphArray: [
        'En 2022, notre <a href="https://www.ebu.ch/fr/media-intelligence" target="_blank">service d’Analyse Médias</a> (MIS) a publié 145 documents, dont 40 rapports thématiques, spécialement conçus pour répondre aux besoins de nos Membres.',
        'Au cours des douze derniers mois, nous avons continué à mettre l’accent sur le numérique. Ainsi donc, nous avons élaboré une cartographie unique des <a href="https://www.ebu.ch/fr/research/membersonly/report/public-service-media-and-third-party-platforms" target="_blank">relations des MSP avec les plateformes tierces</a> et avons publié un <a href="https://www.ebu.ch/fr/research/membersonly/report/measuring-total-audience" target="_blank">rapport passionnant sur la mesure de l’audience sur tous les supports</a>.',
        "Nous avons aussi intensifié nos travaux sur la « valeur publique » et l’impact des médias de service public. Enfin, nous avons publié des rapports inédits sur la diversité et le développement durable et réalisé de nouvelles études sur la mesure de l’impact économique et social des MSP.",
        "Le MIS entretient des relations étroites avec les Membres : il a ainsi répondu à plus 280 questions, posées en majorité par ces derniers.",
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

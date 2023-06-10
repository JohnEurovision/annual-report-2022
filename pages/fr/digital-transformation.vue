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
      headline: "Transformation numérique",
      linkTitle: "EBU Academy",
      link: "/fr/ebu-academy",
      images: [
        {
          id: 1,
          photo:
            "/Digital-Transformation-2-Media-Summit - EBU - Robert Gardziński.jpg",
        },
        {
          id: 2,
          photo: "/Digital-Transformation.jpg",
        },
      ],
      paragraphArray: [
        'Pour continuer à répondre aux attentes de tous leurs publics, tant aujourd’hui que dans l’avenir, les MSP ne doivent pas craindre de se transformer. L’<a href="https://www.ebu.ch/fr/digital-transformation" target="_blank">unité Numérique</a> met donc à la disposition des Membres de l’UER des services sur mesure pour les aider tout au long de ce parcours.',
        "Constamment à l’écoute de nos Membres, nous nous attachons à identifier les évolutions qui peuvent et qui doivent être faire partie de leurs priorités, grâce à diverses initiatives : journée d’immersion mettant l’accent sur le leadership et la gestion du changement (A Day With…), examen par les pairs du parcours de transformation au regard de la stratégie, etc.",
        'Notre <a href="https://www.ebu.ch/fr/groups/future-of-work-group" target="_blank">groupe de travail sur l’avenir de nos métiers</a> a été créé dans le sillage de la pandémie, face au constat que nos modes de travail avaient résolument changé. Quant au groupe d’expert.e.s sur le design organisationnel, il étudie les grandes tendances suivies par nos Membres en matière de design structurel et organisationnel. Ce groupe compte publier un rapport complet, contenant des études de cas approfondies, à la fin de l’année 2023.',
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

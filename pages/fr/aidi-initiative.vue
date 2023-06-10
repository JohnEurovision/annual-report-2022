<template>
  <div
    class="flex flex-col mt-16 lg:mt-0 lg:flex-row lg:ml-16 lg:w-full lg:justify-end"
  >
    <div
      class="panel-one relative lg:fixed lg:left-16 w-full h-full flex flex-row lg:flex-col lg:max-h-screen overflow-hidden"
    >
      <ImageFull :image="image" v-for="image in images" :key="image.id" />
    </div>
    <div
      class="panel-two bg-white w-full h-full lg:w-1/2 lg:min-h-screen"
      :style="{ paddingBottom: componentHeight + 'px' }"
    >
      <div class="flex flex-col p-10 sm:p-12 md:p-16 xl:p-24 2xl:p-32">
        <!--<StatCircle :stat="myStat" :detail="myDetail" class="flex" />-->
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
      myStat: "999",
      myDetail: "description",
      headline: "Initiative AIDI",
      linkTitle: "Développement durable",
      link: "/fr/sustainability",
      images: [
        {
          id: 1,
          photo: "/aidi-initiative.jpg",
        },
      ],
      paragraphArray: [
        'Notre <a href="https://www.ebu.ch/fr/aidi" target="_blank">initiative sur l’intelligence artificielle et les données</a> (AIDI) s’intéresse aux énormes progrès techniques qui ont été accomplis dans ce domaine au cours des dernières années. Les efforts d’innovation de nos Membres sont mis en lumière dans le cadre de présentations mensuelles et différents cas d’utilisation sont étudiés lors de « micro-ateliers ». Et nous n’oublions pas les défis pratiques, éthiques et réglementaires soulevés par l’IA, notamment la « course aux armements » contre la désinformation, la propriété intellectuelle ou le respect de la vie privée des utilisateurs et utilisatrices.',
        'L’initiative AIDI est aussi au centre de notre participation au projet <a href="https://www.veraai.eu/home" target="_blank">vera.ai</a>, co-financé par le programme Horizon Europe et qui vise à lutte contre la désinformation.',
        "Pour dresser un panorama plus complet de la situation actuelle, nous avons commencé à recenser l’utilisation de l’IA chez nos Membres.",
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

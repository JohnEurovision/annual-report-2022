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
      myStat: "81",
      myDetail: "Nombre de formations de l’UER",
      headline: "EBU Academy",
      linkTitle: "Service d’Analyse Médias",
      link: "/fr/media-intelligence-service",
      images: [
        {
          id: 1,
          photo: "/academy–certificates.jpg",
        },
        {
          id: 2,
          photo: "/GettyImages-1326463773.jpg",
        },
      ],
      paragraphArray: [
        'L’<a href="https://academy.ebu.ch/home" target="_blank">EBU Academy</a> aide nos Membres à relever les nouveaux défis qui se posent constamment à eux. Dans cette optique, elle leur propose un large éventail de formations, qui leur permettent d’acquérir les compétences nécessaires pour développer leur expertise et continuer à faire œuvre de pionniers.',
        "En 2022, nous avons ainsi formé près de 1 300 Membres dans une multitude de domaines, dont l’IA, les médias sociaux, les archives, le storytelling, la stratégie ou encore l’analyse de l’audience, avec une note de satisfaction moyenne de 4,6/5.",
        'Depuis l’éclatement de la guerre en Ukraine, notre <a href="https://academy.ebu.ch/hest-hostile-environment-safety-training" target="_blank">formation à la sécurité en milieu hostile</a> est particulièrement demandée. En 2022, ce ne sont pas moins de onze stages que nous avons organisés, pour aider les journalistes à se préparer physiquement et psychologiquement aux dangers de leur métier sur le terrain.',
        'Et pour la huitième année consécutive, l’<a href="https://academy.ebu.ch/executive-programme" target="_blank">Executive Programme</a> a contribué à former les leaders de demain. Objectif : leur transmettre les compétences indispensables à l’exercice de leurs responsabilités.',
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

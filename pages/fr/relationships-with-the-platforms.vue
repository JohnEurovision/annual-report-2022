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
      myStat: "",
      myDetail: "",
      headline: "Relations avec les plateformes",
      linkTitle: "Conférence mondiale des radiocommunications 2023 de l’UIT",
      link: "/fr/world-radiocommunication-conference-2023",
      images: [
        {
          id: 1,
          photo: "/social-media_resize_md.jpg",
        },
      ],
      paragraphArray: [
        "Les stratégies concernant les plateformes, qui permettent à nos Membres de renforcer leurs propres plateformes et leur position face aux grandes sociétés technologiques, constituent un volet important des travaux de notre équipe Numérique. Celle-ci s’appuie pour ce faire sur l’expertise de plusieurs groupes d’expert.e.s.",
        "Les plateformes des grandes sociétés technologiques sont une extension de notre communauté. Nos contacts étroits avec Google, Meta, TikTok et Apple, pour n’en citer que quelques-unes, revêtent donc une grande importance. Sur le plan stratégique, nous avons tenu des réunions à haut niveau et élaboré un cadre stratégique. Au niveau opérationnel, nous avons organisé dix ateliers dédiés avec plusieurs plateformes et nous avons répondu à plus de 160 demandes d’information de nos Membres.",
        "La collaboration est indispensable pour que l’équipe puisse apporter son éclairage aux Membres. L’année dernière, neuf ateliers ont ainsi été organisés avec d’autres départements de l’UER, notamment Sport, Affaires juridiques et publiques, Technologie & Innovation et MIS.",
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

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
      headline: "Conférence mondiale des radiocommunications 2023 de l’UIT",
      linkTitle: "Un soutien indéfectible",
      link: "/fr/supporting-our-members",
      images: [
        {
          id: 1,
          photo: "/47636628972_6de54f0fb7_k.jpg",
        },
        {
          id: 2,
          photo: "/52848187880_01e4f297d7_o.jpg",
        },
      ],
      paragraphArray: [
        "La Conférence mondiale des radiocommunications 2023 de l’UIT sera appelée à prendre des décisions importantes, qui pourraient avoir des répercussions sur les opérations de diffusion et l’utilisation des moyens de production sans fil. Nous dialoguons donc activement avec nos Membres, les autorités de régulation et l’ensemble du secteur. Nous défendons une position équilibrée, qui tient compte du développement des modes de consommation non linéaires, mais qui protège également l’innovation technique, un accès direct au public, une distribution solide et diversifiée et une offre de contenu offrant un bon rapport coûts-avantages à nos Membres.",
        "Dans le cadre des réunions et des forums préparatoires de l’Union internationale des télécommunications (UIT), ainsi que lors d’autres grandes manifestations sectorielles, nous avons élaboré une position favorable au statu quo en qui concerne la bande UHF. En effet, autoriser les services mobiles à utiliser eux aussi cette partie du spectre radioélectrique ne permettrait guère de résoudre les questions de couverture. Une telle décision risque en outre de nuire aux organismes de médias et à leurs publics. Nous avons transmis cette évaluation et notre recommandation aux directions générales de nos Membres, afin qu’elles puissent l’utiliser dans leurs propres échanges avec les autorités de régulation nationales.",
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

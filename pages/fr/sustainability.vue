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
      headline: "Développement durable",
      linkTitle: "Transformation numérique",
      link: "/fr/digital-transformation",
      images: [
        {
          id: 1,
          photo: "/leaf-circle.jpg",
        },
        {
          id: 2,
          photo: "/ESC-2.png",
        },
      ],
      paragraphArray: [
        "Nous avons à cœur de faciliter l’échange de connaissances et de bonnes pratiques entre nos Membres, mais aussi entre les communautés d’expert.e.s travaillant sous l’égide de notre Union.",
        'C’est ainsi qu’au cours des douze derniers mois, nous avons recueilli et publié plusieurs rapports sur cette thématique, notamment <a href="https://www.ebu.ch/guides/open/report/news-report-2023-climate-journalism-that-works" target="_blank"><i>Climate Journalism That Works – Between Knowledge and Impact</i></a>, <a href="https://www.ebu.ch/guides/loginonly/environmental-sustainability-at-public-service-media-corporate-investments" target="_blank">Environmental Sustainability at Public Service Media: Corporate Investments</a>, <a href="https://tech.ebu.ch/publications/r170" target="_blank">Sustainability Requirements for Procurement of Cloud Services</a>, et <a href="https://www.ebu.ch/research/membersonly/report/sustainability-an-overview-of-public-service-media-involvement" target="_blank">Sustainability: An Outline of Public Service Media Involvement</a>.',
        'Le <a href="https://tech.ebu.ch/fr/groups/sustainability" target="_blank">groupe de travail sur le développement durable</a> de l’UER s’attache à définir les bonnes pratiques en la matière, conformément aux lignes directrices de l’Union européenne et du groupe de travail sur l’information financière relative aux changements climatiques (TCFD) de l’ONU. Il a également organisé divers événements avec d’autres parties intéressées, dont des ateliers en lien avec l’initiative AIDI ou encore le <a href="https://tech.ebu.ch/events/sustainability2023" target="_blank">sommet que l’UER a consacré au développement durable</a>.',
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

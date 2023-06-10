<template>
  <div
    class="flex flex-col mt-16 lg:mt-0 lg:flex-row lg:ml-16 lg:w-full lg:justify-end"
  >
    <div
      class="panel-one relative lg:fixed lg:left-16 w-full h-full flex flex-row lg:flex-col lg:max-h-screen overflow-hidden"
    >
      <VideoHalf :video="videoUrl" />
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
      myStat: "",
      myDetail: "",
      headline: "Jeunes publics",
      linkTitle: "Eurovision Sport",
      link: "/fr/eurovision-sport",
      videoUrl: "/SayHiIntlVersion2022.mp4",
      images: [
        {
          id: 1,
          photo: "/young-audiences-report.jpg",
        },
      ],
      paragraphArray: [
        "Pour toucher les jeunes publics, nous devons faire en sorte que leurs priorités soient aussi les nôtres.",
        'Nous avons donc privilégié le <a href="https://www.ebu.ch/fr/young-audiences" target="_blank">partage de connaissances</a> au sein de notre réseau. Nous avons organisé des ateliers sur des sujets comme le gaming ou l’animation, étudié la manière dont les jeunes publics s’informent et interagissent avec les plateformes, enrichi notre bibliothèque d’études de cas et actualisé notre rapport sur les jeunes publics. Enfin, nous avons collecté une série d’études de cas passionnantes sur l’<a href="https://www.ebu.ch/fr/case-studies/members/young-audiences/media-literacy-across-europe-case-studies" target="_blank">éducation aux médias</a>, qui présente les stratégies suivies par une dizaine de pays européens dans ce domaine.',
        "Soulignons également le lancement de discussions sur les marques Jeunesse, sous la forme d’un forum en ligne qui permet à nos Membres de partager leurs solutions les plus probantes en matière de contenus destinés aux jeunes adultes et aux enfants, lesquels constituent une frange de l’audience difficile à conquérir. En 2023, nous organiserons des visites chez nos Membres les plus en pointe sur ces sujets, afin de faciliter le travail en réseau et la collaboration entre pairs.",
        'Les contenus et les campagnes continuent à occuper une place centrale dans nos initiatives. Ainsi donc, la troisième édition de notre <a href="https://www.ebu.ch/fr/events/2020/09/ebu-kids-european-friendship-campaign--say-hi-1" target="_blank">campagne SayHi</a>, qui promeut l’amitié entre enfants, a réuni 10 de nos Membres et nous avons réalisé plusieurs coproductions et échanges de programmes de fiction et d’info ciblant les enfants.',
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

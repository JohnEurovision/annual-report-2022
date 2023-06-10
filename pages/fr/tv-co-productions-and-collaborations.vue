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
      myStat: "999",
      myDetail: "description",
      headline: "Coproductions et collaborations télévisées",
      linkTitle: "Radio",
      link: "/fr/radio",
      images: [
        {
          id: 1,
          photo: "/Kids Drama 2022_Dad Sam Bith - Every Dad.jpg",
        },
        {
          id: 2,
          photo:
            "/Kids Docu 2022_BBC Alba_Scotland_Chirsty Bella - Weaving Time.jpg",
        },
      ],
      paragraphArray: [
        'Des millions de téléspectateurs et téléspectatrices ont pu apprécier le travail et la créativité des <a href="https://www.ebu.ch/fr/tv-programme-collaboration" target="_blank">formats de coproduction Eurovision</a>, au premier rang desquels la série Back from the Brink, qui met en lumière des personnes qui s’attachent à préserver la flore et la faune en Europe, Inside Offside, collection de documentaires chocs sur l’impact social de la Coupe du monde de la FIFA au Qatar, ou encore le retour du Concours Eurovision des jeunes musiciens, qui s’est tenu cette année à Marseille.',
        "Produits par l’ORF, notre Membre autrichien, pour le plus grand plaisir des mélomanes du monde entier, les célèbres concerts d’une Nuit d’été et du Nouvel An de l’Orchestre philharmonique de Vienne ont offert eux aussi de formidables moments de télévision.",
        "Parallèlement, l’Échange de programmes de télévision Eurovision continue de se développer. Lancé initialement pour faire face à la pénurie de programmes pendant le confinement, l’appel à contenus s’est transformé en un échange dynamique, qui profite aux publics des MSP européens.",
        'Notre <a href="https://www.ebu.ch/tv-co-production/eurovision-documentary-development-scheme" target="_blank">Programme pour le développement de documentaires Eurovision</a>, soutenu par 27 médias audiovisuels publics, prépare un ensemble de projets documentaires ambitieux pour répondre à la hausse de la demande. Notre réseau de préachat, qui permet à nos Membres d’acheter de manière anticipée les droits de diffusion sur des fictions de premier plan, apporte encore plus de valeur à l’offre de contenu des MSP.',
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

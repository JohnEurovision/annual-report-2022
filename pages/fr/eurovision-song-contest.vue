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
      myStat: "161m",
      myDetail:
        "-	Nombre de téléspectateur.rice.s du Concours Eurovision de la Chanson",
      headline: "Concours Eurovision de la Chanson",
      linkTitle: "Diversité, équité et inclusion",
      link: "/fr/diversity-equity-and-inclusion",
      images: [
        {
          id: 1,
          photo: "/ESC-1.png",
        },
        {
          id: 2,
          photo: "/ESC-2.png",
        },
      ],
      paragraphArray: [
        'Après la victoire de Måneskin à Rotterdam l’année précédente, le <a href="https://eurovision.tv/" target="_blank">Concours Eurovision de la Chanson</a> a fait son grand retour en Italie en 2022, pour la première fois depuis plus de 30 ans. Depuis, Måneskin remporte un succès croissant à l’international. Quarante Membres de l’UER ont participé à l’édition 2022 du Concours, lors de trois émissions exceptionnelles produites par la RAI et animées par Laura Pausini et Mika.',
        "Le groupe ukrainien Kalush a littéralement conquis le public, obtenant le plus grand nombre de voix en ligne jamais enregistré grâce à sa chanson « Stefania ». Retransmises en direct, les deux demi-finales et la finale ont été suivies par plus de 160 millions de téléspectateur.rice.s et ont recensé presque 20 millions de visiteurs uniques sur YouTube et TikTok, notre partenaire officiel.",
        'Quant au <a href="https://junioreurovision.tv" target="_blank">Concours Eurovision de la Chanson Junior</a>, il était organisé par la Télévision publique arménienne à Erevan, pour la deuxième fois de son histoire. Seize pays ont participé à l’événement, qui a rassemblé au total 33 millions de téléspectateurs et téléspectatrices. Pour la deuxième fois en trois ans, c’est la France qui a été couronnée, avec la chanson « Oh Maman ! » interprétée par Lissandro.',
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

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
      myStat: "2,800",
      myDetail:
        "Nombre de concerts radio mis à disposition dans l’Échange de musique Euroradio",
      headline: "Échange de musique",
      linkTitle: "Jeunes publics",
      link: "/fr/young-audiences",
      images: [
        {
          id: 1,
          photo: "/EJO_cred_Daniel_Koch_20.jpg",
        },
        {
          id: 2,
          photo: "/Priya_Ragu_ESNS22-BartHeemskerk_57.jpg",
        },
      ],
      paragraphArray: [
        "La musique n’a pas sa pareille pour rassembler, que ce soit dans le souvenir, la solidarité ou la joie, tout simplement.",
        'Tout au long de l’année écoulée, notre <a href="https://www.ebu.ch/fr/music" target="_blank">Échange de musique</a> a trouvé un véritable écho : il a en effet permis aux Membres Radio de l’UER de partager des concerts pour commémorer le premier anniversaire de la guerre en Ukraine. Nous avons aussi honoré la mémoire de la grande Nina Simone et du pianiste roumain Radu Lupu, en puisant dans les riches archives de nos Membres. Mais nous avons également regardé vers l’avenir, en soutenant de jeunes artistes grâce à l’Orchestre de jazz et au Concours de jazz Euroradio, ainsi qu’à la série <i>Top Young Performers</i>, qui met en lumière des étoiles montantes de la scène classique.',
        "Pour notre série « Trois questions à… », nous avons eu la chance d’interviewer la mezzo-soprano Elina Garanča et le chef d’orchestre Herbert Blomstedt. Cette année a également été marquée par la première participation de l’UA:PBC, notre Membre ukrainien, à l’émission <i>Europe’s Biggest Dance Show</i>, ainsi que par le concert <i>JazzWomenAfrica</i> produit en partenariat avec l’UNESCO pour la Journée internationale du jazz. Soulignons également l’approche vidéo inédite suivie cette année par l’Euroradio pour sa Journée spéciale « Musique de Noël ».",
        "L’échange de connaissances constitue la pierre angulaire de toutes ces activités. Au cours des douze derniers mois, nous avons organisé quinze séances de 60 minutes sur la musique et la radio, sur des sujets aussi variés que le développement durable pour les salles d’opéra ou les contenus multiplateformes. Nous avons aussi publié notre premier rapport sur les moyens humains requis pour l’enregistrement de concerts de musique classique, pour lequel 29 organismes ont partagé leur retour d’expérience.",
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

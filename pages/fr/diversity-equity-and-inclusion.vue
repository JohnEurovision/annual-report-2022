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
      headline: "Diversité, équité et inclusion",
      linkTitle: "Permettre à nos Membres",
      link: "/fr/enabling-our-members",
      images: [
        {
          id: 1,
          photo: "/diversity-casebook.jpg",
        },
        {
          id: 2,
          photo: "/diversity-equity-inclusion.jpg",
        },
      ],
      paragraphArray: [
        'L’UER s’engage à promouvoir la diversité, l’équité et l’inclusion au sein de son personnel. Nous avons publié notre politique en la matière sur notre <a href="https://www.ebu.ch/fr/about/dei-policy" target="_blank">site Web</a>. Nous y détaillons les actions que nous menons pour répondre aux enjeux de représentation et d’inclusion, à tous les niveaux de l’organisation.',
        'Nous souhaitons également favoriser une meilleure représentation au sein de nos Comités et dans cette optique, nous avons publié de <a href="https://www.ebu.ch/files/live/sites/ebu/files/Initiatives/Diversity_Equity_and_Inclusion/Guidelines_DEI_Representation_Inclusion_FR.pdf" target="_blank">nouvelles lignes directrices</a> pour aider nos Membres à hâter le changement.',
        'En externe, nous soutenons nos Membres en mettant en lumière les bonnes pratiques des MSP. Nous avons ajouté de nouvelles études de cas à notre rapport <a href="https://www.ebu.ch/fr/diversity#casebook" target="_blank">Briser les barrières dans les médias de service public</a> et notre service d’Analyse Médias (MIS) a introduit de nouvelles données dans ses rapports consacrés respectivement à <a href="https://www.ebu.ch/publications/research/members_only/report/gender-equality--psm" target="_blank">l’égalité hommes-femmes et les MSP</a> et à <a href="https://www.ebu.ch/fr/publications/research/membersonly/report/diversity-and-public-service-media" target="_blank">la diversité et les MSP</a>.',
        'Nos <a href="https://www.ebu.ch/fr/groups/diversity-equity-inclusion" target="_blank">groupes directeurs sur la diversité, l’équité et l’inclusion et sur l’égalité hommes-femmes</a> se réunissent régulièrement, comme en octobre dernier dans les locaux de la RTBF, à Bruxelles.',
        "Nous avons aussi à cœur de tenir les engagements que nous avons pris en lien avec le projet 50:50 Equality de la BBC et nous nous félicitons que les femmes soient toujours mieux représentées dans nos réunions et conférences. Dans l’année qui s’achève en mars 2023, notre département Médias a atteint la parité parfaite, soit 49 % d’hommes et 51 % de femmes, dans ses débats. Quant à notre département Technologie et Innovation, il comptabilise en moyenne 22 % de femmes parmi les intervenant.e.s à ses événements.",
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

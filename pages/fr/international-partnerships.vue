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
      myStat: "",
      myDetail: "",
      headline: "Partenariats internationaux",
      linkTitle: "Relations avec les plateformes",
      link: "/fr/relationships-with-the-platforms",
      images: [
        {
          id: 1,
          photo: "/world-press-freedom.jpg",
        },
        {
          id: 2,
          photo: "/Mariaa-Siga.jpg",
        },
      ],
      paragraphArray: [
        "L’UER entretient de solides relations avec les institutions internationales. Au cours des douze derniers mois, nous avons obtenu d’importants résultats grâce à nos partenariats avec l’UNESCO et le Conseil de l’Europe, en particulier.",
        "Ainsi, notre Union s’est associée à l’UNESCO pour promouvoir <i>JazzWomenAfrica</i> et organiser un débat sur l’information comme bien public à l’occasion de la Journée mondiale de la liberté de la presse, débat qui a réuni des journalistes et des dirigeant.e.s de médias audiovisuels de différentes régions du monde.",
        "En collaboration avec le Conseil de l’Europe, nous avons organisé une conférence sur les médias audiovisuels publics et la démocratie, dans le cadre de laquelle un engagement fort en faveur de l’indépendance et de la pérennité des MSP était au cœur des discussions. Nous avons préparé un recueil des normes du Conseil de l’Europe qui intéressent les MSP. Enfin, nous avons contribué à la Plateforme pour la sécurité des journalistes du Conseil de l’Europe, ainsi qu’à son rapport annuel.",
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

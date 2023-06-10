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
      headline: "Campagnes nationales",
      linkTitle: "Partenariats internationaux",
      link: "/fr/international-partnerships",
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
        "Face aux pressions politiques et financières qui s’exercent de plus en plus sur les MSP, nous nous attachons à souligner leur utilité et à préserver leur avenir.",
        'En cette année de centenaire des médias audiovisuels publics, il était plus important que jamais de rappeler l’importante contribution de nos Membres à la société. Nos campagnes de promotion et de communication, au premier rang desquelles <a href="http://pouruneteledequalite.fr/" target="_blank">Pour une télé de qualité</a>, nous ont permis de mettre en avant le travail remarquable des MSP et le rôle de nos Membres dans la couverture du conflit ukrainien.',
        "Nous avons aussi défendu sans relâche l’indépendance et la pérennité de nos Membres dans les pays où celles-ci étaient en danger, notamment en Israël, en Slovénie et en Bosnie-Herzégovine.",
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

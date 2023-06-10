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
      myStat: "189",
      myDetail: "Nombre d’événements sportifs couverts ",
      headline: "Eurovision Sport",
      linkTitle: "Concours Eurovision de la Chanson",
      link: "/fr/eurovision-song-contest",
      images: [
        {
          id: 1,
          photo: "/GettyImages-453202662.jpg",
        },
        {
          id: 2,
          photo: "/2022-08-13-EC2022_BMX_Men_Sebastian-Sternemann.jpg",
        },
      ],
      paragraphArray: [
        'Ce sont près de 44 000 heures d’images de compétitions qui ont été offertes au public européen grâce aux accords négociés par l’<a href="https://www.ebu.ch/eurovision-sport" target="_blank">Eurovision Sport</a> pour le compte de nos Membres. Parmi les grands événements sportifs de 2022, citons la Coupe du monde de la FIFA au Qatar, les Championnats européens multisports à Munich, les Championnats du monde d’athlétisme, les Championnats du monde de natation ou encore le Tour de France.',
        "La promotion du sport féminin est l’une de nos grandes priorités, notamment avec l’EURO féminin de l’UEFA, qui a enregistré des chiffres d’audience record, et le nouveau Tour de France Femmes. Nous comptons continuer sur cette lancée en 2023. Grâce à un nouvel accord avec la FIFA, nos Membres diffuseront encore plus de matches de la Coupe du monde féminine de la FIFA, sur de multiples plateformes.",
        "Notre plateforme numérique sportive continue de se développer. Elle nous permet de tirer pleinement parti des droits que nous avons acquis et de proposer aux fans des modes d’écoutes innovants. Cet été sera riche en grands événements sportifs, à commencer par les Jeux européens. Et tout au long de l’année, nous continuerons à proposer un large éventail de contenus dans le domaine du sport.",
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

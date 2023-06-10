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
      headline: "Radio",
      linkTitle: "Échange de musique",
      link: "/fr/music-exchange",
      images: [
        {
          id: 1,
          photo: "/IFC_Audiodocs_2022.jpg",
        },
      ],
      paragraphArray: [
        "Face aux évolutions rapides que connaît le domaine de l’audio, notre équipe veille à ce que la communauté Radio de l’UER dispose des outils et des forums nécessaires pour rester à la pointe de l’innovation.",
        'Les participant.e.s à notre premier <a href="https://www.ebu.ch/fr/podcast-exchange" target="_blank">Forum sur les podcasts</a>, que nous avons organisé en collaboration avec Radio France, ont ainsi pu s’intéresser aux stratégies de contenu et aux bonnes pratiques en matière de partage de formats. Nous avons publié un catalogue présentant les formats de podcast les plus innovants de la communauté UER. Nous avons également rédigé un rapport sur les mesures comparables des podcasts. Enfin, un nouveau groupe exclusivement consacré aux podcasts étudie régulièrement les grands enjeux du moment, notamment les coproductions.',
        'La <a href="https://www.ebu.ch/fr/music/euroradio-international-features" target="_blank">Conférence internationale des documentaires radio</a>, organisée par BBC Wales sur le thème du storytelling radio, a attiré quant à elle une centaine de participant.e.s. Dans le cadre du Prix Europa, nous avons défendu l’avenir de l’audio scénarisé. Et lors la conférence Connected Cars de la BBC, nous avons souligné la montée en puissance de l’audio en voiture et le rôle fondamental de la radio comme source de contenus de premier ordre. Dans un entretien réalisé à l’occasion de la <a href="https://www.ebu.ch/news/2023/02/radio-matters-five-reasons-why" target="_blank">Journée mondiale de la radio de l’UNESCO</a>, Noel Curran, directeur général de l’UER, a réaffirmé l’importance de l’écoute en direct de la radio, qui doit donc être protégée sur l’ensemble des appareils. Cet objectif demeure l’une des grandes priorités de nos équipes.',
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

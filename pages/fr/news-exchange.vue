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
      myStat: "48k",
      myDetail:
        "Nombre de sujets mis à disposition dans l’Eurovision News Exchange",
      headline: "News Exchange",
      linkTitle: "Actualité internationale",
      link: "/fr/news-events",
      images: [
        {
          id: 1,
          photo: "/social-newswire.jpg",
        },
        {
          id: 2,
          photo: "/climate-journalism-that-works.jpg",
        },
      ],
      paragraphArray: [
        "Les grands enjeux de l’heure ne cessent de nous rappeler toute l’importance d’informations professionnelles et vérifiées.",
        'Ce sont bien évidemment les sujets sur la guerre en Ukraine qui ont été les plus demandés. Ainsi donc, entre février 2022 et mars 2023, ce sont 13 000 sujets consacrés à l’Ukraine que nous avons mis à la disposition des Membres de <a href="https://www.ebu.ch/fr/eurovision-news" target="_blank">l’Eurovision News Exchange</a> à l’échelle internationale.',
        "Notre Social Newswire nous aide dans notre mission en vérifiant des récits de témoin. Cette tâche prend tout son sens dans des situations complexes telles que les manifestations en Iran, au sujet desquelles un très grand nombre de contenus sont partagés sur les réseaux. Or pour rendre compte de l’actualité avec objectivité et exactitude, il est primordial de pouvoir vérifier les sources d’information et de s’assurer de leur véracité.",
        'Toujours en matière d’info, le réseau de journalisme d’investigation de l’UER a fait œuvre de pionnier en publiant une <a href="https://www.ebu.ch/fr/news/2023/02/where-are-the-missing-children-of-ukraine" target="_blank">enquête édifiante sur les enfants ukrainiens disparus</a>, qui a mis en évidence le caractère mensonger des motifs de sécurité évoqués par la Russie. En mars 2023, cette enquête avait été partagée plus de 800 fois, par 36 Membres de l’UER. Depuis, la Cour pénale internationale a émis un mandat d’arrêt contre le président russe.',
        'Intitulé <a href="https://www.ebu.ch/guides/open/report/news-report-2023-climate-journalism-that-works" target="_blank">Climate Journalism That Works – Between Knowledge and Impact</a>, le News Report 2021-2022 s’intéresse à la plus grande crise à laquelle le monde est actuellement confronté. Il montre pourquoi et comment les médias doivent accorder une attention particulière aux enjeux du changement climatique. Nous avons également partagé des enquêtes, des études de cas et des retours d’expérience provenant de différentes rédactions, concernant les moyens de sensibiliser le public à ce sujet crucial.',
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

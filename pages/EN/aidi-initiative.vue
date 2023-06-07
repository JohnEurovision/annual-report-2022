<template>
    <div class=" flex flex-col mt-16 lg:mt-0 lg:flex-row lg:ml-16 lg:w-full lg:justify-end">
        <div class="panel-one relative lg:fixed lg:left-16 w-full h-full flex flex-row lg:flex-col lg:max-h-screen overflow-hidden">
          <ImageFull :image="image" v-for="image in images" :key="image.id"/>
        </div>
        <div class="panel-two bg-white w-full h-full lg:w-1/2 lg:min-h-screen" :style="{ paddingBottom: componentHeight + 'px' }">
          <div class="flex flex-col p-10 sm:p-12 md:p-16 xl:p-24 2xl:p-32">
            <!--<StatOne :stat="myStat" :detail="myDetail" class="flex" />-->
            <div>
              <Headline :content="headline" />
            </div>
            <div v-for="(paragraph, index) in paragraphArray" :key="index">
              <Paragraph :content="paragraph" />
            </div>
          </div>
          <NextPage :title="linkTitle" :link="link" @componentHeight="updateComponentHeight" />
        </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      myStat: '999',
      myDetail: 'description',
      headline: 'AIDI Initiative',
      linkTitle: 'Sustainability',
      link: '/EN/sustainability',
      images: [
        {
          id: 1,
          photo:
            '/aidi-initiative.jpg',
        },
      ],
      paragraphArray: [
        'The <a href="https://www.ebu.ch/aidi" target="_blank">EBU AI and Data Initiative</a> (AIDI) acts as a lens on the enormous technical advances there have taken place in this field in recent years. Monthly spotlights focus on Member innovation and ‘microworkshops’ explore use-cases. We’re also exploring the practical ethical and regulatory challenges that have arisen in this area, including the “arms race” against disinformation, the protection of the workforce, and issues around Intellectual Property and user privacy.',
        'The AIDI Initiative has also taken the lead in our involvement in the Horizon Europe project <a href="https://www.veraai.eu/home" target="_blank">vera.ai</a> against disinformation and the EBU’s transversal taskforce on Generative AI.',
        'To help build a more complete picture of the status quo, we’ve also started to map the use of AI across our membership.',
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

</script>

<style scoped>

.panel-one {
    @media (min-width: 1024px) {
      width: calc(50% - 32px)
    }
}

</style>
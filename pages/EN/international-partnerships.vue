<template>
    <div class=" flex flex-col mt-16 lg:mt-0 lg:flex-row lg:ml-16 lg:w-full lg:justify-end">
        <div class="panel-one relative lg:fixed lg:left-16 w-full h-full flex flex-row lg:flex-col lg:max-h-screen overflow-hidden">
          <ImageHalf :image="image" v-for="image in images" :key="image.id"/>
        </div>
        <div class="panel-two bg-white w-full h-full lg:w-1/2 lg:min-h-screen" :style="{ paddingBottom: componentHeight + 'px' }">
          <div class="flex flex-col p-10 sm:p-12 md:p-16 xl:p-24 2xl:p-32">
            <!--<StatCircle :stat="myStat" :detail="myDetail" class="flex" />-->
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
      headline: 'International partnerships',
      linkTitle: 'Relationships with the platforms',
      link: '/EN/relationships-with-the-platforms',
      images: [
        {
          id: 1,
          photo:
            '/world-press-freedom.jpg',
        },
        {
          id: 2,
          photo:
            '/Mariaa-Siga.jpg',
        },
      ],
      paragraphArray: [
        'The EBU maintains strong relationships with international institutions. Over the past 12 months, we have achieved good results through our partnerships, especially with UNESCO and the Council of Europe.',
        'For example, with UNESCO, we have partnered on the promotion of JazzWomenAfrica and organized a session on ‘Information as a public good – Our Journalists, our freedom’ in support of World Press Freedom Day. The panel brought together journalists/managers of broadcasting organizations from different regions.', 
        'With the Council of Europe, we held a joint conference ‘PSM for Democracy’ in Vilnius, with the support of LRT. Two hundred delegates discussed a strong commitment for independent and sustainable PSM. We developed a digest of Council of Europe standards relevant for PSM. And we contributed to the Council of Europe’s Platform for the Safety of Journalists as well as its annual report on journalist safety.',
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
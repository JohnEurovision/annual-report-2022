<template>
    <div class=" flex flex-col mt-16 lg:mt-0 lg:flex-row lg:ml-16 lg:w-full lg:justify-end">
        <div class="panel-one relative lg:fixed lg:left-16 w-full h-full flex flex-row lg:flex-col lg:max-h-screen overflow-hidden">
          <ImageHalf :image="image" v-for="image in images" :key="image.id"/>
        </div>
        <div class="panel-two bg-white w-full h-full lg:w-1/2 lg:min-h-screen" :style="{ paddingBottom: componentHeight + 'px' }">
          <div class="flex flex-col p-10 sm:p-12 md:p-16 xl:p-24 2xl:p-32">
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
      headline: 'News Events',
      linkTitle: 'TV Co-Productions & Collaborations',
      link: '/EN/tv-co-productions-and-collaborations',
      images: [
        {
          id: 1,
          photo:
            '/state-funeral-HRH-queen-elizabeth.jpg',
        }
      ],
      paragraphArray: [
        'It was a year of news stories with global resonance and the Eurovision News Events service was at the forefront for them all, providing broadcast services for both breaking news and planned events.',
        'The war in Ukraine continued to dominate with the anniversary of Russia’s invasion in February 2023.',
        'But, one of the biggest news events impacting countries worldwide was the <a href="https://www.ebu.ch/news/2022/09/from-coronation-to-funeral---eurovision-news-bears-witness-to-life-of-the-queen" target="_blank">state funeral of HRH Queen Elizabeth II</a>. From 26 stand-up positions at 8 locations, the team delivered 783 separate transmissions, amounting to 26,630 minutes which equates to a staggering 18.5 days over 10 days. And for the first time in the history of royal events, our radio members could broadcast from the same key locations as their TV colleagues.'
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
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
      <NextPage
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
      myStat: "161m",
      myDetail: "Number of TV viewers to Eurovision Song Contest",
      headline: "Eurovision Song Contest",
      linkTitle: "Diversity, Equity & Inclusion",
      link: "/en/diversity-equity-and-inclusion",
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
        '2022 saw the <a href="https://eurovision.tv/" target="_blank">Eurovision Song Contest</a> return to Italy for the first time in over 30 years following Måneskin’s win in Rotterdam which launched them into global superstardom. 40 EBU Members took part in Rai’s spectacular three shows, hosted by international singing stars Laura Pausini and Mika.',
        "The Contest was overwhelmingly won by Ukraine’s Kalush Orchestra with the highest number of televote points ever received for the song ‘Stefania’. The 3 live shows were seen by over 160 million television viewers and nearly 20 million more unique viewers on YouTube and TikTok, our Official Entertainment Partner.",
        'The <a href="https://junioreurovision.tv" target="_blank">Junior Eurovision Song Contest</a> was hosted by Armenian Public Television in Yerevan, for the second time in its history. 16 countries participated and the event reached a total audience of 33 million. The Contest was won by France for the second time in three years with ‘Oh Maman’ performed by Lissandro.',
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
    width: calc(50% - 32px);
  }
}
</style>

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
      myStat: "48k",
      myDetail: "Number of items shared in Eurovision News Exchange",
      headline: "News Exchange",
      linkTitle: "News Events",
      link: "/en/news-events",
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
        "Every year, the stakes get higher in news and the need for high quality, trusted information rises exponentially.",
        'The war in Ukraine has been at the crux of demand. Between February 2022 - March 2023, we shared 13,000 news items on Ukraine with members of the <a href="https://www.ebu.ch/eurovision-news" target="_blank">Eurovision News Exchange</a> worldwide.',
        "Our Social Newswire underpins our output by verifying eyewitness content. In complex situations, such as the Iranian protests which saw vast amounts of content shared on private networks, the checking of information and sourcing of verified video is crucial for accurate reporting and the reputation of public service media in the provision of trusted news.",
        'The EBU Investigative Journalism Network pooled resources and broke new ground with a chilling <a href="https://www.ebu.ch/news/2023/02/where-are-the-missing-children-of-ukraine" target="_blank">exposé of Ukraine’s missing children</a>, revealing Russia’s explanations of child safety to be spurious – and Kyiv claims of genocide to be all too real. As of March 2023, the story had been shared more than 800 times by 80 channels from 36 EBU Members. The international Criminal Court has since issued an arrest warrant for President Putin.',
        'The 2021-2022 News Report focused on the biggest crisis facing the planet right now. In <a href="https://www.ebu.ch/guides/open/report/news-report-2023-climate-journalism-that-works" target="_blank">Climate Journalism That Works – Between Knowledge and Impact</a>, we examined how – and why - media must up the ante in climate change coverage and we shared research, case studies and first-hand experiences from newsrooms on how to cut through with audiences so that they engage with this vital topic before it’s too late.',
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

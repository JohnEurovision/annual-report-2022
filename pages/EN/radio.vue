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
      myStat: "999",
      myDetail: "description",
      headline: "Radio",
      linkTitle: "Music Exchange",
      link: "/en/music-exchange",
      images: [
        {
          id: 1,
          photo: "/IFC_Audiodocs_2022.jpg",
        },
      ],
      paragraphArray: [
        "With the rapid evolution of audio trends, our team is focused on ensuring the EBU radio community has the tools and forums necessary to remain at the forefront.",
        'At our first <a href="https://www.ebu.ch/podcast-exchange" target="_blank">Podcast Forum</a>, held in collaboration with Radio France, participants took a deep dive into content strategies and best practices for format sharing. We published a catalogue exploring innovative podcast formats from across the community, and also a report on comparable podcasting metrics, the first of its kind. Our new Podcast Group regularly discuss the hottest topics, including co-productions.',
        'The <a href="https://www.ebu.ch/music/euroradio-international-features" target="_blank">International Features Conference</a>, attracting almost 100 participants to BBC Wales, focused on audio storytelling; we made the case for the future of scripted audio at the Prix Europa Culture Forum; and at the BBC Connected Cars conference we highlighted the steady growth of in-car audio consumption and radio’s crucial role as a source of high-quality content. In an interview for <a href="https://www.ebu.ch/news/2023/02/radio-matters-five-reasons-why" target="_blank">UNESCO World Radio Day</a>, EBU Director General Noel Curran stated that live radio will always matter – and that protecting it across all devices is key. This remains a top priority for our team.',
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

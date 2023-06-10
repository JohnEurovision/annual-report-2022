<template>
  <div
    class="flex flex-col mt-16 lg:mt-0 lg:flex-row lg:ml-16 lg:w-full lg:justify-end"
  >
    <div
      class="panel-one relative lg:fixed lg:left-16 w-full h-full flex flex-row lg:flex-col lg:max-h-screen overflow-hidden"
    >
      <VideoHalf :video="videoUrl" />
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
      myStat: "",
      myDetail: "",
      headline: "Young Audiences",
      linkTitle: "Eurovision Sport",
      link: "/en/eurovision-sport",
      videoUrl: "/SayHiIntlVersion2022.mp4",
      images: [
        {
          id: 1,
          photo: "/young-audiences-report.jpg",
        },
      ],
      paragraphArray: [
        "If we’re going to reach young audiences, then kids’ and Gen Z priorities need to also be ours.",
        'We’ve prioritized <a href="https://www.ebu.ch/young-audiences" target="_blank">knowledge sharing</a> across our network, including bespoke workshops covering themes from gaming to animation to education. We’ve looked at how young audiences consume news and interact with platforms, delivered new updates to our burgeoning library of case studies, released our Youth Report update, and also produced two new publications focusing on Education and <a href="https://www.ebu.ch/case-studies/members/young-audiences/media-literacy-across-europe-case-studies" target="_blank">Media Literacy.</a>',
        "A particular highlight has been the launch of Youth Brand Talks, an online forum for Members working in young adult and kids’ content to share ideas for ‘what works’ in engaging these often-elusive audiences. These are evolving into Youth Brand visits for 2023 that will encourage vital peer networking and collaborations to benefit today’s - and tomorrow’s - young adults and kids. ",
        'Content and campaigns remain central to our output. The third edition of our <a href="https://www.ebu.ch/events/2020/09/ebu-kids-european-friendship-campaign--say-hi-1" target="_blank">SayHi campaign</a> promoting friendship and inclusion had 10 EBU Members on board and we delivered kids’ co-productions and exchanges in drama, fiction, and news.',
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

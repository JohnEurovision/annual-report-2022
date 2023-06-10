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
      headline: "Media Intelligence Service",
      linkTitle: "National Campaigning",
      link: "/en/national-campaigning",
      images: [
        {
          id: 1,
          photo: "/mis-publications.jpg",
        },
      ],
      paragraphArray: [
        'Our <a href="https://www.ebu.ch/media-intelligence" target="_blank">Media Intelligence Service</a> (MIS) produced 145 resource files in 2022, 40 of which were in-depth thematic reports tailored exclusively to our public service media members’ needs.',
        'In the last 12 months, we continued to expand our coverage of online developments, producing a unique mapping of <a href="https://www.ebu.ch/research/membersonly/report/public-service-media-and-third-party-platforms" target="_blank">public service media’s relations with third-party platforms</a> and we introduced the highly strategic (and successful) <a href="https://www.ebu.ch/research/membersonly/report/measuring-total-audience" target="_blank">Measuring Total Audience report.</a>',
        "On top of this, we are strengthening our work in the areas of PSM public value and impact with new reports on the topics of Diversity and Sustainability, along with some significant new work on how to measure the economic and social impact of PSM.",
        "MIS also maintained its Member-focused approach by responding to over 280 individual requests, most of which came from Members.",
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

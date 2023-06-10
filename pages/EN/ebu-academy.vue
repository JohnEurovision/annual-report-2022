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
      myStat: "81",
      myDetail: "Number of Academy trainings",
      headline: "EBU Academy",
      linkTitle: "Media Intelligence Service",
      link: "/en/media-intelligence-service",
      images: [
        {
          id: 1,
          photo: "/academy–certificates.jpg",
        },
        {
          id: 2,
          photo: "/GettyImages-1326463773.jpg",
        },
      ],
      paragraphArray: [
        'The <a href="https://academy.ebu.ch/home" target="_blank">EBU Academy</a> supports our Members with emerging challenges, educating them and delivering the right skills to the right professionals to help them sharpen their skills and confidently lead innovation in the media.',
        "In 2022, we trained almost 1,300 EBU members in areas such as AI, social media, archives, storytelling, strategy, and audience insights, and received an average satisfaction rating of 4.6/5.",
        'Our Master Class ‘<a href="https://academy.ebu.ch/hest-hostile-environment-safety-training" target="_blank">Hostile Environment Safety Training</a>’ has been in particularly high demand due to the ongoing war, and we ran a total of 11 Classes in 2022 to help journalists prepare both physically and mentally for the dangers of reporting in the field.',
        'For the 8th consecutive year, the <a href="https://academy.ebu.ch/executive-programme" target="_blank">Executive Programme</a> successfully helped to grow the next generation of leaders. The new entrepreneurial mindset allows for fast action, taking ownership and seeing problems as opportunities.',
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

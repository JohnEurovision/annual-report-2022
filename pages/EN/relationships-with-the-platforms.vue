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
      myStat: "",
      myDetail: "",
      headline: "Relationships with the platforms",
      linkTitle: "ITU´s World Radiocommunications Conference 2023",
      link: "/en/world-radiocommunication-conference-2023",
      images: [
        {
          id: 1,
          photo: "/social-media_resize_md.jpg",
        },
      ],
      paragraphArray: [
        'A vital strand of our Digital Team’s work is on platform strategies to help Members strengthen both their own platforms and their position with big tech platforms, ably supported by the knowledge of our expert groups which include <a href="https://www.ebu.ch/groups/social-media" target="_blank">Social Media</a>, Platform Partnerships and the new Own Platforms Group that has already met twice and gathered VOD experts from across the membership.',
        "The big tech platforms are an extension of our community and our close contacts with Google, Meta, TikTok and Apple - to name just four – are vital strategically (through high-level meetings and a strategic framework) and operationally (we’ve held 10 dedicated workshops with a range of big tech platforms and answered over 160 Member information requests).",
        "Collaboration is essential to the team to bring new insights to Members, enabling them to reach better conclusions. 9 workshops were held last year in collaboration with other EBU departments including Sport, Legal & Policy, Technology & Innovation, and the Media Intelligence Service.",
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

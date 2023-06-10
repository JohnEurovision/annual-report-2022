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
      headline: "ITU´s World Radiocommunication Conference 2023",
      linkTitle: "Supporting our members",
      link: "/en/supporting-our-members",
      images: [
        {
          id: 1,
          photo: "/47636628972_6de54f0fb7_k.jpg",
        },
        {
          id: 2,
          photo: "/52848187880_01e4f297d7_o.jpg",
        },
      ],
      paragraphArray: [
        "With the ITU´s World Radiocommunication Conference 2023 set to take a number of far-reaching decisions that could impact broadcast operations and the use of wireless production equipment, we’ve been actively engaging with Members, regulators, and the wider industry. We’re pursuing a balanced approach that takes account of the growth of non-linear consumption patterns but also protects future paths for technical innovation, direct access to audiences, robust and diversified distribution, and access to cost-efficient content delivery for Members.",
        "Through the International Telecommunication Union’s (ITU) preparatory meetings and forums, and various other relevant industry associations, we’ve prepared a position that calls for ‘no change’ in the UHF band. Greater use of wireless spectrum by mobile networks would do little to address coverage issues and is less likely to deliver future net benefits to media organizations and their audiences than the status quo. We’ve also shared this assessment and our recommendation with our Members’ Director Generals for use in their own consultations with national regulators.",
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

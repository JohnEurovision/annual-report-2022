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
      headline: "National Campaigning",
      linkTitle: "International partnerships",
      link: "/en/international-partnerships",
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
        "With public service media coming under increasing political and financial pressure, we are committed to championing its value and safeguarding its future.",
        'In the centenary year for PSM, it’s been more important than ever to remind people of the huge contribution our Members make to society. Our <a href="http://keepmediagood.com/" target="_blank">Keep Media Good</a> promotions and communications campaigns have showcased the critical work of PSM and highlighted current issues such as the role broadcasters have played in reporting on and supporting Ukraine.',
        "We have also helped defend our Members’ independence and sustainability in countries where it has been challenged including in Israel, Latvia, Slovakia and Bosnia-Herzegovina.",
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

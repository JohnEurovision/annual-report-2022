<template>
    <div class=" flex flex-col mt-16 lg:mt-0 lg:flex-row lg:ml-16 lg:w-full lg:justify-end">
        <div class="panel-one relative lg:fixed lg:left-16 w-full h-full flex flex-row lg:flex-col lg:max-h-screen overflow-hidden">
          <ImageHalf :image="image" v-for="image in images" :key="image.id"/>
        </div>
        <div class="panel-two bg-white w-full h-full lg:w-1/2 lg:min-h-screen" :style="{ paddingBottom: componentHeight + 'px' }">
          <div class="flex flex-col p-10 sm:p-12 md:p-16 xl:p-24 2xl:p-32">
            <StatCircle :stat="myStat" :detail="myDetail" class="flex" />
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
      headline: 'This is the headline',
      linkTitle: 'This is the link title',
      link: '/EN/next-link',
      images: [
        {
          id: 1,
          photo:
            '/ESC-1.png',
        },
        {
          id: 2,
          photo:
            '/ESC-2.png',
        },
      ],
      paragraphArray: [
        'This is the YO! paragraph.',
      ],
    };
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
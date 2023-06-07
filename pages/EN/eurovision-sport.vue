<template>
    <div class=" flex flex-col mt-16 lg:mt-0 lg:flex-row lg:ml-16 lg:w-full lg:justify-end">
        <div class="panel-one relative lg:fixed lg:left-16 w-full h-full flex flex-row lg:flex-col lg:max-h-screen overflow-hidden">
          <ImageHalf :image="image" v-for="image in images" :key="image.id"/>
        </div>
        <div class="panel-two bg-white w-full h-full lg:w-1/2 lg:min-h-screen" :style="{ paddingBottom: componentHeight + 'px' }">
          <div class="flex flex-col p-10 sm:p-12 md:p-16 xl:p-24 2xl:p-32">
            <StatOne :stat="myStat" :detail="myDetail" class="flex" />
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
      myStat: '189',
      myDetail: 'Number of sports events covered',
      headline: 'Eurovision Sport',
      linkTitle: 'Eurovision Song Contest',
      link: '/EN/eurovision-song-contest',
      images: [
        {
          id: 1,
          photo:
            '/GettyImages-453202662.jpg',
        },
        {
          id: 2,
          photo:
            '/2022-08-13-EC2022_BMX_Men_Sebastian-Sternemann.jpg',
        },
      ],
      paragraphArray: [
        'This is the YO! paragraph.',
        'Almost 44 thousand hours of world-class sport were made available to audiences across Europe thanks to deals negotiated by <a href="https://www.ebu.ch/eurovision-sport" target="_blank">Eurovision Sport</a> on behalf of our Members. 2022 highlights included the FIFA World Cup in Qatar, the multi-sport European Championships in Munich, World Athletics Championships, World Aquatics Championships and Tour de France.',
        'We continue to put the promotion of women’s sport at the heart of what we do with the UEFA Women’s EURO reaching record audiences of over 280 million people last year alongside the new Tour de France Femmes race. And we continue that commitment this year, thanks to a new agreement with FIFA, our Members will show more games than ever of the FIFA Women’s World Cup across multiple platforms.',
        'Our sport digital platform continues to develop, allowing us to utilize all the rights we secure and creating a new way for fans to follow all the action. Starting with the newly acquired European Games, we’ll see the multi-sport vertical roll out this summer and we will continue to engage with Members and expand our range of output throughout the year.',
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
      width: calc(50% - 32px)
    }
}

</style>
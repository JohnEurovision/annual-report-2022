<template>
    <div class=" flex flex-col mt-16 lg:mt-0 lg:flex-row lg:ml-16 lg:w-full lg:justify-end">
        <div class="panel-one relative lg:fixed lg:left-16 w-full h-full flex flex-row lg:flex-col lg:max-h-screen overflow-hidden">
          <ImageHalf :image="image" v-for="image in images" :key="image.id"/>
        </div>
        <div class="panel-two bg-white w-full h-full lg:w-1/2 lg:min-h-screen" :style="{ paddingBottom: componentHeight + 'px' }">
          <div class="flex flex-col p-10 sm:p-12 md:p-16 xl:p-24 2xl:p-32">
            <!--<StatCircle :stat="myStat" :detail="myDetail" class="flex" />-->
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
      headline: 'TV Co-Productions & Collaborations',
      linkTitle: 'Radio',
      link: '/EN/radio',
      images: [
        {
          id: 1,
          photo:
            '/Kids Drama 2022_Dad Sam Bith - Every Dad.jpg',
        },
        {
          id: 2,
          photo:
            '/Kids Docu 2022_BBC Alba_Scotland_Chirsty Bella - Weaving Time.jpg',
        },
      ],
      paragraphArray: [
        'Millions of TV viewers have been enjoying the combination of hard work and creativity that go into <a href="https://www.ebu.ch/tv-programme-collaboration" target="_blank">Eurovision co-production formats</a>. Highlights include the series celebrating the people bringing Europe’s wildlife ´Back from the Brink´; a hard-hitting documentary collection, ‘Inside Offside’, examining the social impact of the FIFA World Cup in Qatar; and the return of Eurovision Young Musicians, which saw the gifted young talent competing in Marseilles.', 
        'The past year also marked the extraordinary viewing moments that typify the Vienna Philharmonic’s renowned summer and New Year concerts, broadcast by our Austrian Member ORF, for audiences worldwide.',
        'Meanwhile the Eurovision TV Programme Exchange continues to develop. What started out as an urgent TV content appeal to address programming shortages during the pandemic lockdowns, has evolved into a vibrant annual programming exchange that benefits audiences across Europe.', 
        'Our <a href="https://www.ebu.ch/tv-co-production/eurovision-documentary-development-scheme" target="_blank">Eurovision Documentary Development network</a>, supported by 27 public broadcasters, is gearing up for a range of ambitious documentary projects to answer increasing audience demand while our Pre-Buy Network, allowing EBU Members to pre-buy rights to high-end drama series, means even more value and great content for public service media audiences everywhere.',
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
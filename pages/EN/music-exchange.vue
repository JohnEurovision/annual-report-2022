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
      myStat: "2,800",
      myDetail: "Number of radio concerts shared in Euroradio Music Exchange",
      headline: "Music Exchange",
      linkTitle: "Young Audiences",
      link: "/en/young-audiences",
      images: [
        {
          id: 1,
          photo: "/EJO_cred_Daniel_Koch_20.jpg",
        },
        {
          id: 2,
          photo: "/Priya_Ragu_ESNS22-BartHeemskerk_57.jpg",
        },
      ],
      paragraphArray: [
        "Music brings people together - in remembrance, solidarity, or simple enjoyment.",
        'Our <a href="https://www.ebu.ch/music" target="_blank">Music exchange</a> had real resonance as EBU radio organizations shared concerts in recognition of the one-year anniversary of war in Ukraine. Through our Members’ rich archive, we remembered the late great Nina Simone and Romanian pianist Radu Lupu, among many others. But it was about looking forward too, by supporting up-coming artists through Euroradio’s Jazz Orchestra and Jazz Competition and the <i>Top Young Performers</i> Series.',
        "Our commitment to artist inclusion underscores our ‘3 questions to’ series that included mezzo-soprano Elina Garanča and conductor Herbert Blomstedt. It was a year that saw the debut of our Ukrainian Member, UA:PBC, at <i>Europe’s Biggest Dance Show</i>; the <i>JazzWomenAfrica</i> project with UNESCO for International Jazz Day, and a new creative video approach to communicate the joy of Euroradio Christmas Music Day.",
        "The backbone of this diverse activity is our knowledge exchange. In the past 12 months, we held 15 ‘Music and Radio 60-minute sessions’, featuring topics from sustainability in opera houses to cross-platform content. We also published ‘Production Resources in Classical Music Recordings’ - our first-ever report on how broadcasters organize their teams with 29 organizations sharing their valuable expertise.",
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

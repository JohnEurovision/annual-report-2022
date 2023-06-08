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
      headline: 'Diversity, Equity & Inclusion',
      linkTitle: 'AIDI Initiative',
      link: '/EN/aidi-initiative',
      images: [
        {
          id: 1,
          photo:
            '/diversity-casebook.jpg',
        },
        {
          id: 2,
          photo:
            '/diversity-equity-inclusion.jpg',
        },
      ],
      paragraphArray: [
        'This is the YO! paragraph.',
        'The EBU is committed to promoting diversity, equity and inclusion across its workforce. We’ve published our policy on our <a href="https://www.ebu.ch/about/dei-policy" target="_blank">website</a> highlighting what we are doing to address representation and inclusion at all levels of the organization.',
        'We’d also like to encourage broader representation in our Committees and have published <a href="https://www.ebu.ch/files/live/sites/ebu/files/Initiatives/Diversity_Equity_and_Inclusion/Guidelines_DEI_Representation_Inclusion_EN.pdf" target="_blank">new guidance</a> to support our Members with accelerating change.',
        'Externally, we’re supporting our Members by showcasing best practice across public service media. We’ve added new case studies to our <a href="https://www.ebu.ch/diversity#casebook" target="_blank">Breaking Barriers in Public Service Media</a> report and our Media Intelligence Service have provided new insights into <a href="https://www.ebu.ch/publications/research/members_only/report/gender-equality--psm" target="_blank">Gender Equality in PSM</a> and <a href="https://www.ebu.ch/publications/research/membersonly/report/diversity-and-public-service-media" target="_blank">Diversity in PSM</a>.',
        'Our <a href="https://www.ebu.ch/groups/diversity-equity-inclusion" target="_blank">Diversity Equity & Inclusion Steering Group</a> and <a href="https://www.ebu.ch/groups/gender-equality" target="_blank">Gender Equality Steering Group</a> continue to meet throughout the year to address challenges.  Meetings of both groups were hosted by RTBF in Brussels last October.',
        'We’re also continuing to make good progress on our commitment to the BBC’s 50:50 Equality Project by increasing the representation of female panellists at EBU events. In the year to end of March 2023, our Media Department reached parity with 49% male and 51% female panellists; while Technology and Innovation pursued its commitment to gender representation and reached an average total of 22% female speakers.',
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
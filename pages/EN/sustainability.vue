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
      headline: 'Sustainability',
      linkTitle: 'Digital Transformation',
      link: '/EN/digital-transformation',
      images: [
        {
          id: 1,
          photo:
            '/leaf-circle.jpg',
        },
        {
          id: 2,
          photo:
            '/ESC-2.png',
        },
      ],
      paragraphArray: [
        'We’ve continued to facilitate the exchange of knowledge and best practice both between Member organizations and between relevant expert communities organized under the EBU’s umbrella.',
        'We captured and published some of the results as reports on the topic over the past 12 months, including ‘<a href="https://www.ebu.ch/guides/open/report/news-report-2023-climate-journalism-that-works" target="_blank">Climate Journalism That Works – Between Knowledge and Impact</a>’, ‘<a href="https://www.ebu.ch/guides/loginonly/environmental-sustainability-at-public-service-media-corporate-investments" target="_blank">Environmental Sustainability at Public Service Media: Corporate Investments</a>’, ‘<a href="https://tech.ebu.ch/publications/r170" target="_blank">Sustainability Requirements for Procurement of Cloud Services</a>’, and ‘<a href="https://www.ebu.ch/research/membersonly/report/sustainability-an-overview-of-public-service-media-involvement" target="_blank">Sustainability: An Outline of Public Service Media Involvement</a>’.',
        'The <a href="https://tech.ebu.ch/groups/sustainability" target="_blank">EBU working group on Sustainability</a> has focused on developing best practice for sustainability reporting in accordance with European Union and UN TCFD programme guidelines. It also organized a number of events engaging with the wider industry, such as joint workshops with the EBU AI and Data Initiative, and the <a href="https://tech.ebu.ch/events/sustainability2023" target="_blank">Sustainability Summit 2023</a>.',
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
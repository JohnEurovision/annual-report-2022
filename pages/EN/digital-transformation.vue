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
      myStat: "",
      myDetail: "",
      headline: "Digital Transformation",
      linkTitle: "EBU Academy",
      link: "/en/ebu-academy",
      images: [
        {
          id: 1,
          photo:
            "/Digital-Transformation-2-Media-Summit - EBU - Robert Gardziński.jpg",
        },
        {
          id: 2,
          photo: "/Digital-Transformation.jpg",
        },
      ],
      paragraphArray: [
        'Rapid, effective transformation isn’t optional in an era when it’s essential to stay relevant for existing and future audiences. The <a href="https://www.ebu.ch/digital-transformation" target="_blank">EBU Digital Unit</a> provides bespoke transformation and strategic services that, while creating dynamic environments, are also tailored to each organization’s unique structure and challenges.',
        "From deep dives into leadership and change management (our ‘A Day With’ sessions) to Transformation Peer Reviews that focus on strategy and transformation opportunities and Agile Reviews which are problem-based interventions for specific challenges, we get under the skin of a Member organization and show how being fit for the future can and should be a present-day priority.",
        'Complementing this activity is the <a href="https://www.ebu.ch/groups/future-of-work-group" target="_blank">Future of Work Group</a> which was borne out of the pandemic and the realization that how we work would never be the same again, and the Organizational Design Expert Group, exploring structural and organization design trends within EBU Members. A full report from the latter, featuring extensive case studies, is planned for late 2023.',
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

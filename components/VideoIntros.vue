<template>
    <div class="w-full flex min-h-screen flex-col items-center p-10 py-20 sm:p-16 md:p-14 md:py-20 xl:p-20 xl:py-24 2xl:p-24 2xl:py-32 bg-blue bg-cover">
        <!--Intro-->
        <div class="flex flex-col items-center pb-5 lg:pb-10 xl:pb-16 2xl:pb-20 md:mx-32 lg:mx-44 xl:mx-52 2xl:mx-72">
          <h2 class="text-white text-center uppercase tracking-wider text-xl xl:text-2xl leading-1 xl:leading-tight pb-2">{{ introsheading }}</h2>
          <h1 class="uppercase text-center text-orange font-black text-4xl lg:text-5xl  xl:text-6xl pb-4">{{ introstitle }}</h1>
          <p class="text-white text-center text-xl xl:text-2xl leading-1 xl:leading-tight tracking-wide">{{ introSubtitle }}</p>
        </div>
        <!--Videos-->
        <div class="video-bg bg-orange p-6 md:p-6 xl:p-10 flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-8 xl:gap-12">
          <div class="flex flex-col gap-3" >
            <div class="relative">
              <video :src="video1Url" ref="videoRefOne"></video>
              <button v-if="!showControlsOne" @click="playVideoOne" class="play-button">
                <svg class="w-16 h-16" viewBox="0 0 131 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path class="inner-circle" d="M65 21C40.1488 21 20 41.1488 20 66C20 90.8512 40.1488 111 65 111C89.8512 111 110 90.8512 110 66C110 41.1488 89.8512 21 65 21Z" fill="white"></path>
                      <circle class="outer_circle" cx="65.5" cy="65.5" r="64" stroke="white"></circle>
                      <path class="play" fill-rule="evenodd" clip-rule="evenodd" d="M60 76V57L77 66.7774L60 76Z" fill="#ff7800"></path>
                  </svg>
              </button>   
            </div>
            <div>
              <h3 class="text-white text-lg xl:text-xl leading-snug font-semibold py-2">{{ videoCaption }}</h3>
            </div>
          </div>

          <div class="flex flex-col gap-3" >
            <div class="relative">
              <video :src="video2Url" ref="videoRefTwo"></video>
              <button v-if="!showControlsTwo" @click="playVideoTwo" class="play-button">
                <svg class="w-16 h-16" viewBox="0 0 131 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path class="inner-circle" d="M65 21C40.1488 21 20 41.1488 20 66C20 90.8512 40.1488 111 65 111C89.8512 111 110 90.8512 110 66C110 41.1488 89.8512 21 65 21Z" fill="white"></path>
                      <circle class="outer_circle" cx="65.5" cy="65.5" r="64" stroke="white"></circle>
                      <path class="play" fill-rule="evenodd" clip-rule="evenodd" d="M60 76V57L77 66.7774L60 76Z" fill="#ff7800"></path>
                  </svg>
              </button>   
            </div>
            <div>
              <h3 class="text-white text-lg xl:text-xl leading-snug font-semibold py-2">{{ videoCaptionTwo }}</h3>
            </div>
          </div>

        </div>
    </div>
</template>

<script>

export default {
  props: {
    introsheading: {
      type: String,
      required: true,
    },
    introstitle: {
      type: String,
      required: true,
    },
    introSubtitle: {
      type: String,
      required: true,
    },
    videoCaption: {
      type: String,
      required: true,
    },
    videoCaptionTwo: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      video1Url: '/SayHiIntlVersion2022.mp4',
      video2Url: '/pexels-evgenia-kirpichnikova-2873484-640x360-25fps.mp4',
      showControlsOne: false,
      showControlsTwo: false,
      componentHeight: 0, // New property to store component height
    };
  },
  methods: {
    updateComponentHeight(height) {
      this.componentHeight = height;
    },
    playVideoOne() {
      const videoElement = this.$refs.videoRefOne;
      if (videoElement) {
        videoElement.play();
        videoElement.controls = true;
        this.showControlsOne = true;
      }
    },
    playVideoTwo() {
      const videoElement = this.$refs.videoRefTwo;
      if (videoElement) {
        videoElement.play();
        videoElement.controls = true;
        this.showControlsTwo = true;
      }
    }
  },
};

</script>

<style scoped>

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  }

.outer_circle {
  stroke-width: 3;
  stroke-dasharray: 410; 
   stroke-dashoffset: 0;
  stroke-linecap: square;
  transition: all .4s ease-out;
}

.play-button:hover .outer_circle {
stroke-dashoffset:410;
  transition: stroke .7s .4s ease-out, stroke-dashoffset .4s ease-out
}

.play-button:hover 
.inner-circle {
  fill: #ff7800;
  transition:fill .4s .3s ease-out;
}

.play-button:hover
.play{
    fill: white;
  transition:fill .4s .3s ease-out;
}

.video-bg {
  background: rgb(27,64,152);
background: -moz-linear-gradient(90deg, rgba(27,64,152,1) 0%, rgba(137,86,109,1) 33%, rgba(255,120,0,1) 100%);
background: -webkit-linear-gradient(90deg, rgba(27,64,152,1) 0%, rgba(137,86,109,1) 33%, rgba(255,120,0,1) 100%);
background: linear-gradient(90deg, rgba(27,64,152,1) 0%, rgba(137,86,109,1) 33%, rgba(255,120,0,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1b4098",endColorstr="#ff7800",GradientType=1);
}

</style>
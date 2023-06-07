<template>
    <div class="image-half w-full lg:w-full">
        <div class="video-container">
            <video :src="video" ref="videoRef"></video>
            <button v-if="!showControls" @click="playVideo" class="play-button">
              <svg width="131" height="131" viewBox="0 0 131 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="inner-circle" d="M65 21C40.1488 21 20 41.1488 20 66C20 90.8512 40.1488 111 65 111C89.8512 111 110 90.8512 110 66C110 41.1488 89.8512 21 65 21Z" fill="white"></path>
                    <circle class="outer_circle" cx="65.5" cy="65.5" r="64" stroke="white"></circle>
                    <path class="play" fill-rule="evenodd" clip-rule="evenodd" d="M60 76V57L77 66.7774L60 76Z" fill="#ff7800"></path>
                </svg>
            </button>       
        </div>
    </div>
</template>

<script>
  export default {
    props: {
    video: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      showControls: false
    };
  },
  methods: {
    playVideo() {
      const videoElement = this.$refs.videoRef;
      if (videoElement) {
        videoElement.play();
        videoElement.controls = true;
        this.showControls = true;
      }
    }
  }
}
</script>

<style scoped>
.image-half {
    height: 50vh;
}

.video-container {
  position: relative;
  width: 100%;
  height: 50vh;
  padding-bottom: 56.25%; /* 16:9 aspect ratio (adjust as needed) */
  background: #000;
}

.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

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

@media screen and (max-width: 1023px) {
    .image-half, .video-container {
        height: 100%;
    }
}
</style>
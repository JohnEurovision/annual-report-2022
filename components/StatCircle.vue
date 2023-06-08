<template>
    <time>
    <div class="spacer"></div>
    <div class="outer-container">
        <div class="inner-container">
          <h1 class=" text-white font-black text-7xl mb-3">{{ stat }}</h1>
        <p class=" text-white">{{ detail }}</p>
        </div>
    </div>
</time>
</template>

<script>

export default {
  props: {
    stat: {
      type: String,
      required: true
    },
    detail: {
      type: String,
      required: true
    }
  }
}

</script>

<style scoped>



  time {
    display: inline-block;
    position: relative;
    width: 70%;
    }

    .spacer {
        position: relative;
        padding-top: 100%;
    }
    .outer-container {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 100%;
        box-sizing: border-box;
        text-align: center;
        background: rgb(247,108,65);
background: -moz-linear-gradient(90deg, rgba(247,108,65,1) 0%, rgba(27,64,152,1) 100%);
background: -webkit-linear-gradient(90deg, rgba(247,108,65,1) 0%, rgba(27,64,152,1) 100%);
background: linear-gradient(90deg, rgba(247,108,65,1) 0%, rgba(27,64,152,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f76c41",endColorstr="#1b4098",GradientType=1);
    }
    .outer-container:before {
            content: '';
            display: inline-block;
            height: 100%;
            vertical-align: middle;
            margin-right: -0.25em;
        }
    .inner-container {
        display: inline-block;
      vertical-align: middle;
      margin-right: -2%;
      margin-top: 4%;
    }

@media screen and (min-width: 1023px) {
    /*.stat-one { 
        width: fit-content;
        height: fit-content;   
        top: 50%;
        left: 50%;
        margin-left: -6rem;
        margin-top: -6rem
    }*/
}
</style>
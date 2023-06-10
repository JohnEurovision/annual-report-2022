<template>
    <!-- About btn -->
    <div class=" w-full flex items-center justify-end lg:justify-center lg:order-3 lg:border-t lg:border-t-white lg:border-opacity-25">
        <button
            data-message="Click for information about this app"    
            @click="infoPanel = !infoPanel"
            class="about p-5 lg:py-5 h-auto"
            >
                <svg class="border-2 border-white bg-none rounded-full" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.125 22.6774C12.5063 22.6774 12 23.2 12 23.8387C12 24.4774 12.5063 25 13.125 25H19.875C20.4938 25 21 24.4774 21 23.8387C21 23.2 20.4938 22.6774 19.875 22.6774H17.625V14.5484C17.625 13.9097 17.1188 13.3871 16.5 13.3871H13.6875C13.0688 13.3871 12.5625 13.9097 12.5625 14.5484C12.5625 15.1871 13.0688 15.7097 13.6875 15.7097H15.375V22.6774H13.125ZM16.5 10.4839C16.9476 10.4839 17.3768 10.3003 17.6932 9.97367C18.0097 9.64699 18.1875 9.20393 18.1875 8.74194C18.1875 8.27995 18.0097 7.83688 17.6932 7.5102C17.3768 7.18352 16.9476 7 16.5 7C16.0524 7 15.6232 7.18352 15.3068 7.5102C14.9903 7.83688 14.8125 8.27995 14.8125 8.74194C14.8125 9.20393 14.9903 9.64699 15.3068 9.97367C15.6232 10.3003 16.0524 10.4839 16.5 10.4839Z" fill="white"/>
                    <path d="M13.125 22.6774C12.5063 22.6774 12 23.2 12 23.8387C12 24.4774 12.5063 25 13.125 25H19.875C20.4938 25 21 24.4774 21 23.8387C21 23.2 20.4938 22.6774 19.875 22.6774H17.625V14.5484C17.625 13.9097 17.1188 13.3871 16.5 13.3871H13.6875C13.0688 13.3871 12.5625 13.9097 12.5625 14.5484C12.5625 15.1871 13.0688 15.7097 13.6875 15.7097H15.375V22.6774H13.125ZM16.5 10.4839C16.9476 10.4839 17.3768 10.3003 17.6932 9.97367C18.0097 9.64699 18.1875 9.20393 18.1875 8.74194C18.1875 8.27995 18.0097 7.83688 17.6932 7.5102C17.3768 7.18352 16.9476 7 16.5 7C16.0524 7 15.6232 7.18352 15.3068 7.5102C14.9903 7.83688 14.8125 8.27995 14.8125 8.74194C14.8125 9.20393 14.9903 9.64699 15.3068 9.97367C15.6232 10.3003 16.0524 10.4839 16.5 10.4839Z" fill="white"/>
                </svg>
        </button>
    </div>
    <TransitionRoot class=" fixed z-30 top-0 left-0 w-screen h-full overflow-auto lg:left-16 bg-blue bg-blue-static bg-cover"
        :show="!infoPanel"
        enter="transition-opacity ease-linear duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
    >
    <div class="bg-blue w-full h-full lg:w-1/3">       
        Slide out panel with all the footer info, downloads etc.
        <!-- Close btn -->
        <div class="w-16 h-16 flex flex-row justify-center lg:order-2 lg:fixed lg:right-10 lg:top-10">
            <button
                data-message="Click to close menu"  
                @click="infoPanel = !infoPanel"  
                id=""
                class="about h-auto w-auto"
            >
                <svg class="border-2 border-white bg-none rounded-full w-9 lg:w-20" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="11.3134" y1="36.3136" x2="35.355" y2="12.272" stroke="white" stroke-width="2"/>
                    <line x1="12.7276" y1="12.2721" x2="36.7692" y2="36.3138" stroke="white" stroke-width="2"/>
                </svg>
            </button>
        </div>
    </div>
    </TransitionRoot>
</template>

<script setup>

import { ref } from 'vue'
  import { TransitionRoot } from '@headlessui/vue'

  const infoPanel = ref(true)
    
</script>

<style>
</style>
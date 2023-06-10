<template>
  <div class="flex flex-col lg:flex-row font-ProximaNova bg-blue">
    <div class="bg-blue">
      <header
        class="fixed z-30 w-full h-16 lg:w-16 lg:min-h-screen bg-blue flex flex-col justify-center lg:flex-row lg:content-between border-b border-b-white border-opacity-50 lg:border-b-0 lg:border-r lg:border-r-white lg:border-opacity-50"
      >
        <!-- Nav Start -->
        <nav
          class="flex flex-row h-full justify-items-stretch lg:w-16 lg:flex-col lg:justify-between"
        >
          <!-- Home -->
          <div
            class="w-auto h-auto flex items-center justify-end lg:justify-center lg:border-b lg:border-b-white lg:border-opacity-25"
          >
            <NuxtLink data-message="Home" class="p-4 lg:py-5" href="/en/">
              <div class="">
                <svg
                  width="44"
                  height="25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.476 1.046C2.012 3.533 0 7.75 0 12.4v.108c0 4.649 2.012 8.865 5.476 11.352l.335.216V.83l-.335.216ZM35.914.112 35.698 0v5.696a9.544 9.544 0 0 1 2.696 6.701v.112c0 2.568-.97 4.914-2.696 6.7v5.697l.216-.112C40.874 22.784 44 17.981 44 12.397v-.112C44 6.813 40.873 2.122 35.914.112ZM32.377 6.254c-1.456-2.457-3.583-4.244-6.27-5.36C24.538.334 22.858 0 21.178 0c-2.687 0-5.263.782-7.39 2.122-3.472 2.234-5.487 6.143-5.487 10.275v.112c0 4.244 2.015 8.041 5.487 10.275 2.127 1.34 4.59 2.122 7.278 2.122 1.792 0 3.472-.335 4.927-.894 2.688-1.005 4.816-2.904 6.271-5.36l.112-12.398ZM21.067 5.25c1.792 0 3.584.67 4.816 1.899 1.455 1.34 2.239 3.35 2.239 5.36v.112c0 2.122-.784 4.021-2.24 5.361-1.231 1.229-2.911 1.787-4.703 1.787-4.03 0-7.054-3.127-7.054-7.26v-.111c0-4.02 3.023-7.148 6.942-7.148Z"
                    fill="#fff"
                  />
                </svg>
              </div>
            </NuxtLink>
          </div>

          <InfoPanel />

          <!-- Menu btn -->
          <div class="flex w-auto pr-5 lg:pr-0 lg:w-16 lg:h-full lg:order-2">
            <button
              data-message="Click to open the menu"
              @click="isShowing = !isShowing"
              class="lg:h-full lg:w-16"
            >
              <svg
                class="flex lg:hidden"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="6" x2="32" y2="6" stroke="white" stroke-width="4" />
                <line y1="16" x2="32" y2="16" stroke="white" stroke-width="4" />
                <line y1="26" x2="32" y2="26" stroke="white" stroke-width="4" />
              </svg>
              <h4
                class="uppercase hidden lg:flex lg:-rotate-90 text-white tracking-widest"
              >
                Sections
              </h4>
            </button>
          </div>
        </nav>

        <TransitionRoot
          class="fixed z-40 top-0 left-0 w-screen h-full overflow-auto lg:left-16 bg-blue bg-blue-static bg-cover"
          :show="!isShowing"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="flex flex-col items-end lg:flex-row lg:items-start">
            <!-- Close btn -->
            <div
              class="w-16 h-16 flex flex-row justify-center lg:order-2 lg:fixed lg:right-10 lg:top-10"
            >
              <button
                data-message="Click to close menu"
                @click="isShowing = !isShowing"
                id=""
                class="about h-auto w-auto"
              >
                <svg
                  class="border-2 border-white bg-none rounded-full w-9 lg:w-20"
                  viewBox="0 0 49 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="11.3134"
                    y1="36.3136"
                    x2="35.355"
                    y2="12.272"
                    stroke="white"
                    stroke-width="2"
                  />
                  <line
                    x1="12.7276"
                    y1="12.2721"
                    x2="36.7692"
                    y2="36.3138"
                    stroke="white"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </div>

            <div
              class="side-menu p-10 lg:p-20 w-full lg:w-auto h-full columns-1 lg:columns-2 gap-3"
            >
              <div class="mb-6">
                <NuxtLink class=" " to="/en/" @click="isShowing = !isShowing">
                  <h3
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-black uppercase text-2xl pb-4 text-orange tracking-wide"
                  >
                    Introduction
                  </h3>
                </NuxtLink>

                <NuxtLink to="/en/#welcome" @click="isShowing = !isShowing">
                  <p
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white uppercase text-base leading-tight tracking-wider pb-3"
                  >
                    President´s welcome message
                  </p>
                </NuxtLink>
                <NuxtLink
                  to="/en/#director-general"
                  @click="isShowing = !isShowing"
                >
                  <p
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white uppercase text-base leading-tight tracking-wider pb-3"
                  >
                    Director General Welcome Message
                  </p>
                </NuxtLink>
              </div>

              <div class="mb-6">
                <NuxtLink
                  class=" "
                  to="/en/#our-members"
                  @click="isShowing = !isShowing"
                >
                  <h3
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-black uppercase text-2xl pb-4 text-orange tracking-wide"
                  >
                    Our members
                  </h3>
                </NuxtLink>
              </div>

              <div class="mb-6 lg:break-after-column">
                <NuxtLink
                  class=" "
                  to="/en/#our-mission"
                  @click="isShowing = !isShowing"
                >
                  <h3
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-black uppercase text-2xl pb-4 text-orange tracking-wide"
                  >
                    Our mission
                  </h3>
                </NuxtLink>

                <NuxtLink
                  class=" "
                  to="/en/news-exchange"
                  @click="isShowing = !isShowing"
                >
                  <p
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white uppercase text-base leading-tight tracking-wider pb-3"
                  >
                    News Exchange
                  </p>
                </NuxtLink>

                <NuxtLink
                  class=" "
                  to="/en/news-events"
                  @click="isShowing = !isShowing"
                >
                  <p
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white uppercase text-base leading-tight tracking-wider pb-3"
                  >
                    News Events
                  </p>
                </NuxtLink>

                <NuxtLink
                  class=" "
                  to="/en/tv-co-productions-and-collaborations"
                  @click="isShowing = !isShowing"
                >
                  <p
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white uppercase text-base leading-tight tracking-wider pb-3"
                  >
                    TV Co-Productions & Collaborations
                  </p>
                </NuxtLink>

                <NuxtLink
                  class=" "
                  to="/en/radio"
                  @click="isShowing = !isShowing"
                >
                  <p
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white uppercase text-base leading-tight tracking-wider pb-3"
                  >
                    Radio
                  </p>
                </NuxtLink>

                <NuxtLink
                  class=" "
                  to="/en/music-exchange"
                  @click="isShowing = !isShowing"
                >
                  <p
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white uppercase text-base leading-tight tracking-wider pb-3"
                  >
                    Music Exchange
                  </p>
                </NuxtLink>

                <NuxtLink
                  class=" "
                  to="/en/young-audiences"
                  @click="isShowing = !isShowing"
                >
                  <p
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white uppercase text-base leading-tight tracking-wider pb-3"
                  >
                    Young Audiences
                  </p>
                </NuxtLink>

                <NuxtLink
                  class=" "
                  to="/en/eurovision-sport"
                  @click="isShowing = !isShowing"
                >
                  <p
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white uppercase text-base leading-tight tracking-wider pb-3"
                  >
                    Eurovision Sport
                  </p>
                </NuxtLink>

                <NuxtLink
                  class=" "
                  to="/en/eurovision-song-contest"
                  @click="isShowing = !isShowing"
                >
                  <p
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white uppercase text-base leading-tight tracking-wider pb-3"
                  >
                    Eurovision Song Contest
                  </p>
                </NuxtLink>

                <NuxtLink
                  class=" "
                  to="/en/diversity-equity-and-inclusion"
                  @click="isShowing = !isShowing"
                >
                  <p
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white uppercase text-base leading-tight tracking-wider pb-3"
                  >
                    Diversity, Equity and Inclusion
                  </p>
                </NuxtLink>
              </div>

              <div class="mb-6">
                <NuxtLink
                  class=" "
                  to="/en/enabling-our-members"
                  @click="isShowing = !isShowing"
                >
                  <h3
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-black uppercase text-2xl pb-4 text-orange tracking-wide"
                  >
                    Enabling our members
                  </h3>
                </NuxtLink>

                <NuxtLink
                  class=" "
                  to="/en/aidi-initiative"
                  @click="isShowing = !isShowing"
                >
                  <p
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white uppercase text-base leading-tight tracking-wider pb-3"
                  >
                    AIDI Initiative
                  </p>
                </NuxtLink>

                <NuxtLink
                  class=" "
                  to="/en/sustainability"
                  @click="isShowing = !isShowing"
                >
                  <p
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white uppercase text-base leading-tight tracking-wider pb-3"
                  >
                    Sustainability
                  </p>
                </NuxtLink>

                <NuxtLink
                  class=" "
                  to="/en/digital-transformation"
                  @click="isShowing = !isShowing"
                >
                  <p
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white uppercase text-base leading-tight tracking-wider pb-3"
                  >
                    Digital Transformation
                  </p>
                </NuxtLink>

                <NuxtLink
                  class=" "
                  to="/en/ebu-academy"
                  @click="isShowing = !isShowing"
                >
                  <p
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white uppercase text-base leading-tight tracking-wider pb-3"
                  >
                    EBU Academy
                  </p>
                </NuxtLink>

                <NuxtLink
                  class=" "
                  to="/en/media-intelligence-service"
                  @click="isShowing = !isShowing"
                >
                  <p
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white uppercase text-base leading-tight tracking-wider pb-3"
                  >
                    Media Intelligence Service
                  </p>
                </NuxtLink>

                <NuxtLink
                  class=" "
                  to="/en/legal-and-policy"
                  @click="isShowing = !isShowing"
                >
                  <p
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white uppercase text-base leading-tight tracking-wider pb-3"
                  >
                    Legal & Policy
                  </p>
                </NuxtLink>

                <NuxtLink
                  class=" "
                  to="/en/national-campaigning"
                  @click="isShowing = !isShowing"
                >
                  <p
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white uppercase text-base leading-tight tracking-wider pb-3"
                  >
                    National Campaigning
                  </p>
                </NuxtLink>

                <NuxtLink
                  class=" "
                  to="/en/international-partnerships"
                  @click="isShowing = !isShowing"
                >
                  <p
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white uppercase text-base leading-tight tracking-wider pb-3"
                  >
                    International partnerships
                  </p>
                </NuxtLink>

                <NuxtLink
                  class=" "
                  to="/en/relationships-with-the-platforms"
                  @click="isShowing = !isShowing"
                >
                  <p
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white uppercase text-base leading-tight tracking-wider pb-3"
                  >
                    Relationships with the platforms
                  </p>
                </NuxtLink>

                <NuxtLink
                  class=" "
                  to="/en/world-radiocommunication-conference-2023"
                  @click="isShowing = !isShowing"
                >
                  <p
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white uppercase text-base leading-tight tracking-wider pb-3"
                  >
                    ITU's World Radiocommunication Conference 2023
                  </p>
                </NuxtLink>
              </div>

              <div class="mb-6">
                <NuxtLink
                  class=" "
                  to="/en/supporting-our-members"
                  @click="isShowing = !isShowing"
                >
                  <h3
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-black uppercase text-2xl pb-4 text-orange tracking-wide"
                  >
                    Supporting our members
                  </h3>
                </NuxtLink>
              </div>

              <div class="mb-6">
                <h3
                  class="font-black uppercase text-2xl pb-4 text-orange tracking-wide"
                >
                  Corporate & Financial
                </h3>

                <NuxtLink class=" " to="/" @click="isShowing = !isShowing">
                  <p
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white uppercase text-base leading-tight tracking-wider pb-3"
                  >
                    Financial Reporting
                  </p>
                </NuxtLink>

                <NuxtLink class=" " to="/" @click="isShowing = !isShowing">
                  <p
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white uppercase text-base leading-tight tracking-wider pb-3"
                  >
                    EBU Staff
                  </p>
                </NuxtLink>
              </div>

              <div class="mb-6">
                <NuxtLink class=" " to="/" @click="isShowing = !isShowing">
                  <h3
                    class="transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-black uppercase text-2xl pb-4 text-orange tracking-wide"
                  >
                    Download hub
                  </h3>
                </NuxtLink>
              </div>
            </div>
          </div>
        </TransitionRoot>
        <!-- Nav End -->
      </header>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TransitionRoot } from "@headlessui/vue";

const isShowing = ref(true);
</script>

<style scoped>
.content {
  width: 100%;
  @media (min-width: 1024px) {
    width: calc(100% - 64px);
  }
}

.tracking-widest {
  letter-spacing: 0.2em;
}
</style>

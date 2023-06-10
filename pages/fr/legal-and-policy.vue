<template>
  <div class="flex flex-col lg:flex-row w-full mt-16 lg:mt-0 lg:ml-16">
    <div class="flex flex-col lg:top-0 lg:flex-row w-full h-full">
      <div
        class="panel-one order-1 lg:order-2 lg:sticky lg:top-0 flex flex-col lg:h-screen bg-blue-static bg-cover"
      >
        <div
          class="quote p-10 sm:p-16 md:p-14 xl:p-20 2xl:p-24 h-1/6 w-full lg:h-full flex flex-col justify-center"
        >
          <div class="mb-10">
            <div class="quotemark">
              <svg
                class="w-12 mb-5 lg:w-14 lg:mb-8 2xl:w-20 2xl:mb-12"
                viewBox="0 0 46 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#a)">
                  <path
                    d="M0 19.068C0 5.446 7.416.372 19.296 0l1.423 6.86c-6.37.75-9.502 3.756-9.223 8.83h7.032v18.317H0V19.068Zm25.19 0C25.19 5.446 32.697.372 44.48 0L46 6.86c-6.37.75-9.501 3.756-9.313 8.83h7.032v18.317H25.183V19.075l.008-.007Z"
                    fill="#FF7800"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h46v34H0z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p
              class="quote text-white mt-6 mb-2 leading-7 md:leading-8 xl:leading-10 2xl:leading-tight text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl"
            >
              Le secteur audiovisuel, à l’instar de la réglementation des
              médias, traverse une période sans précédent. Principal défi pour
              nous : suivre le rythme imposé par ces nombreux bouleversements !
            </p>
            <div class="quotemark rotate-180">
              <svg
                class="w-6 lg:w-8 lg:mt-4 2xl:w-12 2xl:mt-8"
                viewBox="0 0 46 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#a)">
                  <path
                    d="M0 19.068C0 5.446 7.416.372 19.296 0l1.423 6.86c-6.37.75-9.502 3.756-9.223 8.83h7.032v18.317H0V19.068Zm25.19 0C25.19 5.446 32.697.372 44.48 0L46 6.86c-6.37.75-9.501 3.756-9.313 8.83h7.032v18.317H25.183V19.075l.008-.007Z"
                    fill="#FF7800"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h46v34H0z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div
            class="author-title flex flex-row gap-4 xl:gap-8 items-center lg:flex-col lg:items-start xl:flex-row xl:items-center"
          >
            <div class="order-2">
              <p
                class="author text-white uppercase font-bold pb-0 tracking-wide text-lg 2xl:text-2xl sm:mb-1 xl:mb-2 leading-tight"
              >
                Richard Burnley
              </p>
              <p
                class="title text-white text-base pb-0 xl:text-lg leading-1 xl:leading-tight tracking-wide"
              >
                Directeur du département Affaires juridiques et publiques
              </p>
            </div>
            <div
              class="order-1 flex-none w-28 h-28 lg:w-28 lg:h-28 2xl:w-36 2xl:h-36"
            >
              <img
                class="rounded-full w-full h-full object-cover"
                src="/SF_EBU_Burnley_005.jpg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="panel-two bg-white order-2 lg:order-2 w-full h-full lg:min-h-screen"
        :style="{ paddingBottom: componentHeight + 'px' }"
      >
        <div class="flex flex-col p-10 sm:p-12 md:p-16 xl:p-24 2xl:p-32">
          <h2
            class="font-black uppercase text-orange text-3xl leading-7 my-8 lg:text-4xl lg:leading-9 lg:mt-10 lg:mb-10 2xl:text-6xl 2xl:mb-14"
          >
            ZZZ - NEEDS TITLE
          </h2>
          <p class="pb-5 lg:pb-7 text-base md:text-lg lg:text-xl">
            Le secteur audiovisuel, à l’instar de la réglementation des médias,
            traverse une période sans précédent. Principal défi pour nous :
            suivre le rythme imposé par ces nombreux bouleversements !
          </p>
          <p class="pb-5 lg:pb-7 text-base md:text-lg lg:text-xl">
            La législation européenne sur la liberté des médias présente en
            effet une grande importance pour le secteur audiovisuel européen.
            Nos équipes ont donc travaillé d’arrache-pied, à Genève et à
            Bruxelles, pour défendre au mieux les intérêts des médias de service
            public. Nous avons organisé des manifestations à haut niveau, nous
            avons resserré nos liens avec les responsables de l’UE et nous avons
            produit une vidéo expliquant les modifications arbitraires que
            peuvent subir les contenus médiatiques de la part des géants de la
            tech. Nous continuerons à prendre une part active à ce débat, qui se
            poursuit à l’heure actuelle.
          </p>
          <p class="pb-5 lg:pb-7 text-base md:text-lg lg:text-xl">
            En ce qui concerne la réglementation des plateformes, les
            législations sur les services numériques et sur les marchés
            numériques ont été parachevées. Nous nous attachons donc maintenant
            à bien cerner leurs tenants et aboutissants, en préparant pour cela
            des ateliers pratiques et des manuels.
          </p>
          <p class="pb-5 lg:pb-7 text-base md:text-lg lg:text-xl">
            Dans le même temps, nous menons un travail de sensibilisation très
            actif concernant le spectre UHF.
          </p>
          <p class="pb-5 lg:pb-7 text-base md:text-lg lg:text-xl">
            Ce sont là autant d’axes de travail importants pour lesquels nous
            avons intensifié nos efforts de communication et organisé de
            nombreux événements à Bruxelles, afin que les MSP restent au premier
            plan. Nous avons par exemple organisé des projections de créations
            européennes récentes et des débats sur la sécurité des journalistes.
          </p>
          <p class="pb-5 lg:pb-7 text-base md:text-lg lg:text-xl">
            Nous avons aussi pris la parole à de multiples reprises, au nom des
            MSP, sur des sujets allant de la liberté des médias au déploiement
            technique de la législation sur les marchés numériques. Et nous
            avons publié 13 prises de position, dont des déclarations communes
            avec certains de nos partenaires.
          </p>
          <p class="pb-5 lg:pb-7 text-base md:text-lg lg:text-xl">
            À l’échelle nationale, nous avons pris part à des discussions
            importantes sur le financement, la mission ou la gouvernance des
            MSP, les aides d’État ou encore les nouvelles législations locales
            sur les médias.
          </p>
          <p class="pb-5 lg:pb-7 text-base md:text-lg lg:text-xl">
            Nous traversons donc une période passionnante, mais aussi critique,
            pour la réglementation des médias en Europe. Je suis extrêmement
            fier du travail remarquable que mon équipe a accompli et des efforts
            qu’elle continuera à déployer dans ce contexte. Nous invitons nos
            Membres à nous soutenir, car c’est uniquement avec leur appui que
            nous pourrons assurer un avenir prospère aux médias européens de
            service public.
          </p>

          <p class="font-bold pb-0 md:text-lg lg:text-xl">Richard Burnley</p>
          <p class="pb-5 lg:pb-7 font-normal md:text-lg lg:text-xl">
            Director of Legal & Policy
          </p>
        </div>
        <NextPageFR
          :title="linkTitle"
          :link="link"
          @componentHeight="updateComponentHeight"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myStat: "",
      myDetail: "",
      headline: "",
      linkTitle: "Campagnes nationales",
      link: "/fr/national-campaigning",
      images: [
        {
          id: 1,
          photo: "",
        },
        {
          id: 2,
          photo: "",
        },
      ],
      paragraphArray: [""],
      componentHeight: 0, // New property to store component height
    };
  },
  methods: {
    updateComponentHeight(height) {
      this.componentHeight = height;
    },
  },
};

definePageMeta({
  layout: "french",
});
</script>

<style scoped>
.panel-one {
  @media (min-width: 1024px) {
    min-width: 50%;
    max-width: 50%;
  }
}

.panel-two {
  background-color: #fff;
  @media (min-width: 1024px) {
    min-width: 50%;
    max-width: 50%;
  }
}
</style>

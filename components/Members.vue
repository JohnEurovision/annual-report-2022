<template>
  <div class="members-container">
    <div
      class="overflow-visible relative flex flex-col lg:flex-row w-full py-10 sm:py-16 md:py-14 xl:py-20 2xl:py-24 bg-light-static bg-cover"
    >
      <!--PANEL ONE-->
      <div
        class="relative flex-1 p-10 sm:p-16 md:p-14 xl:p-20 2xl:p-24 w-full lg:h-full flex flex-col justify-center z-10"
      >
        <div class="">
          <p
            class="text-blue text-xl xl:text-2xl leading-1 xl:leading-tight tracking-wide pb-10"
          >
            The European Broadcasting Union (EBU) is the world’s foremost
            alliance of public service media.
          </p>
          <p
            class="uppercase text-blue font-black text-4xl lg:text-5xl xl:text-6xl pb-10"
          >
            We have <span class="text-orange">112 Member organizations</span> in
            56 countries in Europe and beyond
          </p>
          <!--<div class="quotemark rotate-180">
                          <svg class="w-6 lg:w-8 lg:mt-4 2xl:w-12 2xl:mt-8" viewBox="0 0 46 34" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M0 19.068C0 5.446 7.416.372 19.296 0l1.423 6.86c-6.37.75-9.502 3.756-9.223 8.83h7.032v18.317H0V19.068Zm25.19 0C25.19 5.446 32.697.372 44.48 0L46 6.86c-6.37.75-9.501 3.756-9.313 8.83h7.032v18.317H25.183V19.075l.008-.007Z" fill="#FF7800"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h46v34H0z"/></clipPath></defs></svg>
                      </div>-->
          <p
            class="text-blue text-xl xl:text-2xl leading-1 xl:leading-tight tracking-wide pb-5"
          >
            Plus, an additional <span class="font-black">30 Associates</span> in
            Asia, Australasia, Africa and the Americas.
          </p>
          <p
            class="text-blue text-xl xl:text-2xl leading-1 xl:leading-tight tracking-wide"
          >
            Our vision is to make public service media the most creative, loved
            and engaging media today and in the future.
          </p>
        </div>
      </div>

      <!--PANEL TWO-->
      <div
        class="h-full relative overflow-visible flex-1"
        :style="{ paddingBottom: componentHeight + 'px' }"
      >
        <div
          class="scrolling-names"
          style="transform: translate(0%, -2%) translate3d(0px, 0px, 0px)"
        >
          <p
            class="text-blue font-semibold text-3xl"
            v-for="(name, index) in names"
            :key="index"
          >
            {{ name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: [
        "ARD",
        "AVROTROS",
        "Balgarska Nationalna Televizija",
        "Balgarsko Nationalno Radio",
        "Bayerischer Rundfunk",
        "British Broadcasting Corporation",
        "CLT-UFA",
        "Cesky Rozhlas",
        "Ceská Televize",
        "Cyprus Broadcasting Corporation",
        "Danmarks Radio",
        "Deutsche Welle",
        "Deutschlandradio",
        "Duna Media Service Provider",
        "Eesti Rahvusringhääling",
        "Elliniki Radiophonia-Tileorassi SA",
        "Etablissement Public de Radiodiffusion Sonore",
        "Etablissement Public de Télévision Algérienne",
        "France Médias Monde",
        "France Télévisions",
        "Hessischer Rundfunk",
        "Hrvatska Radiotelevizija",
        "Ictimai",
        "Israeli Public Broadcasting Corporation",
        "Jordan Radio and Television Corporation",
        "KRO-NCRV",
        "Latvijas Radio",
        "Latvijas Televizija",
        "Libya National Channel",
        "Lietuvos Radijas ir Televizija",
        "MKRTV",
        "Media Support and Asset Management Fund",
        "Mitteldeutscher Rundfunk",
        "Monaco Media Diffusion",
        "Média de Service Public 100.7",
        "NTR",
        "National Media Authority",
        "Nederlandse Omroep Stichting",
        "Nederlandse Publieke Omroep",
        "Norddeutscher Rundfunk",
        "Norsk rikskringkasting",
        "Omroep MAX",
        "Omroepvereniging BNN-VARA",
        "Omroepvereniging VPRO",
        "Oy Yleisradio Ab",
        "Polskie Radio SA",
        "Public Broadcaster",
        "Public Broadcasting Company of Ukraine",
        "Public Broadcasting Services Ltd",
        "Public Radio of Armenia",
        "Public Television Company of Armenia",
        "RTSH",
        "Radio Bremen",
        "Radio France",
        "Radio Vaticana",
        "Radio and Television of Bosnia and Herzegovina",
        "Radio i Televizija Crne Gore",
        "Radio tunisienne",
        "Radio-Télévision Belge de la Communauté française",
        "Radiotelevisione Italiana",
        "Radiotelevisión Española",
        "Radiotelevizija Slovenija",
        "Radiotelevizija Srbije",
        "Raidió Teilifís Éireann",
        "Rozhlas a televízia Slovenska",
        "Rundfunk Berlin-Brandenburg",
        "Ràdio i Televisió d’Andorra, S.A.",
        "Rádio e Televisão de Portugal",
        "Ríkisútvarpid",
        "SRG SSR",
        "Saarländischer Rundfunk",
        "San Marino RTV",
        "Sianel 4 Cymru",
        "Societatea Româna de Radiodifuziune",
        "Societatea Româna de Televiziune",
        "Société Nationale de Radio Télévision",
        "Sveriges Radio Ab",
        "Sveriges Television Ab",
        "Swedish Educational Broadcasting Company",
        "Südwestrundfunk",
        "TG4",
        "TV 2 AS",
        "TV 2 DANMARK",
        "Teleradio-Moldova",
        "Telewizja Polska SA",
        "Télé-Liban",
        "Télédiffusion d´Algérie",
        "Télévision tunisienne",
        "Türkiye Radyo-Televizyon Kurumu",
        "UK STV",
        "United Kingdom Independent Broadcasting",
        "Vereniging De Evangelische Omroep",
        "Vlaamse Radio en Televisieomroep",
        "Westdeutscher Rundfunk",
        "ZDF",
        "Österreichischer Rundfunk",
      ],
    };
  },
};
</script>

<style scoped>
.members-container {
  background-image: url(../img/background.jpg);
  background-size: cover;
  overflow: hidden;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.panel-two {
  @media (min-width: 1024px) {
    position: relative;
    height: 100%;
    overflow: visible;
  }
}

.scrolling-names {
  display: none;
}

@media (min-width: 1024px) {
  .scrolling-names {
    display: block;
    position: absolute;
    top: 23rem;
    left: 0;
    color: #ffffff;
    white-space: nowrap;
  }
}
</style>

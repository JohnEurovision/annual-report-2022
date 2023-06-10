<template>
  <div class="scrolling-names">
    <p v-for="(name, index) in names" :key="index">
      {{ name }}
    </p>
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
.scrolling-names {
  display: none;
}

.name-item {
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

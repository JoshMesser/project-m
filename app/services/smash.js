import Ember from 'ember';

export default Ember.Service.extend({
  characters: [
    {
      name: 'Mario',
      image: 'https://www.ssbwiki.com/images/thumb/8/83/Mario_SSBB.jpg/250px-Mario_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/a/ae/MarioIcon%28SSBB%29.png/40px-MarioIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Mario.wav',
      wiki: 'https://www.ssbwiki.com/Mario_(PM)'
    },
    {
      name: 'Donkey Kong',
      image: 'https://www.ssbwiki.com/images/thumb/2/2c/Donkey_Kong_SSBB.jpg/250px-Donkey_Kong_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/a/ac/DonkeyKongIcon%28SSBB%29.png/40px-DonkeyKongIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Donkey Kong.wav',
      wiki: 'https://www.ssbwiki.com/Donkey_Kong_(PM)'
    },
    {
      name: 'Link',
      image: 'https://www.ssbwiki.com/images/thumb/b/b8/Link_SSBB.jpg/250px-Link_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/1/1c/LinkIcon%28SSBB%29.png/40px-LinkIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Link.wav',
      wiki: 'https://www.ssbwiki.com/Link_(PM)'
    },
    {
      name: 'Samus Aran',
      image: 'https://www.ssbwiki.com/images/thumb/e/eb/Samus_SSBB.jpg/250px-Samus_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/6/65/SamusIcon%28SSBB%29.png/40px-SamusIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Samus.wav',
      wiki: 'https://www.ssbwiki.com/Samus_(PM)'
    },
    {
      name: 'Yoshi',
      image: 'https://www.ssbwiki.com/images/thumb/a/a5/Yoshi_SSBB.jpg/250px-Yoshi_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/c/c0/YoshiIcon%28SSBB%29.png/40px-YoshiIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Yoshi.wav',
      wiki: 'https://www.ssbwiki.com/Yoshi_(PM)'
    },
    {
      name: 'Kirby',
      image: 'https://www.ssbwiki.com/images/thumb/a/ae/Kirby_SSBB.jpg/250px-Kirby_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/c/c9/KirbyIcon%28SSBB%29.png/40px-KirbyIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Kirby.wav',
      wiki: 'https://www.ssbwiki.com/Kirby_(PM)'
    },
    {
      name: 'Fox McCloud',
      image: 'https://www.ssbwiki.com/images/thumb/e/ee/Fox_SSBB.jpg/250px-Fox_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/c/c0/FoxIcon%28SSBB%29.png/40px-FoxIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Fox.wav',
      wiki: 'https://www.ssbwiki.com/Fox_(PM)'
    },
    {
      name: 'Pikachu',
      image: 'https://www.ssbwiki.com/images/thumb/f/f5/Pikachu_SSBB.jpg/250px-Pikachu_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/6/6d/PikachuIcon%28SSBB%29.png/40px-PikachuIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Pikachu.wav',
      wiki: 'https://www.ssbwiki.com/Pikachu_(PM)'
    },
    {
      name: 'Luigi',
      image: 'https://www.ssbwiki.com/images/thumb/6/67/Luigi_SSBB.jpg/250px-Luigi_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/c/c2/LuigiIcon%28SSBB%29.png/40px-LuigiIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Luigi.wav',
      wiki: 'https://www.ssbwiki.com/Luigi_(PM)'
    },
    {
      name: 'Captain Falcon',
      image: 'https://www.ssbwiki.com/images/thumb/c/c3/Captain_Falcon_SSBB.jpg/250px-Captain_Falcon_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/7/72/CaptainFalconIcon%28SSBB%29.png/40px-CaptainFalconIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - C Falcon.wav',
      wiki: 'https://www.ssbwiki.com/Captain_Falcon_(PM)'
    },
    {
      name: 'Ness',
      image: 'https://www.ssbwiki.com/images/thumb/6/63/Ness_SSBB.jpg/250px-Ness_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/8/80/NessIcon%28SSBB%29.png/40px-NessIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Ness.wav',
      wiki: 'https://www.ssbwiki.com/Ness_(PM)'
    },
    {
      name: 'Jigglypuff',
      image: 'https://www.ssbwiki.com/images/thumb/d/d8/Jigglypuff_SSBB.jpg/250px-Jigglypuff_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/9/96/JigglypuffIcon%28SSBB%29.png/40px-JigglypuffIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Jigglypuff.wav',
      wiki: 'https://www.ssbwiki.com/Jigglypuff_(PM)'
    },
  ],

  stages: [
    {label: 'Congo Jungle', image: 'https://www.ssbwiki.com/images/2/2f/SSB4UKongoJungle64.jpg'},
    {label: 'Dream Land', image: 'https://www.ssbwiki.com/images/2/25/SSB4UDreamLand64.png'},
    {label: 'Hyrule Castle', image: 'https://www.ssbwiki.com/images/f/f5/SSBUHyruleCastle64.PNG'},
    {label: 'Mushroom Kingdom', image: 'https://www.ssbwiki.com/images/0/0c/MushroomKingdom64.jpg'},
    {label: "Peach's Castle", image: 'https://www.ssbwiki.com/images/2/2e/SSBUPeach%27sCastle64.PNG'},
    {label: 'Planet Zebes', image: 'https://www.ssbwiki.com/images/4/42/PlanetZebesSSB.png'},
    {label: 'Salfron City', image: 'https://www.ssbwiki.com/images/0/05/SaffronCitySSB.png'},
    {label: 'Sector Z', image: 'https://www.ssbwiki.com/images/7/76/SectorZSSB.png'},
    {label: "Yoshi's Island", image: 'https://www.ssbwiki.com/images/e/e6/YoshisStorySSB.png'},
    {label: "Battlefield", image: 'https://www.ssbwiki.com/images/b/b0/Battlefield.jpg'},
  ]
});

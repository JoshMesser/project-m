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
    {
      name: 'Peach',
      image: 'https://www.ssbwiki.com/images/thumb/d/d4/Peach_SSBB.jpg/250px-Peach_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/7/7d/PeachIcon%28SSBB%29.png/40px-PeachIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Jigglypuff.wav',
      wiki: 'https://www.ssbwiki.com/Peach_(PM)'
    },
    {
      name: 'Bowser',
      image: 'https://www.ssbwiki.com/images/thumb/a/ac/Bowser_SSBB.jpg/250px-Bowser_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/3/36/BowserIcon%28SSBB%29.png/40px-BowserIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Jigglypuff.wav',
      wiki: 'https://www.ssbwiki.com/Bowser_(PM)'
    },
    {
      name: 'Meta Knight',
      image: 'https://www.ssbwiki.com/images/thumb/4/45/Meta_Knight_SSBB.jpg/250px-Meta_Knight_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/4/41/MetaKnightIcon%28SSBB%29.png/40px-MetaKnightIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Jigglypuff.wav',
      wiki: 'https://www.ssbwiki.com/Meta_Knight_(PM)'
    },
    {
      name: 'Wolf',
      image: 'https://www.ssbwiki.com/images/thumb/2/2d/Wolf_SSBB.jpg/250px-Wolf_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/0/0c/WolfIcon%28SSBB%29.png/40px-WolfIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Jigglypuff.wav',
      wiki: 'https://www.ssbwiki.com/Wolf_(PM)'
    },
    {
      name: 'Mewtwo',
      image: 'https://www.ssbwiki.com/images/thumb/e/ef/PMMewtwo.png/250px-PMMewtwo.png',
      imageSm: 'https://www.ssbwiki.com/images/thumb/e/ec/MewtwoIcon%28PM%29.png/40px-MewtwoIcon%28PM%29.png',
      sound: '/sounds/Announcer - Jigglypuff.wav',
      wiki: 'https://www.ssbwiki.com/Mewtwo_(PM)'
    },
    {
      name: 'Diddy Kong',
      image: 'https://www.ssbwiki.com/images/thumb/5/5a/Diddy_Kong_SSBB.jpg/250px-Diddy_Kong_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/0/07/DiddyKongIcon%28SSBB%29.png/40px-DiddyKongIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Jigglypuff.wav',
      wiki: 'https://www.ssbwiki.com/Diddy_Kong_(PM)'
    },
    {
      name: 'Wario',
      image: 'https://www.ssbwiki.com/images/thumb/1/14/Wario_SSBB.jpg/250px-Wario_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/8/88/WarioIcon%28SSBB%29.png/40px-WarioIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Jigglypuff.wav',
      wiki: 'https://www.ssbwiki.com/Wario_(PM)'
    },
    {
      name: 'Mr. Game & Watch',
      image: 'https://www.ssbwiki.com/images/thumb/9/9c/Mr._Game_%26_Watch_SSBB.jpg/250px-Mr._Game_%26_Watch_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/0/01/MrGame%26WatchIcon%28SSBB%29.png/40px-MrGame%26WatchIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Jigglypuff.wav',
      wiki: 'https://www.ssbwiki.com/Mr._Game_%26_Watch_(PM)'
    },
    {
      name: 'Sheik',
      image: 'https://www.ssbwiki.com/images/thumb/b/bb/Sheik_SSBB.jpg/250px-Sheik_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/a/a6/SheikIcon%28SSBB%29.png/40px-SheikIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Jigglypuff.wav',
      wiki: 'https://www.ssbwiki.com/Sheik_(PM)'
    },
    {
      name: 'Sonic',
      image: 'https://www.ssbwiki.com/images/thumb/4/4a/Sonic_SSBB.jpg/250px-Sonic_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/3/39/SonicIcon%28SSBB%29.png/40px-SonicIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Jigglypuff.wav',
      wiki: 'https://www.ssbwiki.com/Sonic_(PM)'
    },
    {
      name: 'Snake',
      image: 'https://www.ssbwiki.com/images/thumb/d/db/Snake_SSBB.jpg/200px-Snake_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/b/b3/SnakeIcon%28SSBB%29.png/40px-SnakeIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Jigglypuff.wav',
      wiki: 'https://www.ssbwiki.com/Snake_(PM)'
    },
    {
      name: 'Zero Suit Samus',
      image: 'https://www.ssbwiki.com/images/thumb/1/15/ZSSPM3.6.png/175px-ZSSPM3.6.png',
      imageSm: 'https://www.ssbwiki.com/images/thumb/a/ac/ZeroSuitSamusIcon%28SSBB%29.png/40px-ZeroSuitSamusIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Jigglypuff.wav',
      wiki: 'https://www.ssbwiki.com/Zero_Suit_Samus_(PM)'
    },
    {
      name: 'Lucas',
      image: 'https://www.ssbwiki.com/images/thumb/9/91/Lucas_SSBB.jpg/250px-Lucas_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/3/34/LucasIcon%28SSBB%29.png/40px-LucasIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Jigglypuff.wav',
      wiki: 'https://www.ssbwiki.com/Lucas_(PM)'
    },
    {
      name: 'Ice Climbers',
      image: 'https://www.ssbwiki.com/images/thumb/1/1f/Ice_Climbers_SSBB.jpg/250px-Ice_Climbers_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/c/c1/IceClimbersIcon%28SSBB%29.png/40px-IceClimbersIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Jigglypuff.wav',
      wiki: 'https://www.ssbwiki.com/Ice_Climbers_(PM)'
    },
    {
      name: 'Marth',
      image: 'https://www.ssbwiki.com/images/thumb/d/d4/Marth_SSBB.jpg/250px-Marth_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/9/99/MarthIcon%28SSBB%29.png/40px-MarthIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Jigglypuff.wav',
      wiki: 'https://www.ssbwiki.com/Marth_(PM)'
    },
    {
      name: 'Lucario',
      image: 'https://www.ssbwiki.com/images/thumb/d/d6/Lucario_SSBB.jpg/250px-Lucario_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/9/9e/LucarioIcon%28SSBB%29.png/40px-LucarioIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Jigglypuff.wav',
      wiki: 'https://www.ssbwiki.com/Lucario_(PM)'
    },
    {
      name: 'Toon Link',
      image: 'https://www.ssbwiki.com/images/thumb/2/2a/Toon_Link_SSBB.jpg/250px-Toon_Link_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/8/8f/ToonLinkIcon%28SSBB%29.png/40px-ToonLinkIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Jigglypuff.wav',
      wiki: 'https://www.ssbwiki.com/Toon_Link_(PM)'
    },
    {
      name: 'Falco',
      image: 'https://www.ssbwiki.com/images/thumb/c/c3/Falco_SSBB.jpg/250px-Falco_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/a/a7/FalcoIcon%28SSBB%29.png/40px-FalcoIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Jigglypuff.wav',
      wiki: 'https://www.ssbwiki.com/Falco_(PM)'
    },
    {
      name: 'Charizard',
      image: 'https://www.ssbwiki.com/images/thumb/4/48/Charizard_SSBB.png/250px-Charizard_SSBB.png',
      imageSm: 'https://www.ssbwiki.com/images/thumb/1/12/CharizardIcon%28SSBB%29.png/40px-CharizardIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Jigglypuff.wav',
      wiki: 'https://www.ssbwiki.com/Charizard_(PM)'
    },
    {
      name: 'Ike',
      image: 'https://www.ssbwiki.com/images/thumb/6/66/Ike_SSBB.jpg/250px-Ike_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/a/aa/IkeIcon%28SSBB%29.png/40px-IkeIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Jigglypuff.wav',
      wiki: 'https://www.ssbwiki.com/Ike_(PM)'
    },
    {
      name: 'Ivysaur',
      image: 'https://www.ssbwiki.com/images/thumb/d/d3/Ivysaur_SSBB.png/250px-Ivysaur_SSBB.png',
      imageSm: 'https://www.ssbwiki.com/images/thumb/3/32/IvysaurIcon%28SSBB%29.png/40px-IvysaurIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Jigglypuff.wav',
      wiki: 'https://www.ssbwiki.com/Ivysaur_(PM)'
    },
    {
      name: 'Squirtle',
      image: 'https://www.ssbwiki.com/images/thumb/c/c2/Squirtle_SSBB.png/250px-Squirtle_SSBB.png',
      imageSm: 'https://www.ssbwiki.com/images/thumb/7/70/SquirtleIcon%28SSBB%29.png/40px-SquirtleIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Jigglypuff.wav',
      wiki: 'https://www.ssbwiki.com/Squirtle_(PM)'
    },
    {
      name: 'R.O.B.',
      image: 'https://www.ssbwiki.com/images/thumb/8/83/R.O.B._SSBB.jpg/250px-R.O.B._SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/b/b4/ROBIcon%28SSBB%29.png/40px-ROBIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Jigglypuff.wav',
      wiki: 'https://www.ssbwiki.com/R.O.B._(PM)'
    },
    {
      name: 'King Dedede',
      image: 'https://www.ssbwiki.com/images/thumb/1/17/King_Dedede_SSBB.jpg/250px-King_Dedede_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/6/69/KingDededeIcon%28SSBB%29.png/40px-KingDededeIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Jigglypuff.wav',
      wiki: 'https://www.ssbwiki.com/King_Dedede_(PM)'
    },
    {
      name: 'Pit',
      image: 'https://www.ssbwiki.com/images/thumb/d/d0/Pit_SSBB.jpg/250px-Pit_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/c/ce/PitIcon%28SSBB%29.png/40px-PitIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Jigglypuff.wav',
      wiki: 'https://www.ssbwiki.com/Zelda_(PM)'
    },
    {
      name: 'Olimar',
      image: 'https://www.ssbwiki.com/images/thumb/3/34/Olimar_SSBB.jpg/250px-Olimar_SSBB.jpg',
      imageSm: 'https://www.ssbwiki.com/images/thumb/a/a8/OlimarIcon%28SSBB%29.png/40px-OlimarIcon%28SSBB%29.png',
      sound: '/sounds/Announcer - Jigglypuff.wav',
      wiki: 'https://www.ssbwiki.com/Olimar_(PM)'
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

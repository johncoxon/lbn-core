import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'YT-2400 Light Freighter',
  xws: 'yt2400lightfreighter',
  ffg: 5,
  size: 'Large',
  dial: [
    '1TW',
    '1BB',
    '1FB',
    '1NB',
    '1YW',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TW',
    '3BW',
    '3FW',
    '3NW',
    '3YW',
    '4FW',
    '4KR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Double Turret Arc', type: 'attack', value: 4 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Rotate Arc' },
  ],
  ability: {
    name: 'Sensor Blindspot',
    text:
      'While you perform a primary attack at attack range 0-1, do not apply the range 0-1 bonus and roll 1 fewer attack die.',
  },
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_YT-2400.png',
  pilots: [
    {
      name: '“Leebo”',
      caption: 'Dry-Witted Droid',
      initiative: 3,
      limited: 1,
      cost: 8,
      xws: 'leebo',
      ability:
        'After you defend or perform an attack, if you spent a calculate token, gain 1 calculate token.',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'Red', type: 'Barrel Roll' },
        { difficulty: 'White', type: 'Rotate Arc' },
      ],
      slots: [
        'Talent',
        'Missile',
        'Illicit',
        'Illicit',
        'Modification',
        'Title',
      ],
      ffg: 78,
      standard: false,
      epic: true,
      loadout: 16,
      extended: true,
      keywords: ['Droid', 'Freighter'],
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_78.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_78.jpg',
    },
    {
      name: 'Dash Rendar',
      caption: 'Hotshot Mercenary',
      initiative: 5,
      limited: 1,
      cost: 10,
      xws: 'dashrendar',
      ability: 'While you move, you ignore obstacles.',
      slots: [
        'Talent',
        'Missile',
        'Crew',
        'Illicit',
        'Illicit',
        'Modification',
        'Title',
      ],
      ffg: 77,
      standard: false,
      epic: true,
      keywords: ['Freighter'],
      loadout: 22,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_77.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_77.jpg',
    },
    {
      name: 'Wild Space Fringer',
      initiative: 1,
      limited: 0,
      cost: 8,
      xws: 'wildspacefringer',
      text:
        'Although stock YT-2400 light freighters have plenty of room for cargo, that space is often annexed to support modified weapon systems and oversized engines.',
      slots: ['Missile', 'Illicit'],
      ffg: 79,
      standard: false,
      epic: true,
      keywords: ['Freighter'],
      loadout: 7,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_79.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_79.jpg',
    },
  ],
};

export default t;

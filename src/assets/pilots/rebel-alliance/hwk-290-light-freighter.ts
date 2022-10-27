import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'HWK-290 Light Freighter',
  xws: 'hwk290lightfreighter',
  ffg: 34,
  size: 'Small',
  dial: [
    '0OR',
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TR',
    '3BW',
    '3FB',
    '3NW',
    '3YR',
    '4FW',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Rotate Arc' },
      type: 'Focus',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Rotate Arc' },
      type: 'Lock',
    },
    { difficulty: 'Red', type: 'Boost' },
    { difficulty: 'White', type: 'Rotate Arc' },
    { difficulty: 'Red', type: 'Jam' },
  ],
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_HWK-290.png',
  pilots: [
    {
      name: 'Jan Ors',
      caption: 'Espionage Expert',
      initiative: 5,
      limited: 1,
      cost: 6,
      xws: 'janors',
      ability:
        'While a friendly ship in your firing arc performs a primary attack, if you are not stressed, you may gain 1 stress token. If you do, that ship may roll 1 additional attack die.',
      slots: [
        'Talent',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Modification',
        'Title',
      ],
      ffg: 42,
      standard: true,
      epic: true,
      keywords: ['Freighter'],
      loadout: 10,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_42.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_42.jpg',
    },
    {
      name: 'Kyle Katarn',
      caption: 'Relentless Operative',
      initiative: 3,
      limited: 1,
      cost: 6,
      xws: 'kylekatarn',
      ability:
        'At the start of the Engagement Phase, you may transfer 1 of your focus tokens to a friendly ship in your firing arc.',
      slots: ['Talent', 'Talent', 'Crew', 'Device', 'Modification', 'Title'],
      ffg: 43,
      standard: true,
      epic: true,
      keywords: ['Freighter'],
      loadout: 12,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_43.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_43.jpg',
    },
    {
      name: 'Rebel Scout',
      initiative: 2,
      limited: 0,
      cost: 4,
      xws: 'rebelscout',
      text:
        'Designed to look like a bird in flight by the Corellian Engineering Corporation, "hawk" series ships are exemplary transport craft. Swift and rugged, the HWK-290 is often employed by Rebel agents as a mobile base of operations.',
      slots: ['Device', 'Modification'],
      ffg: 45,
      standard: true,
      epic: true,
      keywords: ['Freighter'],
      loadout: 6,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_45.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_45.jpg',
    },
    {
      name: 'Roark Garnet',
      caption: 'Good-Hearted Smuggler',
      initiative: 4,
      limited: 1,
      cost: 6,
      xws: 'roarkgarnet',
      ability:
        'At the start of the Engagement Phase, you may choose 1 ship in your firing arc. If you do, it engages at initiative 7 instead of its standard initiative value this phase.',
      slots: [
        'Talent',
        'Crew',
        'Device',
        'Modification',
        'Modification',
        'Title',
      ],
      ffg: 44,
      standard: true,
      epic: true,
      keywords: ['Freighter'],
      loadout: 15,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_44.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_44.jpg',
    },
  ],
};

export default t;

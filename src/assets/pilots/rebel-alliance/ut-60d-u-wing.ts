import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'UT-60D U-wing',
  xws: 'ut60duwing',
  ffg: 15,
  size: 'Medium',
  dial: [
    '0OR',
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3BW',
    '3FW',
    '3NW',
    '4FW',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Coordinate' },
  ],
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_U-wing.png',
  pilots: [
    {
      name: 'Benthic Two Tubes',
      caption: 'Cavern Angels Marks- man',
      initiative: 2,
      limited: 1,
      cost: 5,
      xws: 'benthictwotubes',
      ability:
        'After you perform a [Focus] action, you may transfer 1 of your focus tokens to a friendly ship at range 1-2.',
      slots: [
        'Talent',
        'Sensor',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Configuration',
      ],
      ffg: 58,
      standard: true,
      epic: true,
      keywords: ['Partisan'],
      loadout: 16,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_58.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_58.jpg',
    },
    {
      name: 'Blue Squadron Scout',
      initiative: 2,
      limited: 0,
      cost: 5,
      xws: 'bluesquadronscout',
      text:
        "Used for deploying troops under the cover of darkness or into the heat of battle, the UT-60D U-wing fulfills the Rebellion's need for a swift and hardy troop transport.",
      slots: ['Modification', 'Configuration'],
      ffg: 60,
      standard: true,
      epic: true,
      loadout: 6,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_60.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_60.jpg',
    },
    {
      name: 'Bodhi Rook',
      caption: 'Imperial Defector',
      initiative: 4,
      limited: 1,
      cost: 5,
      xws: 'bodhirook',
      ability:
        'Friendly ships can acquire locks onto objects at range 0-3 of any friendly ship.',
      slots: ['Sensor', 'Crew', 'Crew', 'Modification', 'Configuration'],
      ffg: 54,
      standard: true,
      epic: true,
      loadout: 10,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_54.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_54.jpg',
    },
    {
      name: 'Cassian Andor',
      caption: 'Raised by the Rebellion',
      initiative: 3,
      limited: 1,
      cost: 5,
      xws: 'cassianandor',
      ability:
        'At the start of the Activation Phase, you may choose 1 friendly ship at range 1-3. If you do, that ship removes 1 stress token.',
      slots: ['Talent', 'Sensor', 'Crew', 'Modification', 'Configuration'],
      ffg: 56,
      standard: true,
      epic: true,
      loadout: 12,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_56.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_56.jpg',
    },
    {
      name: 'Heff Tobber',
      caption: 'Blue Eight',
      initiative: 2,
      limited: 1,
      cost: 5,
      xws: 'hefftobber',
      ability:
        'After an enemy ship executes a maneuver, if it is at range 0, you may perform an action.',
      slots: [
        'Talent',
        'Sensor',
        'Crew',
        'Crew',
        'Modification',
        'Configuration',
      ],
      ffg: 59,
      standard: true,
      epic: true,
      loadout: 9,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_59.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_59.jpg',
    },
    {
      name: 'Magva Yarro',
      caption: 'Cavern Angels Spotter',
      initiative: 3,
      limited: 1,
      cost: 5,
      xws: 'magvayarro',
      ability:
        'While a friendly ship at range 0-2 defends, the attacker cannot reroll more than 1 attack die.',
      slots: [
        'Talent',
        'Sensor',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Configuration',
      ],
      ffg: 57,
      standard: true,
      epic: true,
      keywords: ['Partisan'],
      loadout: 14,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_57.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_57.jpg',
    },
    {
      name: 'Partisan Renegade',
      initiative: 1,
      limited: 0,
      cost: 5,
      xws: 'partisanrenegade',
      text:
        "Saw Gerrera's partisans were first established to oppose Separatist forces on Onderon during the Clone Wars and continued to wage war against galactic tyranny as the Empire rose to power.",
      slots: ['Illicit', 'Configuration'],
      ffg: 61,
      standard: true,
      epic: true,
      keywords: ['Partisan'],
      loadout: 6,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_61.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_61.jpg',
    },
    {
      name: 'Saw Gerrera',
      caption: 'Obsessive Outlaw',
      initiative: 4,
      limited: 1,
      cost: 5,
      xws: 'sawgerrera',
      ability:
        'While a damaged friendly ship at range 0-3 performs an attack, it may reroll 1 attack die.',
      slots: [
        'Talent',
        'Sensor',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Configuration',
      ],
      ffg: 55,
      standard: true,
      epic: true,
      keywords: ['Partisan'],
      loadout: 18,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_55.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_55.jpg',
    },
    {
      name: 'K-2SO',
      caption: 'Cassian Said I Had To',
      initiative: 3,
      limited: 1,
      cost: 5,
      xws: 'k2so',
      ability: 'After you gain a stress token, gain 1 calculate token.',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'Red', type: 'Coordinate' },
      ],
      slots: ['Sensor', 'Crew', 'Crew', 'Modification', 'Configuration'],
      ffg: 629,
      standard: true,
      epic: true,
      keywords: ['Droid'],
      loadout: 10,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/c65da3d5378ec32bd024325dbd80b3d6.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/eeb6e9aeefe6f988949aff17e7e7986d.jpg',
    },
  ],
};

export default t;

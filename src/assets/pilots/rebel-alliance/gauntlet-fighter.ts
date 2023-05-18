import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Gauntlet Fighter',
  xws: 'gauntletfighter',
  size: 'Large',
  dial: [
    '0OR',
    '1BB',
    '1NB',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '4FW',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { arc: 'Rear Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 9 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'Red', type: 'Reinforce' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Coordinate' },
  ],
  pilots: [
    {
      xws: 'chopper-gauntletfighter',
      name: '"Chopper"',
      ability:
        'At the start of the Engagement Phase, each enemy ship at range 0 gains 2 jam tokens.',
      cost: 6,
      loadout: 10,
      initiative: 2,
      limited: 1,
      standard: true,
      extended: true,
      epic: true,
      slots: [
        'Crew',
        'Gunner',
        'Device',
        'Modification',
        'Modification',
        'Configuration',
        'Title',
      ],
      caption: 'Spectre-3',
      keywords: ['Droid', 'Spectre'],
      image:
        'https://infinitearenas.com/xw2/images/pilots/chopper-gauntletfighter.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/chopper-gauntletfighter.png',
    },
    {
      xws: 'ezrabridger-gauntletfighter',
      name: 'Ezra Bridger',
      cost: 6,
      loadout: 12,
      initiative: 3,
      limited: 1,
      ability:
        'While you defend or perform an attack, if you are stressed, you may spend 1 [Force] to change up to 2 of your [Focus] results to [Evade] or [Hit] results.',
      force: { side: ['light'], value: 1, recovers: 1 },
      standard: true,
      extended: true,
      epic: true,
      slots: [
        'Force Power',
        'Talent',
        'Crew',
        'Missile',
        'Gunner',
        'Device',
        'Illicit',
        'Modification',
        'Modification',
        'Configuration',
        'Title',
      ],
      caption: 'Spectre-6',
      keywords: ['Light Side', 'Spectre'],
      image:
        'https://infinitearenas.com/xw2/images/pilots/ezrabridger-gauntletfighter.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/ezrabridger-gauntletfighter.png',
    },
    {
      xws: 'mandalorianresistancepilot',
      name: 'Mandalorian Resistance Pilot',
      cost: 7,
      loadout: 10,
      initiative: 2,
      limited: 0,
      standard: true,
      extended: true,
      epic: true,
      slots: [
        'Talent',
        'Crew',
        'Gunner',
        'Device',
        'Modification',
        'Configuration',
      ],
      keywords: ['Mandalorian'],
      caption: 'Clan Loyalist',
      image:
        'https://infinitearenas.com/xw2/images/pilots/mandalorianresistancepilot.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/mandalorianresistancepilot.png',
    },
  ],
};

export default t;

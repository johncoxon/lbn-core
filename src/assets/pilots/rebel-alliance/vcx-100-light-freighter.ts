import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'VCX-100 Light Freighter',
  xws: 'vcx100lightfreighter',
  ffg: 23,
  size: 'Large',
  dial: [
    '1TR',
    '1BW',
    '1FB',
    '1NW',
    '1YR',
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
    '4KR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 4 },
    { type: 'agility', value: 0 },
    { type: 'hull', value: 10 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Reinforce' },
  ],
  ability: {
    name: 'Tail Gun',
    text:
      "While you have a docked ship, you have a primary [Rear Arc] weapon with an attack value equal to your docked ship's primary [Front Arc] attack value.",
  },
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_Ghost.png',
  pilots: [
    {
      name: '“Chopper”',
      caption: 'Spectre-3',
      initiative: 2,
      limited: 1,
      cost: 7,
      xws: 'chopper',
      ability:
        'At the start of the Engagement Phase, each enemy ship at range 0 gains 2 jam tokens.',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'White', type: 'Reinforce' },
      ],
      slots: [
        'Sensor',
        'Turret',
        'Torpedo',
        'Crew',
        'Crew',
        'Gunner',
        'Modification',
        'Title',
      ],
      ffg: 75,
      standard: true,
      epic: true,
      loadout: 18,
      extended: true,
      keywords: ['Droid', 'Freighter', 'Spectre'],
    },
    {
      name: 'Hera Syndulla',
      caption: 'Spectre-2',
      initiative: 5,
      limited: 1,
      cost: 7,
      loadout: 20,
      xws: 'herasyndulla-vcx100lightfreighter',
      ability:
        'After you reveal a red or blue maneuver, you may set your dial to another maneuver of the same difficulty.',
      slots: [
        'Talent',
        'Sensor',
        'Turret',
        'Torpedo',
        'Crew',
        'Crew',
        'Gunner',
        'Modification',
        'Title',
      ],
      ffg: 73,
      standard: false,
      epic: true,
      extended: true,
      keywords: ['Freighter', 'Spectre'],
    },
    {
      name: 'Kanan Jarrus',
      caption: 'Spectre-1',
      initiative: 3,
      limited: 1,
      cost: 8,
      xws: 'kananjarrus',
      ability:
        'While a friendly ship in your firing arc defends, you may spend 1 [Force]. If you do, the attacker rolls 1 fewer attack die.',
      force: { value: 2, recovers: 1, side: ['light'] },
      slots: [
        'Force Power',
        'Sensor',
        'Turret',
        'Torpedo',
        'Crew',
        'Crew',
        'Gunner',
        'Modification',
        'Title',
      ],
      ffg: 74,
      standard: true,
      epic: true,
      loadout: 20,
      extended: true,
      keywords: ['Freighter', 'Jedi', 'Light Side', 'Spectre'],
    },
    {
      name: 'Lothal Rebel',
      initiative: 2,
      limited: 0,
      cost: 7,
      xws: 'lothalrebel',
      text:
        'Another successful Corellian Engineering Corporation freighter design, the VCX-100 is larger than the ubiquitous YT-series, boasting more living space and customizability.',
      slots: ['Turret', 'Torpedo', 'Gunner'],
      ffg: 76,
      standard: true,
      epic: true,
      keywords: ['Freighter'],
      loadout: 8,
      extended: true,
    },
    {
      name: 'Alexsandr Kallus',
      xws: 'alexsandrkallus',
      initiative: 4,
      limited: 1,
      caption: 'Fulcrum',
      standard: true,
      epic: true,
      slots: [
        'Talent',
        'Sensor',
        'Turret',
        'Torpedo',
        'Crew',
        'Crew',
        'Gunner',
        'Modification',
        'Title',
      ],
      ability:
        'While you defend, if the attacker modified any attack dice, you may roll 1 additional defense die.',
      cost: 7,
      ffg: 631,
      loadout: 16,
      extended: true,
      keywords: ['Freighter', 'Spectre'],
    },
  ],
};

export default t;

import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Delta-7 Aethersprite',
  xws: 'delta7aethersprite',
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1NB',
    '1YW',
    '2LR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '2PR',
    '3BW',
    '3FB',
    '3NW',
    '4FW',
    '4KR',
    '5FW',
    '5KR',
  ],
  faction: 'Galactic Republic',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'Purple', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  ability: {
    name: 'Fine-tuned Controls',
    text:
      'After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action.',
  },
  pilots: [
    {
      name: 'Jedi Knight',
      initiative: 3,
      limited: 0,
      xws: 'jediknight',
      text:
        'When the Clone Wars began, the Jedi Knights rallied to the cause of preserving the Republic, assuming command of legions of clone troopers and leading them in battle.',
      force: { value: 1, recovers: 1, side: ['light'] },
      standard: true,
      epic: true,
      cost: 4,
      slots: ['Force Power', 'Astromech', 'Configuration', 'Modification'],
      ffg: 515,
      keywords: ['Jedi', 'Light Side'],
      loadout: 3,
      extended: true,
      caption: '',
    },
    {
      name: 'Obi-Wan Kenobi',
      caption: 'Guardian of the Republic',
      initiative: 5,
      limited: 1,
      xws: 'obiwankenobi',
      ability:
        'After a friendly ship at range 0-2 spends a focus token, you may spend 1 [Force]. If you do, that ship gains 1 focus token.',
      force: { value: 3, recovers: 1, side: ['light'] },
      standard: true,
      epic: true,
      cost: 5,
      slots: [
        'Force Power',
        'Force Power',
        'Missile',
        'Astromech',
        'Configuration',
        'Modification',
      ],
      ffg: 511,
      keywords: ['Jedi', 'Light Side'],
      loadout: 10,
      extended: true,
    },
    {
      name: 'Plo Koon',
      caption: 'Serene Mentor',
      initiative: 5,
      limited: 1,
      xws: 'plokoon',
      ability:
        'At the start of the Engagement Phase, you may spend 1 [Force] and choose another friendly ship at range 0-2. If you do, you may transfer 1 green token to it or transfer one orange token from it to yourself.',
      force: { value: 2, recovers: 1, side: ['light'] },
      standard: true,
      epic: true,
      cost: 5,
      slots: [
        'Force Power',
        'Talent',
        'Missile',
        'Astromech',
        'Configuration',
        'Modification',
      ],
      ffg: 513,
      keywords: ['Jedi', 'Light Side'],
      loadout: 12,
      extended: true,
    },
    {
      name: 'Saesee Tiin',
      caption: 'Prophetic Pilot',
      initiative: 4,
      limited: 1,
      xws: 'saeseetiin',
      ability:
        'After a friendly ship at range 0-2 reveals its dial, you may spend 1 [Force]. If you do, set its dial to another maneuver of the same speed and difficulty.',
      force: { value: 2, recovers: 1, side: ['light'] },
      standard: false,
      epic: true,
      cost: 4,
      slots: ['Force Power', 'Astromech', 'Configuration', 'Modification'],
      ffg: 514,
      keywords: ['Jedi', 'Light Side'],
      loadout: 8,
      extended: true,
    },
    {
      name: 'Mace Windu',
      caption: 'Harsh Traditionalist',
      initiative: 4,
      limited: 1,
      xws: 'macewindu',
      ability: 'After you fully execute a red maneuver, recover 1 [Force].',
      force: { value: 3, recovers: 1, side: ['light'] },
      standard: true,
      epic: true,
      cost: 4,
      slots: [
        'Force Power',
        'Force Power',
        'Astromech',
        'Configuration',
        'Modification',
      ],
      ffg: 512,
      keywords: ['Jedi', 'Light Side'],
      loadout: 7,
      extended: true,
    },
    {
      name: 'Anakin Skywalker',
      caption: 'Hero of the Republic',
      initiative: 6,
      limited: 1,
      xws: 'anakinskywalker',
      ability:
        'After you fully execute a maneuver, if there is an enemy ship in your [Front Arc] at range 0-1 or in your [Bullseye Arc], you may spend 1 [Force] to remove 1 stress token.',
      force: { value: 3, recovers: 1, side: ['light'] },
      standard: true,
      epic: true,
      cost: 6,
      loadout: 10,
      slots: [
        'Force Power',
        'Force Power',
        'Missile',
        'Astromech',
        'Configuration',
        'Modification',
      ],
      ffg: 507,
      keywords: ['Jedi', 'Light Side'],
      extended: true,
    },
    {
      name: 'Ahsoka Tano',
      caption: '“Snips"',
      initiative: 3,
      limited: 1,
      xws: 'ahsokatano',
      ability:
        'After you fully execute a maneuver, you may choose a friendly ship at range 0-1 and spend 1 [Force]. That ship may perform an action, even if it is stressed.',
      force: { value: 2, recovers: 1, side: ['light'] },
      standard: true,
      epic: true,
      cost: 4,
      slots: ['Force Power', 'Astromech', 'Configuration', 'Modification'],
      ffg: 510,
      keywords: ['Jedi', 'Light Side'],
      loadout: 9,
      extended: true,
    },
    {
      name: 'Barriss Offee',
      caption: 'Conflicted Padawan',
      initiative: 4,
      limited: 1,
      xws: 'barrissoffee',
      ability:
        'While a friendly ship at range 0-2 performs an attack, if the defender is in its [Bullseye Arc], you may spend 1 [Force] to change 1 [Focus] result to a [Hit] result or 1 [Hit] result to a [Critical Hit] result.',
      force: { value: 1, recovers: 1, side: ['light'] },
      standard: true,
      epic: true,
      cost: 3,
      slots: [
        'Force Power',
        'Missile',
        'Astromech',
        'Configuration',
        'Modification',
      ],
      ffg: 509,
      keywords: ['Jedi', 'Light Side'],
      loadout: 7,
      extended: true,
    },
    {
      name: 'Luminara Unduli',
      caption: 'Wise Protector',
      initiative: 4,
      limited: 1,
      xws: 'luminaraunduli',
      ability:
        "While a friendly ship at range 0-2 defends, if it is not in the attacker's [Bullseye Arc], you may spend 1 [Force]. If you do, change 1 [Critical Hit] result to a [Hit] result or 1 [Hit] result to a [Focus] result.",
      force: { value: 2, recovers: 1, side: ['light'] },
      standard: true,
      epic: true,
      cost: 4,
      slots: ['Force Power', 'Astromech', 'Configuration', 'Modification'],
      ffg: 508,
      keywords: ['Jedi', 'Light Side'],
      loadout: 7,
      extended: true,
    },
  ],
  ffg: 61,
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_Delta-7.png',
};

export default t;

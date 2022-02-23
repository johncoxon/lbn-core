import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'T-65 X-wing',
  xws: 't65xwing',
  ffg: 33,
  size: 'Small',
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3ER',
    '3TW',
    '3BW',
    '3FW',
    '3NW',
    '3YW',
    '3RR',
    '4FW',
    '4KR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_X-wing-T65.png',
  pilots: [
    {
      name: 'Biggs Darklighter',
      caption: 'Red Three',
      initiative: 3,
      limited: 1,
      cost: 5,
      xws: 'biggsdarklighter',
      ability:
        'While another friendly ship at range 0-1 defends, before the Neutralize Results step, if you are in the attack arc, you may suffer 1 [Hit] or [Critical Hit] damage to cancel 1 matching result.',
      slots: ['Torpedo', 'Astromech', 'Modification', 'Configuration'],
      ffg: 7,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      loadout: 12,
      extended: true,
    },
    {
      name: 'Blue Squadron Escort',
      initiative: 2,
      limited: 0,
      cost: 4,
      xws: 'bluesquadronescort',
      text:
        'Designed by Incom Corporation, the T-65 X-wing quickly proved to be one of the most effective and versatile military vehicles in the galaxy and a boon to the Rebellion.',
      slots: ['Astromech', 'Configuration'],
      ffg: 11,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      loadout: 4,
      extended: true,
    },
    {
      name: 'Cavern Angels Zealot',
      initiative: 1,
      limited: 0,
      cost: 4,
      xws: 'cavernangelszealot',
      text:
        "Unlike most Rebel cells, Saw Gerrera's partisans are willing to use extreme methods to undermine the Galactic Empire's objectives in brutal battles that raged from Geonosis to Jedha.",
      slots: ['Astromech', 'Illicit', 'Configuration'],
      ffg: 12,
      standard: true,
      epic: true,
      keywords: ['Partisan', 'X-wing'],
      loadout: 4,
      extended: true,
    },
    {
      name: 'Edrio Two Tubes',
      caption: 'Cavern Angels Veteran',
      initiative: 2,
      limited: 1,
      cost: 4,
      xws: 'edriotwotubes',
      ability:
        'Before you activate, if you are focused, you may perform an action.',
      slots: ['Torpedo', 'Missile', 'Illicit', 'Modification', 'Configuration'],
      ffg: 9,
      standard: true,
      epic: true,
      keywords: ['Partisan', 'X-wing'],
      loadout: 7,
      extended: true,
    },
    {
      name: 'Garven Dreis',
      caption: 'Red Leader',
      initiative: 4,
      limited: 1,
      cost: 5,
      xws: 'garvendreis-t65xwing',
      ability:
        'After you spend a focus token, you may choose 1 friendly ship at range 1-3. That ship gains 1 focus token.',
      slots: [
        'Talent',
        'Torpedo',
        'Astromech',
        'Modification',
        'Configuration',
      ],
      ffg: 4,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      loadout: 10,
      extended: true,
    },
    {
      name: 'Jek Porkins',
      caption: 'Red Six',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'jekporkins',
      ability:
        'After you receive a stress token, you may roll 1 attack die to remove it. On a [Hit] result, suffer 1 [Hit] damage.',
      slots: ['Torpedo', 'Astromech', 'Modification', 'Configuration'],
      ffg: 5,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      loadout: 7,
      extended: true,
    },
    {
      name: 'Kullbee Sperado',
      caption: 'Enigmatic Gunslinger',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'kullbeesperado',
      ability:
        'After you perform a [Barrel Roll] or [Boost] action, you may flip your equipped [Configuration] upgrade card.',
      slots: [
        'Talent',
        'Missile',
        'Astromech',
        'Illicit',
        'Modification',
        'Configuration',
      ],
      ffg: 6,
      standard: true,
      epic: true,
      keywords: ['Partisan', 'X-wing'],
      loadout: 6,
      extended: true,
    },
    {
      name: 'Leevan Tenza',
      caption: 'Rebel Alliance Defector',
      initiative: 3,
      limited: 1,
      cost: 4,
      xws: 'leevantenza',
      ability:
        'After you perform a [Barrel Roll] or [Boost] action, you may perform a red [Evade] action.',
      slots: [
        'Talent',
        'Missile',
        'Astromech',
        'Illicit',
        'Modification',
        'Configuration',
      ],
      ffg: 8,
      standard: true,
      epic: true,
      keywords: ['Partisan', 'X-wing'],
      loadout: 6,
      extended: true,
    },
    {
      name: 'Luke Skywalker',
      caption: 'Red Five',
      initiative: 5,
      limited: 1,
      cost: 7,
      xws: 'lukeskywalker',
      ability:
        'After you become the defender (before dice are rolled), you may recover 1 [Force].',
      force: { value: 2, recovers: 1, side: ['light'] },
      slots: [
        'Force Power',
        'Talent',
        'Torpedo',
        'Astromech',
        'Modification',
        'Configuration',
      ],
      ffg: 2,
      standard: true,
      epic: true,
      keywords: ['Light Side', 'X-wing'],
      loadout: 28,
      extended: true,
    },
    {
      name: 'Red Squadron Veteran',
      initiative: 3,
      limited: 0,
      cost: 4,
      xws: 'redsquadronveteran',
      text:
        'Created as an elite starfighter squad, Red Squadron includes some of the best pilots in the Rebel Alliance.',
      slots: ['Talent', 'Astromech', 'Configuration'],
      ffg: 10,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      loadout: 3,
      extended: true,
    },
    {
      name: 'Thane Kyrell',
      caption: 'Corona Four',
      initiative: 5,
      limited: 1,
      cost: 4,
      xws: 'thanekyrell',
      ability:
        "While you perform an attack, you may spend 1 [Focus], [Hit], or [Critical Hit] result to look at the defender's facedown damage cards, choose 1, and expose it.",
      slots: [
        'Talent',
        'Torpedo',
        'Astromech',
        'Modification',
        'Configuration',
      ],
      ffg: 3,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      loadout: 7,
      extended: true,
    },
    {
      name: 'Wedge Antilles',
      caption: 'Red Two',
      initiative: 6,
      limited: 1,
      cost: 6,
      loadout: 20,
      xws: 'wedgeantilles',
      ability:
        'While you perform an attack, the defender rolls 1 fewer defense die.',

      slots: [
        'Talent',
        'Talent',
        'Torpedo',
        'Astromech',
        'Modification',
        'Configuration',
      ],
      ffg: 1,
      standard: false,
      epic: true,
      keywords: ['X-wing'],
    },
  ],
};

export default t;

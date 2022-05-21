import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'RZ-1 A-wing',
  xws: 'rz1awing',
  ffg: 35,
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2TB',
    '2BB',
    '2FB',
    '2NB',
    '2YB',
    '3LR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3PR',
    '4FB',
    '5FB',
    '5KR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 2 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  ability: {
    name: 'Vectored Thrusters',
    text: 'After you perform an action, you may perform a red [Boost] action.',
  },
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_A-wing.png',
  pilots: [
    {
      name: 'Arvel Crynyd',
      caption: 'Green Leader',
      initiative: 3,
      limited: 1,
      cost: 3,
      xws: 'arvelcrynyd',
      ability:
        'If you would fail a [Boost] action by overlapping another ship, resolve it as though you were partially executing a maneuver instead.\n\nWhile you perform an attack at attack range 0, treat it as an attack at attack range 1.',
      slots: ['Talent', 'Talent', 'Configuration'],
      ffg: 20,
      standard: true,
      epic: true,
      keywords: ['A-wing'],
      loadout: 5,
      extended: true,
    },
    {
      name: 'Green Squadron Pilot',
      initiative: 3,
      limited: 0,
      cost: 4,
      xws: 'greensquadronpilot',
      text:
        'Due to its sensitive controls and high maneuverability, only the most talented pilots belong in an A-wing cockpit.',
      slots: ['Talent', 'Talent', 'Configuration'],
      ffg: 21,
      standard: true,
      epic: true,
      keywords: ['A-wing'],
      loadout: 4,
      extended: true,
    },
    {
      name: 'Jake Farrell',
      caption: 'Sage Instructor',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'jakefarrell',
      ability:
        'After you perform a [Barrel Roll] or [Boost] action, you may choose a friendly ship at range 0-1. That ship may perform a [Focus] action.',
      slots: ['Talent', 'Talent', 'Missile', 'Modification', 'Configuration'],
      ffg: 19,
      standard: true,
      epic: true,
      keywords: ['A-wing'],
      loadout: 8,
      extended: true,
    },
    {
      name: 'Phoenix Squadron Pilot',
      initiative: 1,
      limited: 0,
      cost: 4,
      xws: 'phoenixsquadronpilot',
      text:
        'Led by Commander Jun Sato, the brave but inexperienced pilots of Phoenix Squadron face staggering odds in their battle against the Galactic Empire.',
      slots: ['Talent', 'Configuration'],
      ffg: 22,
      standard: true,
      epic: true,
      keywords: ['A-wing'],
      loadout: 3,
      extended: true,
    },
    {
      xws: 'wedgeantilles-rz1awing',
      name: 'Wedge Antilles',
      caption: 'Promising Pilot',
      cost: 4,
      initiative: 4,
      limited: 1,
      ability:
        'While you perform a primary attack, if the defender is in your [Front Arc], the defender rolls 1 fewer defense die.',
      slots: ['Talent', 'Talent', 'Missile', 'Modification', 'Configuration'],
      standard: true,
      epic: true,
      keywords: ['A-wing'],
      ffg: 883,
      loadout: 10,
      extended: true,
    },
    {
      xws: 'sabinewren-rz1awing',
      name: 'Sabine Wren',
      caption: 'Daughter of Mandalore',
      cost: 4,
      initiative: 3,
      limited: 1,
      ability:
        "While you defend or perform an attack, if the attack range is 1 and you are in the enemy ship's [Front Arc], you may change 1 of your results to an [Evade] or [Hit] result.",
      slots: ['Talent', 'Torpedo', 'Modification', 'Configuration'],
      standard: true,
      epic: true,
      ffg: 885,
      loadout: 11,
      extended: true,
      keywords: ['A-wing', 'Mandalorian'],
    },
    {
      xws: 'herasyndulla-rz1awing',
      name: 'Hera Syndulla',
      caption: 'Phoenix Leader',
      cost: 5,
      initiative: 6,
      limited: 1,
      ability:
        'While another friendly ship at range 1-2 defends or performs an attack, during a Modify Dice step, you may transfer 1 of your focus tokens, evade tokens, or locks to that ship.',
      slots: [
        'Talent',
        'Talent',
        'Sensor',
        'Missile',
        'Modification',
        'Configuration',
      ],
      standard: true,
      epic: true,
      ffg: 880,
      loadout: 14,
      extended: true,
      keywords: ['A-wing', 'Spectre'],
    },
    {
      xws: 'ahsokatano-rz1awing',
      name: 'Ahsoka Tano',
      caption: 'Fulcrum',
      cost: 5,
      initiative: 5,
      limited: 1,
      ability:
        'After you fully execute a maneuver, you may choose a friendly ship at range 1-2 and spend 2 [Force]. That ship may perform an action, even while stressed.',
      force: { value: 3, side: ['light'], recovers: 1 },
      slots: [
        'Force Power',
        'Force Power',
        'Talent',
        'Missile',
        'Modification',
        'Configuration',
      ],
      standard: true,
      epic: true,
      ffg: 881,
      loadout: 12,
      extended: true,
      keywords: ['A-wing', 'Light Side'],
    },
    {
      xws: 'sharabey-rz1awing',
      name: 'Shara Bey',
      caption: 'Green Four',
      cost: 4,
      initiative: 4,
      limited: 1,
      ability:
        'While you defend or perform a primary attack, you may spend 1 lock you have on the enemy ship to add 1 [Focus] result to your dice results.',
      slots: ['Talent', 'Missile', 'Configuration'],
      standard: true,
      epic: true,
      keywords: ['A-wing'],
      ffg: 882,
      loadout: 7,
      extended: true,
    },
    {
      xws: 'derekklivian',
      name: 'Derek Klivian',
      caption: 'Hobbie',
      cost: 3,
      initiative: 3,
      limited: 1,
      ability:
        'After you acquire or spend a lock, you may remove 1 red token from yourself.',
      slots: ['Talent', 'Missile', 'Configuration'],
      standard: true,
      epic: true,
      keywords: ['A-wing'],
      ffg: 884,
      loadout: 6,
      extended: true,
    },
  ],
};

export default t;

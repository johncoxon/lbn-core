import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'TIE/fo Fighter',
  xws: 'tiefofighter',
  ffg: 49,
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2LR',
    '2TB',
    '2BB',
    '2FB',
    '2NB',
    '2YB',
    '2PR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
    '4KR',
    '5FW',
  ],
  faction: 'First Order',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_TIEfo.png',
  pilots: [
    {
      name: '“Midnight”',
      caption: 'Omega Leader',
      initiative: 6,
      limited: 1,
      cost: 4,
      xws: 'midnight',
      ability:
        "While you defend or perform an attack, if you have a lock on the enemy ship, that ship's dice cannot be modified.",
      slots: [
        'Talent',
        'Talent',
        'Missile',
        'Tech',
        'Modification',
        'Modification',
      ],
      ffg: 397,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 15,
      extended: true,
    },
    {
      name: 'Commander Malarus',
      caption: 'First Order Enforcer',
      initiative: 5,
      limited: 1,
      cost: 3,
      xws: 'commandermalarus',
      ability:
        'At the start of the Engagement Phase, you may spend 1 [Charge] and gain 1 stress token. If you do, until the end of the round, while you defend or perform an attack, you may change all of your [Focus] results to [Evade] or [Hit] results.',
      slots: ['Talent', 'Talent', 'Missile', 'Tech', 'Modification'],
      charges: { value: 2, recovers: 0 },
      ffg: 452,
      standard: true,
      epic: true,
      loadout: 4,
      extended: true,
      keywords: ['TIE'],
    },
    {
      name: '“Scorch”',
      caption: 'Zeta Leader',
      initiative: 4,
      limited: 1,
      cost: 3,
      xws: 'scorch',
      ability:
        'While you perform a primary attack, if you are not stressed, you may gain 1 stress token to roll 1 additional attack die.',
      slots: ['Talent', 'Tech', 'Tech', 'Modification'],
      ffg: 398,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 3,
      extended: true,
    },
    {
      name: '“Static”',
      caption: 'Omega Ace',
      initiative: 4,
      limited: 1,
      cost: 3,
      xws: 'static',
      ability:
        'While you perform a primary attack, you may spend your lock on the defender and a focus token to change all of your results to [Critical Hit] results.',
      slots: ['Talent', 'Talent', 'Tech', 'Cannon', 'Modification'],
      ffg: 399,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 8,
      extended: true,
    },
    {
      name: '“Longshot”',
      caption: 'Zeta Ace',
      initiative: 3,
      limited: 1,
      cost: 3,
      xws: 'longshot',
      ability:
        'While you perform a primary attack at attack range 3, roll 1 additional attack die.',
      slots: ['Talent', 'Tech', 'Tech', 'Modification'],
      ffg: 400,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 3,
      extended: true,
    },
    {
      name: 'Omega Squadron Ace',
      initiative: 3,
      limited: 0,
      cost: 3,
      xws: 'omegasquadronace',
      text:
        'Only pilots who have demonstrated both exceptional skill and unwavering dedication are rewarded with coveted positions in the First Order squadrons operating secretly against the New Republic during the Cold War.',
      slots: ['Talent', 'Tech', 'Modification', 'Modification'],
      ffg: 403,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 4,
      extended: true,
      caption: '',
    },
    {
      name: '“Muse”',
      caption: 'Epsilon Leader',
      initiative: 2,
      limited: 1,
      cost: 3,
      xws: 'muse',
      ability:
        'At the start of the Engagement Phase, you may choose a friendly ship at range 0-1. If you do, that ship removes 1 stress token.',
      slots: ['Modification', 'Tech'],
      ffg: 401,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 9,
      extended: true,
    },
    {
      name: 'TN-3465',
      caption: 'Loose End',
      initiative: 2,
      limited: 1,
      cost: 3,
      xws: 'tn3465',
      ability:
        "While another friendly ship performs an attack, if you are at range 0-1 of the defender, you may suffer 1 [Critical Hit] damage to change 1 of the attacker's results to a [Critical Hit] result.",
      slots: ['Modification', 'Tech'],
      ffg: 453,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 4,
      extended: true,
    },
    {
      name: 'Zeta Squadron Pilot',
      initiative: 2,
      limited: 0,
      cost: 3,
      xws: 'zetasquadronpilot',
      text:
        "Unhampered by a cumbersome galactic bureaucracy, technologies originally researched by the Empire's TIE Advanced program are now mass-produced on First Order starfighters. As a result, TIE/fo pilots enjoy higher survival rates than their predecessors in the Galactic Empire.",
      slots: ['Modification', 'Tech'],
      ffg: 404,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 3,
      extended: true,
      caption: '',
    },
    {
      name: 'Epsilon Squadron Cadet',
      initiative: 1,
      limited: 0,
      cost: 3,
      xws: 'epsilonsquadroncadet',
      text:
        "Trained from childhood aboard Resurgent-class Star Destroyers in deep space, many First Order TIE pilots have never even set foot on a planet's surface.",
      slots: ['Tech', 'Tech'],
      ffg: 405,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 2,
      extended: true,
      caption: '',
    },
    {
      name: 'Lieutenant Rivas',
      caption: 'Inconvenient Witness',
      initiative: 1,
      limited: 1,
      cost: 2,
      xws: 'lieutenantrivas',
      ability:
        'After a ship at range 1-2 gains a red or orange token, if you do not have that ship locked, you may acquire a lock on that ship.',
      slots: [],
      ffg: 454,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 0,
      extended: true,
    },
    {
      name: '“Null”',
      caption: 'Epsilon Ace',
      initiative: 0,
      limited: 1,
      cost: 3,
      xws: 'null',
      ability: 'While you are not damaged, treat your initiative value as 7.',
      slots: ['Talent', 'Talent', 'Tech', 'Tech'],
      ffg: 402,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 6,
      extended: true,
    },
  ],
};

export default t;

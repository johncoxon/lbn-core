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
      cost: 3,
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
      loadout: 7,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/c7994885b38757f92bdf3a98c37b3c96.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/c6a43d25d22d4112dd7e968cab4eb3d5.jpg',
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
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/f7506ec739f5580d484ff0ee49b041f3.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/d9cfa6aacc29d55a47aaa0d9f75d362e.jpg',
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
      slots: ['Talent', 'Talent', 'Tech', 'Modification'],
      ffg: 398,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 6,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/9dd11d408bb869cb947663fc29622833.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/dd225b2dab46b921e622dca6d799591f.jpg',
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
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/2481fe5d98026e086a901d83dbe87018.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/30e0837d4877df289c220ea0ae174078.jpg',
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
      loadout: 8,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/d0e698f59696c15b60d7eaa1e2d51eeb.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/31ad38b2fc0d39f37ad82e1c70f62135.jpg',
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
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/97e72d0f5dc8c2dd21a355e3258f37dd.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/4e5010f7b60902288dac36bf646dcde9.jpg',
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
      slots: ['Tech', 'Modification'],
      ffg: 401,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 9,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/7de4e91de0906eb548bfe3a08a1b6abe.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/d3f8b9baf0bbd8a7d2b785a616dacbcf.jpg',
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
      slots: ['Tech', 'Modification'],
      ffg: 453,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 5,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/333cbf0da8849edb38c4e93944d8fe57.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/9fce0e75539a225e9ff1536e466c3c13.jpg',
    },
    {
      name: 'Zeta Squadron Pilot',
      initiative: 2,
      limited: 0,
      cost: 3,
      xws: 'zetasquadronpilot',
      text:
        "Unhampered by a cumbersome galactic bureaucracy, technologies originally researched by the Empire's TIE Advanced program are now mass-produced on First Order starfighters. As a result, TIE/fo pilots enjoy higher survival rates than their predecessors in the Galactic Empire.",
      slots: ['Tech', 'Modification'],
      ffg: 404,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 3,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/be1062b6a7a8e4644223146342990a02.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/d20d6cc2a052afc783d535c802874d23.jpg',
    },
    {
      name: 'Epsilon Squadron Cadet',
      initiative: 1,
      limited: 0,
      cost: 3,
      xws: 'epsilonsquadroncadet',
      text:
        "Trained from childhood aboard Resurgent-class Star Destroyers in deep space, many First Order TIE pilots have never even set foot on a planet's surface.",
      slots: ['Tech'],
      ffg: 405,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 2,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/e911cd18f04225bbd36c48114b56f3cc.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/610cb198e4cda75aab0207841c6e4a87.jpg',
    },
    {
      name: 'Lieutenant Rivas',
      caption: 'Inconvenient Witness',
      initiative: 1,
      limited: 1,
      cost: 3,
      xws: 'lieutenantrivas',
      ability:
        'After a ship at range 1-2 gains a red or orange token, if you do not have that ship locked, you may acquire a lock on that ship.',
      slots: ['Talent', 'Tech', 'Modification'],
      ffg: 454,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 4,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/7188ec2eb699261dbd47a15df6164f4c.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/66f969d008fc995bd940bf1ab647109f.jpg',
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
      loadout: 5,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/79a9d780d3540647af1e057113869294.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/eb788d9622d096c6d96c96cf20dc1939.jpg',
    },
    {
      name: 'Lieutenant Galek',
      caption: 'Harsh Instructor',
      initiative: 5,
      limited: 1,
      cost: 3,
      loadout: 7,
      xws: 'lieutenantgalek',
      ability:
        'After another friendly ship at range 0-2 is destroyed, you may perform a [Coordinate] action, even while stressed. While you coordinate, the ship you choose can perform an action only if that action is also on your action bar.',
      image: 'https://infinitearenas.com/xw2/images/pilots/lieutenantgalek.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/lieutenantgalek.png',
      slots: ['Talent', 'Talent', 'Cannon', 'Tech', 'Modification'],
      standard: true,
      extended: true,
      keywords: ['TIE'],
      epic: true,
    },
    {
      name: 'DT-798',
      caption: 'Jace Rucklin',
      initiative: 4,
      limited: 1,
      cost: 3,
      loadout: 6,
      xws: 'dt798',
      ability:
        'While you perform a primary attack, if you are not strained, you may gain 1 strain token to roll 1 additional die.',
      image:
        'https://infinitearenas.com/xw2/images/pilots/dt798-tiefofighter.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/dt798-tiefofighter.png',
      slots: ['Talent', 'Tech', 'Modification', 'Modification'],
      standard: true,
      extended: true,
      keywords: ['TIE'],
      epic: true,
    },
    {
      name: 'Lin Gaava',
      caption: 'Impetuous Mechanic',
      initiative: 3,
      limited: 1,
      cost: 3,
      loadout: 9,
      xws: 'lingaava',
      ability:
        'Setup: After placing forces, assign the Primed for Speed condition to yourself and up to 2 other friendly TIE/fo or TIE/sf Fighters that have no equipped [Modification] upgrades.',
      conditions: ['primedforspeed'],
      image: 'https://infinitearenas.com/xw2/images/pilots/lingaava.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/lingaava.png',
      slots: ['Talent', 'Talent', 'Tech', 'Modification'],
      standard: true,
      extended: true,
      keywords: ['TIE'],
      epic: true,
    },
  ],
};

export default t;

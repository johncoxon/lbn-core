import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Fireball',
  xws: 'fireball',
  ffg: 69,
  size: 'Small',
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
    '3ER',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '3RR',
    '4FR',
  ],
  faction: 'Resistance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 0 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'SLAM' },
  ],
  ability: {
    name: 'Explosion with Wings',
    text:
      'Setup: You are dealt 1 facedown damage card. After you perform a [Slam] action, you may expose 1 damage card to remove 1 disarm token.',
  },
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_Fireball.png',
  pilots: [
    {
      name: 'Colossus Station Mechanic',
      initiative: 2,
      limited: 0,
      xws: 'colossusstationmechanic',
      cost: 3,
      slots: ['Missile', 'Modification'],
      standard: true,
      epic: true,
      ffg: 623,
      text:
        'Some ambitious and talented pilots begin their racing careers as ground crew, working around the clock to keep cobbled-together ships in the sky on far-flung worlds like Castilon.',
      loadout: 2,
      extended: true,
      caption: '',
    },
    {
      name: 'Jarek Yeager',
      caption: 'Too Old for This',
      initiative: 5,
      limited: 1,
      xws: 'jarekyeager',
      ability:
        'While you have 2 or fewer stress tokens, if you are damaged, you can execute red basic maneuvers even while stressed; if you are critically damaged, you can execute red advanced maneuvers even while stressed.',
      cost: 3,
      slots: [
        'Talent',
        'Talent',
        'Missile',
        'Astromech',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      standard: true,
      epic: true,
      ffg: 620,
      loadout: 6,
      extended: true,
    },
    {
      name: 'Kazuda Xiono',
      caption: 'Best Pilot in the Galaxy',
      initiative: 4,
      limited: 1,
      xws: 'kazudaxiono',
      ability:
        "While you defend or perform a primary attack, if the enemy ship's initiative is higher than the number of damage cards you have, you may roll 1 additional die.",
      cost: 4,
      slots: [
        'Talent',
        'Missile',
        'Astromech',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      standard: true,
      epic: true,
      ffg: 621,
      loadout: 10,
      extended: true,
    },
    {
      name: 'R1-J5',
      caption: 'Bucket',
      initiative: 1,
      limited: 1,
      xws: 'r1j5',
      ability:
        'Before you expose 1 of your damage cards, you may look at your facedown damage cards, choose 1, and expose that card instead.',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Evade' },
        { difficulty: 'White', type: 'Barrel Roll' },
        { difficulty: 'White', type: 'SLAM' },
      ],
      cost: 2,
      slots: [],
      standard: true,
      epic: true,
      ffg: 622,
      keywords: ['Droid'],
      loadout: 0,
      extended: true,
    },
  ],
};

export default t;

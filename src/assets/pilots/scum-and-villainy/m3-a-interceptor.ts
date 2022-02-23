import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'M3-A Interceptor',
  xws: 'm3ainterceptor',
  ffg: 44,
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1NB',
    '1YW',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3BW',
    '3FB',
    '3NW',
    '3KR',
    '4FW',
    '5FW',
    '5KR',
  ],
  faction: 'Scum and Villainy',
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
  ability: {
    name: 'Weapon Hardpoint',
    text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
  },
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_Scyk.png',
  pilots: [
    {
      name: 'Cartel Spacer',
      initiative: 1,
      limited: 0,
      cost: 4,
      xws: 'cartelspacer',
      text:
        'MandalMotors\' M3-A "Scyk" Interceptor is purchased in large quantities by the Hutt Cartel and the Car\'das smugglers due to its low cost and customizability.',
      slots: ['Modification'],
      ffg: 190,
      standard: true,
      epic: true,
      loadout: 6,
      extended: true,
      caption: '',
    },
    {
      name: 'Genesis Red',
      caption: 'Tansarii Point Crime Lord',
      initiative: 4,
      limited: 1,
      cost: 5,
      xws: 'genesisred',
      ability:
        'After you acquire a lock, you must remove all of your focus and evade tokens. Then, gain the same number of focus and evade tokens that the locked ship has.',
      slots: ['Talent', 'Modification'],
      ffg: 184,
      standard: true,
      epic: true,
      loadout: 20,
      extended: true,
    },
    {
      name: 'Inaldra',
      caption: 'Tansarii Point Boss',
      initiative: 2,
      limited: 1,
      cost: 4,
      xws: 'inaldra',
      ability:
        'While you defend or perform an attack, you may suffer 1 [Hit] damage to reroll any number of your dice.',
      slots: ['Modification'],
      ffg: 187,
      standard: true,
      epic: true,
      loadout: 10,
      extended: true,
    },
    {
      name: 'Laetin A’shera',
      caption: 'Car’das Enforcer',
      initiative: 3,
      limited: 1,
      cost: 4,
      xws: 'laetinashera',
      ability:
        'After you defend or perform an attack, if the attack missed, gain 1 evade token.',
      slots: ['Talent', 'Modification'],
      ffg: 185,
      standard: true,
      epic: true,
      loadout: 10,
      extended: true,
    },
    {
      name: 'Quinn Jast',
      caption: 'Fortune Seeker',
      initiative: 3,
      limited: 1,
      cost: 4,
      xws: 'quinnjast',
      ability:
        'At the start of the Engagement Phase, you may gain 1 disarm token to recover 1 [Charge] on 1 of your equipped upgrades.',
      slots: ['Talent', 'Modification'],
      ffg: 186,
      standard: true,
      epic: true,
      keywords: ['Bounty Hunter'],
      loadout: 11,
      extended: true,
    },
    {
      name: 'Serissu',
      caption: 'Flight Instructor',
      initiative: 5,
      limited: 1,
      cost: 5,
      xws: 'serissu',
      ability:
        'While a friendly ship at range 0-1 defends, it may reroll 1 of its dice.',
      slots: ['Talent', 'Talent', 'Modification', 'Modification'],
      ffg: 183,
      standard: true,
      epic: true,
      loadout: 18,
      extended: true,
    },
    {
      name: 'Sunny Bounder',
      caption: 'Incurable Optimist',
      initiative: 1,
      limited: 1,
      cost: 4,
      xws: 'sunnybounder',
      ability:
        'While you defend or perform an attack, after you roll or reroll your dice, if you have the same result on each of your dice, you may add 1 matching result.',
      slots: ['Modification'],
      ffg: 188,
      standard: true,
      epic: true,
      loadout: 10,
      extended: true,
    },
    {
      name: 'Tansarii Point Veteran',
      initiative: 3,
      limited: 0,
      cost: 4,
      xws: 'tansariipointveteran',
      text:
        "The defeat of Black Sun ace Talonbane Cobra by Car'das smugglers turned the tide of the Battle of Tansarii Point Station. Survivors of the clash are respected throughout the sector.",
      slots: ['Modification'],
      ffg: 189,
      standard: true,
      epic: true,
      loadout: 8,
      extended: true,
      caption: '',
    },
    {
      name: 'G4R-G0R V/M',
      xws: 'g4rgorvm',
      initiative: 0,
      limited: 1,
      caption: 'Tilted Droid',
      standard: true,
      slots: ['Modification'],
      ability:
        'After you defend, each other ship at range 0 suffers 1 [Critical Hit] damage.',
      cost: 4,
      ffg: 636,
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Evade' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'White', type: 'Barrel Roll' },
      ],
      epic: true,
      keywords: ['Droid'],
      loadout: 11,
      extended: true,
    },
  ],
};

export default t;

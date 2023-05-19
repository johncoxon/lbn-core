import { UpgradeBase } from '../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'heavylasercannon',
    sides: [
      {
        title: 'Heavy Laser Cannon',
        type: 'Cannon',
        ability:
          'Attack: After the Modify Attack Dice step, change all [Critical Hit] results to [Hit] results.',
        slots: ['Cannon'],
        attack: {
          arc: 'Bullseye Arc',
          value: 4,
          minrange: 2,
          maxrange: 3,
          ordnance: false,
        },
        image:
          'https://infinitearenas.com/xw2/images/upgrades/heavylasercannon.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/heavylasercannon.png',
      },
    ],
    cost: { value: 5 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'ioncannon',
    sides: [
      {
        title: 'Ion Cannon',
        type: 'Cannon',
        ability:
          'Attack: If this attack hits, spend 1 [Hit] or [Critical Hit] result to cause the defender to suffer 1 [Hit] damage. All remaining [Hit]/[Critical Hit] results inflict ion tokens instead of damage.',
        slots: ['Cannon'],
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 1,
          maxrange: 3,
          ordnance: false,
        },
        image: 'https://infinitearenas.com/xw2/images/upgrades/ioncannon.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/ioncannon.png',
      },
    ],
    cost: { value: 6 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'jammingbeam',
    sides: [
      {
        title: 'Jamming Beam',
        type: 'Cannon',
        ability:
          'Attack: If this attack hits, all [Hit]/[Critical Hit] results inflict jam tokens instead of damage.',
        slots: ['Cannon'],
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 1,
          maxrange: 2,
          ordnance: false,
        },
        image: 'https://infinitearenas.com/xw2/images/upgrades/jammingbeam.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/jammingbeam.png',
      },
    ],
    cost: { value: 1 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'tractorbeam',
    sides: [
      {
        title: 'Tractor Beam',
        type: 'Cannon',
        ability:
          'Attack: If this attack hits, all [Hit]/[Critical Hit] results inflict tractor tokens instead of damage.',
        slots: ['Cannon'],
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 1,
          maxrange: 3,
          ordnance: false,
        },
        image: 'https://infinitearenas.com/xw2/images/upgrades/tractorbeam.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/tractorbeam.png',
      },
    ],
    cost: { value: 4 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'autoblasters',
    sides: [
      {
        ability:
          "Attack: If the defender is in your [Bullseye Arc], roll 1 additional die. During the Neutralize Results step, if you are not in the defender's [Front Arc], [Evade] results do not cancel [Critical Hit] results.",
        title: 'Autoblasters',
        type: 'Cannon',
        slots: ['Cannon'],
        attack: {
          arc: 'Front Arc',
          value: 2,
          minrange: 1,
          maxrange: 2,
          ordnance: false,
        },
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/autoblasters.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/autoblasters.png',
      },
    ],
    cost: { value: 7 },
    standard: false,
    epic: true,
    extended: true,
  },
  {
    xws: 'underslungblastercannon',
    limited: 0,
    cost: { value: 2 },
    sides: [
      {
        ability:
          'After an enemy ship executes a maneuver, you may perform this attack against it as a bonus attack. Attack ([Lock]):Your dice can be modified only by spending a lock for the default effect.',
        title: 'Underslung Blaster Cannon',
        type: 'Cannon',
        slots: ['Cannon'],
        attack: {
          arc: 'Single Turret Arc',
          value: 2,
          minrange: 1,
          maxrange: 1,
          ordnance: true,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/underslungblastercannon.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/underslungblastercannon.png',
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    restrictions: [
      { chassis: ['t70xwing', 't65xwing'], factions: ['Resistance'] },
    ],
  },
  {
    xws: 'syncedlasercannons',
    limited: 0,
    cost: { value: 6 },
    sides: [
      {
        title: 'Synced Laser Cannons',
        type: 'Cannon',
        slots: ['Cannon', 'Cannon'],
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: false,
        },
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/syncedlasercannons.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/syncedlasercannons.png',
        ability:
          'Attack: If you are calculating, the defender does not apply the range bonus.',
      },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'protoncannons',
    sides: [
      {
        ability:
          'Attack: Spend 2 [Charge]. Change 1 [Focus] or [Hit] result to a [Critical Hit] result.',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/protoncannons.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/protoncannons.png',
        charges: { value: 2, recovers: 1 },
        title: 'Proton Cannons',
        type: 'Cannon',
        slots: ['Cannon', 'Cannon'],
        attack: {
          arc: 'Bullseye Arc',
          value: 4,
          minrange: 2,
          maxrange: 3,
          ordnance: false,
        },
      },
    ],
    cost: { value: 4 },
    standard: true,
    extended: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'ancillaryionweapons-siegeofcoruscant',
    sides: [
      {
        ability:
          'While you perform a primary attack, before rolling attack dice, you may spend 2 [Charge]. If you do, your [Critical Hit] results inflict ion tokens instead of damage.',
        title: 'Ancillary Ion Weapons',
        type: 'Cannon',
        slots: ['Cannon'],
        charges: { value: 2, recovers: 1 },
      },
    ],
    standardLoadoutOnly: true,
    standard: true,
    extended: true,
    epic: true,
    cost: { value: 0 },
  },
];

export default t;

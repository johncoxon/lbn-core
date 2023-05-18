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
  faction: 'Galactic Empire',
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
      xws: 'captainhark',
      name: 'Captain Hark',
      ability:
        'After you reveal a (0 [Stop]) maneuver, if you are equipped with Swivel Wings (Down), you must execute a (1 [Left Bank]) or (1 [Right Bank]) sideslip maneuver of the same difficulty instead. After you execute that maneuver, you must flip Swivel Wings (Down).',
      cost: 6,
      loadout: 14,
      initiative: 3,
      limited: 1,
      standard: true,
      extended: true,
      epic: true,
      slots: [
        'Talent',
        'Crew',
        'Gunner',
        'Device',
        'Illicit',
        'Modification',
        'Configuration',
      ],
      keywords: ['Mandalorian'],
      caption: 'Obedient Underling',
      image: 'https://infinitearenas.com/xw2/images/pilots/captainhark.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/captainhark.png',
    },
    {
      xws: 'garsaxon',
      name: 'Gar Saxon',
      ability:
        "While a friendly unit at range 0-2 performs a primary attack, if the attacker is in the defender's [Rear Arc], you may spend 1 [Charge]. If you do, the attacker rolls 1 additional die.",
      charges: { value: 2, recovers: 1 },
      cost: 7,
      loadout: 18,
      initiative: 3,
      limited: 1,
      standard: true,
      extended: true,
      epic: true,
      slots: [
        'Talent',
        'Crew',
        'Torpedo',
        'Gunner',
        'Device',
        'Illicit',
        'Modification',
        'Configuration',
      ],
      keywords: ['Mandalorian'],
      caption: 'Treacherous Viceroy',
      image: 'https://infinitearenas.com/xw2/images/pilots/garsaxon.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/garsaxon.png',
    },
    {
      xws: 'imperialsupercommando',
      name: 'Imperial Super Commando',
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
        'Device',
        'Illicit',
        'Modification',
        'Configuration',
      ],
      keywords: ['Mandalorian'],
      image:
        'https://infinitearenas.com/xw2/images/pilots/imperialsupercommando.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/imperialsupercommando.png',
    },
  ],
};

export default t;

import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Scavenged YT-1300',
  xws: 'scavengedyt1300',
  ffg: 57,
  size: 'Large',
  dial: [
    '1BW',
    '1FB',
    '1NW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3LR',
    '3TW',
    '3BW',
    '3FW',
    '3NW',
    '3YW',
    '3PR',
    '4FR',
  ],
  faction: 'Resistance',
  stats: [
    { arc: 'Double Turret Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 8 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Boost' },
    { difficulty: 'Red', type: 'Rotate Arc' },
  ],
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_Falcon_Resistance.png',
  pilots: [
    {
      name: 'Resistance Sympathizer',
      initiative: 2,
      limited: 0,
      xws: 'resistancesympathizer',
      text:
        'After witnessing the Hosnian Cataclysm, some spacers willingly aided the Resistance with whatever ships they had.',
      cost: 6,
      slots: ['Talent', 'Missile', 'Gunner', 'Modification', 'Modification'],
      ffg: 430,
      standard: true,
      epic: true,
      loadout: 10,
      extended: true,
      keywords: ['Freighter', 'YT-1300'],
    },
    {
      name: 'Chewbacca',
      caption: 'Loyal Companion',
      initiative: 4,
      limited: 1,
      xws: 'chewbacca-scavengedyt1300',
      ability:
        'After a friendly ship at range 0-3 is destroyed, before that ship is removed, you may perform an action. Then you may perform a bonus attack.',
      cost: 7,
      loadout: 18,
      slots: [
        'Talent',
        'Talent',
        'Missile',
        'Crew',
        'Crew',
        'Gunner',
        'Illicit',
        'Illicit',
        'Modification',
        'Title',
      ],
      ffg: 429,
      standard: true,
      epic: true,
      extended: true,
      keywords: ['Freighter', 'YT-1300'],
    },
    {
      name: 'Han Solo',
      caption: 'Jaded Smuggler',
      initiative: 6,
      limited: 1,
      xws: 'hansolo-scavengedyt1300',
      ability:
        'Setup: You can be placed anywhere in the play area beyond range 3 of enemy ships.',
      cost: 6,
      slots: [
        'Talent',
        'Missile',
        'Crew',
        'Crew',
        'Gunner',
        'Illicit',
        'Illicit',
        'Modification',
        'Modification',
      ],
      ffg: 427,
      standard: false,
      epic: true,
      loadout: 15,
      extended: true,
      keywords: ['Freighter', 'YT-1300'],
    },
    {
      name: 'Rey',
      caption: 'Resourceful Scavenger',
      initiative: 5,
      limited: 1,
      xws: 'rey',
      ability:
        'While you defend or perform an attack, if the enemy ship is in your [Front Arc], you may spend 1 [Force] to change 1 of your blank results to an [Evade] or [Hit] result.',
      force: { value: 2, recovers: 1, side: ['light'] },
      cost: 8,
      slots: [
        'Force Power',
        'Talent',
        'Missile',
        'Crew',
        'Crew',
        'Gunner',
        'Illicit',
        'Modification',
        'Title',
      ],
      ffg: 428,
      standard: true,
      epic: true,
      keywords: ['Freighter', 'Light Side', 'YT-1300'],
      loadout: 25,
      extended: true,
    },
  ],
};

export default t;

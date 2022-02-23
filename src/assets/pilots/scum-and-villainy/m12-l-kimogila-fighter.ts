import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'M12-L Kimogila Fighter',
  xws: 'm12lkimogilafighter',
  ffg: 39,
  size: 'Medium',
  dial: [
    '1TR',
    '1BW',
    '1FB',
    '1NW',
    '1YR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 7 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Reload' },
  ],
  ability: {
    name: 'Dead to Rights',
    text:
      'While you perform an attack, if the defender is in your [Bullseye Arc], defense dice cannot be modified using green tokens.',
  },
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_Kimogila.png',
  pilots: [
    {
      name: 'Cartel Executioner',
      initiative: 3,
      limited: 0,
      cost: 5,
      xws: 'cartelexecutioner',
      text:
        'Many veteran pilots in the service of the Hutt kajidics and other criminal operations choose the M12-L Kimogila for its firepower and dreaded reputation alike.',
      slots: ['Missile'],
      ffg: 209,
      standard: false,
      epic: true,
      loadout: 3,
      extended: true,
      caption: '',
    },
    {
      name: 'Dalan Oberos',
      caption: 'Returned from the Grave',
      initiative: 3,
      limited: 1,
      cost: 5,
      xws: 'dalanoberos',
      ability:
        'At the start of the Engagement Phase, you may choose 1 shielded ship in your [Bullseye Arc] and spend 1 [Charge]. If you do, that ship loses 1 shield and you recover 1 shield.',
      charges: { value: 2, recovers: 0 },
      slots: [
        'Talent',
        'Torpedo',
        'Missile',
        'Astromech',
        'Illicit',
        'Modification',
      ],
      ffg: 208,
      standard: false,
      epic: true,
      keywords: ['Bounty Hunter'],
      loadout: 12,
      extended: true,
    },
    {
      name: 'Torani Kulda',
      caption: 'Rodian Freelancer',
      initiative: 4,
      limited: 1,
      cost: 5,
      xws: 'toranikulda',
      ability:
        'After you perform an attack, each enemy ship in your [Bullseye Arc] suffers 1 [Hit] damage unless it removes 1 green token.',
      slots: [
        'Talent',
        'Torpedo',
        'Missile',
        'Astromech',
        'Illicit',
        'Modification',
      ],
      ffg: 207,
      standard: false,
      epic: true,
      keywords: ['Bounty Hunter'],
      loadout: 10,
      extended: true,
    },
  ],
};

export default t;

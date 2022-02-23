import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'HWK-290 Light Freighter',
  xws: 'hwk290lightfreighter',
  ffg: 34,
  size: 'Small',
  dial: [
    '0OR',
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TR',
    '3BW',
    '3FB',
    '3NW',
    '3YR',
    '4FW',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Rotate Arc' },
      type: 'Focus',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Rotate Arc' },
      type: 'Lock',
    },
    { difficulty: 'Red', type: 'Boost' },
    { difficulty: 'White', type: 'Rotate Arc' },
    { difficulty: 'Red', type: 'Jam' },
  ],
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_HWK-290.png',
  pilots: [
    {
      name: 'Dace Bonearm',
      caption: 'Outer Rim Mercenary',
      initiative: 4,
      limited: 1,
      cost: 3,
      xws: 'dacebonearm',
      ability:
        'After an enemy ship at range 0-3 receives at least 1 ion token, you may spend 3 [Charge]. If you do, that ship gains 2 additional ion tokens.',
      charges: { value: 3, recovers: 1 },
      slots: ['Talent', 'Crew', 'Device', 'Illicit', 'Illicit', 'Modification'],
      ffg: 174,
      standard: true,
      epic: true,
      keywords: ['Freighter'],
      loadout: 9,
      extended: true,
    },
    {
      name: 'Palob Godalhi',
      caption: 'Tethan Resister',
      initiative: 3,
      limited: 1,
      cost: 6,
      xws: 'palobgodalhi',
      ability:
        'At the start of the Engagement Phase, you may choose 1 enemy ship in your firing arc at range 0-2. If you do, transfer 1 focus or evade token from that ship to yourself.',
      slots: [
        'Talent',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      ffg: 175,
      standard: true,
      epic: true,
      keywords: ['Freighter'],
      loadout: 12,
      extended: true,
    },
    {
      name: 'Spice Runner',
      initiative: 1,
      limited: 0,
      cost: 3,
      xws: 'spicerunner',
      text:
        'Though its cargo space is limited compared to other light freighters, the small, swift HWK-290 is a favorite choice of smugglers who specialize in discreetly transporting precious goods.',
      slots: ['Device', 'Illicit'],
      ffg: 177,
      standard: true,
      epic: true,
      keywords: ['Freighter'],
      loadout: 4,
      extended: true,
      caption: '',
    },
    {
      name: 'Torkil Mux',
      caption: 'Mercenary Miner',
      initiative: 2,
      limited: 1,
      cost: 4,
      xws: 'torkilmux',
      ability:
        'At the start of the Engagement Phase, you may choose 1 ship in your firing arc. If you do, that ship engages at initiative 0 instead of its normal initiative value this round.',
      slots: ['Crew', 'Device', 'Illicit', 'Modification', 'Modification'],
      ffg: 176,
      standard: true,
      epic: true,
      keywords: ['Freighter'],
      loadout: 10,
      extended: true,
    },
    {
      xws: 'gamutkey',
      name: 'Gamut Key',
      caption: 'Collaborationist Governor',
      cost: 3,
      initiative: 3,
      limited: 1,
      slots: [
        'Talent',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Modification',
      ],
      standard: true,
      epic: true,
      ability:
        'At the start of the End Phase, you may spend 2 [Charge] to choose yourself or a ship in your [Single Turret Arc] with 1 or more circular tokens. During the End Phase, circular tokens are not removed from that ship.',
      keywords: ['Freighter'],
      ffg: 896,
      loadout: 8,
      extended: true,
    },
    {
      xws: 'kananjarrus-hwk290lightfreighter',
      name: 'Kanan Jarrus',
      caption: 'Lost Padawan',
      cost: 4,
      initiative: 3,
      limited: 1,
      ability:
        'While you or a ship in your [Single Turret Arc] defends, you may spend 1 [Force]. If you do, the attacker rolls 1 fewer attack die.',
      force: { value: 1, recovers: 1, side: ['light'] },
      slots: [
        'Force Power',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Modification',
      ],
      standard: true,
      epic: true,
      keywords: ['Jedi', 'Light Side', 'Freighter'],
      ffg: 897,
      loadout: 10,
      extended: true,
    },
    {
      xws: 'tapusk',
      name: 'Tápusk',
      caption: 'Order 66 Informant',
      cost: 4,
      initiative: 5,
      limited: 1,
      ability:
        'During the End Phase, before an enemy ship in your [Single Turret Arc] recovers 1 recurring [Charge] or [Force], you may spend 2 [Charge]. If you do, that ship does not recover that [Charge] or [Force].',
      slots: [
        'Talent',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Modification',
      ],
      standard: true,
      epic: true,
      ffg: 895,
      loadout: 10,
      keywords: ['Freighter'],
      extended: true,
    },
  ],
};

export default t;

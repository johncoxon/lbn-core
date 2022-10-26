import { UpgradeBase } from '../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'barragerockets',
    sides: [
      {
        title: 'Barrage Rockets',
        type: 'Missile',
        ability:
          'Attack ([Focus]): Spend 1 [Charge]. If the defender is in your [Bullseye Arc], you may spend 1 or more [Charge] to reroll that many attack dice.',
        slots: ['Missile', 'Missile'],
        charges: { value: 5, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        ffg: 265,
      },
    ],
    cost: { value: 8 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'clustermissiles',
    sides: [
      {
        title: 'Cluster Missiles',
        type: 'Missile',
        ability:
          'Attack ([Lock]): Spend 1 [Charge]. After this attack, you may perform this attack as a bonus attack against a different target at range 0-1 of the defender, ignoring the [Lock] requirement.',
        slots: ['Missile'],
        charges: { value: 4, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 1,
          maxrange: 2,
          ordnance: true,
        },
        ffg: 266,
      },
    ],
    cost: { value: 4 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'concussionmissiles',
    sides: [
      {
        title: 'Concussion Missiles',
        type: 'Missile',
        ability:
          'Attack ([Lock]): Spend 1 [Charge]. After this attack hits, each ship at range 0-1 of the defender exposes 1 of its damage cards.',
        slots: ['Missile'],
        charges: { value: 3, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        ffg: 267,
      },
    ],
    cost: { value: 5 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'homingmissiles',
    sides: [
      {
        title: 'Homing Missiles',
        type: 'Missile',
        ability:
          'Attack ([Lock]): Spend 1 [Charge]. After you declare the defender, the defender may choose to suffer 1 [Hit] damage. If it does, skip the Attack and Defense Dice steps and the attack is treated as hitting.',
        slots: ['Missile'],
        charges: { value: 2, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 4,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        ffg: 268,
      },
    ],
    cost: { value: 5 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'ionmissiles',
    sides: [
      {
        title: 'Ion Missiles',
        type: 'Missile',
        ability:
          'Attack ([Lock]): Spend 1 [Charge]. If this attack hits, spend 1 [Hit] or [Critical Hit] result to cause the defender to suffer 1 [Hit] damage. All remaining [Hit]/[Critical Hit] results inflict ion tokens instead of damage.',
        slots: ['Missile'],
        charges: { value: 3, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        ffg: 269,
      },
    ],
    cost: { value: 4 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'protonrockets',
    sides: [
      {
        title: 'Proton Rockets',
        type: 'Missile',
        ability: 'Attack ([Focus]): Spend 1 [Charge].',
        slots: ['Missile'],
        charges: { value: 1, recovers: 0 },
        attack: {
          arc: 'Bullseye Arc',
          value: 5,
          minrange: 1,
          maxrange: 2,
          ordnance: true,
        },
        ffg: 270,
      },
    ],
    cost: { value: 8 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'energyshellcharges',
    sides: [
      {
        title: 'Energy-Shell Charges',
        type: 'Missile',
        ability:
          'Attack ([Calculate]): Spend 1 [Charge]. While you perform this attack, you may spend 1 calculate token to change 1 [Focus] result to a [Critical Hit] result. Action: Reload this card.',
        charges: { value: 1, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        slots: ['Missile'],
        ffg: 532,
      },
    ],
    restrictions: [
      { action: { type: 'Calculate', difficulty: 'White' } },
      { factions: ['Separatist Alliance'] },
    ],
    cost: { value: 4 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 3,
    xws: 'discordmissiles',
    sides: [
      {
        title: 'Discord Missiles',
        type: 'Missile',
        ability:
          "At the start of the Engagement Phase, you may spend 1 calculate token and 1 [Charge] to launch 1 buzz droid swarm using the (3 [Bank Left]), (3 [Straight]), or (3 [Bank Right]) template. This card's [Charge] cannot be recovered.",
        charges: { value: 1, recovers: 0 },
        slots: ['Missile'],
        device: {
          name: 'Buzz Droid Swarm',
          type: 'Remote',
          effect:
            'After an enemy ship moves through or overlaps you, relocate to its front or rear guides (you are at range 0 of this ship). You cannot overlap an object this way. If you cannot be placed at either set of guides, you and that ship each suffer 1 [Hit] damage. Engagement Phase: At your initiative, each enemy ship at range 0 suffers 1 [Critical Hit] damage.',
        },
        ffg: 543,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Separatist Alliance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'diamondboronmissiles',
    sides: [
      {
        title: 'Diamond-Boron Missiles',
        type: 'Missile',
        slots: ['Missile', 'Missile'],
        ability:
          "Attack ([Lock]): Spend 1 [Charge]. After this attack hits, you may spend 1 [Charge]. If you do, each ship at range 0-1 of the defender with agility equal to or less than the defender's rolls 1 attack die and suffers 1 [Hit]/[Critical Hit] damage for each matching result.",
        charges: { value: 3, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        ffg: 580,
      },
    ],
    standard: true,
    epic: true,
    cost: { value: 5 },
    extended: true,
  },
  {
    limited: 0,
    xws: 'magpulsewarheads',
    sides: [
      {
        ability:
          'Attack ([Lock]): Spend 1 [Charge]. If this attack hits, the defender suffers 1 [Critical Hit] damage and gains 1 deplete and 1 jam token. Then cancel all [Hit]/[Critical Hit] results.',
        attack: {
          arc: 'Front Arc',
          maxrange: 3,
          minrange: 1,
          ordnance: true,
          value: 3,
        },
        charges: { value: 2, recovers: 0 },
        title: 'Mag-Pulse Warheads',
        type: 'Missile',
        slots: ['Missile'],
        ffg: 651,
      },
    ],
    standard: true,
    epic: true,
    cost: { value: 4 },
    extended: true,
  },
  {
    limited: 0,
    xws: 'multimissilepods',
    standard: true,
    epic: true,
    sides: [
      {
        ability:
          'Attack ([Calculate] or [Lock]): Spend 1 [Charge]. If the defender is in your [Front Arc], you may spend 1 [Charge] to roll 1 additional attack die. If the defender is in your [Bullseye Arc], you may spend up to 2 [Charge] to roll that many additional attack dice instead.',
        attack: {
          arc: 'Full Front Arc',
          maxrange: 2,
          minrange: 1,
          ordnance: true,
          value: 2,
        },
        charges: { value: 5, recovers: 0 },
        title: 'Multi-Missile Pods',
        type: 'Missile',
        slots: ['Missile', 'Missile'],
        ffg: 673,
      },
    ],
    cost: { value: 4 },
    extended: true,
  },
  {
    limited: 2,
    xws: 'xx23sthreadtracers',
    standard: true,
    epic: true,
    sides: [
      {
        ability:
          'Attack ([Focus], [Calculate], or [Lock]): Spend 1 [Charge]. If this attack hits, each friendly ship at range 1-3 of the defender may acquire a lock on the defender. Then cancel all dice results.',
        attack: {
          arc: 'Front Arc',
          maxrange: 3,
          minrange: 1,
          ordnance: true,
          value: 3,
        },
        charges: { value: 2, recovers: 0 },
        title: 'XX-23 S-Thread Tracers',
        type: 'Missile',
        slots: ['Missile'],
        ffg: 851,
      },
    ],
    cost: { value: 4 },
    extended: true,
  },
  {
    limited: 2,
    xws: 'electrochaffmissiles',
    standard: true,
    sides: [
      {
        ability:
          'During the System Phase, you may spend 1 [Charge] from this card to launch 1 electro-chaff cloud using the (3 [Bank Left]), (4 [Straight]), or (3 [Bank Right]) template. Then place 1 fuse marker on it.\nThis card’s [Charge] cannot be recovered',
        device: {
          type: 'Remote',
          name: 'Electro-Chaff Missile',
          effect:
            '\n- While a ship is at range 0 of an electro-chaff cloud, it cannot be locked, jammed, or coordinated by other ships.\n- After a ship moves through or overlaps an electro-chaff cloud, it skips its perform action step, then it gains one jam token and breaks all locks on it.\n- While a ship defends, if the attack is obstructed by an electro-chaff cloud, it rolls one additional defence dice.\n\nDuring the End Phase remove each electro-chaff cloud with no fuse markers on it. Then remove one fuse marker from each electro-chaff cloud.\n          ',
        },
        charges: { value: 1, recovers: 0 },
        title: 'Electro-Chaff Missiles',
        type: 'Missile',
        slots: ['Missile', 'Device'],
        ffg: 932,
      },
    ],
    cost: { value: 9 },
    epic: true,
    extended: true,
  },
];

export default t;

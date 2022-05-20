import { ShipType } from '../../../types';

const t: ShipType = {
    "name": "Rogue-class Starfighter",
    "xws": "rogueclassstarfighter",
    "size": "Small",
    "dial": [
        "1TW",
        "1BB",
        "1NB",
        "1YW",
        "2ER",
        "2TW",
        "2BB",
        "2FB",
        "2NB",
        "2YW",
        "2RR",
        "3TR",
        "3BW",
        "3FB",
        "3NW",
        "3YR",
        "4FB",
        "5FW",
        "5KR"
    ],
    "faction": "Scum and Villainy",
    "stats": [
        { "arc": "Front Arc", "type": "attack", "value": 2 },
        { "type": "agility", "value": 2 },
        { "type": "hull", "value": 5 },
        { "type": "shields", "value": 2 }
    ],
    "actions": [
        {
            "difficulty": "White",
            "linked": { "difficulty": "Red", "type": "Boost" },
            "type": "Focus"
        },
        {
            "difficulty": "White",
            "linked": { "difficulty": "Red", "type": "Barrel Roll" },
            "type": "Focus"
        },
        {
            "difficulty": "White",
            "linked": { "difficulty": "Red", "type": "Barrel Roll" },
            "type": "Evade"
        },
        { "difficulty": "White", "type": "Lock" },
        { "difficulty": "Red", "type": "Boost" }
    ],
    "ability": {
        "name": "Networked Calculations",
        "text": "While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result."
    }, "pilots": [
        {
            "name": "Cad Bane",
            "caption": "Needs no introduction",
            "initiative": 4,
            "limited": 1,
            "cost": 0,
            "loadout": 0,
            "xws": "cadbane-separatistalliance",
            "slots": ["Title"],
            "ability": "During the Engagement Phase, after another ship at range 0-3 is destroyed, you may spend 1 [Charge] to perform an action, even while stressed.",
            "charges": { "value": 1, "recovers": 1 },
            "shipAbility": {
                "name": "Dead to Rights",
                "text": "While you perform an attack, if the defender is in your [Bullseye Arc], defense dice cannot be modified using green tokens."
            },
            "keywords": ["Bounty Hunter"],
            "standard": true,
            "extended": true,
            "epic": true
        },
        {
            "name": "IG-101",
            "caption": "Tenacious Bodyguard",
            "initiative": 4,
            "limited": 1,
            "cost": 0,
            "loadout": 0,
            "xws": "ig101",
            "slots": [],
            "ability": "At the start of the System Phase, you may repair 1 faceup damage card.",
            "shipActions": [
                {
                    "difficulty": "White",
                    "linked": { "difficulty": "Red", "type": "Boost" },
                    "type": "Calculate"
                },
                {
                    "difficulty": "White",
                    "linked": { "difficulty": "Red", "type": "Barrel Roll" },
                    "type": "Calculate"
                },
                {
                    "difficulty": "White",
                    "linked": { "difficulty": "Red", "type": "Barrel Roll" },
                    "type": "Evade"
                },
                { "difficulty": "White", "type": "Lock" },
                { "difficulty": "Red", "type": "Boost" }
            ],
            "keywords": ["Droid"],
            "standard": true,
            "extended": true,
            "epic": true
        },
        {
            "name": "MagnaGuard Executioner",
            "initiative": 3,
            "limited": 0,
            "cost": 0,
            "loadout": 0,
            "xws": "magnaguardexecutioner",
            "slots": [],
            "text": "In addition to guarding Separatist leaders, MagneGuard droids are sometimes dispatched in swift Rogue-class Starfighters to eliminate their enemies.",
            "shipActions": [
                {
                    "difficulty": "White",
                    "linked": { "difficulty": "Red", "type": "Boost" },
                    "type": "Calculate"
                },
                {
                    "difficulty": "White",
                    "linked": { "difficulty": "Red", "type": "Barrel Roll" },
                    "type": "Calculate"
                },
                {
                    "difficulty": "White",
                    "linked": { "difficulty": "Red", "type": "Barrel Roll" },
                    "type": "Evade"
                },
                { "difficulty": "White", "type": "Lock" },
                { "difficulty": "Red", "type": "Boost" }
            ],
            "keywords": ["Droid"],
            "standard": true,
            "extended": true,
            "epic": true
        },
        {
            "name": "MagnaGuard Protector",
            "caption": "Implacable Escort",
            "initiative": 4,
            "limited": 2,
            "cost": 0,
            "loadout": 0,
            "xws": "magnaguardprotector",
            "slots": [],
            "ability": "After placing forces, assign the Guarded condition to 1 friendly ship other than MagnaGuard Protector.",
            "shipActions": [
                {
                    "difficulty": "White",
                    "linked": { "difficulty": "Red", "type": "Boost" },
                    "type": "Calculate"
                },
                {
                    "difficulty": "White",
                    "linked": { "difficulty": "Red", "type": "Barrel Roll" },
                    "type": "Calculate"
                },
                {
                    "difficulty": "White",
                    "linked": { "difficulty": "Red", "type": "Barrel Roll" },
                    "type": "Evade"
                },
                { "difficulty": "White", "type": "Lock" },
                { "difficulty": "Red", "type": "Boost" }
            ],
            "keywords": ["Droid"],
            "standard": true,
            "extended": true,
            "epic": true
        },
        {
            "name": "IG-102",
            "caption": "Dueling Droid",
            "initiative": 4,
            "limited": 1,
            "cost": 0,
            "loadout": 0,
            "xws": "ig102",
            "slots": [],
            "ability": "While you defend, if the attacker's initiative is equal to or greater than yours, you may change 1 blank result to a [Focus] result.",
            "shipActions": [
                {
                    "difficulty": "White",
                    "linked": { "difficulty": "Red", "type": "Boost" },
                    "type": "Calculate"
                },
                {
                    "difficulty": "White",
                    "linked": { "difficulty": "Red", "type": "Barrel Roll" },
                    "type": "Calculate"
                },
                {
                    "difficulty": "White",
                    "linked": { "difficulty": "Red", "type": "Barrel Roll" },
                    "type": "Evade"
                },
                { "difficulty": "White", "type": "Lock" },
                { "difficulty": "Red", "type": "Boost" }
            ],
            "keywords": ["Droid"],
            "standard": true,
            "extended": true,
            "epic": true
        },
        {
            "name": "IG-111",
            "caption": "One Eye",
            "initiative": 1,
            "limited": 1,
            "cost": 0,
            "loadout": 0,
            "xws": "ig111",
            "slots": [],
            "ability": "After you perform an attack that missed, you may choose 1 enemy ship in your [Bullseye Arc] and gain 1 deplete token. If you do, that ship suffers 1 [Hit] damage.",
            "shipActions": [
                {
                    "difficulty": "White",
                    "linked": { "difficulty": "Red", "type": "Boost" },
                    "type": "Calculate"
                },
                {
                    "difficulty": "White",
                    "linked": { "difficulty": "Red", "type": "Barrel Roll" },
                    "type": "Calculate"
                },
                {
                    "difficulty": "White",
                    "linked": { "difficulty": "Red", "type": "Barrel Roll" },
                    "type": "Evade"
                },
                { "difficulty": "White", "type": "Lock" },
                { "difficulty": "Red", "type": "Boost" }
            ],
            "keywords": ["Droid"],
            "standard": true,
            "extended": true,
            "epic": true
        }
    ]
}

export default t
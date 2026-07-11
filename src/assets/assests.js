import BackGroundImg from './EternityImage/MainBackImg.jpg'
import ZenitsuSword from './EternityImage/CursorSword.png'
import ZentisuPhoto from './EternityImage/ZentisuPhoto.png'
import TeamHero from './EternityImage/TeamHero.jpg'

import TanjiroPhoto from './EternityImage/TanjiroPhoto.jpeg'
import InosukePhoto from './EternityImage/InosukePhoto.jpg'
import NezukoPhoto from './EternityImage/NezukoPhoto.jpg'

import LightningAsset1 from './EternityImage/LightningAsset3.png'
import LightningAsset2 from './EternityImage/LightningAsset2.png'

import ZenitsuBeginning from './EternityImage/CryZenitsu.jpeg'
import ZenitsuTraining from './EternityImage/TranningZenitsu.jpeg'
import ZenitsuHiddenPower from './EternityImage/SleepingZenitsu.jpg'
import ZenitsuBonds from './EternityImage/FourINOne.jpg'
import ZenitsuSwordPhoto from './EternityImage/SwordArt.png'

export const Eternity = {
    BackGroundImg,
    ZenitsuSword,
    ZentisuPhoto,
    TeamHero,
    InosukePhoto,
    NezukoPhoto,
    TanjiroPhoto,
    LightningAsset1,
    LightningAsset2,
    ZenitsuSwordPhoto,
}

export const navLinks = [
    { label: "Home", targetId: "HomeHeroSection", isExternal: false },
    { label: "About", targetId: "AboutFirstSection", isExternal: false },
    { label: "His Team", targetId: "TeamInfoSection", isExternal: false },
    { label: "Download", path: "https://aniterest.vercel.app/explore/zenitsu_img", isExternal: true }
];

export const heroData = {
    badge: "Thunder Breathing • First Form",
    firstName: "Zenitsu",
    lastName: "Agatsuma",
    description: "A cowardly yet kind-hearted Demon Slayer who often panics and fears death. Despite his timid nature, he possesses incredible potential when unconscious, becoming calm, precise, and deadly. Master of the Thunderclap and Flash.",
    cta: "Unleash Thunder"
}

export const aboutLore = {
    sectionTag: "The Golden Lightning // Lore",
    title: "The Legend of Zenitsu",
    chapters: [
        {
            id: "AboutFirstSection",
            tag: "Phase 01 // Origins",
            heading: "The Crying Beginning",
            text: "Zenitsu didn't choose the sword out of bravery; he fell into it out of debt and misfortune. Plagued by an intense fear of death and constant cowardice, he originally viewed himself as a failure who couldn't survive a single combat encounter.",
            imgSlot: "👉 PLACE IMAGE HERE: Zenitsu crying or being struck by lightning while training on a tree.",
            imgAsset: ZenitsuBeginning // Maps to your assets
        },
        {
            id: "TrainingSection",
            tag: "Phase 02 // Discipline",
            heading: "The Thunder Training",
            text: "Taken in by the former Thunder Hashira, Jigoro Kuwajima, Zenitsu was pushed to his absolute limits. Despite learning only a single form due to his limitations, he mastered the 'First Form: Thunderclap and Flash' to a degree of speed that rivals gods.",
            imgSlot: "👉 PLACE IMAGE HERE: Jigoro training Zenitsu, or Zenitsu holding his sword handle in a drawing stance.",
            imgAsset: ZenitsuTraining
        },
        {
            id: "AboutSecondSection",
            tag: "Phase 03 // Awakening",
            heading: "The Hidden Power",
            text: "When terror pushes him past his waking consciousness, Zenitsu enters a state of deep sleep that unlocks his true lethality. Devoid of anxiety and fear, his movements become purely muscle memory, unleashing blindingly fast slash chains.",
            imgSlot: "👉 PLACE IMAGE HERE: Sleeping Zenitsu with lightning sparks around his eyes/body.",
            imgAsset: ZenitsuHiddenPower
        },
        {
            id: "TransformationSection",
            tag: "Phase 04 // Bonds",
            heading: "Transformation Through Bonds",
            text: "Surrounded by Tanjiro and Inosuke, Zenitsu found a purpose greater than his own survival. Protected by friendship and driven by the desire to shield Nezuko and honor his master, he morphs from a terrified tag-along into a dependable protector.",
            imgSlot: "👉 PLACE IMAGE HERE: Zenitsu standing alongside Tanjiro, Inosuke, and Nezuko.",
            imgAsset: ZenitsuBonds
        }
    ]
};

export const swordData = {
    sectionTag: "Armament // Arsenal",
    title: "The Lightning Nichirin Blade",
    description: "Zenitsu's weapon of choice is a standard Nichirin Katana uniquely forged to harmonize with Thunder Breathing users. Unlike traditional katanas that completely alter color, Zenitsu's blade possesses a deep, running lightning-flash streak motif traversing the entire length of the steel edge.",
    specsTitle: "Blade Composition & Characteristics",
    specs: [
        { label: "Steel Type", value: "Scarlet Crimson Iron Sand & Ore" },
        { label: "Blade Motif", value: "Strikethrough Lightning Lightning-bolt Ripple Pattern" },
        { label: "Handguard (Tsuba)", value: "Silver Rimmed Golden Four-Leaf Clover Variant" },
        { label: "Unique Property", value: "Conducts extreme static friction into blinding flash bursts" }
    ],
    imgSlot: "👉 PLACE IMAGE HERE: A clean close-up shot of Zenitsu drawing his Nichirin blade showing the lightning pattern."
};

export const teamLore = {
    sectionTag: "Comrades // The Kamaboko Squad",
    title: "Bonds Forged In Battle",
    members: [
        {
            name: "Tanjiro Kamado",
            role: "Sun & Water Breathing Swordsman",
            relationship: "The Compassionate Anchor",
            description: "Tanjiro is the empathetic heart of the squad. He is the first person to truly look past Zenitsu's screaming fits and acknowledge his internal kindness and hidden lethality. Zenitsu relies heavily on Tanjiro's exceptional sense of smell and steady moral compass to steady his own profound anxieties.",
            imgSlot: "👉 PLACE IMAGE HERE: Tanjiro Kamado holding his black Nichirin blade or smiling with his hanafuda earrings.",
            imgAsset: Eternity.TanjiroPhoto
        },
        {
            name: "Inosuke Hashibira",
            role: "Beast Breathing Combatant",
            relationship: "The Chaotic Rival",
            description: "Inosuke is the exact opposite of Zenitsu—wild, aggressive, and completely fearless. While their dynamic is filled with constant screaming matches, headbutts, and insults, they share a deep, unbreakable respect. Zenitsu's speed and Inosuke's wild battle instincts complement each other perfectly under pressure.",
            imgSlot: "👉 PLACE IMAGE HERE: Inosuke wearing his signature boar mask or dual serrated swords ready for combat.",
            imgAsset: Eternity.InosukePhoto
        },
        {
            name: "Nezuko Kamado",
            role: "Demon Combatant // Chosen One",
            relationship: "The Ultimate Motivation",
            description: "Nezuko is Zenitsu's ultimate muse and the source of his surprising bursts of waking courage. He views her not as a demon threat, but as a pure soul worth shielding at any cost. Zenitsu will throw his own body into harm's way to protect her box, overcoming his absolute cowardice whenever she is in danger.",
            imgSlot: "👉 PLACE IMAGE HERE: Nezuko looking cute out of her box, or using her pink Exploding Blood demon art.",
            imgAsset: Eternity.NezukoPhoto
        }
    ]
};

export const breathingData = {
    sectionTag: "Combat Style // Mastery",
    title: "Thunder Breathing Forms",
    subtitle: "A combat style focused on channeling explosive power into the user's legs, allowing for blindingly high-speed movement resembling a lightning strike.",
    forms: [
        {
            num: "01",
            name: "Thunderclap and Flash",
            japanese: "Hekireki Issen",
            desc: "The baseline and foundation of the entire style. The user unsheathes their katana, dashes forward at blinding speeds that outrun sound, and decapitates the target in a single split-second motion. Zenitsu mastered this form to its absolute limit, creating variations like Six Fold, Eight Fold, and God Speed.",
            lethality: "Absolute Mastery // God Speed"
        },
        {
            num: "02",
            name: "Rice Spirit",
            japanese: "Inadama",
            desc: "The swordsman unleashes five rapid, interlocking arching slashes accompanied by static discharges in a single execution loop, striking multiple surrounding targets simultaneously.",
            lethality: "Area Denial Grid // 5 Continuous Slashes"
        },
        {
            num: "03",
            name: "Thunder Swarm",
            japanese: "Tsugumi",
            desc: "Generates a continuous, multi-directional wave of spinning electrical blade strikes that lock down a target area, crushing defenses through pure kinetic pressure.",
            lethality: "Frontal Execution // Wave Strike Matrix"
        },
        {
            num: "04",
            name: "Distant Thunder",
            japanese: "Enrai",
            desc: "A long-range offensive variant where the swordsman releases a succession of high-velocity electric slashes projected straight toward a distant adversary.",
            lethality: "Ranged Projection // Multi-Slash Chain"
        },
        {
            num: "05",
            name: "Heat Lightning",
            japanese: "Retsujitsu Raito",
            desc: "A high-temperature, upward-striking vertical slash infused with crackling lightning, designed to shatter guards and break heavy weapon holds.",
            lethality: "Vertical Piercer // Shield Breaker"
        },
        {
            num: "06",
            name: "Rumble and Flash",
            japanese: "Dengeki Raisen",
            desc: "A chaotic, wide-sweeping omnidirectional attack sequence that unleashes a torrent of electrical discharges, devastating everything in the user's immediate perimeter.",
            lethality: "Perimeter Flush // Radial Lightning Storm"
        },
        {
            num: "07",
            name: "Honoikazuchi no Kami",
            japanese: "Flaming Thunder God",
            desc: "The ultimate Seventh Form created exclusively by Zenitsu himself. Unconscious or conscious, he dashes forward with infinite momentum, manifesting the golden silhouette of a roaring lightning dragon that strikes instantly.",
            lethality: "Zenitsu's Signature // Supreme Dragon Strike"
        }
    ]
};
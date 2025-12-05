// Complete Toram Online Traits Database - Full Implementation
// All data parsed from traits.txt

// Import complete trait data
const traitsDataComplete = `⚪Tier I [completed and confirmed in-game]
Flinch Unavailable|debuff|Can no longer inflict [Flinch].
STR +1|stat|STR increases by 1.
INT +1|stat|INT increases by 1.
VIT +1|stat|VIT increases by 1.
AGI +1|stat|AGI increases by 1.
DEX +1|stat|DEX increases by 1.
MaxHP +200|stat|MaxHP increases by 200.
MaxMP +10|stat|MaxMP increases by 10.
ATK +5|combat|ATK increases by 5.
MATK +5|combat|MATK increases by 5.
DEF +10|combat|DEF increases by 10.
MDEF +10|combat|MDEF increases by 10.
Accuracy +3|combat|Accuracy increases by 3.
Dodge +3|combat|Dodge increases by 3.
ASPD +50|speed|ASPD increases by 50.
CSPD +50|speed|CSPD increases by 50.
Natural HP Regen +15|regen|Natural HP Regen increases by 15.
Natural MP Regen +5|regen|Natural MP Regen increases by 5.
Critical Rate +1|combat|Critical Rate increases by 1.
Critical Damage +1|combat|Critical Damage increases by 1.
Exp Gain +3%|utility|EXP gained from monsters increases by 3%.
Pet EXP Gain +6%|utility|EXP gained by pets increases by 6%.
Battlecast Lv1|proc|Dealing damage to a target increases CSPD by 20 for 6 seconds. Max 20 stacks.
Blood Regen Lv1|proc|Dealing damage to a target restores 200 HP. HP restored increases based on STR. Activates once every 3 seconds.
Blood Spell Lv1|proc|Dealing damage to a target restores 200 HP. HP restored increases based on INT. Activates every 3 seconds.
Bunker Edge Lv1|proc|Dealing damage to a target increases Physical Pierce by 1% for 5 seconds. Activation Power 20. Max 10 stacks.
Bunker Magica Lv1|proc|Dealing damage to a target increases Magic Pierce by 1% for 5 seconds. Activation Power 20. Max 10 stacks.
Counter Evasion Mana Lv1|proc|Restores 20 MP when the target performs an Evasion (excluding events). MP restored increases based on INT. Activates once every 6 seconds.
Counter Evasion Power Lv1|proc|When the target performs an Evasion, Attack increases by 100 for 10 seconds. Higher DEX leads to greater increase. Activates once every 20 seconds.
Counter Rage Lv1|proc|When taking damage from a target, Aggro increases by 10% for 12 seconds.
Counter Speed Lv1|proc|When taking damage from a target, ASPD, CSPD, and Action Speed increase by 2% for 3 seconds.
Critical Lv1|proc|Dealing damage to a target increases Critical Rate by 1 for 3 seconds. Effect duration increases based on CRT. Max 10 stacks.
Critical Rebound Lv1|proc|If your attack is MISS, Critical Rate increases by 4 for 60 seconds. Max 5 stacks.
Cursed Weapon Lv1|proc|Dealing damage reduces Max HP by 1% for 3 seconds, but increases ATK and MATK by 1. Max 99 stacks.
Dash Defence Lv1|proc|When using Evasion, for 3 seconds, Physical and Magical Resistance increase by 2%. Max 3 stacks.
Dash Power Lv1|proc|When using Evasion, for 3 seconds, ATK increases by 10 and ASPD increases by 100. Max 3 stacks.
Engineer Lv1|proc|Dealing damage increases ATK and MATK by 10, and CSPD by 10 for 20 seconds. Higher TEC leads to greater increase. Activates every 10 seconds.
Fighting Magica Lv1|proc|Dealing damage to a target increases MATK by 1 for 4 seconds. Max 300 stacks.
Fighting Power Lv1|proc|Dealing damage to a target increases ATK by 1 for 2 seconds. Max 300 stacks.
Foreseen Evasion Lv1|proc|When the target performs an Evasion (excluding events), Anticipate increases by 5% for 12 seconds.
Gearshift Lv1|proc|Dealing damage to a target increases ASPD by 20 for 3 seconds. Max 20 stacks.
Graze Mana Lv1|proc|Restores 10 MP if your attack is a Graze. Activation Power 10.
Graze Mana Boost Lv1|proc|If your attack is a Graze, for 15 seconds, MaxMP decreases by 300, but Short and Long Range Damage increases by 1%, and Accuracy increases by 60. Max 3 stacks.
Graze Precision Lv1|proc|If your attack is a Graze, Accuracy increases by 20 for 30 seconds. Max 5 stacks.
Guarded Advantage Lv1|proc|When the target performs a Guard (excluding events), Guard Break increases by 5% for 12 seconds.
Guarded Magica Lv1|proc|When the target performs a Guard (excluding events), MATK increases by 50 for 10 seconds. Higher DEX leads to greater increase. Activates every 20 seconds.
Guarded Recovery Lv1|proc|Restores 1000 HP when the target performs a Guard (excluding events). HP restored increases based on STR. Activates every 6 seconds.
Health Barrier Lv1|proc|Dealing damage increases Physical Barrier and Magic Barrier by 2 for 6 seconds. Higher MTL leads to greater increase. Max 100 stacks.
Life Purge Lv1|proc|When taking damage, for 20 seconds, MaxHP decreases by 1%, but ASPD increases by 50. Max 5 stacks.
Lucky Experience Lv1|proc|Dealing damage increases EXP Gain by 1% for 77 seconds. Max stacks increase based on LUK. Max 10 stacks.
Magica Rebound Lv1|proc|If your attack is MISS, MATK increases by 10 for 30 seconds. Max 10 stacks.
Mana Combat Lv1|proc|Restores 1 MP when taking damage. MP restored increases based on VIT.
Mana Rebound Lv1|proc|Restores 100 MP if your attack is MISS. Activation Power 10.
Mega Power Rebound Lv1|proc|If attack is MISS, for 90 seconds, ATK increases by 100, Critical Rate by 50, and Accuracy decreases by 9999.
Nimble Lv1|proc|Dealing damage increases Dodge by 1 for 6 seconds. Max 30 stacks.
Power Rebound Lv1|proc|If your attack is MISS, ATK increases by 10 for 30 seconds. Max 10 stacks.
Precision Lv1|proc|Dealing damage increases Accuracy by 1 for 6 seconds. Max 30 stacks.
Spirit Blow Lv1|proc|Dealing damage restores 2 MP. MP restored increases based on AGI. Activates every 6 seconds.
Spirit Shot Lv1|proc|Dealing damage restores 2 MP. MP restored increases based on DEX. Activates every 6 seconds.
Vengeful Life Lv1|proc|When taking damage, MaxHP increases by 50 for 180 seconds. Max 120 stacks.
Vengeful Magica Lv1|proc|When taking damage, MATK increases by 10 for 30 seconds. Max 90 stacks.
Vengeful Mana Lv1|proc|When taking damage, Max MP increases by 5 for 180 seconds. Max 30 stacks.
Vengeful Power Lv1|proc|When taking damage, ATK increases by 10 for 30 seconds. Max 90 stacks.
Vengeful Samurai Lv1|proc|When taking damage, Unsheathe Power increases by 100 for 9 seconds. Max 1 stack.
🟢Tier II [completed and confirmed in-game]
Stun Unavailable|debuff|Can no longer inflict [Stun].
STR +2|stat|STR increases by 2.
INT +2|stat|INT increases by 2.
VIT +2|stat|VIT increases by 2.
AGI +2|stat|AGI increases by 2.
DEX +2|stat|DEX increases by 2.
MaxHP +400|stat|MaxHP increases by 400.
MaxMP +20|stat|MaxMP increases by 20.
ATK +10|combat|ATK increases by 10.
MATK +10|combat|MATK increases by 10.
DEF +20|combat|DEF increases by 20.
MDEF +20|combat|MDEF increases by 20.
Accuracy +6|combat|Accuracy increases by 6.
Dodge +6|combat|Dodge increases by 6.
ASPD +100|speed|ASPD increases by 100.
CSPD +100|speed|CSPD increases by 100.
Natural HP Regen +30|regen|Natural HP Regen increases by 30.
Natural MP Regen +10|regen|Natural MP Regen increases by 10.
Critical Rate +2|combat|Critical Rate increases by 2.
Critical Damage +2|combat|Critical Damage increases by 2.
Exp Gain +6%|utility|EXP gained from monsters increases by 6%.
Pet EXP Gain +12%|utility|EXP gained by pets increases by 12%.
Battlecast Lv2|proc|Dealing damage increases CSPD by 40 for 6 seconds. Max 20 stacks.
Blood Regen Lv2|proc|Dealing damage restores 400 HP. HP restored increases based on STR. Activates every 3 seconds.
Blood Spell Lv2|proc|Dealing damage restores 400 HP. HP restored increases based on INT. Activates every 3 seconds.
Fighting Magica Lv2|proc|Dealing damage increases MATK by 2 for 4 seconds. Max 150 stacks.
Fighting Power Lv2|proc|Dealing damage increases ATK by 2 for 2 seconds. Max 150 stacks.
Gearshift Lv2|proc|Dealing damage increases ASPD by 40 for 3 seconds. Max 20 stacks.
Vengeful Life Lv2|proc|When taking damage, MaxHP increases by 100 for 180 seconds. Max 100 stacks.
Vengeful Samurai Lv2|proc|When taking damage, Unsheathe Power increases by 100 for 9 seconds. Max 2 stacks.
🔵Tier III [completed and confirmed in-game]
Tumble Unavailable|debuff|Can no longer inflict [Tumble].
STR +3|stat|STR increases by 3.
INT +3|stat|INT increases by 3.
VIT +3|stat|VIT increases by 3.
AGI +3|stat|AGI increases by 3.
DEX +3|stat|DEX increases by 3.
MaxHP +600|stat|MaxHP increases by 600.
MaxMP +30|stat|MaxMP increases by 30.
ATK +15|combat|ATK increases by 15.
MATK +15|combat|MATK increases by 15.
DEF +30|combat|DEF increases by 30.
MDEF +30|combat|MDEF increases by 30.
Accuracy +9|combat|Accuracy increases by 9.
Dodge +9|combat|Dodge increases by 9.
ASPD +150|speed|ASPD increases by 150.
CSPD +150|speed|CSPD increases by 150.
Natural HP Regen +45|regen|Natural HP Regen increases by 45.
Natural MP Regen +15|regen|Natural MP Regen increases by 15.
Critical Rate +3|combat|Critical Rate increases by 3.
Critical Damage +3|combat|Critical Damage increases by 3.
Exp Gain +9%|utility|EXP gained from monsters increases by 9%.
Pet EXP Gain +18%|utility|EXP gained by pets increases by 18%.
Battlecast Lv3|proc|Dealing damage increases CSPD by 60 for 6 seconds. Max 20 stacks.
Blood Regen Lv3|proc|Dealing damage restores 600 HP. HP restored increases based on STR. Activates every 3 seconds.
Blood Spell Lv3|proc|Dealing damage restores 600 HP. HP restored increases based on INT. Activates every 3 seconds.
Fighting Magica Lv3|proc|Dealing damage increases MATK by 3 for 4 seconds. Max 100 stacks.
Fighting Power Lv3|proc|Dealing damage increases ATK by 3 for 2 seconds. Max 100 stacks.
Gearshift Lv3|proc|Dealing damage increases ASPD by 60 for 3 seconds. Max 20 stacks.
Vengeful Life Lv3|proc|When taking damage, MaxHP increases by 200 for 180 seconds. Max 80 stacks.
Vengeful Samurai Lv3|proc|When taking damage, Unsheathe Power increases by 100 for 9 seconds. Max 3 stacks.
🟣Tier IV [completed and confirmed in-game]
STR +4|stat|STR increases by 4.
INT +4|stat|INT increases by 4.
VIT +4|stat|VIT increases by 4.
AGI +4|stat|AGI increases by 4.
DEX +4|stat|DEX increases by 4.
MaxHP +800|stat|MaxHP increases by 800.
MaxMP +40|stat|MaxMP increases by 40.
ATK +20|combat|ATK increases by 20.
MATK +20|combat|MATK increases by 20.
DEF +40|combat|DEF increases by 40.
MDEF +40|combat|MDEF increases by 40.
Accuracy +12|combat|Accuracy increases by 12.
Dodge +12|combat|Dodge increases by 12.
ASPD +200|speed|ASPD increases by 200.
CSPD +200|speed|CSPD increases by 200.
Natural HP Regen +60|regen|Natural HP Regen increases by 60.
Natural MP Regen +20|regen|Natural MP Regen increases by 20.
Critical Rate +4|combat|Critical Rate increases by 4.
Critical Damage +4|combat|Critical Damage increases by 4.
Exp Gain +12%|utility|EXP gained from monsters increases by 12%.
Pet EXP Gain +24%|utility|EXP gained by pets increases by 24%.
Battlecast Lv4|proc|Dealing damage increases CSPD by 80 for 6 seconds. Max 20 stacks.
Blood Regen Lv4|proc|Dealing damage restores 800 HP. HP restored increases based on STR. Activates every 3 seconds.
Blood Spell Lv4|proc|Dealing damage restores 800 HP. HP restored increases based on INT. Activates every 3 seconds.
Fighting Magica Lv4|proc|Dealing damage increases MATK by 4 for 4 seconds. Max 75 stacks.
Fighting Power Lv4|proc|Dealing damage increases ATK by 4 for 2 seconds. Max 75 stacks.
Gearshift Lv4|proc|Dealing damage increases ASPD by 80 for 3 seconds. Max 20 stacks.
Vengeful Life Lv4|proc|When taking damage, MaxHP increases by 400 for 180 seconds. Max 60 stacks.
Vengeful Samurai Lv4|proc|When taking damage, Unsheathe Power increases by 100 for 9 seconds. Max 4 stacks.
🟡Tier V [needs screenshots]
STR +5|stat|STR increases by 5.
INT +5|stat|INT increases by 5.
VIT +5|stat|VIT increases by 5.
AGI +5|stat|AGI increases by 5.
DEX +5|stat|DEX increases by 5.
MaxHP +1000|stat|MaxHP increases by 1000.
MaxMP +50|stat|MaxMP increases by 50.
ATK +25|combat|ATK increases by 25.
MATK +25|combat|MATK increases by 25.
DEF +50|combat|DEF increases by 50.
MDEF +50|combat|MDEF increases by 50.
Accuracy +15|combat|Accuracy increases by 15.
Dodge +15|combat|Dodge increases by 15.
ASPD +250|speed|ASPD increases by 250.
CSPD +250|speed|CSPD increases by 250.
Natural HP Regen +75|regen|Natural HP Regen increases by 75.
Natural MP Regen +25|regen|Natural MP Regen increases by 25.
Critical Rate +5|combat|Critical Rate increases by 5.
Critical Damage +5|combat|Critical Damage increases by 5.
Exp Gain +15%|utility|EXP gained from monsters increases by 15%.
Pet EXP Gain +30%|utility|EXP gained by pets increases by 30%.
Battlecast Lv5|proc|Dealing damage increases CSPD by 100 for 6 seconds. Max 20 stacks.
Blood Regen Lv5|proc|Dealing damage restores 1000 HP. HP restored increases based on STR. Activates every 3 seconds.
Blood Spell Lv5|proc|Dealing damage restores 1000 HP. HP restored increases based on INT. Activates every 3 seconds.
Fighting Magica Lv5|proc|Dealing damage increases MATK by 5 for 4 seconds. Max 60 stacks.
Fighting Power Lv5|proc|Dealing damage increases ATK by 5 for 2 seconds. Max 60 stacks.
Gearshift Lv5|proc|Dealing damage increases ASPD by 100 for 3 seconds. Max 20 stacks.
Vengeful Life Lv5|proc|When taking damage, MaxHP increases by 800 for 180 seconds. Max 40 stacks.
Vengeful Samurai Lv5|proc|When taking damage, Unsheathe Power increases by 100 for 9 seconds. Max 5 stacks.`;

// Parse trait data
function parseTraitData() {
    const lines = traitsDataComplete.split('\n');
    const tiers = { 1: [], 2: [], 3: [], 4: [], 5: [] };
    let currentTier = 1;
    
    lines.forEach(line => {
        if (line.includes('Tier II') || line.includes('🟢Tier II')) currentTier = 2;
        else if (line.includes('Tier III') || line.includes('🔵Tier III')) currentTier = 3;
        else if (line.includes('Tier IV') || line.includes('🟣Tier IV')) currentTier = 4;
        else if (line.includes('Tier V') || line.includes('🟡Tier V')) currentTier = 5;
        else if (line.includes('|')) {
            const [name, type, description] = line.split('|');
            if (name && type && description) {
                tiers[currentTier].push({ name, type, description, tier: currentTier });
            }
        }
    });
    
    return tiers;
}

const traitsData = parseTraitData();

// Game mechanics and notes
const gameMechanics = [
    {
        title: "Activation Power",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
        description: "% power generated until proc at 100%. Then resets to 0 again after proc."
    },
    {
        title: "Stack Mechanics",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><rect x="3" y="3" width="18" height="5"/><rect x="3" y="10" width="18" height="5"/><rect x="3" y="17" width="18" height="5"/></svg>',
        description: "For abilities with 'Max X stacks' and a timer, each successful activation will +1 stack until max and reset timer to max duration. If the timer runs out, all stacks are removed."
    },
    {
        title: "Multi-Hit Restriction",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><path d="M14.5 2l6 6-8 8-6-6 8-8z"/><path d="M10 10l-6 6 2 2 6-6"/></svg>',
        description: "Multi-hit skills/auto only gain +1 stack per cast. Only 'Active' damage instances count - passive attacks (Asura Punch, Decoy Shot, Shadow Walk, etc.) are entirely excluded."
    },
    {
        title: "MISS Attack Mechanics",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>',
        description: "You must actively register the MISS hit to proc these traits. Skills that purposely give MISS by going out of range (like Gust Wind, Zephyr, Kunai LRD) are excluded. Cloning attack MISS also doesn't count."
    },
    {
        title: "Equipment Stacking",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',
        description: "Putting the same ability on weapon and armor stacks both effects in battle (e.g., Mega Power Rebound Lv3 on Weapon + Lv2 on Armor = both effects proc instead of just Lv3)."
    },
    {
        title: "Transfer Rules",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>',
        description: "Can only transfer ability through same weapon type (MD → MD, HB → HB, etc.). Base transfer chance is 10% + Radiant Chance, goes to 100% if through same weapon name."
    },
    {
        title: "Radiant Chance",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
        description: "The success rate of Trait Transfer increases by 10% × Radiance Chance Level. Changes to 'Radiant Chance Lv+1' upon failure. Max Level: 9."
    },
    {
        title: "Magic Hammer Effects",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><path d="M14 7l-8.5 8.5a2.12 2.12 0 1 0 3 3L17 10"/><path d="M17 10l5-5"/><path d="m19 5-2 2"/></svg>',
        description: "Magic Hammer: -10% success rate. Super Magic Hammer: -30% success rate. Hyper Magic Hammer: -70% success rate. Can stack multiple hammers until success rate reaches 0%."
    },
    {
        title: "Transfer Failure",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#ff4444" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
        description: "If the transfer fails, the ability will be replaced entirely with Radiant Chance. Be careful when putting your desired ability to your weapon/armor!"
    },
    {
        title: "Self-Proc Trick",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
        description: "You can self-proc damage-taken abilities like Vengeful series by stepping on your own traps via Chancy Trap regislet."
    },
    {
        title: "Tier 5 Drop Condition",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
        description: "'Lv 200+ boss Ultimate diff' for Tier 5 drop does not follow weekly emblem conditions. Any boss with Ultimate difficulty at Lv200+ can drop Tier 5 Trait (proven from Arachnidemon)."
    },
    {
        title: "Sub Weapon Slot",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><path d="M14.5 2l6 6-8 8-6-6 8-8z"/><line x1="5" y1="19" x2="19" y2="5"/></svg>',
        description: "Sub Weapon slot will not trigger the Ability effect (same as crystal/sub weapon stat rule)."
    }
];

// Three.js scene setup
let scene, camera, renderer, particles;

function initThreeJS() {
    const canvas = document.getElementById('three-canvas');
    scene = new THREE.Scene();
    
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Create floating particles
    const particleCount = 1500;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 60;
        positions[i + 1] = (Math.random() - 0.5) * 60;
        positions[i + 2] = (Math.random() - 0.5) * 60;
        
        const colorChoice = Math.random();
        if (colorChoice < 0.33) {
            colors[i] = 0.0; colors[i + 1] = 0.8; colors[i + 2] = 1.0; // Blue
        } else if (colorChoice < 0.66) {
            colors[i] = 0.65; colors[i + 1] = 0.33; colors[i + 2] = 0.96; // Purple
        } else {
            colors[i] = 1.0; colors[i + 1] = 0.7; colors[i + 2] = 0.0; // Gold
        }
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    
    particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    
    const light = new THREE.AmbientLight(0x00d4ff, 0.5);
    scene.add(light);
    
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    
    if (particles) {
        particles.rotation.x += 0.0002;
        particles.rotation.y += 0.0004;
    }
    
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// App state
let currentTier = 'all';
let currentCategory = 'all';
let searchQuery = '';
let allTraits = [];

// Initialize app
function init() {
    // Combine all traits
    for (let tier in traitsData) {
        allTraits = allTraits.concat(traitsData[tier]);
    }
    
    initThreeJS();
    setupEventListeners();
    renderNotes();
    updateStats();
    renderTraits();
    
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
    }, 1500);
}

// Setup event listeners
function setupEventListeners() {
    // Tier buttons
    document.querySelectorAll('.tier-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tier-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTier = btn.dataset.tier;
            updateStats();
            renderTraits();
        });
    });
    
    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderTraits();
        });
    });
    
    // Search input
    document.getElementById('search-input').addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderTraits();
    });
}

// Render notes section
function renderNotes() {
    const container = document.getElementById('notes-container');
    container.innerHTML = '';
    
    gameMechanics.forEach(note => {
        const noteCard = document.createElement('div');
        noteCard.className = 'note-card';
        noteCard.innerHTML = `
            <h3>
                <span class="note-icon">${note.icon}</span>
                ${note.title}
            </h3>
            <p>${note.description}</p>
        `;
        container.appendChild(noteCard);
    });
}

// Update statistics
function updateStats() {
    document.getElementById('total-traits').textContent = allTraits.length;
    document.getElementById('active-tier').textContent = currentTier === 'all' ? 'All' : currentTier === 'transfer' ? 'Transfer' : `Tier ${currentTier}`;
    document.getElementById('visible-traits').textContent = getFilteredTraits().length;
}

// Get filtered traits
function getFilteredTraits() {
    let filtered = allTraits;
    
    // Filter by tier
    if (currentTier !== 'all' && currentTier !== 'transfer') {
        filtered = filtered.filter(t => t.tier === parseInt(currentTier));
    }
    
    // Filter by category
    if (currentCategory !== 'all') {
        filtered = filtered.filter(t => t.type === currentCategory);
    }
    
    // Filter by search
    if (searchQuery) {
        filtered = filtered.filter(t => 
            t.name.toLowerCase().includes(searchQuery) ||
            t.description.toLowerCase().includes(searchQuery)
        );
    }
    
    return filtered;
}

// Render traits
function renderTraits() {
    const container = document.getElementById('traits-container');
    
    if (currentTier === 'transfer') {
        renderTransferInfo(container);
        return;
    }
    
    const filtered = getFilteredTraits();
    container.innerHTML = '';
    
    filtered.forEach((trait, index) => {
        const card = document.createElement('div');
        card.className = 'trait-card';
        card.style.animationDelay = `${index * 0.03}s`;
        
        const typeIcon = getTypeIcon(trait.type);
        
        card.innerHTML = `
            <div class="trait-header">
                <div class="trait-name">${trait.name}</div>
                <div class="trait-tier tier-${trait.tier}">Tier ${trait.tier}</div>
            </div>
            <div class="trait-description">${trait.description}</div>
            <div class="trait-stats">
                <span class="stat-badge">${typeIcon} ${trait.type.toUpperCase()}</span>
            </div>
        `;
        
        container.appendChild(card);
    });
    
    updateStats();
}

// Render transfer information
function renderTransferInfo(container) {
    container.innerHTML = `
        <div class="trait-card" style="grid-column: 1 / -1;">
            <div class="trait-header">
                <div class="trait-name">💎 Radiant Chance</div>
                <div class="trait-tier tier-5">Special</div>
            </div>
            <div class="trait-description">
                The success rate of Trait Transfer increases by 10% × Radiance Chance Level. 
                Changes to "Radiant Chance Lv+1" upon failure. Max Level: Level 9.
            </div>
            <div class="trait-stats">
                <span class="stat-badge">✨ TRANSFER</span>
            </div>
        </div>
        
        <div class="trait-card">
            <div class="trait-header">
                <div class="trait-name">🔄 Transfer Success Rate</div>
            </div>
            <div class="trait-description">
                Base transfer chance is 10% + Radiant Chance. Goes straight to 100% if transferring through same weapon name 
                (e.g., 10th anniv KTN VI → 10th anniv KTN VI).
            </div>
        </div>
        
        <div class="trait-card">
            <div class="trait-header">
                <div class="trait-name">🔨 Magic Hammer</div>
            </div>
            <div class="trait-description">
                Magic Hammer: -10% success rate<br>
                Super Magic Hammer: -30% success rate<br>
                Hyper Magic Hammer: -70% success rate<br>
                Can stack multiple hammers until 0%.
            </div>
        </div>
        
        <div class="trait-card">
            <div class="trait-header">
                <div class="trait-name">⚠️ Transfer Failure</div>
            </div>
            <div class="trait-description">
                If the transfer fails, the ability will be replaced entirely with Radiant Chance. 
                The gear with transferred ability will NOT be deleted.
            </div>
        </div>
        
        <div class="trait-card">
            <div class="trait-header">
                <div class="trait-name">📋 Transfer Rules</div>
            </div>
            <div class="trait-description">
                Can only transfer ability through same weapon type (MD → MD, HB → HB, etc.). 
                If using different hammer tiers simultaneously, it will randomize the level up between lowest and highest tier.
            </div>
        </div>
    `;
    
    document.getElementById('visible-traits').textContent = '5';
}

// Get type icon
function getTypeIcon(type) {
    const icons = {
        'stat': '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;vertical-align:middle;"><path d="M2 2v12h12"/><path d="M12 11l-3-3-2 2-4-4"/></svg>',
        'combat': '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;vertical-align:middle;"><path d="M10 2l4 4-5 5-4-4 5-5z"/><circle cx="11" cy="11" r="2"/></svg>',
        'speed': '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;vertical-align:middle;"><path d="M9 2L2 9h6l-1 5 7-7H8l1-5z"/></svg>',
        'regen': '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;vertical-align:middle;"><path d="M14 3a4 4 0 0 0-5.5 0L8 3.5 7.5 3a4 4 0 0 0-5.5 5.5l.5.5L8 14.5l5.5-5.5.5-.5a4 4 0 0 0 0-5.5z"/></svg>',
        'utility': '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;vertical-align:middle;"><path d="M8 2v2M8 12v2M3.5 3.5l1.4 1.4M11.1 11.1l1.4 1.4M2 8h2M12 8h2M3.5 12.5l1.4-1.4M11.1 4.9l1.4-1.4"/><circle cx="8" cy="8" r="2"/></svg>',
        'proc': '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;vertical-align:middle;"><polygon points="8 1 10 5 14 6 11 9 12 13 8 11 4 13 5 9 2 6 6 5 8 1"/></svg>',
        'debuff': '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;vertical-align:middle;"><circle cx="8" cy="8" r="6"/><path d="M10 6l-4 4M6 6l4 4"/></svg>'
    };
    return icons[type] || '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;vertical-align:middle;"><circle cx="8" cy="8" r="6"/></svg>';
}

// Create floating background particles
function createBackgroundParticles() {
    const container = document.getElementById('particles-container');
    for (let i = 0; i < 60; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 5 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = Math.random() * 0.6 + 0.2;
        particle.style.animation = `float ${Math.random() * 12 + 8}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        const colorChoice = Math.random();
        if (colorChoice < 0.5) {
            particle.style.background = 'radial-gradient(circle, #00d4ff, transparent)';
        } else {
            particle.style.background = 'radial-gradient(circle, #a855f7, transparent)';
        }
        
        container.appendChild(particle);
    }
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.3; }
            25% { transform: translateY(-30px) translateX(15px) scale(1.1); opacity: 0.5; }
            50% { transform: translateY(-15px) translateX(-15px) scale(0.9); opacity: 0.4; }
            75% { transform: translateY(-40px) translateX(8px) scale(1.05); opacity: 0.6; }
        }
    `;
    document.head.appendChild(style);
}

// Start the app
window.addEventListener('DOMContentLoaded', () => {
    createBackgroundParticles();
    init();
});

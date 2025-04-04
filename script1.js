const talentsMapping = { yes: 1, no: 0 };
const weekendMapping = { yes: 1, no: 0 };
const halloweenMapping = { yes: 2, no: 0 };

function generateBossOptions() {
    const bossList = [
        "X Fighter Trainer",
        "klirin",
        "Kid Nohag",
        "Turtle Student",
        "Radish",
        "Mapa",
        "Citizen",
        "Top X Fighter",
        "Super Vegetable",
        "Kaio Student",
        "Chilly",
        "Perfect Atom",
        "SSJ2 Wukong",
        "Kai-fist Master",
        "SSJB Wukong",
        "Broccoli",
        "SSJG Kakata",
        "Vegetable (GoD in training)",
        "Wukong (Omen)",
        "Vills (50%)",
        "Vis(20%)",
        "Vegetable (LBSSJ4)",
        "Wukong (LBSSJ4)",
        "Vekuta (LBSSJ4)",
        "Wukong Rose",
        "Vekuta (SSJBUI)",
        "Oozaru",
        "Halloween boss",
    ];
    const statsBoss = [
        700, 1000, 1400, 2000, 2600, 3100, 3500, 4000, 6500, 9500, 9000, 16000,
        22000, 28500, 35000, 50000, 70000, 110000, 170000, 245000, 290000,
        330000, 370000, 420000, 500000, 580000, 5000000, 100000,
    ];

    const bossSelect = document.getElementById("boss");
    bossList.forEach((boss, index) => {
        const option = document.createElement("option");
        option.text = boss;
        option.value = statsBoss[index];
        bossSelect.appendChild(option);
    });
}

document.addEventListener("DOMContentLoaded", function(event) {
    generateBossOptions();
});

document
    .getElementById("calculateButton")
    .addEventListener("click", calculateGain);

function formatNumberWithUnit(number, unit) {
    if (number === 0) return '';
    if (number === 1) return number;
    return number + ' ';
}

function calculateGain() {
    const rebirths = parseInt(document.getElementById("rebirths").value);
    const talents = talentsMapping[document.getElementById("talents").value];
    const weekend = weekendMapping[document.getElementById("weekend").value];
    const halloween = halloweenMapping[document.getElementById("halloween").value];
    
    const bossSelect = document.getElementById("boss");
    const boss = parseInt(bossSelect.value);
    const bossName = bossSelect.options[bossSelect.selectedIndex].text;

    if (isNaN(rebirths)) {
        document.getElementById("result").textContent =
            "⚠️Please enter a valid number for rebirths⚠️";
        return;
    }


    const baseMultiplier = 1 + (rebirths * 0.25); 


    let totalMultiplier = baseMultiplier; 
    if (talents) {
        totalMultiplier += baseMultiplier;
    }

    
    if (weekend) {
        totalMultiplier += baseMultiplier; 
    }

   
    if (halloween) {
        totalMultiplier += 2 * baseMultiplier; 
    }


    const finalStats = totalMultiplier * boss; 
    const punchstr = (totalMultiplier * 30).toLocaleString('en-US');
    const punchspd = (totalMultiplier * 15).toLocaleString('en-US');
    const abs = (totalMultiplier * 120).toLocaleString('en-US');
    const speed = (totalMultiplier * 22.5).toLocaleString('en-US');

    // 
    const m = 3000000;
    const zee = Math.floor(m * rebirths + 2000000).toLocaleString('en-US');
    
    
    document.getElementById("result").textContent = `${bossName} : ${Math.floor(finalStats).toLocaleString('en-US')} stats !`;
    document.getElementById("reb").textContent = `Stats needed to rebirth : ${zee} stats `;
    document.getElementById("punch").textContent = `Punch : ${punchstr} strength and ${punchspd} speed !`;
    document.getElementById("abs").textContent = `Defense train move : ${abs} defense`;
    document.getElementById("blast").textContent = `Ki blast : ${punchstr} energy`;
    document.getElementById("speed").textContent = `Aura boost : ≈ ${speed} speed /s`;
}


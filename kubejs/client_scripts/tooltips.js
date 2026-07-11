ItemEvents.tooltip(event => {
  
  event.add('gtceu:large_helper_factory', 'Has Perfect OC\nCan perform ALL helper assembler recipes\nCan only have one energy hatch')

  event.add('kubejs:basic_chemist_helper', '§7Lab coat for optimal aura farming\n§r§4Recipes using this helper are on circuit 3\n(even if JEI doesn\'t say so)')

function convertToRoman(num) {
  // Map standard Roman numeral values and their subtractive combinations
  const lookup = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" }
  ];

  let result = "";

  // Loop through each value-numeral pair
  for (const item of lookup) {
    // Check if the current value can be subtracted from the number
    while (num >= item.value) {
      result += item.numeral; // Append the Roman symbol
      num -= item.value;      // Subtract the value
    }
  }

  return result;
}

  function rectangleTooltip(name)
  {
    event.add(`gtceu:power_rectangle_${name}`, '§r§4Can only have one dynamo hatch')
  }

  function addHelperTooltip(helper, text)
  {
    event.add(`kubejs:${helper}_helper`, `§4${text}§r`)
  }

  function multiName(name)
  {
    return `§a${name}`
  }
  // function multiDescription(lore, recipe, modifiers, parallelHatch, extra)
  // {

  // }
  const nl = "====================="
  const x = "§r"
  const gr = "§r§a"
  const or = "§r§6"
  const ye = "§r§e"
  const re = "§r§4"
  const gre = "§r§7"
  const wh = ""
  const b = "§r§b"

  function cubeTooltip(name)
  {
    const displayName = name.replace(/_/g, " ").replace(/^./, c => c.toUpperCase());

    event.add(`gtceu:cube_${name}`, [
        `${gr}Cube ${displayName}`,
        nl,
        `${gre}Uses ${gr}${displayName}${x} ${gre}recipes`,
        `${gre}Has ${or}Cube Boosting${x} ${gre}and ${ye}Non-Perfect Overclocks${x}`,
        nl,
        `${gre}Consumes ${gr}75% EU/t${x} ${gre}of base recipe`,
        `${gre}Runs recipes at ${gr}125% speed${x}`,
        `${gre}Runs ${gr}2 parallels${x}`,
        nl,
        `${gre}Can only use ${re}normal maintenance hatches`,
        `${gre}Can only have ${re}one energy hatch`
    ]);
  }


  addHelperTooltip('advanced_chemist', 'Recipes using this helper are on circuit 3\n(even if JEI doesn\'t say so)')
  addHelperTooltip('ev_technician', 'Recipes using this helper are on circuit 3\n(even if JEI doesn\'t say so)')
  addHelperTooltip('hv_technician', 'Recipes using this helper are on circuit 3\n(even if JEI doesn\'t say so)')

  event.add(`gtceu:power_rectangle_helper_calorie_converter`, '\n§6Can run helper calorie conversion recipes')
  event.add(`gtceu:beam_of_teus`, '§6Can use parallel hatches')

  event.add(`voyagercore:magmatic_foundry`, [
    `${or}Magmatic Foundry`,
    nl,
    `${gre}Uses ${gr}Electric Blast Furnace${x} ${gre}recipes`,
    `${gre}Has ${or}Heat Boosting${x} ${gre}and ${ye}EBF Overclocks${x}`,
    nl,
    `${gre}Consumes ${gr}85% EU/t${x} ${gre}of base recipe`,
    `${gre}For every ${re}500K${x} ${gre}above recipe temperature, gain ${gr}an additional parallel${x}`,
    `${gre}For every ${re}1000K${x} ${gre}above recipe temperature, reduce recipe time by ${gr}10% multiplicatively${x}`,
    nl,
    `${gre}Consumes ${or}10mb/s${x} ${gre}of ${or}Pyrotheum${x} ${gre}in order to run recipes`,
    `${gre}Can only have ${re}one energy hatch`
])

  event.add(`voyagercore:chemical_plant`, [
    `${or}Chemical Plant`,
    nl,
    `${gre}Uses ${gr}Chemical Reactor and Chemical Plant${x} ${gre}recipes`,
    `${gre}Has ${or}Heat Boosting${x} ${gre}and ${ye}Perfect Overclocks${x}`,
    nl,
    `${gre}Consumes ${gr}85% EU/t${x} ${gre}of base recipe`,
    `${gre}For every ${re}500K${x} ${gre}above recipe temperature, gain ${gr}an additional parallel${x}`,
    `${gre}For every ${re}1000K${x} ${gre}above recipe temperature, reduce recipe time by ${gr}10% multiplicatively${x}`,
    nl,
    `${gre}Since ${gr}Chemical Reactor${gre} Recipes do not have temperature requirements,`,
    `a ${re}1000K temperature${gre} will be added for ${or}each voltage tier${gre} of recipe for ${or}heat boosting calculation${gre}`,
])

event.add(`voyagercore:everfrost_chiller`, [
    `${b}Everfrost Chiller`,
    nl,
    `${gre}Uses ${gr}Vacuum Freezer${x} ${gre}recipes`,
    `${gre}Has ${or}Basic Boosting${x} ${gre}and ${ye}Non-Perfect Overclocks${x}`,
    nl,
    `${gre}Consumes ${gr}85% EU/t${x} ${gre}of base recipe`,
    `${gre}Gain ${gr}+2 parallels${x} ${gre}and reduce the recipe duration by ${gr}10% multiplicatively${gre} `,
    `${gre}for each ${ye}voltage overclock`,
    nl,
    `${gre}Consumes ${or}10mb/s${x} ${gre}of ${b}Cryotheum${x} ${gre}in order to run recipes`,
    `${gre}Can only have ${re}one energy hatch`
])

event.add(`voyagercore:pulverizer`, [
    `${ye}Pulverizer`,
    nl,
    `${gre}Uses ${gr}Pulverizer${x} ${gre}recipes`,
    `${gre}Can use ${or}Parallel Hatches${x} ${gre}and has ${ye}Non-Perfect Overclocks${x}`,
    nl,
    `${gre}For each ${ye}crushing wheel tier${gre} above recipe crushing wheel tier,${x}`,
    `${gre}increase yield of all outputs by 1`,
    nl,
    `${gre}Consumes ${or}250mb/s${x} ${gre}of ${ye}High Stress Lubricant${x} ${gre}in order to run recipes`,
])

function donut(tierNum, tierVol, acceptedHatches)
{
  event.add(`voyagercore:${tierVol}_super_donut`, [
    `${b}Supermassive Fusion Array Mk ${convertToRoman(tierNum)} ${gre}(Super Donut ${convertToRoman(tierNum)})`,
    nl,
    `${gre}Uses ${gr}Fusion${x}${gre} recipes`,
    `${gre}Has ${or}Advanced Boosting${x}${gre} and ${ye}Fusion Overclocking${x}`,
    nl,
    `${gre}Has base ${gr}4 parallels${x}`,
    ``,
    `${gre}Gain ${gr}2× parallels${x}${gre} and reduce recipe duration by ${gr}10%${x}${gre} multiplicatively`,
    `${gre}for each ${ye}voltage overclock${x}`,
    nl,
    `${gre}Every Fusion Array tier above the recipe tier provides a ${gr}2-2 overclock${x}`,
    `${gre}Accepts ${ye}${acceptedHatches}${x}${gre} Energy Hatches`,
    `${gre}Can be boosted up to ${ye}${acceptedHatches.split(", ").pop().replace("and ", "")}${x}${gre} Energy Hatch tier`,
    `${gre}Can use ${ye}multi-amp hatches${x}${gre} for boosting`,
    `${gre}Can run ${or}Mk ${convertToRoman(tierNum)}${x}${gre} and below ${ye}Fusion recipes`
  ])
}

const tiermap = {
  luv: "luv",
  zpm: "zpm",
  uv: "uv"
}

donut(1, tiermap.luv, "LuV, ZPM, and UV")
donut(2, tiermap.zpm, "ZPM and UV")
donut(3, tiermap.uv, "UV")


event.add(`voyagercore:beam_of_teus`, [
    `${re}Beam of Teus`,
    nl,
    `${gre}Uses ${gr}Beam Heating${x} ${gre}recipes`,
    `${gre}Has base${or} 10% beam concentration${x} ${gre}and ${ye}10% lens heat${x}`,
    `${gre}Effective beam concentration = base +${or} beam provided ${gre}concentration % + ${ye}overclock ${gre}concentration`,
    nl,
    `${gre}For every ${gr}5% beam concentration${x} above ${or}10%${gre}, ${gr}decrease recipe time by 25% ${gre}multiplicatively`,
    `${gre}For every ${re}10% lens heat${x} above ${re}10%${gre}, ${gr}decrease EU/t by 8%${gre}, up to 90% lens heat`,
    `${gre}For every ${re}1% lens heat${x} above ${re}90%${gre}, ${re}decrease beam concentration by 7%${gre}, down to base%`,
    nl,
    `${gre}For every ${or}10s${gre} of machine running, ${or}increase lens heat by 1% (up to 110%)`,
    `${gre}For every ${or}10s${gre} of machine idling, ${or}decrease lens heat by 2% (down to base %)`,
    `${gre}Providing ${b}100mb of Cryotheum${gre} will decrease ${re}heat${gre} by 2% (in 10s intervals)`,
    `${gre}Lens heat will not increase if coolant is provided`,
    `${gre}If heat reaches ${re}above 105%, recipe will be voided`,
    nl,
    `${gre}For every voltage tier above ${b}IV, ${gr}increase beam concentration by 5%`,
    `${gre}Can use ${ye}multi-amp hatches${x}${gre}`,
])
  event.add(`gtceu:atmospheric_collector`, '§6Collects gas and dust from the surrounding atmosphere and freezes it§r\n§6Can use parallel hatches§r')
  
  rectangleTooltip('helper_calorie_converter')

  addHelperTooltip('hungry', 'Can consume a LOT of calories')

  event.add(`gtceu:perfected_electrum_ingot`, '§bCold to the touch')
  event.add(`kubejs:teus_beam_block`, '§7Fabricated by Teus, of clan GitHubbus Contributus of planet Venus')
  cubeTooltip('macerator');
  cubeTooltip('electrolyzer')
  cubeTooltip('oven');
  cubeTooltip('centrifuge')
  cubeTooltip('thermal_centrifuge')
  cubeTooltip('autoclave')

  event.add(`gtceu:radiation_chamber`, ['§aFocuses radioactive decay particles into a central chamber§r','§6Can only use 4x parallel hatches§r'])
  event.add(`voyagercore:hyper_helper_calorie_converter`, [
    `${gr}Hyper Helper Calorie Converter`,
    nl,
    `${gre}Uses ${gr}Advanced Helper Calorie Conversion${x}${gre} recipes`,
    `${ye}Only accepts IV-tier Helpers/Cookies and above${x}`,
    `${gre}Certain helper drinks provide ${gr}bonuses`,
    nl,
    `${or}Distilled Water${x}${gre} (1000mb/5s)`,
    `${ye}100% EU/t${x}${gre} | ${ye}100% Recipe Duration${x}`,
    `${wh}Milk${x}${gre} (350mb/5s)`,
    `${gr}200% EU/t${x}${gre} | ${gr}150% Recipe Duration${x}`,
    `${b}Helperade (Blue Raspberry)${x}${gre} (50mb/5s)`,
    `${gr}400% EU/t${x}${gre} | ${gr}400% Recipe Duration${x}`,
    `${gre}Water (5000mb/5s)`,
    `${re}50% EU/t${x}${gre} | ${re}50% Recipe Duration${x}`,
    nl,
    `${gre}If no drink is provided, the helper will eat your cookies, and generate ${re}10% EU/t${gre}`
])
  event.add(`gtceu:advanced_gas_turbine_xl_turbine`, ['§aAdvanced Gas Turbine XL§r','=====================', 'Uses §aGas Turbine§r recipes', '§6Only takes LuV rotor holders and above§r','=====================', 'Makes the same amount of power as 4 Large Gas Turbines', 'while using significantly less fuel'
  ])

})

.aisle("aaaaa", "cdddc", "cdddc", "efefe", "cdddc", "cdddc", "aaaaa")
.aisle("aaaaa", "dgggd", "dhhhd", "fhhhf", "dhhhd", "dgggd", "aaaaa")
.aisle("aaaaa", "dgdgd", "dhdhd", "ehdhe", "dhdhd", "dgdgd", "aaaaa")
.aisle("aaaaa", "dgggd", "dhhhd", "fhhhf", "dhhhd", "dgggd", "aaaaa")
.aisle("aabaa", "cdddc", "cdddc", "efefe", "cdddc", "cdddc", "aaaaa")

.where("a", Predicates.blocks("kubejs:foundry_casing"))
.where("b", Predicates.blocks("gtceu:magmatic_foundry"))
.where("c", Predicates.blocks("gtceu:tungsten_frame"))
.where("d", Predicates.blocks("minecraft:air"))
.where("e", Predicates.blocks("gtceu:steel_firebox_casing"))
.where("f", Predicates.blocks("gtceu:high_temperature_smelting_casing"))
.where("g", Predicates.blocks("gtceu:heat_vent"))
.where("h", Predicates.blocks("gtceu:cupronickel_coil_block"))

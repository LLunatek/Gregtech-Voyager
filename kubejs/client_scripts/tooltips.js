ItemEvents.tooltip(event => {
  
  event.add('gtceu:large_helper_factory', 'Has Perfect OC\nCan perform ALL helper assembler recipes\nCan only have one energy hatch')

  event.add('kubejs:basic_chemist_helper', '§7Lab coat for optimal aura farming\n§r§4Recipes using this helper are on circuit 3\n(even if JEI doesn\'t say so)')

  function cubeTooltip(name)
  {
    event.add(`gtceu:cube_${name}`, '§7Has perfect overclock and batching\n§r§4Can only have one energy hatch&r\n§4MUST have a normal maintenance hatch')
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
  const gr = "§a"
  const or = "§6"
  const ye = "§e"
  const re = "§4"


  addHelperTooltip('advanced_chemist', 'Recipes using this helper are on circuit 3\n(even if JEI doesn\'t say so)')
  addHelperTooltip('ev_technician', 'Recipes using this helper are on circuit 3\n(even if JEI doesn\'t say so)')
  addHelperTooltip('hv_technician', 'Recipes using this helper are on circuit 3\n(even if JEI doesn\'t say so)')

  event.add(`gtceu:power_rectangle_helper_calorie_converter`, '\n§6Can run helper calorie conversion recipes')
  event.add(`gtceu:beam_of_teus`, '§6Can use parallel hatches')

  event.add(`gtceu:titanite_blast_furnace`, [
    `${gr}Titanite Foundry`,
    nl,
    `Uses ${gr}Electric Blast Furnace${x} recipes`,
    `Has ${or}Heat Boosting${x} and ${ye}EBF Overclocks${x}`,
    nl,
    `Consumes ${gr}85% EU/t${x} of normal EBF recipes`,
    `For every ${re}500K${x} above recipe temperature, gain ${gr}an additional parallel${x}`,
    `For every ${re}1000K${x} above recipe temperature, reduce recipe time by ${gr}10% multiplicatively${x}`,
    nl,
    `Consumes ${or}10mb/t${x} of ${ye}Blasting Gas${x} in order to run recipes`,
    `Can only have ${re}one energy hatch`
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

  event.add(`gtceu:radiation_chamber`, ['§aFocuses radioactive decay particles into a central chamber§r','§6Can only use 4x parallel hatches§r'])
  event.add(`gtceu:power_rectangle_hyper_helper_calorie_converter`, ['§aHyper Helper Calorie Converter§r',
    '=====================', 
    'Uses §aAdvanced Helper Calorie Conversion§r recipes', 
    '§6Only takes IV Tier helpers/cookies and above§r',
    '=====================', 
    'Consumes distilled water, milk, or helperade', 
    'Distilled water (15mb/t):\n §6100%§r EU/t Multiplier | §6100%§r Recipe Duration Multiplier',
    'Milk (3mb/t):\n §a200%§r EU/t Multiplier | §a150%§r Recipe Duration Multiplier'
    ,'§bHelperade (Blue Rasberry)§r (5mb/t):\n §a400%§r EU/t Multiplier | §a400%§r Recipe Duration Multiplier'
    ,'=====================', 
    '§8For now, you can find this information in the actual recipes in JEI, but in future it will just be machine logic.'
  ])
  event.add(`gtceu:advanced_gas_turbine_xl_turbine`, ['§aAdvanced Gas Turbine XL§r','=====================', 'Uses §aGas Turbine§r recipes', '§6Only takes LuV rotor holders and above§r','=====================', 'Makes the same amount of power as 4 Large Gas Turbines', 'while using significantly less fuel'
  ])

})
ServerEvents.recipes((event) => {

    // event, output, inputItems, inputFluids, eut, duration
    global.recipe_chem_bath(event, `2x forestry:impregnated_stick`, `2x gtceu:treated_wood_rod`, `gtceu:seed_oil 100`, 120, 45)
    // global.recipe_chem_bath(event, `forestry:impregnated_casing`, `2x gtceu:treated_wood_rod`, `gtceu:seed_oil 100`, 120, 30)
    global.recipe_assembler(event, `forestry:impregnated_casing`, 
        [`forestry:sturdy_casing`, `32x forestry:impregnated_stick`, `4x gtceu:steel_plate`], `gtceu:seed_oil 1000`, 120, 60
    )

    global.recipe_chem_bath(event, `forestry:escritoire`, `minecraft:crafting_table`, `gtceu:seed_oil 500`, 120, 30)

})

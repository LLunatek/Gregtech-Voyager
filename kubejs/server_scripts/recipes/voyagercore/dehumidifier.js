ServerEvents.recipes((event) => {
    // event.recipes.gtceu.
    //     helper_assembly_jei("kubejs:helper_assembly_dummy")
        
    event.recipes.gtceu.large_dehumidifier("kjs:dehumidifier_water")
        .circuit(1)
        .outputFluids("minecraft:water 8000")
        .duration(20)
        .EUt(28)

})

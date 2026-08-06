ServerEvents.recipes((event) => {
    event.recipes.gtceu
        .large_helper_wheel('kubejs:large_helper_wheel')   // recipe ID
        .itemInputs('minecraft:cookie')
        .inputFluids("kubejs:melted_butter 5")
        .duration(20)                                 // in ticks
        .EUt(-128 * 4)     

    // @ts-ignore
    event.shaped(
        Item.of("gtceu:large_helper_wheel", 1), // arg 1: output
        [
            "DBD",
            "BAB", // arg 2: the shape (array of strings)
            "CBC"
        ],
        {
            A: "gtceu:hv_machine_hull",
            B: "gtceu:fluxed_cobalt_electrum_rotor", //arg 3: the mapping object
            C: "gtceu:stainless_steel_plate",
            D: "#gtceu:circuits/hv"
        }
    )
})

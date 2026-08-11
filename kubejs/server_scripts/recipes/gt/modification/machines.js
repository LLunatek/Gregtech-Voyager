ServerEvents.recipes((event) => {
    // @ts-ignore
    event.remove({output: "gtceu:lv_super_tank", input: "gtceu:steel_plate"})
    event.shaped(
        Item.of("gtceu:lv_super_tank", 1), // arg 1: output
        [
            "ADA",
            "CBC", // arg 2: the shape (array of strings)
            "AEA"
        ],
        {
            A: "#gtceu:circuits/lv",
            B: "gtceu:lv_hermetic_casing", //arg 3: the mapping object
            C: "gtceu:steel_plate",
            D: "gtceu:pearlic_steel_plate",
            E: "gtceu:lv_electric_pump"
        }
    )

    
})

ServerEvents.recipes((event) => {
    event.remove({ mod: "industrialforegoing" })

    event.shaped(
        Item.of("industrialforegoing:machine_frame_pity", 1), // arg 1: output
        [
            "   ",
            "CAC", // arg 2: the shape (array of strings)
            "BDB"
        ],
        {
            D: "gtceu:aluminium_frame",
            C: "gtceu:rubber_plate",
            A: "gtceu:lv_machine_hull",
            B: "gtceu:gold_single_cable"
        }
    )

    event.shaped(
        Item.of("industrialforegoing:plant_gatherer", 1), // arg 1: output
        [
            "BEB",
            "DAC", // arg 2: the shape (array of strings)
            "FFF"
        ],
        {
            D: "gtceu:mv_electric_pump",
            C: "gtceu:mv_robot_arm",
            A: "industrialforegoing:machine_frame_pity",
            B: "#gtceu:circuits/mv",
            E: "kubejs:farmer_helper",
            F: "gtceu:steel_plate"
            // G: 'minecraft:bucket'
        }
    )

    event.shaped(
        Item.of("industrialforegoing:plant_sower", 1), // arg 1: output
        [
            "BGB",
            "DAC", // arg 2: the shape (array of strings)
            "FFF"
        ],
        {
            D: "gtceu:mv_electric_pump",
            C: "gtceu:mv_robot_arm",
            A: "industrialforegoing:machine_frame_pity",
            B: "#gtceu:circuits/mv",
            // E: 'minecraft:bucket',
            F: "gtceu:aluminium_plate",
            G: "#forge:seeds"
        }
    )

    // event.recipes.gtceu.assembler('kubejs:framed_cube')
    //     .itemInputs(
    //         '4x gtceu:wood_screw',
    //         '2x gtceu:wood_plate',
    //         '4x minecraft:stick'
    //     )
    //     .itemOutputs('8x framedblocks:framed_cube')
    //     .duration(60)
    //     .EUt(2);
})

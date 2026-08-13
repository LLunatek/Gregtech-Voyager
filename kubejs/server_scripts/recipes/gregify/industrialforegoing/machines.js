ServerEvents.recipes((event) => {
    event.remove({ mod: "industrialforegoing" })

    function if_machine(crafting_result, a, b, c, d, e, f)
    {
        event.shaped(
        Item.of(crafting_result, 1), // arg 1: output
            [
                "FEF",
                "CAC", // arg 2: the shape (array of strings)
                "BDB"
            ],
            {
                A: a,
                B: b,
                C: c,
                D: d,
                E: e,
                F: f
            }
        )
    }

    function if_ns(str)
    {
        return "industrialforegoing:" + str
    }

    const pity_frame = if_ns("machine_frame_pity")
    const simple_frame = if_ns("machine_frame_simple")
    const advanced_frame = if_ns("machine_frame_advanced")

    if_machine(if_ns("mob_slaughter_factory"), simple_frame, "gtceu:vanadium_steel_buzz_saw_blade", '#gtceu:circuits/mv', 'gtceu:mv_fluid_regulator', "gtceu:double_pink_steel_plate", "gtceu:vanadium_steel_buzz_saw_blade")
    if_machine(if_ns("mob_crusher"), advanced_frame, "gtceu:red_steel_buzz_saw_blade", '#gtceu:circuits/ev', if_ns("pink_slime"), "gtceu:double_pink_steel_plate", "gtceu:pink_steel_gear")
    


    // @ts-ignore
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

    // @ts-ignore
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
            E: "gtceu:copper_single_cable",
            F: "gtceu:aluminium_plate"
            // G: 'minecraft:bucket'
        }
    )

    // @ts-ignore
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

    event.shaped(
        Item.of("industrialforegoing:machine_frame_simple", 1), // arg 1: output
        [
            "   ",
            "CAC", // arg 2: the shape (array of strings)
            "FBF"
        ],
        {
            C: "gtceu:pink_steel_plate",
            A: "gtceu:steel_plate",
            B: "gtceu:mv_machine_hull",
            F: "gtceu:electrum_single_cable",
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

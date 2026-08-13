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

    event.shaped(
        Item.of("gtceu:ulv_input_bus"),
        [
            "SPS",
            "WHM",
            "SCS"
        ],
        {
            S: "gtceu:sticky_resin",
            H: "gtceu:ulv_machine_hull",
            C: "#forge:chests/wooden",
            P: "gtceu:wood_plate",
            W: "#forge:tools/wrenches",
            M: "#forge:tools/mallets"
        }
    )

    event.shaped(
        Item.of("gtceu:ulv_output_bus"),
        [
            "SCS",
            "WHM",
            "SPS"
        ],
        {
            S: "gtceu:sticky_resin",
            H: "gtceu:ulv_machine_hull",
            C: "#forge:chests/wooden",
            P: "gtceu:wood_plate",
            W: "#forge:tools/wrenches",
            M: "#forge:tools/mallets"
        }
    )

    
})

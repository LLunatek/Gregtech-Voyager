ServerEvents.recipes((event) => {
    // @ts-ignore
    event.shaped(
        Item.of("voyagercore:magmatic_foundry"), // arg 1: output
        [
            "WHW",
            "HCH", // arg 2: the shape (array of strings)
            "ABA"
        ],
        {
            A: "kubejs:heat_accelerator",
            B: "kubejs:heat_sheild", //arg 3: the mapping object
            C: "voyagercore:foundry_casing",
            H: "#gtceu:circuits/luv",
            W: "gtceu:titanite_octal_wire"
        }
    )

    // @ts-ignore
    event.shaped(
        Item.of("voyagercore:everfrost_chiller"), // arg 1: output
        [
            "WHW",
            "HCH", // arg 2: the shape (array of strings)
            "ABA"
        ],
        {
            A: "kubejs:heat_sheild",
            B: "kubejs:heat_sheild", //arg 3: the mapping object
            C: "voyagercore:frost_conducting_casing",
            H: "#gtceu:circuits/luv",
            W: "gtceu:titanite_octal_wire"
        }
    )

    event.recipes.gtceu
        .assembler("kubejs:heat_sheild")
        .itemInputs("8x gtceu:aluminex_202_a_plate", "2x #gtceu:circuits/iv", "gtceu:iv_field_generator", "4x gtceu:titanite_alloy_double_wire")
        .inputFluids("voyagercore:cryotheum 2000")
        .itemOutputs("2x kubejs:heat_sheild")
        .duration(20 * 30)
        .EUt(7860)

    event.recipes.gtceu
        .assembler("kubejs:heat_accelerator")
        .itemInputs("4x gtceu:titanex-594-hta_rotor", "2x #gtceu:circuits/iv", "gtceu:iv_field_generator", "4x gtceu:titanite_alloy_double_wire")
        .inputFluids("voyagercore:pyrotheum 2000")
        .itemOutputs("2x kubejs:heat_accelerator")
        .duration(20 * 30)
        .EUt(7860)

    event.recipes.gtceu
        .assembler("kubejs:foundry_casing")
        .itemInputs("gtceu:titanite_alloy_frame", "kubejs:heat_accelerator", "kubejs:heat_sheild", "#gtceu:circuits/iv", "8x gtceu:double_desh_plate")
        .inputFluids("voyagercore:pyrotheum 2000")
        .circuit(6)
        .itemOutputs("2x voyagercore:foundry_casing")
        .duration(20 * 60)
        .EUt(16)
})

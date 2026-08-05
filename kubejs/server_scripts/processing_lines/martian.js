ServerEvents.recipes((event) => {
    const fullName = (name) => "kubejs:" + name

    function centrifuge(name, inputItems, inputFluids, outputItems, outputFluids, duration, eut, helper) {
        if (helper) {
            event.recipes.gtceu
                .centrifuge("kubejs:centrifuge_helper_" + name)
                .itemInputs(inputItems)
                .notConsumable("kubejs:" + helper)
                .itemOutputs(outputItems)
                .inputFluids(inputFluids)
                .circuit(3)
                .outputFluids(outputFluids)
                .duration(duration * 20 * 0.85)
                .EUt(eut)
        } else {
            event.recipes.gtceu
                .centrifuge("kubejs:centrifuge_" + name)
                .itemInputs(inputItems)
                .itemOutputs(outputItems)
                .inputFluids(inputFluids)
                .outputFluids(outputFluids)
                .duration(duration * 20)
                .EUt(eut)
        }
    }

    function macerator(outputItem, ns, inputItem, time, eut) {
        event.recipes.gtceu
            .macerator("kubejs:macerator_" + outputItem)
            .itemInputs(inputItem)
            .itemOutputs(`${ns}:${outputItem}`)
            .duration(time * 20)
            .EUt(eut)
    }

    function create_mixer_recipe(name, ingredientsItem, fluidIngredients, itemOutputs, fluidOutputs, eut, time) {
        event.recipes.gtceu
            .mixer(fullName(name))
            .itemInputs(ingredientsItem)
            .inputFluids(fluidIngredients)
            .itemOutputs(itemOutputs)
            .outputFluids(fluidOutputs)
            .duration(time * 20)
            .EUt(eut)
    }

    function radiation_chamber(name, ingredientsItem, fluidIngredients, pt, itemOutputs, fluidOutputs, eut, time) {
        event.recipes.gtceu
            .radiation_chamber(fullName(name))
            .itemInputs(ingredientsItem)
            .perTick(true)
            .inputFluids(`gtceu:${fluidIngredients} ${pt}`)
            .perTick(false)
            .itemOutputs(itemOutputs)
            .outputFluids(fluidOutputs)
            .duration(time * 20)
            .EUt(eut)
    }

    /**
     * Create a lcr recipe
     * @param {*} name - recipe name (dont include kubejs:)
     * @param {*} inputItems - array of input items (include amount)
     * @param {*} inputFluids - array of input fluids (include amount)
     * @param {*} outputItems - array of output items (include amount)
     * @param {*} outputFluids - array of output fluids (include amount)
     * @param {*} duration - time in seconds
     * @param {*} eut - eu/tick
     */
    function create_recipe_lcr(name, inputItems, inputFluids, outputItems, outputFluids, duration, eut, helper) {
        if (!helper) {
            event.recipes.gtceu
                .large_chemical_reactor("kubejs:lcr_" + name)
                .itemInputs(inputItems)
                .itemOutputs(outputItems)
                .inputFluids(inputFluids)
                .outputFluids(outputFluids)
                .duration(duration * 20)
                .EUt(eut)
        } else {
            event.recipes.gtceu
                .large_chemical_reactor("kubejs:lcr_helper_" + name)
                .itemInputs(inputItems)
                .notConsumable("kubejs:" + helper)
                .itemOutputs(outputItems)
                .inputFluids(inputFluids)
                .circuit(3)
                .outputFluids(outputFluids)
                .duration(duration * 20)
                .EUt(eut)
        }
    }

    function create_recipe_chem_plant(name, inputItems, inputFluids, outputItems, outputFluids, duration, eut, temp, helper) {
        if (!helper) {
            event.recipes.gtceu
                .chemical_plant("kubejs:lcr_" + name)
                .itemInputs(inputItems)
                .itemOutputs(outputItems)
                .inputFluids(inputFluids)
                .addData("ebf_temp", temp)
                .outputFluids(outputFluids)
                .duration(duration * 20)
                .EUt(eut)
        } else {
            event.recipes.gtceu
                .chemical_plant("kubejs:lcr_helper_" + name)
                .itemInputs(inputItems)
                .notConsumable("kubejs:" + helper)
                .itemOutputs(outputItems)
                .inputFluids(inputFluids)
                .addData("ebf_temp", temp)
                .circuit(3)
                .outputFluids(outputFluids)
                .duration(duration * 20)
                .EUt(eut)
        }
    }

    function c_postbox_bad(output, trade_deal, inputs, time, eut, helper) {
        if (!helper) {
            event.recipes.gtceu
                .celestial_post_box(`kubejs:${trade_deal}_${output}_bad`)
                .itemInputs(inputs)
                .notConsumable(`kubejs:${trade_deal}`)
                .chancedOutput(`kubejs:${output}`, 5000, 1000)
                .duration(time * 20)
                .EUt(eut)
        } else {
            event.recipes.gtceu
                .celestial_post_box(`kubejs:${trade_deal}_${output}_helper_bad`)
                .itemInputs(inputs)
                .notConsumable(`kubejs:${trade_deal}`)
                .notConsumable(`kubejs:${helper}_helper`)
                .chancedOutput(`kubejs:${output}`, 7500, 1000)
                .chancedOutput(`kubejs:${output}`, 3500, 500)
                .duration(time * 20 * 0.66)
                .EUt(eut * 0.66)
        }
    }

    function c_postbox_good(output, trade_deal, inputs, time, eut, helper) {
        if (!helper) {
            event.recipes.gtceu
                .celestial_post_box(`kubejs:${trade_deal}_${output}_good`)
                .itemInputs(inputs)
                .notConsumable(`kubejs:${trade_deal}`)
                .chancedOutput(`kubejs:${output}`, 9000, 1000)
                .chancedOutput(`2x kubejs:${output}`, 5000, 500)
                .chancedOutput(`6x kubejs:${output}`, 2500, 250)
                .duration(time * 20)
                .EUt(eut)
        } else {
            event.recipes.gtceu
                .celestial_post_box(`kubejs:${trade_deal}_${output}_helper_good`)
                .itemInputs(inputs)
                .notConsumable(`kubejs:${trade_deal}`)
                .notConsumable(`kubejs:${helper}_helper`)
                .chancedOutput(`kubejs:${output}`, 10000, 1000)
                .chancedOutput(`3x kubejs:${output}`, 6500, 500)
                .chancedOutput(`8x kubejs:${output}`, 3500, 250)
                .duration(time * 20 * 0.66)
                .EUt(eut * 0.66)
        }
    }

    c_postbox_good("martian_shipment_t1", "martian_contract", "64x gtceu:lunarium_ingot", 60 * 10, 13000)
    c_postbox_good("martian_shipment_t1", "martian_contract", "64x gtceu:lunarium_ingot", 60 * 10, 13000, "embassy")

    c_postbox_bad("martian_shipment_t1", "martian_contract", "64x gtceu:desh_ingot", 60 * 10, 13000)
    c_postbox_bad("martian_shipment_t1", "martian_contract", "64x gtceu:desh_ingot", 60 * 10, 13000, "embassy")

    event.recipes.gtceu.assembler("kubejs:radio")
        .itemInputs('2x gtceu:double_ostrum_plate', '4x gtceu:lunarium_ring', '4x gtceu:uranium_triplatinum_single_wire', '2x gtceu:qbit_cpu_chip', '2x #gtceu:circuits/iv', '1x gtceu:iv_emitter', '1x gtceu:iv_sensor')
        .inputFluids('gtceu:soldering_alloy 1000')
        .itemOutputs({type: "minecraft:item_nbt", item: "kubejs:celestial_radio", nbt: {message:1}})
        .duration(1000) 
        .EUt(7860) 

    event.recipes.gtceu.celestial_post_box("kubejs:martian_contract").notConsumable("kubejs:celestial_radio").itemOutputs("kubejs:martian_contract").duration(20).EUt(2)

    event.recipes.gtceu.assembler("kubejs:t1_box_open").itemInputs("kubejs:martian_shipment_t1").itemOutputs("64x kubejs:martian_scrap").duration(200).EUt(7860)

    event.recipes.gtceu
        .macerator("kubejs:macerator_martian_scrap")
        .itemInputs("4x kubejs:martian_scrap")
        .itemOutputs("16x kubejs:shredded_martian_scrap")
        .duration(96 * 2 * 20)
        .EUt(1980)

    create_recipe_lcr("dissolved_martian", "16x kubejs:shredded_martian_scrap", "gtceu:aqua_regia 9000", [], "kubejs:dissolved_martian_mineral_solution 1000", 240, 1980)
    create_recipe_lcr("dissolved_martian", "16x kubejs:shredded_martian_scrap", "gtceu:aqua_regia 6000", [], "kubejs:dissolved_martian_mineral_solution 1666", 180, 1560, "advanced_chemist_helper")

    event.recipes.gtceu
        .electrolyzer("kubejs:elec_martian_soup")
        .inputFluids("kubejs:dissolved_martian_mineral_solution 1000")
        .itemOutputs("128x gtceu:ostrum_dust", "48x gtceu:tungsten_dust", "16x gtceu:titanite_dust")
        .outputFluids("minecraft:water 2000")
        .duration(60 * 2 * 20)
        .EUt(7860)

    // sulfuria

    centrifuge(
        "martian_sand",
        "64x gtceu:martian_sand_dust",
        "gtceu:toluene 500",
        ["12x gtceu:salt_dust", "9x gtceu:magnetite_dust", "7x gtceu:magnesium_dust", "5x gtceu:phosphorus_dust", "3x gtceu:inert_sulfur_dust"],
        [],
        60,
        1920
    )
    centrifuge(
        "martian_sand",
        "92x gtceu:martian_sand_dust",
        "gtceu:toluene 350",
        ["32x gtceu:salt_dust", "9x gtceu:magnetite_dust", "7x gtceu:magnesium_dust", "12x gtceu:phosphorus_dust", "8x gtceu:inert_sulfur_dust"],
        [],
        48,
        1200,
        "advanced_chemist_helper"
    )
    radiation_chamber("excited_sulfur", "2x gtceu:inert_sulfur_dust", "uranium", 1, "2x gtceu:excited_sulfur_dust", "gtceu:radon 2000", 7860, 48)

    create_recipe_lcr("carb_tetrach", "gtceu:carbon_dust", "gtceu:chlorine 4000", [], "gtceu:carbon_tetrachloride 1000", 20, 480)

    create_recipe_lcr("sulfuria_sol", ["2x gtceu:excited_sulfur_dust", "gtceu:copper_dust"], "gtceu:carbon_tetrachloride 1000", [], "gtceu:sulfuria_solution 1000", 30, 1920)

    event.recipes.gtceu
        .distillation_tower("kubejs:sulfuria")
        .inputFluids("gtceu:sulfuria_solution 1000")
        .outputFluids("gtceu:carbon_tetrachloride 1000")
        .itemOutputs("3x gtceu:copper_sulfuriate_dust")
        .duration(20 * 32)
        .EUt(7860)

    create_recipe_chem_plant(
        "htba-s",
        ["2x gtceu:sulfuria_dust", "3x gtceu:borax_dust"],
        ["gtceu:argon 1250", "gtceu:vanadium_gallium 1152"],
        [],
        "kubejs:high_temp_binding_agent_s 1152",
        40,
        7860 * 1.5,
        5000
    )
    create_recipe_chem_plant(
        "htba-s",
        ["2x gtceu:sulfuria_dust", "3x gtceu:borax_dust"],
        ["gtceu:argon 1000", "gtceu:vanadium_gallium 1152"],
        [],
        "kubejs:high_temp_binding_agent_s 1440",
        30,
        7860,
        5000,
        "advanced_chemist_helper"
    )

    event.recipes.gtceu
        .canner("kubejs:ht-ba_s")
        .inputFluids("kubejs:high_temp_binding_agent_s 2400")
        .itemInputs("3x gtceu:enriched_naquadah_rod")
        .itemOutputs("3x kubejs:high_temp_binding_agent_rod_s")
        .duration(20 * 32)
        .EUt(7860)

    event.recipes.gtceu
        .mixer("kubejs:pyrotheum")
        .inputFluids("gtceu:blaze 1000")
        .itemInputs("gtceu:sulfuria_dust")
        .outputFluids("voyagercore:pyrotheum 1000")
        .duration(20 * 15)
        .EUt(400)

    event.recipes.gtceu
        .mixer("kubejs:cryotheum")
        .inputFluids("gtceu:ice 2000")
        .itemInputs("gtceu:sulfuria_dust")
        .outputFluids("voyagercore:cryotheum 1000")
        .duration(20 * 15)
        .EUt(400)
})

import { recipe_lcr, recipe_mixer } from "../00_util/recipeUtils"

ServerEvents.recipes((event) => {
    /**
     *
     * @param {*} name
     * @param {*} inputItems
     * @param {*} inputFluids
     * @param {*} outputItems
     * @param {*} outputFluids
     * @param {*} duration
     * @param {*} eut
     */
    function autoclave(name, inputItems, inputFluids, outputItems, outputFluids, duration, eut) {
        event.recipes.gtceu
            .autoclave("kubejs:autoclave_" + name)
            .itemInputs(inputItems)
            .itemOutputs(outputItems)
            .inputFluids(inputFluids)
            .outputFluids(outputFluids)
            .duration(duration * 20)
            .EUt(eut)
    }

    /**
     *
     * @param {*} name
     * @param {*} inputItems
     * @param {*} inputFluids
     * @param {*} outputItems
     * @param {*} outputFluids
     * @param {*} duration
     * @param {*} eut
     * @param {*} [helper]
     */
    function radiation_chamber(name, inputItems, inputFluids, outputItems, outputFluids, duration, eut, helper) {
        if (!helper) {
            event.recipes.gtceu
                .radiation_chamber("kubejs:radiation_chamber_" + name)
                .itemInputs(inputItems)
                .itemOutputs(outputItems)
                .perTick(true)
                .inputFluids(inputFluids)
                .perTick(false)
                .outputFluids(outputFluids)
                .duration(duration * 20)
                .EUt(eut)
        } else {
            event.recipes.gtceu
                .radiation_chamber("kubejs:radiation_chamber_helper_" + name)
                .itemInputs(inputItems)
                .notConsumable("kubejs:" + helper)
                .itemOutputs(outputItems)
                .perTick(true)
                .inputFluids(inputFluids)
                .perTick(false)
                .circuit(3)
                .outputFluids(outputFluids)
                .duration(duration * 20)
                .EUt(eut)
        }
    }

    recipe_lcr(event, "lunarium_slurry", ["2x gtceu:lunarium_dust", "gtceu:carbon_dust"], ["gtceu:chlorine 450", "gtceu:fluorine 300"], [], "gtceu:lunarium_growth_slurry 3000", 30, 7680)

    recipe_lcr(
        event,
        "lunarium_slurry",
        ["2x gtceu:lunarium_dust", "gtceu:carbon_dust"],
        ["gtceu:chlorine 300", "gtceu:fluorine 200"],
        [],
        "gtceu:lunarium_growth_slurry 4000",
        25,
        6520,
        "advanced_chemist_helper"
    )

    radiation_chamber("titanichite_spores", "gtceu:small_titanite_dust", "gtceu:lunarium_growth_slurry 3", "kubejs:titanichite_bud", [], 60, 480)
    radiation_chamber("titanichite_spores", "4x gtceu:small_titanite_dust", "gtceu:lunarium_growth_slurry 2", "7x kubejs:titanichite_bud", [], 45, 400, "advanced_chemist_helper")

    autoclave("titanichite", ["kubejs:titanichite_bud", "4x kubejs:crystalline_titanium_electrum"], "gtceu:uranium 2000", "4x gtceu:raw_titanichite", [], 25, 7680)
    autoclave("titanichite_plut241", ["kubejs:titanichite_bud", "4x kubejs:crystalline_titanium_electrum"], "gtceu:plutonium_241 600", "12x gtceu:raw_titanichite", [], 25, 7680)

    recipe_mixer(
        event,
        "titanite_alloy",
        ["4x gtceu:titanichite_dust", "2x gtceu:tungsten_dust", "2x gtceu:graphene_dust", "gtceu:electrotine_dust"],
        [],
        "9x gtceu:titanite_alloy_dust",
        [],
        7680,
        9 * 5
    )
})

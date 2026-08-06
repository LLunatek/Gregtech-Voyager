/**
 * Create a LCR recipe
 * @param {$RecipesEventJS_} event - recipe event
 * @param {string} name - recipe name (dont include kubejs:)
 * @param {string[] | string} inputItems - array of input items (include amount)
 * @param {string[] | string} inputFluids - array of input fluids (include amount)
 * @param {string[] | string} outputItems - array of output items (include amount)
 * @param {string[] | string} outputFluids - array of output fluids (include amount)
 * @param {number} duration - time in seconds
 * @param {number} eut - eu/tick
 * @param {string} [helper] - helper to use
 */
function recipe_lcr(event, name, inputItems, inputFluids, outputItems, outputFluids, duration, eut, helper) {
    if (!helper) {
        // cannot use $GTRecipeSchema$GTRecipeJS_ type here because it's all fucked up
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

/**
 * Create a Centrifuge recipe
 * @param {$RecipesEventJS_} event - recipe event
 * @param {string} name - recipe name (dont include kubejs:)
 * @param {string[] | string} inputItems - array of input items (include amount)
 * @param {string[] | string} inputFluids - array of input fluids (include amount)
 * @param {string[] | string} outputItems - array of output items (include amount)
 * @param {string[] | string} outputFluids - array of output fluids (include amount)
 * @param {number} duration - time in seconds
 * @param {number} eut - eu/tick
 * @param {string} [helper] - helper to use
 */
function recipe_centrifuge(event, name, inputItems, inputFluids, outputItems, outputFluids, duration, eut, helper) {
    if (helper) {
        event.recipes.gtceu
            .centrifuge("kubejs:centrifuge_helper_" + name)
            .itemInputs(inputItems)
            .notConsumable("kubejs:" + helper)
            .itemOutputs(outputItems)
            .inputFluids(inputFluids)
            .circuit(3)
            .outputFluids(outputFluids)
            .duration(duration * 20)
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

/**
 * Create an Electrolyzer recipe
 * @param {$RecipesEventJS_} event - recipe event
 * @param {string} name - recipe name (dont include kubejs:)
 * @param {string[] | string} inputItems - array of input items (include amount)
 * @param {string[] | string} inputFluids - array of input fluids (include amount)
 * @param {string[] | string} outputItems - array of output items (include amount)
 * @param {string[] | string} outputFluids - array of output fluids (include amount)
 * @param {number} duration - time in seconds
 * @param {number} eut - eu/tick
 */
function recipe_electrolyzer(event, name, inputItems, inputFluids, outputItems, outputFluids, duration, eut) {
    event.recipes.gtceu
        .electrolyzer("kubejs:electrolyzer_" + name)
        .itemInputs(inputItems)
        .itemOutputs(outputItems)
        .inputFluids(inputFluids)
        .outputFluids(outputFluids)
        .duration(duration * 20)
        .EUt(eut)
}
/**
 * Create a Chemical Plant recipe
 * @param {$RecipesEventJS_} event - recipe event
 * @param {string} name - recipe name (dont include kubejs:)
 * @param {string[] | string} inputItems - array of input items (include amount)
 * @param {string[] | string} inputFluids - array of input fluids (include amount)
 * @param {string[] | string} outputItems - array of output items (include amount)
 * @param {string[] | string} outputFluids - array of output fluids (include amount)
 * @param {number} duration - time in seconds
 * @param {number} eut - eu/tick
 * @param {number} temp - temperature
 * @param {string} [specialized] - specialization
 */

function recipe_chem_plant(event, name, inputItems, inputFluids, outputItems, outputFluids, duration, eut, temp, specialized) {
    if (specialized) {
        event.recipes.gtceu
            .chemical_plant("kubejs:chemical_plant_" + name + "_" + specialized)
            .itemInputs(inputItems)
            .itemOutputs(outputItems)
            .inputFluids(inputFluids)
            .outputFluids(outputFluids)
            .addData("ebf_temp", temp)
            .addData("specialized", specialized)
            .duration(duration * 20)
            .EUt(eut)
    } else {
        event.recipes.gtceu
            .chemical_plant("kubejs:chemical_plant_" + name)
            .itemInputs(inputItems)
            .itemOutputs(outputItems)
            .inputFluids(inputFluids)
            .outputFluids(outputFluids)
            .addData("ebf_temp", temp)
            .duration(duration * 20)
            .EUt(eut)
    }
}

/**
 * Create a Mixer recipe
 * @param {$RecipesEventJS_} event - recipe event
 * @param {*} name
 * @param {*} ingredientsItem
 * @param {*} fluidIngredients
 * @param {*} itemOutputs
 * @param {*} fluidOutputs
 * @param {*} eut
 * @param {*} time
 */
function recipe_mixer(event, name, ingredientsItem, fluidIngredients, itemOutputs, fluidOutputs, eut, time) {
    event.recipes.gtceu
        .mixer("kubejs:mixer_" + name)
        .itemInputs(ingredientsItem)
        .inputFluids(fluidIngredients)
        .itemOutputs(itemOutputs)
        .outputFluids(fluidOutputs)
        .duration(time * 20)
        .EUt(eut)
}

/**
 * Create a Distillation recipe
 * @param {$RecipesEventJS_} event - recipe event
 * @param {*} input
 * @param {*} amt
 * @param {*} itemOutput
 * @param {*} fluidOutputs
 * @param {*} eut
 * @param {*} time
 */
function recipe_distillation(event, input, amt, itemOutput, fluidOutputs, eut, time) {
    event.recipes.gtceu
        .distillation_tower(`kubejs:${input}_distilling`)
        .inputFluids(`kubejs:${input} ${amt}`)
        .outputFluids(fluidOutputs)
        .itemOutputs(itemOutput)
        .duration(time * 20)
        .EUt(eut)
}

/**
 * Create a Macerator recipe
 * @param {$RecipesEventJS_} event - recipe event
 * @param {*} inputItem
 * @param {*} outputItem
 * @param {*} eut
 * @param {*} time
 */
function recipe_macerator(event, inputItem, outputItem, eut, time) {
    event.recipes.gtceu
        .macerator(outputItem + "_macerator")
        .itemInputs(inputItem)
        .itemOutputs(outputItem)
        .duration(time * 20)
        .EUt(eut)
}

/**
 * Create a Radiation Chamber Recipe
 * @param {$RecipesEventJS_} event - recipe event
 * @param {string} name - recipe name (dont include kubejs:)
 * @param {string[] | string} inputItems - array of input items (include amount)
 * @param {string[] | string} inputFluids - array of input fluids (include amount)
 * @param {*} pt
 * @param {string[] | string} outputItems - array of output items (include amount)
 * @param {string[] | string} outputFluids - array of output fluids (include amount)
 * @param {number} duration - time in seconds
 * @param {number} eut - eu/tick
 */
function recipe_radiation_chamber(event, name, inputItems, inputFluids, pt, outputItems, outputFluids, eut, duration) {
    event.recipes.gtceu
        .radiation_chamber("kubejs:" + name)
        .itemInputs(inputItems)
        .perTick(true)
        .inputFluids(`gtceu:${inputFluids} ${pt}`)
        .perTick(false)
        .itemOutputs(outputItems)
        .outputFluids(outputFluids)
        .duration(duration * 20)
        .EUt(eut)
}

/**
 * Create a Teus Laser Recipe (I totally know what the Teus Laser does)
 * @param {$RecipesEventJS_} event - recipe event
 * @param {*} output
 * @param {string[] | string} inputItems - array of input items (include amount)
 * @param {*} concentration
 * @param {*} nonconsumed
 * @param {string[] | string} inputFluids - array of input fluids (include amount)
 * @param {string[] | string} outputFluids - array of output fluids (include amount)
 * @param {number} duration - time in seconds
 * @param {number} eut - eu/tick
 */

function recipe_teus_laser(event, output, inputItems, nonconsumed, inputFluids, outputFluids, eut, duration, concentration) {
    event.recipes.gtceu
        .beam_heating(`${output}_teus_laser`) // recipe ID
        .itemInputs(inputItems)
        .notConsumable(nonconsumed)
        .inputFluids(inputFluids)
        .addData("beam_concentration", concentration)
        .itemOutputs(output)
        .outputFluids(outputFluids)
        .duration(duration * 20) // in ticks
        .EUt(eut)
}

/**
 * Create a Chemical Bath
 * @param {$RecipesEventJS_} event - recipe event
 * @param {*} output
 * @param {string[] | string} inputItems - array of input items (include amount)
 * @param {string[] | string} inputFluids - array of input fluids (include amount)
 * @param {number} duration - time in seconds
 * @param {number} eut - eu/tick
 */
function recipe_chem_bath(event, output, inputItems, inputFluids, eut, duration) {
    event.recipes.gtceu
        .chemical_bath(`${output}_chem_bath`) // recipe ID
        .itemInputs(inputItems)
        .inputFluids(inputFluids)
        .itemOutputs(output)
        .duration(duration * 20) // in ticks
        .EUt(eut)
}

ServerEvents.recipes(event => {
event.remove({input: 'gtceu:iridium_metal_residue_dust'}) 
event.remove({output: 'gtceu:iridium_metal_residue_dust'}) // none of these fucking work and i have no idea why
event.remove({input: 'gtceu:platinum_group_sludge_dust'})
event.remove({input: 'gtceu:rarest_metal_mixture_dust'})
event.remove({input: 'gtceu:inert_metal_mixture_dust'})
event.remove({output: 'gtceu:rarest_metal_mixture_dust'})
event.remove({output: 'gtceu:rhodium_sulfate' })
event.remove({output: 'gtceu:ruthenium_tetroxide' })
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
    function lcr(name, inputItems, inputFluids, outputItems, outputFluids, duration, eut, helper)
    {
      if(!helper)
      {
        event.recipes.gtceu.large_chemical_reactor("kubejs:lcr_" + name)
        .itemInputs(inputItems)
        .itemOutputs(outputItems)
        .inputFluids(inputFluids)
        .outputFluids(outputFluids)
        .duration(duration * 20) 
        .EUt(eut) 
      }
      else
      {
        event.recipes.gtceu.large_chemical_reactor("kubejs:lcr_helper_" + name)
          .itemInputs(inputItems)
          .notConsumable('kubejs:' + helper)
          .itemOutputs(outputItems)
          .inputFluids(inputFluids)
          .circuit(3)
          .outputFluids(outputFluids)
          .duration(duration * 20) 
          .EUt(eut) 
      }
       
    }

    function chem_plant(name, inputItems, inputFluids, outputItems, outputFluids, duration, eut, temp, helper)
    {
      if(!helper)
      {
        event.recipes.gtceu.chemical_plant("kubejs:lcr_" + name)
        .itemInputs(inputItems)
        .itemOutputs(outputItems)
        .inputFluids(inputFluids)
        .outputFluids(outputFluids)
        .duration(duration * 20) 
        .blastFurnaceTemp(temp)
        .EUt(eut) 
      }
      else
      {
        event.recipes.gtceu.chemical_plant("kubejs:lcr_helper_" + name)
          .itemInputs(inputItems)
          .notConsumable('kubejs:' + helper)
          .itemOutputs(outputItems)
          .inputFluids(inputFluids)
          .circuit(3)
          .outputFluids(outputFluids)
          .duration(duration * 20) 
          .blastFurnaceTemp(temp)
          .EUt(eut) 
      }
       
    }

    /**
     * Create a centrifuge recipe
     * @param {*} name - recipe name (dont include kubejs:)
     * @param {*} inputItems - array of input items (include amount)
     * @param {*} inputFluids - array of input fluids (include amount)
     * @param {*} outputItems - array of output items (include amount)
     * @param {*} outputFluids - array of output fluids (include amount)
     * @param {*} duration - time in seconds
     * @param {*} eut - eu/tick
     */
    function centrifuge(name, inputItems, inputFluids, outputItems, outputFluids, duration, eut, helper)
    {
      

        if(helper)
        {
          event.recipes.gtceu.centrifuge("kubejs:centrifuge_helper_" + name)
          .itemInputs(inputItems)
          .notConsumable('kubejs:' + helper)
          .itemOutputs(outputItems)
          .inputFluids(inputFluids)
          .circuit(3)
          .outputFluids(outputFluids)
          .duration(duration * 20) 
          .EUt(eut)  
        }
        else
        {
          event.recipes.gtceu.centrifuge("kubejs:centrifuge_" + name)
          .itemInputs(inputItems)
          .itemOutputs(outputItems)
          .inputFluids(inputFluids)
          .outputFluids(outputFluids)
          .duration(duration * 20) 
          .EUt(eut)  
        }
    }

    function distill(input, ns, amt, fluidOutputs, itemOutput, eut, seconds)
    {
        event.recipes.gtceu
        .distillation_tower(`kubejs:${input}_distilling`)   // recipe ID
        .inputFluids(`${ns}:${input} ${amt}`)
        .outputFluids(fluidOutputs)
        .itemOutputs(itemOutput)
        .duration(seconds * 20)                                 // in ticks
        .EUt(eut)
    }

    function mixer(name, ingredientsItem, fluidIngredients, itemOutputs, outFluids, tier, time)
    {
        event.recipes.gtceu.mixer(fullName(name))
            .itemInputs(ingredientsItem)
            .inputFluids(fluidIngredients)
            .itemOutputs(itemOutputs)
            .outputFluids(outFluids)
            .duration(time * 20)
            .EUt(tier);
    }

    function electrolyzer(name, inputItems, inputFluids, outputItems, outputFluids, duration, eut)
    {

          event.recipes.gtceu.electrolyzer("kubejs:electrolyzer_" + name)
          .itemInputs(inputItems)
          .itemOutputs(outputItems)
          .inputFluids(inputFluids)
          .outputFluids(outputFluids)
          .duration(duration * 20) 
          .EUt(eut)  

    }

    mixer('igp_lubricant_base', 'gtceu:indium_gallium_phosphide_dust', 'gtceu:lubricant 2000', [], 'kubejs:igp_lubricant_base 1000', 7680, 20)

    distill('igp_lubricant_base', 'kubejs', 1000, ['kubejs:gallium_lubricant_residue 1000', 'kubejs:indium_binded_phospho_lubricant_sludge 1000'], 'gtceu:carbon_dust', 7860, 10)

    electrolyzer('gallium_lubricant_residue_byproduct', [], 'kubejs:gallium_lubricant_residue 1000', 'gtceu:gallium_dust', 'gtceu:creosote 500', 10, 30)

    lcr('acidic_phospho_lubricant', ['gtceu:sulfur_dust', 'gtceu:molybdenum_dust'], ['kubejs:indium_binded_phospho_lubricant_sludge 1000', 'gtceu:hydrogen 2000'], [], 'kubejs:acidic_phospho_lubricant 1000', 10, 7680)

    distill('acidic_phospho_lubricant', 'kubejs', 1000, ['kubejs:phospho_lubricant_residue 250', 'kubejs:phospho_indium_molybdenum_binded_lubricant 1000', 'gtceu:hydrogen_sulfide 1000'], [], 7680, 45)
    
    centrifuge('phospho_lubricant_byproducts', [], 'kubejs:phospho_lubricant_residue 1000', 'gtceu:phosphorus_dust', 'gtceu:creosote 500', 10, 32)

    chem_plant('high_stress_lubricant', 'gtceu:gallium_dust', ['gtceu:kerosene 2000', 'kubejs:phospho_indium_molybdenum_binded_lubricant 1000'], [], 'voyagercore:high_stress_lubricant 3000', 10, 480, 4500)

    chem_plant('high_stress_lubricant', 'gtceu:gallium_dust', ['gtceu:kerosene 2000', 'kubejs:phospho_indium_molybdenum_binded_lubricant 1000'], [], 'voyagercore:high_stress_lubricant 5000', 10, 120, 4500, 'advanced_chemist_helper')





});
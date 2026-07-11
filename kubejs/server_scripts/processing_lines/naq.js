

ServerEvents.recipes(event => {

function teus_laser(output, ns, inputItems, nonconsumed, inputFluid, outFluid, eut, time, concentration)  
{
    event.recipes.gtceu
        .beam_heating(`kubejs:${output}_teus_laser`)   // recipe ID
        .itemInputs(inputItems)
        .notConsumable(nonconsumed)
        .inputFluids(inputFluid)
        .addData("beam_concentration", concentration)
        .itemOutputs(`${ns}:${output}`)
        .outputFluids(outFluid)
        .duration(time * 20)                                 // in ticks
        .EUt(eut)     
} 
function chem_bath(output, ns, inputItems, inputFluid, eut, time)  
{
    event.recipes.gtceu
        .chemical_bath(`kubejs:${output}_chem_bath`)   // recipe ID
        .itemInputs(inputItems)
        .inputFluids(inputFluid)
        .itemOutputs(`${ns}:${output}`)
        .duration(time * 20)                                 // in ticks
        .EUt(eut)     
}   
    const fullName = (name) => 'kubejs:' + name;

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
          .duration(duration * 20 * .85) 
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

    function macerator(outputItem, ns, inputItem, time, eut)
    {
        event.recipes.gtceu.macerator("kubejs:macerator_" + outputItem)
          .itemInputs(inputItem)
          .itemOutputs(`${ns}:${outputItem}`)
          .duration(time * 20) 
          .EUt(eut)  
    }

    function create_mixer_recipe(name, ingredientsItem, fluidIngredients, itemOutputs, fluidOutputs, eut, time)
    {
        event.recipes.gtceu.mixer(fullName(name))
            .itemInputs(ingredientsItem)
            .inputFluids(fluidIngredients)
            .itemOutputs(itemOutputs)
            .outputFluids(fluidOutputs)
            .duration(time * 20)
            .EUt(eut);
    }

    function radiation_chamber(name, ingredientsItem, fluidIngredients, pt, itemOutputs, fluidOutputs, eut, time)
    {
        event.recipes.gtceu.radiation_chamber(fullName(name))
            .itemInputs(ingredientsItem)
            .perTick(true)
            .inputFluids(`gtceu:${fluidIngredients} ${pt}`)
            .perTick(false)
            .itemOutputs(itemOutputs)
            .outputFluids(fluidOutputs)
            .duration(time * 20)
            .EUt(eut);
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
        .addData("ebf_temp", temp)
        .outputFluids(outputFluids)
        .duration(duration * 20) 
        .EUt(eut) 
      }
      else
      {
        event.recipes.gtceu.chemical_plant("kubejs:lcr_helper_" + name)
          .itemInputs(inputItems)
          .notConsumable('kubejs:' + helper)
          .itemOutputs(outputItems)
          .inputFluids(inputFluids)
          .addData("ebf_temp", temp)
          .circuit(3)
          .outputFluids(outputFluids)
          .duration(duration * 20) 
          .EUt(eut) 
      }
       
    }

    function c_postbox_bad(output, trade_deal, inputs, time, eut, helper)
    {
        if(!helper)
        {
            event.recipes.gtceu.celestial_post_box(`kubejs:${trade_deal}_${output}_bad`)
            .itemInputs(inputs)
            .notConsumable(`kubejs:${trade_deal}`)
            .chancedOutput(`kubejs:${output}`, 5000, 1000)
            .duration(time * 20) 
            .EUt(eut)  
        }
        else
        {


          event.recipes.gtceu.celestial_post_box(`kubejs:${trade_deal}_${output}_helper_bad`)
            .itemInputs(inputs)
            .notConsumable(`kubejs:${trade_deal}`)
            .notConsumable(`kubejs:${helper}_helper`)
            .chancedOutput(`kubejs:${output}`, 7500, 1000)
            .chancedOutput(`kubejs:${output}`, 3500, 500)
            .duration(time * 20 *.66) 
            .EUt(eut * .66)    
        }

    }

    function c_postbox_good(output, trade_deal, inputs, time, eut, helper)
    {
        if(!helper)
        {
            event.recipes.gtceu.celestial_post_box(`kubejs:${trade_deal}_${output}_good`)
            .itemInputs(inputs)
            .notConsumable(`kubejs:${trade_deal}`)
            .chancedOutput(`kubejs:${output}`, 9000, 1000)
            .chancedOutput(`2x kubejs:${output}`, 5000, 500)
            .chancedOutput(`6x kubejs:${output}`, 2500, 250)
            .duration(time * 20) 
            .EUt(eut)  
        }
        else
        {


          event.recipes.gtceu.celestial_post_box(`kubejs:${trade_deal}_${output}_helper_good`)
            .itemInputs(inputs)
            .notConsumable(`kubejs:${trade_deal}`)
            .notConsumable(`kubejs:${helper}_helper`)
            .chancedOutput(`kubejs:${output}`, 10000, 1000)
            .chancedOutput(`3x kubejs:${output}`, 6500, 500)
            .chancedOutput(`8x kubejs:${output}`, 3500, 250)
            .duration(time * 20 *.66) 
            .EUt(eut * .66)    
        }

    }


    
    function assembly_research(output, namespace, inputs, fluidInputs, eut, time, scanItem)
    {
        event.recipes.gtceu.assembly_line(`gtceu:${output}`)
            .itemInputs(inputs)
            .inputFluids(fluidInputs)
            .itemOutputs(`${namespace}:${output}`)
            ["scannerResearch(java.util.function.UnaryOperator)"](
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of(scanItem))
                    .duration(time * 20 * 2)
                    .EUt(eut/2)
                )
            .duration(time * 20)
            .EUt(eut);

    }

    
    


    // teus_laser('hot_naquadah_ingot', 'gtceu', 'gtceu:naquadah_dust', 'kubejs:atomic_lattice', 'gtceu:helium 2000', 'gtceu:helium_plasma 1000', 32786, 120, .25)
});

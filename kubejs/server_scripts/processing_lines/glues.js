ServerEvents.recipes((event) => {
    const fullName = (name) => "kubejs:" + name

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

    create_mixer_recipe("component_polymer", ["2x gtceu:carbon_fiber_mesh", "gtceu:borosilicate_glass_dust"], "gtceu:epoxy 1000", [], "gtceu:component_polymer 2000", 240, 30)
})

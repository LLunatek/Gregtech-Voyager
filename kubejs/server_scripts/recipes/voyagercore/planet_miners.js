ServerEvents.recipes((event) => {
    const tiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", "max"]

    function assembly_research(output, namespace, inputs, fluidInputs, eut, time, scanItem) {
        event.recipes.gtceu
            .assembly_line(`gtceu:${output}`)
            .itemInputs(inputs)
            .inputFluids(fluidInputs)
            .itemOutputs(`${namespace}:${output}`)
            ["scannerResearch(java.util.function.UnaryOperator)"]((researchRecipeBuilder) =>
                researchRecipeBuilder
                    .researchStack(Item.of(scanItem))
                    .duration(time * 20 * 2)
                    .EUt(eut / 2)
            )
            .duration(time * 20)
            .EUt(eut)
    }
})

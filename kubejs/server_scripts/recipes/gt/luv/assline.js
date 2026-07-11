ServerEvents.recipes(event => {

    // event.remove({ output: "gtceu:nano_processor" }) // these didn't remove anything...?
    // event.remove({ output: "gtceu:nano_processor_assembly" })
    // event.remove({ output: "gtceu:nano_processor_computer" })
    // event.remove({ output: "gtceu:nano_processor_mainframe" })
    // event.remove({ output: "gtceu:micro_processor_mainframe" })

    // event.remove({ type: "gtceu:circuit_assembler" })

    const tiers = ['ulv', 'lv','mv','hv','ev','iv','luv','zpm','uv','uhv','uev','uiv','max'];

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

    assembly_research('crystal_calculated_beam', 'voyagercore', 
        ['gtceu:luv_machine_hull', 'gtceu:perfected_electrum_frame','64x gtceu:crystal_soc', '12x gtceu:double_duranium_plate', '8x kubejs:light_refractor', '8x gtceu:luv_field_generator', '8x #gtceu:circuits/zpm', '64x gtceu:fine_europium_wire'],
        ['gtceu:lunarium 32000', 'gtceu:naquadah 8000', 'voyagercore:high_stress_lubricant 16000'], 32000, 60, 'voyagercore:nether_star_beam'
    )





});
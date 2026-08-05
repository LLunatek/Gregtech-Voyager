ServerEvents.recipes((event) => {
    function beam_heating(output, ns, inputItems, nonconsumed, inputFluid, outFluid, eut, time, concentration) {
        event.recipes.gtceu
            .beam_heating(`kubejs:${output}_teus_laser`) // recipe ID
            .itemInputs(inputItems)
            .notConsumable(nonconsumed)
            .inputFluids(inputFluid)
            .addData("beam_concentration", concentration)
            .itemOutputs(`${ns}:hot_${output}`)
            .outputFluids(outFluid)
            .duration(time * 20) // in ticks
            .EUt(eut)

        event.recipes.gtceu
            .vacuum_freezer(`kubejs:${output}_cooling`) // recipe ID
            .itemInputs(`${ns}:hot_${output}`)
            .inputFluids("gtceu:liquid_helium 500")
            .itemOutputs(`${ns}:${output}`)
            .outputFluids("gtceu:helium 250")
            .duration(time * 2) // in ticks
            .EUt(eut / 4)
    }

    beam_heating("trellium_ingot", "gtceu", "gtceu:trellium_base_ingot", "kubejs:atomic_lattice", "gtceu:naquadah " + 144 * 4, "gtceu:impure_naquadria_solution 1500", 32000, 100, 0.35)
})

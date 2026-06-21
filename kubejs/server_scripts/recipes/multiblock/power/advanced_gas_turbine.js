ServerEvents.recipes(event => {
 

    // event.shaped(
    //     Item.of('gtceu:power_rectangle_helper_calorie_converter', 1), // arg 1: output
    //     [
    //         'DCD',
    //         'BAB', // arg 2: the shape (array of strings)
    //         'DCD'
    //     ],
    //     {
    //         A: 'gtceu:hv_helper_wheel',
    //         B: 'gtceu:refined_fluxed_electrum_frame',  //arg 3: the mapping object
    //         C: '#gtceu:circuits/iv',
    //         D: 'kubejs:radiation_proof_lead_casing'
    //     }
    // )

    function adv_gas(fluidIn, ns, amt, time, eut)
    {
        event.recipes.gtceu.super_gas_turbine(`kubejs:${fluidIn}_adv_gas`)
                .inputFluids(`${ns}:${fluidIn} ${amt}`)
                .duration(20 * time)
                .EUt(-eut)
    }

    adv_gas('nitrobenzene', 'gtceu', 750, 8, 4096)
    
})
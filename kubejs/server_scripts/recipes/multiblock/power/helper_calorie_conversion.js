ServerEvents.recipes(event => {
 

    event.shaped(
        Item.of('gtceu:power_rectangle_helper_calorie_converter', 1), // arg 1: output
        [
            'DCD',
            'BAB', // arg 2: the shape (array of strings)
            'DCD'
        ],
        {
            A: 'gtceu:hv_helper_wheel',
            B: 'gtceu:refined_fluxed_electrum_frame',  //arg 3: the mapping object
            C: '#gtceu:circuits/iv',
            D: 'kubejs:radiation_proof_lead_casing'
        }
    )

    function calorie_conversion(cookie, helper, output, time, eut, outF)
    {
        if (!outF)
        {
            outF = []
        }
        event.recipes.gtceu.helper_calorie_conversion("kubejs:grandmas_" + cookie + "_" + helper)
                .itemInputs("kubejs:grandmas_" + cookie)
                .notConsumable("kubejs:"+ helper +"_helper")
                .itemOutputs(output)
                .inputFluids("minecraft:water 4000")
                .perTick(true)
                .outputFluids(outF)
                .perTick(false)
                .duration(20 * time)
                .EUt(-eut)
    }

    function advanced_calorie_conversion(cookie, helper, output, time, eut, outF)
    {
        if (!outF)
        {
            outF = []
        }
        event.recipes.gtceu.hyper_helper_calorie_conversion("kubejs:grandmas_" + cookie + "_" + helper + '_distilled_water')
                .itemInputs("kubejs:grandmas_" + cookie)
                .notConsumable("kubejs:"+ helper +"_helper")
                .itemOutputs(output)
                .perTick(true)
                .inputFluids('gtceu:distilled_water 15')
                .outputFluids(outF)
                .perTick(false)
                .duration(20 * time)
                .EUt(-eut)

        event.recipes.gtceu.hyper_helper_calorie_conversion("kubejs:grandmas_" + cookie + "_" + helper + '_milk')
                .itemInputs("kubejs:grandmas_" + cookie)
                .notConsumable("kubejs:"+ helper +"_helper")
                .itemOutputs(output)
                .perTick(true)
                .inputFluids('minecraft:milk 3')
                .outputFluids(outF)
                .perTick(false)
                .duration(20 * time * 1.5)
                .EUt(-eut * 2)

        event.recipes.gtceu.hyper_helper_calorie_conversion("kubejs:grandmas_" + cookie + "_" + helper + '_helperade')
                .itemInputs("kubejs:grandmas_" + cookie)
                .notConsumable("kubejs:"+ helper +"_helper")
                .itemOutputs(output)
                .perTick(true)
                .inputFluids('kubejs:helperade_br 5')
                .outputFluids(outF)
                .perTick(false)
                .duration(20 * time * 4)
                .EUt(-eut * 4)
    }

    calorie_conversion('uranium_cookies', 'hungry', 'gtceu:thorium_dust', 15, 8192, 'gtceu:steam 500')
    calorie_conversion('uranium_cookies', 'lcptr' ,'gtceu:thorium_dust', 60, 4096,'gtceu:steam 100')

    calorie_conversion('cookie', 'hungry', 'gtceu:carbon_dust', 3.75, 2048)
    calorie_conversion('cookie', 'lcptr', 'gtceu:carbon_dust', 15, 1024)

    advanced_calorie_conversion('uranium_cookies', 'hungry_hungry', 'gtceu:uranium_dust', 10, 16384 * 2, 'gtceu:steam 500')


    // calorie_conversion('cookie', 'hungry_hungry', 'gtceu:graphite_dust', 3, 4096)

    
})
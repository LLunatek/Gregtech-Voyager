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

    function advanced_calorie_conversion(cookie, helper, output, time, eut, outF, helperLevel)
    {
        if (!outF)
        {
            outF = []
        }
        event.recipes.gtceu.advanced_calorie_conversion("kubejs:grandmas_" + cookie + "_" + helper)
                .itemInputs("kubejs:grandmas_" + cookie)
                .addData("paramount", "hungry")
                .addData("paramount_level", helperLevel)
                .itemOutputs(output)
                .perTick(true)
                .outputFluids(outF)
                .perTick(false)
                .duration(20 * time)
                .EUt(-eut)
    }

        
    event.shaped(
    Item.of('voyagercore:hyper_helper_calorie_converter', 1), // arg 1: output
    [
        'ADA',
        'CBC', // arg 2: the shape (array of strings)
        'ADA'
    ],
    {
        A: 'gtceu:double_titanex-879-htb_plate',
        B: 'gtceu:power_rectangle_helper_calorie_converter',  //arg 3: the mapping object
        C: 'kubejs:heat_sheild',
        D: '#gtceu:circuits/luv'
    }
    )

    event.shaped(
    Item.of('voyagercore:radiant_titanite_vent_casing', 2), // arg 1: output
    [
        'ACA',
        'BDB', // arg 2: the shape (array of strings)
        'ACA'
    ],
    {
        A: 'gtceu:titanex-879-htb_plate',
        B: 'gtceu:tungsten_steel_rotor',  //arg 3: the mapping object
        C: 'gtceu:double_titanex-594-hta_plate',
        D: 'gtceu:long_titanex-594-hta_rod'
    }
    )

    calorie_conversion('uranium_cookies', 'hungry', 'gtceu:thorium_dust', 15, 8192, 'gtceu:steam 500')
    calorie_conversion('uranium_cookies', 'lcptr' ,'gtceu:thorium_dust', 60, 4096,'gtceu:steam 100')

    calorie_conversion('cookie', 'hungry', 'gtceu:carbon_dust', 3.75, 2048)
    calorie_conversion('cookie', 'lcptr', 'gtceu:carbon_dust', 15, 1024)

    advanced_calorie_conversion('uranium_cookies', 'hungry_hungry', 'gtceu:uranium_dust', 10, 16384 * 2, 'gtceu:steam 500', 5)

    advanced_calorie_conversion('cookie', 'hungry_hungry', 'gtceu:uranium_dust', 3, 4096 * 1, 'gtceu:steam 500', 1)


    // calorie_conversion('cookie', 'hungry_hungry', 'gtceu:graphite_dust', 3, 4096)

    
})
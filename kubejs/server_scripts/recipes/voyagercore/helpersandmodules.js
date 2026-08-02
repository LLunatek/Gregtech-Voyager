ServerEvents.recipes(event => {

    const tiermap = 
    {
        "lv": 28,
        "mv": 120,
        "hv": 480,
        "ev": 1920,
        "iv": 7680,
        "luv": 32768 * .9,
        "zpm": 32768 * 4 * .9,
        "uv": 32768 * 16 * .9
    }

    const tiers = ["mv", "hv", "ev", "iv", "luv"]
    const s_tiers = ["hv", "ev", "iv", "luv"]

    const tierBaseGearMap = 
    {
        "lv": "tin_silver_alloy",
        "mv": "fluxed_electrum",
        "hv": "fluxed_cobalt_electrum",
        "ev": "refined_fluxed_electrum",
        "iv": "titanite_alloy",
        "luv": "perfected_electrum",
        // "zpm": "",
        // "uv": ""
    }

    const tierBaseMatMap =
    {
        "lv": "steel",
        "mv": "aluminium",
        "hv": "stainless_steel",
        "ev": "titanium",
        "iv": "tungsten_steel",
        "luv": "hsss",
        // "zpm": "",
        // "uv": ""
    }

    const tierSpecialMatMap =
    {
        "mv": "magnesium_diboride",
        "hv": "red_steel",
        "ev": "lunarium",
        "iv": "titanex-879-htb",
        "luv": "trellium",
        // "zpm": "",
        // "uv": ""
    }

    const tierCoilMatMap =
    {
        "mv": "gtceu:kanthal",
        "hv": "gtceu:nichrome",
        "ev": "kubejs:desh",
        "iv": "kubejs:titanite",
        "luv": "kubejs:industrial_perfected_electrum",
        // "zpm": "",
        // "uv": ""
    }

    const tierMaxCircuitTierMap =
    {
        "mv": "hv",
        "hv": "iv",
        "ev": "luv",
        "iv": "zpm",
        "luv": "uv",
        // "zpm": "",
        // "uv": ""
    }

    function generic_helper_hull_recipe(tier, frame_mat, platemat, fluids)
    {
 
            event.recipes.gtceu.helper_factory(`kubejs:${tier}_generic_helper_hull`)
                .itemInputs(`4x gtceu:${frame_mat}_frame`,`kubejs:${tier}_helper_computation_array`, `8x gtceu:double_${platemat}_plate`,`2x gtceu:${tier}_robot_arm`)
                .inputFluids(fluids)
                .itemOutputs(`voyagercore:${tier}_generic_helper_hull`)
                .duration(20 * 120)
                .EUt(tiermap[tier])
        
        
    }

    function specialized_helper_hull_recipe(tier, frame_mat, platemat, fluids)
    {
 
            event.recipes.gtceu.helper_factory(`kubejs:${tier}_specialized_helper_hull`)
                .itemInputs(`4x gtceu:${frame_mat}_frame`,`3x kubejs:${tier}_helper_computation_array`, `16x gtceu:double_${platemat}_plate`,`4x gtceu:${tier}_robot_arm`)
                .inputFluids(fluids)
                .itemOutputs(`voyagercore:${tier}_specialized_helper_hull`)
                .duration(20 * 120)
                .EUt(tiermap[tier])
        
        
    }

    function base_module_recipe(tier, gearmat, platemat, fluids, extra_inputs)
    {
        if(extra_inputs)
        {
            event.recipes.gtceu.assembler(`kubejs:${tier}_helper_module`)
                .itemInputs(`4x gtceu:${platemat}_plate`, `4x gtceu:small_${gearmat}_gear`, `2x #gtceu:circuits/${tier}`, `2x gtceu:${tier}_emitter`)
                .itemInputs(extra_inputs)
                .inputFluids(fluids)
                .itemOutputs(`voyagercore:${tier}_helper_module`)
                .duration(20 * 30)
                .EUt(tiermap[tier])
        }
        else
        {
            event.recipes.gtceu.assembler(`kubejs:${tier}_helper_module`)
                .itemInputs(`4x gtceu:${platemat}_plate`, `4x gtceu:small_${gearmat}_gear`, `2x #gtceu:circuits/${tier}`, `2x gtceu:${tier}_emitter`)
                .inputFluids(fluids)
                .itemOutputs(`voyagercore:${tier}_helper_module`)
                .duration(20 * 30)
                .EUt(tiermap[tier]) // trolol
        }
        
    }

    function output_module_recipe(tier, ctier, coilMat, platemat)
    {
        event.recipes.gtceu.assembler(`kubejs:${tier}_output_helper_module`)
            .itemInputs(`voyagercore:${tier}_speed_helper_module`,
                        `voyagercore:${tier}_efficiency_helper_module`,
                        `voyagercore:${tier}_parallel_helper_module`, `8x ${coilMat}_coil_block`, `2x #gtceu:circuits/${ctier}`, `2x gtceu:${tier}_field_generator`)
            .itemOutputs(`voyagercore:${tier}_output_helper_module`)
            .duration(20 * 30)
        
    }

    function speed_module_recipe(tier, ctier, wiremat, platemat, extra_inputs)
    {
        if(extra_inputs)
        {
            event.recipes.gtceu.assembler(`kubejs:${tier}_speed_helper_module`)
                .itemInputs(`voyagercore:${tier}_helper_module`, `8x gtceu:${platemat}_plate`, `32x gtceu:fine_${wiremat}_wire`, `4x #gtceu:circuits/${ctier}`, `2x gtceu:${tier}_electric_piston`, `gtceu:${tier}_transformer_1a`)
                .itemInputs(extra_inputs)
                .itemOutputs(`voyagercore:${tier}_speed_helper_module`)
                .duration(20 * 30)
                .EUt(tiermap[tier]) // trolol
        }
        else
        {
            event.recipes.gtceu.assembler(`kubejs:${tier}_speed_helper_module`)
                .itemInputs(`voyagercore:${tier}_helper_module`, `8x gtceu:${platemat}_plate`, `32x gtceu:fine_${wiremat}_wire`, `4x #gtceu:circuits/${ctier}`, `2x gtceu:${tier}_electric_piston`, `gtceu:${tier}_transformer_1a`)
                .itemOutputs(`voyagercore:${tier}_speed_helper_module`)
                .duration(20 * 30)
                .EUt(tiermap[tier]) // trolol
        }
        
    }

    function efficiency_module_recipe(tier, ctier, wiremat, platemat, fluids, extra_inputs)
    {
        if(extra_inputs)
        {
            event.recipes.gtceu.assembler(`kubejs:${tier}_efficiency_helper_module`)
                .itemInputs(`voyagercore:${tier}_helper_module`, `4x gtceu:long_${platemat}_rod`, `32x gtceu:fine_${wiremat}_wire`, `2x #gtceu:circuits/${ctier}`, `2x gtceu:${tier}_electric_pump`, `gtceu:${tier}_transformer_1a`)
                .itemInputs(extra_inputs)
                .inputFluids(fluids)
                .itemOutputs(`voyagercore:${tier}_efficiency_helper_module`)
                .duration(20 * 30)
                .EUt(tiermap[tier]) // trolol
        }
        else
        {
            event.recipes.gtceu.assembler(`kubejs:${tier}_efficiency_helper_module`)
                .itemInputs(`voyagercore:${tier}_helper_module`, `4x gtceu:long_${platemat}_rod`, `32x gtceu:fine_${wiremat}_wire`, `2x #gtceu:circuits/${ctier}`, `2x gtceu:${tier}_electric_pump`, `gtceu:${tier}_transformer_1a`)
                .inputFluids(fluids)
                .itemOutputs(`voyagercore:${tier}_efficiency_helper_module`)
                .duration(20 * 30)
                .EUt(tiermap[tier]) // trolol
        }
        
    }

    function basic_module_recipe(tier, ctier, wiremat, platemat, extra_inputs)
    {
        if(extra_inputs)
        {
            event.recipes.gtceu.assembler(`kubejs:${tier}_basic_helper_module`)
                .itemInputs(`voyagercore:${tier}_helper_module`, `4x gtceu:${platemat}_plate`, `32x gtceu:fine_${wiremat}_wire`, `2x #gtceu:circuits/${ctier}`, `1x gtceu:${tier}_electric_pump`, `1x gtceu:${tier}_electric_piston`)
                .itemInputs(extra_inputs)
                .itemOutputs(`voyagercore:${tier}_basic_helper_module`)
                .duration(20 * 30)
                .EUt(tiermap[tier]) // trolol
        }
        else
        {
            event.recipes.gtceu.assembler(`kubejs:${tier}_basic_helper_module`)
                .itemInputs(`voyagercore:${tier}_helper_module`, `4x gtceu:${platemat}_plate`, `32x gtceu:fine_${wiremat}_wire`, `2x #gtceu:circuits/${ctier}`, `1x gtceu:${tier}_electric_pump`, `1x gtceu:${tier}_electric_piston`, `2x gtceu:${tier}_electric_motor`)
                .itemOutputs(`voyagercore:${tier}_basic_helper_module`)
                .duration(20 * 30)
                .EUt(tiermap[tier]) // trolol
        }
        
    }

    function parallel_module_recipe(tier, ctier, wiremat, wiremat2, extra_inputs)
    {
        if(extra_inputs)
        {
            event.recipes.gtceu.assembler(`kubejs:${tier}_parallel_helper_module`)
                .itemInputs(`voyagercore:${tier}_helper_module`, `2x gtceu:${wiremat2}_octal_wire`, `32x gtceu:fine_${wiremat}_wire`, `2x #gtceu:circuits/${ctier}`, `1x gtceu:${tier}_electric_pump`, `1x gtceu:${tier}_electric_piston`)
                .itemInputs(extra_inputs)
                .itemOutputs(`voyagercore:${tier}_parallel_helper_module`)
                .duration(20 * 30)
                .EUt(tiermap[tier]) // trolol
        }
        else
        {
            event.recipes.gtceu.assembler(`kubejs:${tier}_parallel_helper_module`)
                .itemInputs(`voyagercore:${tier}_helper_module`, `2x gtceu:${wiremat2}_octal_wire`, `32x gtceu:fine_${wiremat}_wire`, `8x #gtceu:circuits/${ctier}`, `1x gtceu:${tier}_emitter`, `1x gtceu:${tier}_sensor`, `4x gtceu:${tier}_robot_arm`, `gtceu:${tier}_transformer_16a`)
                .itemOutputs(`voyagercore:${tier}_parallel_helper_module`)
                .duration(20 * 30)
                .EUt(tiermap[tier]) // trolol
        }
        
    }

    tiers.forEach(tier => {
        base_module_recipe(tier, tierBaseGearMap[tier], tierBaseMatMap[tier], "gtceu:polyethylene 1000")
    });

    tiers.forEach(tier => generic_helper_hull_recipe(tier, tierBaseMatMap[tier], tierBaseMatMap[tier], "gtceu:soldering_alloy 288"))
    s_tiers.forEach(tier => specialized_helper_hull_recipe(tier, tierBaseMatMap[tier], tierSpecialMatMap[tier], "gtceu:soldering_alloy 576"))
    tiers.forEach(tier => output_module_recipe(tier, tierMaxCircuitTierMap[tier], tierCoilMatMap[tier], tierBaseGearMap[tier]))


    speed_module_recipe("mv", "hv", "black_steel", "black_bronze")
    efficiency_module_recipe("mv", "mv", "fluxed_electrum", "fluxed_electrum", "gtceu:sodium_potassium 2000")
    basic_module_recipe("mv", "hv", "cupronickel", "kanthal")
    parallel_module_recipe("mv", "ev", "platinum", "magnesium_diboride")

    speed_module_recipe("hv", "ev", "tantalum", "niobium_nitride")
    efficiency_module_recipe("hv", "hv", "fluxed_cobalt_electrum", "fluxed_cobalt_electrum", "gtceu:sodium_potassium 2000")
    basic_module_recipe("hv", "ev", "platinum", "nichrome")
    parallel_module_recipe("hv", "iv", "tantalum", "mercury_barium_calcium_cuprate")

    speed_module_recipe("ev", "iv", "lunarium", "titanium_carbide")
    efficiency_module_recipe("ev", "ev", "refined_fluxed_electrum", "refined_fluxed_electrum", "gtceu:sodium_potassium 2000")
    basic_module_recipe("ev", "iv", "niobium_titanium", "desh")
    parallel_module_recipe("ev", "luv", "iridium", "uranium_triplatinum")

    speed_module_recipe("iv", "luv", "titanex-901-htc", "hsse")
    efficiency_module_recipe("iv", "iv", "titanite_alloy", "titanite_alloy", "voyagercore:cryotheum 2000")
    basic_module_recipe("iv", "luv", "titanite", "hssg")
    parallel_module_recipe("iv", "zpm", "martian-composite", "samarium_iron_arsenic_oxide")

    speed_module_recipe("luv", "zpm", "europium", "duranium")
    efficiency_module_recipe("luv", "luv", "perfected_electrum", "perfected_electrum", "voyagercore:cryotheum 2000")
    basic_module_recipe("luv", "zpm", "industrial_perfected_electrum", "naquadah")
    parallel_module_recipe("luv", "uv", "trellium", "indium_tin_barium_titanium_cuprate")

    event.shaped(
        Item.of('gtceu:mv_helper_factory', 1), // arg 1: output
        [
            'BDB',
            'ACA', // arg 2: the shape (array of strings)
            'EDE'
        ],
        {
            A: 'gtceu:fluxed_electrum_double_wire',
            B: 'gtceu:mv_robot_arm',  //arg 3: the mapping object
            C: 'gtceu:mv_machine_hull',
            D: 'gtceu:polyvinyl_chloride_normal_item_pipe',
            E: '#gtceu:circuits/mv'
        }
    )

    event.shaped(
        Item.of('gtceu:hv_helper_factory', 1), // arg 1: output
        [
            'BDB',
            'ACA', // arg 2: the shape (array of strings)
            'EDE'
        ],
        {
            A: 'gtceu:fluxed_cobalt_electrum_double_wire',
            B: 'gtceu:hv_robot_arm',  //arg 3: the mapping object
            C: 'gtceu:hv_machine_hull',
            D: 'gtceu:polytetrafluoroethylene_normal_fluid_pipe',
            E: '#gtceu:circuits/hv'
        }
    )

    
})
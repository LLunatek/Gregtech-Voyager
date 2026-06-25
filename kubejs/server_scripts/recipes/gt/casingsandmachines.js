
ServerEvents.recipes(event => {

    function casing_recipe(mat, output, additionalInputs)
    {
        if(additionalInputs)
        {
            event.recipes.gtceu.assembler('kubejs:' + mat + '_casing')
            .itemInputs(
                '6x gtceu:' + mat + '_plate',
                '1x gtceu:' + mat + '_frame',
                additionalInputs
            )
            .circuit(6)
            .itemOutputs('2x kubejs:' + output + '_casing')
            .duration(30)
            .EUt(16);
        }
        else
        {
           event.recipes.gtceu.assembler('kubejs:' + mat + '_casing')
            .itemInputs(
                '6x gtceu:' + mat + '_plate',
                '1x gtceu:' + mat + '_frame'
            )
            .circuit(6)
            .itemOutputs('2x kubejs:' + output + '_casing')
            .duration(30)
            .EUt(16); 
        }
        

        
    }

    casing_recipe('desh', 'durable_desh')
    casing_recipe('ultimet', 'firm_ultimet')
    casing_recipe('ostrum', 'ostrum')
    // casing_recipe('frost_conducting', 'aluminex_202_a')
    casing_recipe('titanite_alloy', 'titanite', ['#gtceu:circuits/iv'])
    event.shaped(
    Item.of('gtceu:alloy_blast_smelter', 1), // arg 1: output
    [
        'ADA',
        'CBC', // arg 2: the shape (array of strings)
        'ADA'
    ],
    {
        A: 'gtceu:double_ostrum_plate',
        B: 'gtceu:iv_alloy_smelter',  //arg 3: the mapping object
        C: 'gtceu:uranium_triplatinum_double_wire',
        D: '#gtceu:circuits/luv'
    }
    )
    event.replaceInput(
    { output: 'gtceu:large_assembler' }, 
    'gtceu:platinum_single_cable',            
    'gtceu:titanex-901-htc_gear')        
    
    event.recipes.gtceu.assembler('kubejs:stout_titanium_carbide_casing')
            .itemInputs(
                '6x gtceu:titanium_carbide_plate',
                '1x gtceu:titanium_frame',
            )
            .circuit(6)
            .itemOutputs('2x kubejs:stout_titanium_carbide_casing')
            .duration(30)
            .EUt(16);

    event.recipes.gtceu.assembler('kubejs:frost_conducting_casing')
            .itemInputs(
                '6x gtceu:aluminex_202_a_plate',
                '1x gtceu:aluminex_202_a_frame',
            )
            .circuit(6)
            .itemOutputs('2x kubejs:frost_conducting_casing')
            .duration(30)
            .EUt(7680);

    event.recipes.gtceu.assembler('kubejs:cooling_lamp')
            .itemInputs(
                '8x kubejs:frost_conducting_casing',
                '1x gtceu:iv_emitter',
            )
            .inputFluids('gtceu:pcb_coolant 8000')
            .circuit(1)
            .itemOutputs('2x kubejs:cooling_lamp')
            .duration(30)
            .EUt(7860);

    event.recipes.gtceu.assembler('kubejs:radiation_proof_lead_casing')
        .itemInputs(
            '6x gtceu:lead_plate',
            '1x gtceu:titanium_frame',
        )
        .circuit(6)
        .itemOutputs('2x kubejs:radiation_proof_lead_casing')
        .duration(30)
        .EUt(16);

    event.recipes.gtceu.assembler('kubejs:radiation_conducting_titanex_casing')
        .itemInputs(
            '1x kubejs:radiation_proof_lead_casing',
            '6x gtceu:double_titanex-594-hta_plate',
            'gtceu:ev_field_generator'
        )
        .circuit(6)
        .itemOutputs('4x kubejs:radiation_conducting_titanex_casing')
        .duration(30)
        .EUt(1920);

    event.recipes.gtceu.assembler('kubejs:titanite_blast_furnace')
        .itemInputs(
            '16x kubejs:titanite_casing',
            '4x #gtceu:circuits/zpm',
            '8x kubejs:desh_coil_block',
            '8x gtceu:electric_blast_furnace',
            '4x gtceu:lunarium_gear',
            '4x gtceu:iv_electric_pump',
            '4x gtceu:iv_electric_motor',
            '4x gtceu:iv_conveyor_module'

        )
        .circuit(2)
        .itemOutputs('gtceu:titanite_blast_furnace')
        .duration(60 * 20)
        .EUt(7680); 

    // fuck it ill put these here too

    function cube_multi(mat, output, input)
    {  
        if(!input)
        {
            event.shaped(
            Item.of('gtceu:cube_' + output, 1), // arg 1: output
            [
                'ABA',
                'BCB', // arg 2: the shape (array of strings)
                'ABA'
            ],
            {
                A: 'gtceu:double_' + mat + '_plate',
                B: '#gtceu:circuits/ev',  //arg 3: the mapping object
                C: 'gtceu:ev_' + output,
            }
            )
        } else

        {
            event.shaped(
            Item.of('gtceu:cube_' + output, 1), // arg 1: output
            [
                'ABA',
                'BCB', // arg 2: the shape (array of strings)
                'ABA'
            ],
            {
                A: 'gtceu:double_' + mat + '_plate',
                B: '#gtceu:circuits/ev',  //arg 3: the mapping object
                C: 'gtceu:' + input,
            }
            )
        }

    }

    cube_multi('desh', 'centrifuge')
    cube_multi('titanium_carbide', 'macerator')
    cube_multi('ultimet', 'electrolyzer')
    cube_multi('lead', 'oven', 'molybdenum_disilicide_coil_block')
});

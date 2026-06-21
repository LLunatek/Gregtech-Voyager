
ServerEvents.recipes(event => {

    const tiers = ['ulv', 'lv','mv','hv','ev','iv','luv','zpm','uv','uhv','uev','uiv','max'];

    event.shaped(
        Item.of('gtceu:radiation_chamber', 1), // arg 1: output
        [
            'ADA',
            'CBC', // arg 2: the shape (array of strings)
            'ADA'
        ],
        {
            A: 'gtceu:titanex-594-hta_rotor',
            B: 'gtceu:iv_fluid_heater',  //arg 3: the mapping object
            C: 'gtceu:ostrum_double_cable',
            D: '#gtceu:circuits/luv'
        }
    )




});
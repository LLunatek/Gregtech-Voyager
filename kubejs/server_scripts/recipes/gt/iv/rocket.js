
ServerEvents.recipes(event => {

    
    event.recipes.gtceu.forming_press("kubejs:raw_advanced_martian_plate")
        .itemInputs("2x gtceu:martian-composite_ingot", '2x gtceu:hssg_ingot', '2x gtceu:tungsten_steel_ingot')
        .itemOutputs('kubejs:raw_advanced_martian_plating')
        .duration(20*200)
        .EUt(480)


    event.recipes.gtceu.electric_blast_furnace("kubejs:advanced_martian_plate")
        .itemInputs("kubejs:raw_advanced_martian_plating", '2x gtceu:aluminex_202_a_plate')
        .itemOutputs("kubejs:advanced_martian_plating")
        .circuit(1)
        .duration(20 * 400) 
        .EUt(480)
        .blastFurnaceTemp(4000);


});
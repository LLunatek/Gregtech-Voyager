
ServerEvents.recipes(event => {

    event.remove({type: 'gtceu:electrolyzer', input: 'gtceu:silicon_dioxide_dust'})


    event.recipes.gtceu.electrolyzer("kubejs:sddtooxygen")
        .itemInputs("gtceu:silicon_dioxide_dust")
        .itemOutputs('gtceu:silicon_dust')
        .outputFluids("gtceu:oxygen 2000")
        .duration(20*30)
        .EUt(480)



});


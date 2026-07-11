ServerEvents.recipes(event => {
 

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
function pulverizing(rock, tier, output, inF, time, eut, outF)
{
    let outFSmall = []
    let outFMed = []
    let outFLarge = []
    if (!outF)
    {
        outFSmall = []
        outFMed = []
        outFLarge = []
    }
    else
    {
        outFSmall = outF + " " + 250
        outFMed = outF + " " + 500
        outFLarge = outF + " " + 1000
    }
    event.recipes.gtceu.pulverizing("kubejs:rock_" + rock + "_to_ores")
            .itemInputs("kubejs:small_" + rock + "_rock")
            .itemOutputs(output[0], output[1])
            .inputFluids(inF)
            .addData("crushing_wheel_tier", tier)
            .outputFluids(outFSmall)
            .duration(20 * time)
            .EUt(eut)

    event.recipes.gtceu.pulverizing("kubejs:med_rock_" + rock + "_to_ores")
            .itemInputs("kubejs:medium_" + rock + "_rock")
            .itemOutputs(output[0], output[1], output[2], output[3])
            .inputFluids(inF)
            .addData("crushing_wheel_tier", tier)
            .outputFluids(outFMed)
            .duration(30 * time)
            .EUt(eut)

    event.recipes.gtceu.pulverizing("kubejs:large_rock_" + rock + "_to_ores")
            .itemInputs("kubejs:large_" + rock + "_rock")
            .itemOutputs(output[0], output[1], output[2], output[3], output[4], output[5])
            .inputFluids(inF)
            .addData("crushing_wheel_tier", tier)
            .outputFluids(outFLarge)
            .duration(40 * time)
            .EUt(eut)
}


assembly_research('pulverizer', 'voyagercore',
    ['1x gtceu:large_maceration_tower', '64x gtceu:fine_perfected_electrum_wire', '8x gtceu:calorite_gear', '8x #gtceu:circuits/zpm', '4x gtceu:hsse_buzz_saw_blade', '8x gtceu:luv_conveyor_module', '8x gtceu:luv_electric_piston', '16x gtceu:luv_electric_motor'],
    ['voyagercore:high_stress_lubricant 8000', 'gtceu:tungsten 16000'], 32000, 60, 'gtceu:large_maceration_tower'
)

const moon_ores = ["2x gtceu:crushed_desh_ore", "2x gtceu:crushed_neodymium_ore", "2x gtceu:crushed_bornite_ore", "2x gtceu:crushed_lunite_ore", "2x gtceu:crushed_chromite_ore", "2x gtceu:crushed_ilmenite_ore"]

const mars_ores = ["2x gtceu:crushed_cobaltite_ore", "2x gtceu:crushed_uraninite_ore", "2x gtceu:crushed_cooperite_ore", "2x gtceu:crushed_dalumite_ore", "2x gtceu:crushed_scheelite_ore", "2x gtceu:crushed_plutonium_ore"]

const venus_ores = ["6x gtceu:crushed_electrotine_ore", "6x gtceu:crushed_redstone_ore", "4x gtceu:crushed_chlorite_ore", "4x gtceu:crushed_fluorite_ore", "2x gtceu:crushed_xastinite_ore", "64x gtceu:venus_sand_dust"]
 
pulverizing("moon", GTValues.IV, moon_ores, [], 2, 7680)
pulverizing("mars", GTValues.LuV, mars_ores, [], 2, 27860, 'gtceu:sulfuria_solution')
pulverizing("venus", GTValues.ZPM, venus_ores, [], 2, 27860, 'gtceu:sulfuria_solution')

})
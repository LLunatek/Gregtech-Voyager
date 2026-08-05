ServerEvents.recipes((event) => {
    event.remove({ output: "tconstruct:steel_ingot" })
    event.remove({ output: "tconstruct:steel_block" })
    event.remove({ type: "tconstruct:casting_table", output: "ender_eye" })
    event.remove({ type: "minecraft:smelting", output: "tconstruct:seared_brick" })
    event.remove({ type: "minecraft:blasting", output: "tconstruct:seared_brick" })

    event.smelting("tconstruct:seared_brick", "kubejs:compressed_grout")

    event
        .shapeless(
            Item.of("kubejs:compressed_grout", 1), // arg 1: output
            [
                "gtceu:brick_wooden_form",
                "tconstruct:grout" // arg 2: the array of inputs
            ]
        )
        .keepIngredient("gtceu:brick_wooden_form")
})

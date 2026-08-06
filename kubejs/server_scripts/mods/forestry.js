ServerEvents.recipes((event) => {
    // event.removeLoot(item => item.id.startsWith('artifacts:'));
    event.remove({ output: "forestry:foresters_manual" })
    event.remove({ output: "forestry:ingot_bronze" })

    // @ts-expect-error this is cursed (its defined as a function but not callable, thanks probe)
    event.shapeless(
        Item.of("forestry:foresters_manual", 1), // arg 1: output
        [
            "minecraft:book",
            "#minecraft:flowers" // arg 2: the array of inputs
        ]
    )

    // event.addLootModifier("inventorypets:blocks/cloud_block").removeLoot({mod: "inventorypets"});
})

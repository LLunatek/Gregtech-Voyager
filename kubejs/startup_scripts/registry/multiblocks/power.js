const $LargeTurbineMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.generator.LargeTurbineMachine")

GTCEuStartupEvents.registry("gtceu:recipe_type", event => {

    event.create("helper_calorie_conversion")
        .category("multiblock")
        .setEUIO("out")
        .setMaxIOSize(4, 1, 2, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_RECYCLER, FillDirection.LEFT_TO_RIGHT)
        .setSlotOverlay(false, false, GuiTextures.ARROW_INPUT_OVERLAY)
        .setSound(GTSoundEntries.CHEMICAL);

    // Moved to core mod
    // event.create("hyper_helper_calorie_conversion")
    //     .category("multiblock")
    //     .setEUIO("out")
    //     .setMaxIOSize(4, 2, 2, 1)
    //     .setProgressBar(GuiTextures.PROGRESS_BAR_RECYCLER, FillDirection.LEFT_TO_RIGHT)
    //     .setSlotOverlay(false, false, GuiTextures.ARROW_INPUT_OVERLAY)
    //     .setSound(GTSoundEntries.CHEMICAL);


});


GTCEuStartupEvents.registry("gtceu:machine", event => {


    function powerRectangle(type, casing, block2, recipe) 
    {

        event.create(`power_rectangle_${type}`, 'multiblock')
            .rotationState(RotationState.NON_Y_AXIS)
            .recipeType(recipe)
            .generator(true)
            .recipeModifiers()
            .appearanceBlock(() => Block.getBlock(`kubejs:${casing}_casing`))
            .pattern(definition => FactoryBlockPattern.start()
                .aisle('CCC', 'CDC', 'CCC')
                .aisle('CCC', 'CBC', 'CCC')
                .aisle('CCC', 'CBC', 'CCC')
                .aisle('CCC', 'C@C', 'CCC')
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .where('C', Predicates.blocks(`kubejs:${casing}_casing`).setMinGlobalLimited(5)
                    .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setExactLimit(1).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setExactLimit(1).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setExactLimit(1).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setExactLimit(1).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
                .where('B', Predicates.blocks(block2))
                .where('D', Predicates.abilities(PartAbility.OUTPUT_ENERGY))
                .build())
            .workableCasingModel(`kubejs:block/casing/${casing}_casing`,
            `kubejs:block/multiblock/${type}`);

    }

    function powerRectangleC(type, casing, block2, b3, recipe) 
    {

        event.create(`power_rectangle_${type}`, 'multiblock')
            .rotationState(RotationState.NON_Y_AXIS)
            .recipeType(recipe)
            .generator(true)
            .recipeModifiers()
            .appearanceBlock(() => Block.getBlock(`kubejs:${casing}_casing`))
            .pattern(definition => FactoryBlockPattern.start()
                .aisle('CCC', 'CDC', 'CCC')
                .aisle('CCC', 'CBC', 'CCC')
                .aisle('CCC', 'CBC', 'CCC')
                .aisle('III', 'I@I', 'III')
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .where('C', Predicates.blocks(`kubejs:${casing}_casing`).setMinGlobalLimited(5)
                    .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setExactLimit(1).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setExactLimit(1).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setExactLimit(1).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setExactLimit(1).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
                .where('B', Predicates.blocks(block2))
                .where('I', Predicates.blocks(b3))
                .where('D', Predicates.abilities(PartAbility.OUTPUT_ENERGY))
                .build())
            .workableCasingModel(`kubejs:block/casing/${casing}_casing`,
            `kubejs:block/multiblock/${type}`);

    }

    const gtVals = {
        ulv: GTValues.ULV,
        lv: GTValues.LV,
        mv: GTValues.MV,
        hv: GTValues.HV,
        ev: GTValues.EV,
        iv: GTValues.IV,
        luv: GTValues.LuV,
        zpm: GTValues.ZPM,
        uv: GTValues.UV,
        uhv: GTValues.UHV,
        uev: GTValues.UEV,
        uiv: GTValues.UIV,
        uxv: GTValues.UXV,
        opv: GTValues.OpV,
        max: GTValues.MAX
    };

    function powerRectangleTurbine(type, casing, block2, recipe, rotorTierMin) 
    {

        event.create(`${type}_turbine`, 'multiblock')
        .machine((holder) => new $LargeTurbineMachine(holder, rotorTierMin)) // The value shows one rotor holder tier above the recommended minimum rotor holder. The tier of rotor holder provides a boost based on the efficiency stat.
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(recipe)
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT_SUBTICK, GTRecipeModifiers.BATCH_MODE, (machine, recipe) => $LargeTurbineMachine.recipeModifier(machine, recipe)])
        .appearanceBlock(() => Block.getBlock(`kubejs:${casing}_casing`))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CDC', 'CCC')
            .aisle('CCC', 'CBC', 'CCC')
            .aisle('CCC', 'CBC', 'C@C')
            .aisle('CCC', 'CRC', 'CCC')
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(`kubejs:${casing}_casing`).setMinGlobalLimited(5)
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setExactLimit(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setExactLimit(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setExactLimit(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setExactLimit(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('B', Predicates.blocks(block2))
            .where("R", Predicates.ability(PartAbility.ROTOR_HOLDER).setExactLimit(1))
            .where('D', Predicates.abilities(PartAbility.OUTPUT_ENERGY))
            .build())
            .workableCasingModel(`kubejs:block/casing/${casing}_casing`,
            `kubejs:block/multiblock/${type}`);
    }

    event.create(`large_helper_wheel`, 'multiblock')
            .rotationState(RotationState.ALL)
            .recipeType('large_helper_wheel')
            .generator(true)
            .recipeModifiers($VoyagerCoreRecipeModifiers.HELPER_COMPATABILITY)
            .appearanceBlock(() => Block.getBlock(`gtceu:frostproof_machine_casing`))
            .pattern(definition => FactoryBlockPattern.start()
                .aisle("aba", "ccc", "bcb", "bbb", "bbb")
                .aisle("bbb", "ccc", "efe", "fgf", "efe")
                .aisle("aba", "ccc", "b@b", "bbb", "bbb")

                .where("a", Predicates.blocks("gtceu:fluxed_cobalt_electrum_frame"))
                .where("b", Predicates.any())
                .where("c", Predicates.blocks("gtceu:frostproof_machine_casing")
                    .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setExactLimit(1).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setExactLimit(1).setPreviewCount(1))
                    .or(Predicates.abilities($VoyagerPartAbilities.HELPER_HOLDER).setExactLimit(1))
                    .or(Predicates.abilities(PartAbility.OUTPUT_ENERGY).setMaxGlobalLimited(2,1))
                )
                .where('@', Predicates.controller(Predicates.blocks(definition.get())))
                .where("e", Predicates.blocks("gtceu:stainless_steel_turbine_casing"))
                .where("f", Predicates.blocks("gtceu:clean_machine_casing"))
                .where("g", Predicates.blocks("gtceu:tempered_glass"))
            .build())
            .workableCasingModel(`gtceu:block/casings/solid/machine_casing_frost_proof`,
            `kubejs:block/overlay/helper_wheel`);


    powerRectangle('helper_calorie_converter', 'radiation_proof_lead', 'gtceu:titanium_gearbox', 'helper_calorie_conversion')



});
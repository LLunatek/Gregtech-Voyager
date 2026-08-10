

ServerEvents.recipes((event) => {
    // event, name, inputItems, inputFluids, outputItems, outputFluids, duration, eut, temp, specialized
    global.recipe_chem_plant(event, "polyethylene_helper_specialized", [], ['gtceu:oxygen 1000', 'gtceu:ethylene 144'], [], 'gtceu:polyethylene 288', 8, 30, 1200, "chemist")
    global.recipe_chem_plant(event, "polyvinyl_helper_specialized", [], ['gtceu:oxygen 1000', 'gtceu:vinyl_chloride 144'], [],'gtceu:polyvinyl_chloride 288', 8, 30, 2400, "chemist")
    global.recipe_chem_plant(event, "ptfe_helper_specialized", [], ['gtceu:oxygen 1000', 'gtceu:tetrafluoroethylene 144'], [],'gtceu:polytetrafluoroethylene 288', 8, 30, 4500, "chemist")
    global.recipe_chem_plant(event, "sbr_helper_specialized", [], ['gtceu:butadiene 3000', 'gtceu:benzene 1000', 'gtceu:ethylene 1000', 'gtceu:oxygen 15000'],['54x gtceu:raw_styrene_butadiene_rubber_dust'], ['gtceu:hydrogen 2000'], 24, 480, 4500, "chemist")
    

    global.recipe_chem_plant(event, "hog_specialized", [], 
        ['gtceu:gasoline 20000', 'gtceu:octane 2000', 'gtceu:nitrous_oxide 2000', 'gtceu:toluene 1000'],
        [], ['gtceu:high_octane_gasoline 32000'], 
        2.5, 1980, 4500, "petrochem")
    

})

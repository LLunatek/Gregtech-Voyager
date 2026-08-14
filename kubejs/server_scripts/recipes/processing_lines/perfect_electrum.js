import { recipe_chem_bath, recipe_teus_laser } from "../../00_util/recipeUtils"

ServerEvents.recipes((event) => {
    global.recipe_chem_bath(event, "gtceu:perfected_electrum_base_dust", "4x gtceu:graphene_dust", "gtceu:refined_fluxed_electrum 288", 1024, 30)

    global.recipe_teus_laser(
        event,
        "gtceu:hot_perfected_electrum_ingot",
        "gtceu:perfected_electrum_base_dust",
        "kubejs:atomic_lattice",
        "gtceu:electrum " + 144 * 8,
        "gtceu:degenerate_electrum_light_matter_plasma 288",
        7777,
        100,
        0.1
    )
})

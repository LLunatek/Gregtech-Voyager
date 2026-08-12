ServerEvents.tags("block", (event) => {
    // Removes the flower_pots tag from potted botania flowers to stop generation in dungeons
    event.remove("minecraft:flower_pots", [/botania:potted.*/])
    event.remove("minecraft:flower_pots", [/twilightforest:potted.*/])

    event.remove("forge:storage_blocks/certus_quartz", "ae2:quartz_block")

})

ServerEvents.tags("item", (event) => {

    function remove_ad_astra_plates(mat)
    {
        event.remove(`forge:plates/${mat}`, `ad_astra:${mat}_plate`)
        event.remove(`forge:ingots/${mat}`, `ad_astra:${mat}_ingot`)
    }
    function remove_ad_astra_rods(mat)
    {
        event.remove(`forge:rods/${mat}`, `ad_astra:${mat}_rod`)
    }


    const ad_astra_mat_list = ['iron', 'steel', 'desh', 'ostrum', 'calorite']

    ad_astra_mat_list.forEach(mat =>
        {
            remove_ad_astra_plates(mat)
            remove_ad_astra_rods(mat)
        }
    )


    event.remove("forge:plates/iron", "ad_astra:iron_plate")
    event.remove("forge:plates/steel", "ad_astra:steel_plate")
    event.remove("forge:ingots/bronze", "forestry:ingot_bronze")
    event.remove("forge:ingots/bronze", "tconstruct:bronze_ingot")

    event.remove("forge:dusts/certus_quartz", "ae2:certus_quartz_dust")

    event.remove("forge:ingots/steel", ["ad_astra:steel_ingot", "tconstruct:steel_ingot"])
    
    const gtknives = event.get("gtceu:tools/crafting_knives").getObjectIds()
    
    // gtknives.forEach(knife =>{
        event.add("farmersdelight:straw_harvesters", event.get("gtceu:tools/crafting_knives").getObjectIds())
        event.add("farmersdelight:tools/knives", event.get("gtceu:tools/crafting_knives").getObjectIds())
    // })
    /**
     * @param {string} tier
     */
    function circuit(tier) {
        event.add(`gtceu:circuits/${tier}`, `kubejs:${tier}_universal_circuit`)
    }

    const tiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", "max"]

    tiers.forEach((tier) => circuit(tier))
})

ServerEvents.tags("fluid", (event) => {
    event.add("ad_astra:fuel", "gtceu:rocket_fuel")

    event.add("forestry:seed_oil", "gtcey:seed_oil")

})

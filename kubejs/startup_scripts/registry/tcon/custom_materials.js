GTCEuStartupEvents.registry("gtceu:material", e => {
    GTMaterials.Carbon.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(12, 6, 64, 1).build()) 
    //harvestSpeed, attackDamage, durability, harvestLevel
    // GTMaterials.VanadiumSteel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(10, 8, 3200, 4).build())
    GTMaterials.get("energetic_alloy").setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(16, 4, 1440, 4).build())
    GTMaterials.get("pink_steel").setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(4, 6, 5640, 3).build())
    GTMaterials.get("pearlic_steel").setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(8, 6, 1440, 3).build())
    GTMaterials.get("energetic_pearlic_alloy").setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(4, 16, 3600, 4).build())

    // GTMaterials.get("lunarium").setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(12, 12, 1200, 4).build())


    //durabilityMultiplier, [helmetProtection, chestplateProtection, leggingsProtection, bootsProtection]
    //Toughness & Knockback Resistance are optional.
})
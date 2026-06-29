
StartupEvents.registry('block', event => {

    event.create('desh_coil_block', 'gtceu:coil')
        .temperature(4500)
        .level(4)
        .energyDiscount(12)
        .tier(4)
        .coilMaterial(() => GTMaterials.get('desh'))
        .hardness(5)
        .soundType('metal')
        .requiresTool(true);

    event.create('titanite_coil_block', 'gtceu:coil')
        .temperature(6500)
        .level(6)
        .energyDiscount(8)
        .tier(6)
        .coilMaterial(() => GTMaterials.get('titanite'))
        .hardness(5)
        .soundType('metal')
        .requiresTool(true);
});
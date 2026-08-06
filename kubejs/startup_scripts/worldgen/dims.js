GTCEuStartupEvents.registry("gtceu:dimension_marker", (event) => {
    // Void Dim
    event
        .create("javd:void")
        // @ts-ignore
        .iconSupplier(() => Item.of("javd:portal_block").getItem())
        .tier(0)
        .overrideName("Void Dimension")
    // Ad Astra dimensions
    event
        .create("ad_astra:moon")
        // @ts-ignore
        .iconSupplier(() => Item.of("ad_astra:moon_globe").getItem())
        .tier(0)
        .overrideName("Moon")
    event
        .create("ad_astra:mars")
        // @ts-ignore
        .iconSupplier(() => Item.of("ad_astra:mars_globe").getItem())
        .tier(0)
        .overrideName("Mars")
    event
        .create("ad_astra:mercury")
        // @ts-ignore
        .iconSupplier(() => Item.of("ad_astra:mercury_globe").getItem())
        .tier(0)
        .overrideName("Mercury")
    event
        .create("ad_astra:venus")
        // @ts-ignore
        .iconSupplier(() => Item.of("ad_astra:venus_globe").getItem())
        .tier(0)
        .overrideName("Venus")
    event
        .create("ad_astra:glacio")
        // @ts-ignore
        .iconSupplier(() => Item.of("ad_astra:glacio_globe").getItem())
        .tier(0)
        .overrideName("Glacio")

    event
        .create("twilightforest:twilight_forest")
        // @ts-ignore
        .iconSupplier(() => Item.of("twilightforest:twilight_portal_miniature_structure").getItem())
        .tier(0)
        .overrideName("Twilight Forest")
})

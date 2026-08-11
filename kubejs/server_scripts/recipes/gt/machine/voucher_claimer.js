ServerEvents.recipes((event) => {
    const tiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", "max"]

    /**
     * @type {Record<string, number>}
     */
    const voltageTable = {
        ulv: 8,
        lv: 32,
        mv: 128,
        hv: 512,
        ev: 2048,
        iv: 8192,
        luv: 32768,
        zpm: 131072,
        uv: 524288,
        uhv: 2097152,
        uev: 8388608,
        uiv: 33554432,
        uxv: 134217728
    }
    /**
     *
     * @param {*} name
     * @param {*} tier
     * @param {*} time
     * @param {*} eut
     */
    function create_voucher_recipe(name, tier, time, eut) {
        event.recipes.gtceu
            .voucher_claimer("kubejs:" + name)
            .itemInputs("kubejs:" + tier + "_voucher")
            .itemOutputs("kubejs:" + tier + "_loot_bag")
            .duration(time)
            .EUt(eut)
    }

    tiers.forEach((tier) => {
        if (voltageTable[tier]) {
            create_voucher_recipe(tier, tier, 200, voltageTable[tier])
        }
    })
})

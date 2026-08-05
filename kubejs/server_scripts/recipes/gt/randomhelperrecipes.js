import { recipe_lcr } from "../../00_util/recipeUtils"

ServerEvents.recipes((event) => {
    recipe_lcr(
        event,
        "plastic_boards_sodium_persulfate",
        ["2x gtceu:plastic_circuit_board", "12x gtceu:copper_foil"],
        ["gtceu:sodium_persulfate 300"],
        ["3x gtceu:plastic_printed_circuit_board"],
        [],
        20,
        30,
        "ev_technician_helper"
    )
    recipe_lcr(
        event,
        "plastic_boards_iron_iii",
        ["2x gtceu:plastic_circuit_board", "12x gtceu:copper_foil"],
        ["gtceu:iron_iii_chloride 150"],
        ["3x gtceu:plastic_printed_circuit_board"],
        [],
        20,
        30,
        "ev_technician_helper"
    )

    recipe_lcr(
        event,
        "epoxy_boards_sodium_persulfate",
        ["2x gtceu:epoxy_circuit_board", "16x gtceu:electrum_foil"],
        ["gtceu:sodium_persulfate 750"],
        ["3x gtceu:epoxy_printed_circuit_board"],
        [],
        35,
        30,
        "ev_technician_helper"
    )
    recipe_lcr(
        event,
        "epoxy_boards_iron_iii",
        ["2x gtceu:epoxy_circuit_board", "16x gtceu:electrum_foil"],
        ["gtceu:iron_iii_chloride 250"],
        ["3x gtceu:epoxy_printed_circuit_board"],
        [],
        35,
        30,
        "ev_technician_helper"
    )
})

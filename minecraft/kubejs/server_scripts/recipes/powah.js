// priority: 99
events.listen('recipes', event => {
    event.recipes.powah.energizing({
        "ingredients": [
            {"item": "botania:blaze_block"}
        ],
        "energy": 810000,
        "result": {
            "item": "powah:blazing_crystal_block"
        }
    })

    event.recipes.powah.energizing({
        "ingredients": [
            {"tag": "forge:storage_blocks/gold"},
            {"tag": "forge:storage_blocks/iron"}
        ],
        "energy": 90000,
        "result": {
            "item": "powah:energized_steel_block",
            "count": 2
        }
    })

    event.recipes.powah.energizing({
        "ingredients": [
            {"tag": "forge:snow_block"}
        ],
        "energy": 2000000,
        "result": {
            "item": "powah:charged_snowball",
            "count": 4
        }
    })

    event.recipes.powah.energizing({
        "ingredients": [
            {"tag": "forge:storage_blocks/diamond"}
        ],
        "energy": 2700000,
        "result": {
            "item": "powah:niotic_crystal_block"
        }
    })

    event.recipes.powah.energizing({
        "ingredients": [
            {"tag": "forge:storage_blocks/emerald"}
        ],
        "energy": 9000000,
        "result": {
            "item": "powah:spirited_crystal_block"
        }
    })
})
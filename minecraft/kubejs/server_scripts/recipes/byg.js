// priority: 0
events.listen('item.tags', event => {
    event.get('forge:sand').add([
        'byg:black_sand',
        'byg:white_sand'
    ])
    event.get('minecraft:sand').add([
        'byg:black_sand',
        'byg:white_sand'
    ])
    event.get('byg:bulbis_stems').remove([
        'byg:stripped_bulbis_wood',
        'byg:stripped_bulbis_stem',
        'byg:bulbis_stem',
        'byg:bulbis_wood'
    ])
    event.get('byg:ether_logs').remove([
        'byg:ether_log',
        'byg:ether_wood',
        'byg:stripped_ether_log',
        'byg:stripped_ether_wood'
    ])
    event.get('byg:nightshade_logs').remove([
        'byg:nightshade_log',
        'byg:nightshade_wood',
        'byg:stripped_nightshade_log',
        'byg:stripped_nightshade_wood'
    ])
    event.get('byg:sythian_stems').remove([
        'byg:stripped_sythian_hyphae',
        'byg:stripped_sythian_stem',
        'byg:sythian_hyphae',
        'byg:sythian_stem'
    ])
    event.get('forge:bookshelves').remove([
        'byg:ether_bookshelf',
        'byg:nightshade_bookshelf',
        'byg:sythian_bookshelf',
        'byg:embur_bookshelf',
        'byg:bulbis_bookshelf'
    ])
    event.get('forge:cobblestone').remove([
        'byg:ether_stone'
    ])
    event.get('forge:fence_gates').remove([
        'byg:sythian_fence_gate',
        'byg:embur_fence_gate'
    ])
    event.get('forge:mushrooms').remove([
        'byg:sythian_fungus'
    ])
    event.get('forge:netherrack').remove([
        'byg:sythian_nylium',
        'byg:embur_nylium',
        'byg:brimstone',
        'byg:blue_netherrack'
    ])
    event.get('forge:saplings').remove([
        'byg:ether_sapling',
        'byg:nightshade_sapling'
    ])
    event.get('forge:stone').remove([
        'byg:ether_stone',
        'byg:sythian_nylium'
    ])
    event.get('forge:storage_blocks').remove([
        'byg:anthracite_block'
    ])
    event.get('forge:workbench').remove([
        'byg:sythian_crafting_table',
        'byg:embur_crafting_table'
    ])
    event.get('minecraft:buttons').remove([
        'byg:ether_button',
        'byg:nightshade_button',
        'byg:sythian_button',
        'byg:embur_button',
        'byg:bulbis_button'
    ])
    event.get('minecraft:doors').remove([
        'byg:ether_door',
        'byg:nightshade_door',
        'byg:sythian_door',
        'byg:embur_door',
        'byg:bulbis_door'
    ])
    event.get('minecraft:fences').remove([
        'byg:ether_fence',
        'byg:nightshade_fence',
        'byg:sythian_fence',
        'byg:embur_fence',
        'byg:bulbis_fence'
    ])
    event.get('minecraft:leaves').remove([
        'byg:ether_leaves',
        'byg:flowering_nightshade_leaves',
        'byg:nightshade_leaves'
    ])
    event.get('minecraft:logs').remove([
        'byg:ether_log',
        'byg:ether_wood',
        'byg:nightshade_log',
        'byg:nightshade_wood',
        'byg:stripped_ether_log',
        'byg:stripped_ether_wood',
        'byg:stripped_nightshade_log',
        'byg:stripped_nightshade_wood',
        'byg:stripped_sythian_hyphae',
        'byg:stripped_sythian_stem',
        'byg:sythian_hyphae',
        'byg:sythian_stem',
        'byg:embur_pedu',
        'byg:embur_hyphae',
        'byg:stripped_embur_pedu',
        'byg:stripped_embur_hyphae',
        'byg:stripped_bulbis_wood',
        'byg:stripped_bulbis_stem',
        'byg:bulbis_stem',
        'byg:bulbis_wood'

    ])
    event.get('minecraft:logs_that_burn').remove([
        'byg:ether_log',
        'byg:ether_wood',
        'byg:nightshade_log',
        'byg:nightshade_wood',
        'byg:stripped_ether_log',
        'byg:stripped_ether_wood',
        'byg:stripped_nightshade_log',
        'byg:stripped_nightshade_wood',
        'byg:stripped_bulbis_wood',
        'byg:stripped_bulbis_stem',
        'byg:bulbis_stem',
        'byg:bulbis_wood'
    ])
    event.get('minecraft:planks').remove([
        'byg:ether_planks',
        'byg:nightshade_planks',
        'byg:sythian_planks',
        'byg:embur_planks',
        'byg:bulbis_planks'
    ])
    event.get('minecraft:saplings').remove([
        'byg:ether_sapling',
        'byg:nightshade_sapling'
    ])
    event.get('minecraft:slabs').remove([
        'byg:ether_slab',
        'byg:ether_stone_slab',
        'byg:nightshade_slab',
        'byg:sythian_slab',
        'byg:embur_slab',
        'byg:bulbis_stairs',
        'byg:bulbis_slab'
    ])
    event.get('minecraft:stairs').remove([
        'byg:ether_stairs',
        'byg:ether_stone_stairs',
        'byg:nightshade_stairs',
        'byg:sythian_stairs',
        'byg:embur_stairs'
    ])
    event.get('minecraft:stone_bricks').remove([
        'byg:ether_stone'
    ])
    event.get('minecraft:stone_crafting_materials').remove([
        'byg:ether_stone'
    ])
    event.get('minecraft:stone_tool_materials').remove([
        'byg:ether_stone'
    ])
    event.get('minecraft:trapdoors').remove([
        'byg:ether_trapdoor',
        'byg:nightshade_trapdoor',
        'byg:sythian_trapdoor',
        'byg:embur_trapdoor',
        'byg:bulbis_trapdoor'
    ])
    event.get('minecraft:walls').remove([
        'byg:cryptic_stone_wall',
        'byg:ether_stone_wall'
    ])
    event.get('minecraft:wooden_doors').remove([
        'byg:ether_door',
        'byg:nightshade_door',
        'byg:sythian_door',
        'byg:embur_door',
        'byg:bulbis_door'
    ])
    event.get('minecraft:wooden_fences').remove([
        'byg:ether_fence',
        'byg:nightshade_fence',
        'byg:sythian_fence',
        'byg:embur_fence',
        'byg:bulbis_fence'
    ])
    event.get('minecraft:wooden_pressure_plates').remove([
        'byg:ether_pressure_plate',
        'byg:nightshade_pressure_plate',
        'byg:sythian_pressure_plate',
        'byg:embur_pressure_plate',
        'byg:bulbis_pressure_plate'
    ])
    event.get('minecraft:wooden_slabs').remove([
        'byg:ether_slab',
        'byg:nightshade_slab',
        'byg:sythian_slab',
        'byg:embur_slab',
        'byg:bulbis_slab'
    ])
    event.get('minecraft:wooden_stairs').remove([
        'byg:ether_stairs',
        'byg:nightshade_stairs',
        'byg:sythian_stairs',
        'byg:embur_stairs',
        'byg:bulbis_stairs'
    ])
    event.get('minecraft:wooden_trapdoors').remove([
        'byg:ether_trapdoor',
        'byg:nightshade_trapdoor',
        'byg:sythian_trapdoor',
        'byg:embur_trapdoor',
        'byg:bulbis_trapdoor'
    ])
    event.get('rftoolsutility:living/living').remove([
        'byg:ether_leaves',
        'byg:ether_sapling',
        'byg:flowering_nightshade_leaves',
        'byg:nightshade_leaves',
        'byg:nightshade_sapling',
        'byg:sythian_fungus'
    ])
    event.get('rftoolsutility:living/lowyield').remove([
        'byg:ether_leaves',
        'byg:ether_sapling',
        'byg:flowering_nightshade_leaves',
        'byg:nightshade_leaves',
        'byg:nightshade_sapling',
        'byg:sythian_fungus'
    ])
    event.get('rsgauges:buttons').remove([
        'byg:ether_button',
        'byg:nightshade_button',
        'byg:sythian_button',
        'byg:embur_button',
        'byg:bulbis_button'
    ])
    event.get('rsgauges:pressure_plates').remove([
        'byg:ether_pressure_plate',
        'byg:nightshade_pressure_plate',
        'byg:sythian_pressure_plate',
        'byg:embur_pressure_plate',
        'byg:bulbis_pressure_plate'
    ])
    event.get('byg:embur_pedus').remove([
        'byg:embur_pedu',
        'byg:embur_hyphae',
        'byg:stripped_embur_pedu',
        'byg:stripped_embur_hyphae'
    ])
})

events.listen('block.tags', event => {
    event.get('forge:sand').add([
        'byg:black_sand',
        'byg:white_sand'
    ])
    event.get('minecraft:sand').add([
        'byg:black_sand',
        'byg:white_sand'
    ])
    event.get('byg:ether_logs').remove([
        'byg:ether_log',
        'byg:ether_wood',
        'byg:stripped_ether_log',
        'byg:stripped_ether_wood'
    ])
    event.get('byg:nightshade_logs').remove([
        'byg:nightshade_log',
        'byg:nightshade_wood',
        'byg:stripped_nightshade_log',
        'byg:stripped_nightshade_wood'
    ])
    event.get('byg:sythian_stems').remove([
        'byg:stripped_sythian_hyphae',
        'byg:stripped_sythian_stem',
        'byg:sythian_hyphae',
        'byg:sythian_stem'
    ])
    event.get('forge:bookshelves').remove([
        'byg:ether_bookshelf',
        'byg:nightshade_bookshelf',
        'byg:sythian_bookshelf',
        'byg:embur_bookshelf'
    ])
    event.get('forge:cobblestone').remove([
        'byg:ether_stone'
    ])
    event.get('forge:fence_gates').remove([
        'byg:sythian_fence_gate',
        'byg:embur_fence_gate'
    ])
    event.get('forge:mushrooms').remove([
        'byg:sythian_fungus'
    ])
    event.get('forge:netherrack').remove([
        'byg:sythian_nylium',
        'byg:embur_nylium',
        'byg:brimstone'
    ])
    event.get('forge:saplings').remove([
        'byg:ether_sapling',
        'byg:nightshade_sapling'
    ])
    event.get('forge:stone').remove([
        'byg:ether_stone',
        'byg:sythian_nylium'
    ])
    event.get('forge:storage_blocks').remove([
        'byg:anthracite_block'
    ])
    event.get('forge:workbench').remove([
        'byg:sythian_crafting_table',
        'byg:embur_crafting_table'
    ])
    event.get('minecraft:buttons').remove([
        'byg:ether_button',
        'byg:nightshade_button',
        'byg:sythian_button',
        'byg:embur_button'
    ])
    event.get('minecraft:doors').remove([
        'byg:ether_door',
        'byg:nightshade_door',
        'byg:sythian_door',
        'byg:embur_door'
    ])
    event.get('minecraft:fences').remove([
        'byg:ether_fence',
        'byg:nightshade_fence',
        'byg:sythian_fence',
        'byg:embur_fence'
    ])
    event.get('minecraft:leaves').remove([
        'byg:ether_leaves',
        'byg:flowering_nightshade_leaves',
        'byg:nightshade_leaves'
    ])
    event.get('minecraft:logs').remove([
        'byg:ether_log',
        'byg:ether_wood',
        'byg:nightshade_log',
        'byg:nightshade_wood',
        'byg:stripped_ether_log',
        'byg:stripped_ether_wood',
        'byg:stripped_nightshade_log',
        'byg:stripped_nightshade_wood',
        'byg:stripped_sythian_hyphae',
        'byg:stripped_sythian_stem',
        'byg:sythian_hyphae',
        'byg:sythian_stem',
        'byg:embur_pedu',
        'byg:embur_hyphae',
        'byg:stripped_embur_pedu',
        'byg:stripped_embur_hyphae'

    ])
    event.get('minecraft:logs_that_burn').remove([
        'byg:ether_log',
        'byg:ether_wood',
        'byg:nightshade_log',
        'byg:nightshade_wood',
        'byg:stripped_ether_log',
        'byg:stripped_ether_wood',
        'byg:stripped_nightshade_log',
        'byg:stripped_nightshade_wood'
    ])
    event.get('minecraft:planks').remove([
        'byg:ether_planks',
        'byg:nightshade_planks',
        'byg:sythian_planks',
        'byg:embur_planks'
    ])
    event.get('minecraft:saplings').remove([
        'byg:ether_sapling',
        'byg:nightshade_sapling'
    ])
    event.get('minecraft:slabs').remove([
        'byg:ether_slab',
        'byg:ether_stone_slab',
        'byg:nightshade_slab',
        'byg:sythian_slab',
        'byg:embur_slab'
    ])
    event.get('minecraft:stairs').remove([
        'byg:ether_stairs',
        'byg:ether_stone_stairs',
        'byg:nightshade_stairs',
        'byg:sythian_stairs',
        'byg:embur_stairs'
    ])
    event.get('minecraft:stone_bricks').remove([
        'byg:ether_stone'
    ])
    event.get('minecraft:stone_crafting_materials').remove([
        'byg:ether_stone'
    ])
    event.get('minecraft:stone_tool_materials').remove([
        'byg:ether_stone'
    ])
    event.get('minecraft:trapdoors').remove([
        'byg:ether_trapdoor',
        'byg:nightshade_trapdoor',
        'byg:sythian_trapdoor',
        'byg:embur_trapdoor'
    ])
    event.get('minecraft:walls').remove([
        'byg:cryptic_stone_wall',
        'byg:ether_stone_wall'
    ])
    event.get('minecraft:wooden_doors').remove([
        'byg:ether_door',
        'byg:nightshade_door',
        'byg:sythian_door',
        'byg:embur_door'
    ])
    event.get('minecraft:wooden_fences').remove([
        'byg:ether_fence',
        'byg:nightshade_fence',
        'byg:sythian_fence',
        'byg:embur_fence'
    ])
    event.get('minecraft:wooden_pressure_plates').remove([
        'byg:ether_pressure_plate',
        'byg:nightshade_pressure_plate',
        'byg:sythian_pressure_plate',
        'byg:embur_pressure_plate'
    ])
    event.get('minecraft:wooden_slabs').remove([
        'byg:ether_slab',
        'byg:nightshade_slab',
        'byg:sythian_slab',
        'byg:embur_slab'
    ])
    event.get('minecraft:wooden_stairs').remove([
        'byg:ether_stairs',
        'byg:nightshade_stairs',
        'byg:sythian_stairs',
        'byg:embur_stairs'
    ])
    event.get('minecraft:wooden_trapdoors').remove([
        'byg:ether_trapdoor',
        'byg:nightshade_trapdoor',
        'byg:sythian_trapdoor',
        'byg:embur_trapdoor'
    ])
    event.get('rftoolsutility:living/living').remove([
        'byg:ether_leaves',
        'byg:ether_sapling',
        'byg:flowering_nightshade_leaves',
        'byg:nightshade_leaves',
        'byg:nightshade_sapling',
        'byg:sythian_fungus'
    ])
    event.get('rftoolsutility:living/lowyield').remove([
        'byg:ether_leaves',
        'byg:ether_sapling',
        'byg:flowering_nightshade_leaves',
        'byg:nightshade_leaves',
        'byg:nightshade_sapling',
        'byg:sythian_fungus'
    ])
    event.get('rsgauges:buttons').remove([
        'byg:ether_button',
        'byg:nightshade_button',
        'byg:sythian_button',
        'byg:embur_button'
    ])
    event.get('rsgauges:pressure_plates').remove([
        'byg:ether_pressure_plate',
        'byg:nightshade_pressure_plate',
        'byg:sythian_pressure_plate',
        'byg:embur_pressure_plate'
    ])
    event.get('byg:embur_pedus').remove([
        'byg:embur_pedu',
        'byg:embur_hyphae',
        'byg:stripped_embur_pedu',
        'byg:stripped_embur_hyphae'
    ])
})

events.listen('recipes', event => {
    event.remove({input: 'byg:nightshade_planks'})
    event.remove({input: 'byg:nightshade_berries'})
    event.remove({input: 'byg:therium_crystal'})
    event.remove({input: 'byg:oddity_cactus'})
    event.remove({input: 'byg:ether_planks'})
    event.remove({input: 'byg:sythian_planks'})
    event.remove({input: 'byg:sythian_stalk_stem'})
    event.remove({input: 'byg:sythian_stalk_block'})
    event.remove({input: 'byg:blue_netherrack'})
    event.remove({input: 'byg:blue_nether_brick'})
    event.remove({input: 'byg:brim_powder'})

    event.remove({output: 'byg:nightshade_planks'})
    event.remove({output: 'byg:stripped_nightshade_wood'})
    event.remove({output: 'byg:ether_planks'})
    event.remove({output: 'byg:sythian_planks'})
    event.remove({output: 'byg:stripped_ether_wood'})
    event.remove({output: 'byg:stripped_sythian_stem'})
    event.remove({output: 'byg:sythian_stalk_block'})
    event.remove({output: 'byg:brim_powder'})

    event.shaped(item.of('byg:black_sand', 8), [
        'SSS',
        'SBS',
        'SSS'
    ], {
        S: '#forge:sand',
        B: '#forge:dyes/black'
    })
    event.shaped(item.of('byg:white_sand', 8), [
        'SSS',
        'SWS',
        'SSS'
    ], {
        S: '#forge:sand',
        W: '#forge:dyes/white'
    })
    const bygplanks = [ "byg:aspen_planks", "byg:baobab_planks", "byg:blue_enchanted_planks", "byg:cherry_planks", "byg:cika_planks", "byg:cypress_planks", "byg:ebony_planks", "byg:fir_planks", "byg:green_enchanted_planks", "byg:holly_planks", "byg:imparius_planks", "byg:jacaranda_planks", "byg:lament_planks", "byg:mahogany_planks", "byg:mangrove_planks", "byg:maple_planks", "byg:palm_planks", "byg:pine_planks", "byg:rainbow_eucalyptus_planks", "byg:redwood_planks", "byg:skyris_planks", "byg:willow_planks", "byg:witch_hazel_planks", "byg:zelkova_planks" ]
    event.shaped('minecraft:chest', [
        'PPP',
        'P P',
        'PPP'
    ], {
        P: bygplanks
    })
})

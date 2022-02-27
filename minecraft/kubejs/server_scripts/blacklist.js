// priority: 99

events.listen('item.tags', event => {

})

events.listen('block.tags', event => {
    event.get('mekanism:cardboard_blacklist').add([
        'waystones:waystone',
        'waystones:mossy_waystone',
        'waystones:sandy_waystone',
        'powah:reactor_starter',
        'powah:reactor_basic',
        'powah:reactor_hardened',
        'powah:reactor_blazing',
        'powah:reactor_niotic',
        'powah:reactor_spirited',
        'powah:reactor_nitro',
    ])
})

events.listen('fluid.tags', event => {

})
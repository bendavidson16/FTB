 // priority: 99
 events.listen('recipes', event => {
    event.remove({id: 'quantumstorage:chestdiamond'}) // dupe bug
    event.remove({id: 'quantumstorage:chestgold'}) // dupe bug
    event.remove({id: 'quantumstorage:chestiron'}) // dupe bug
 })
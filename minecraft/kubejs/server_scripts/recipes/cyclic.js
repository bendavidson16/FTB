// priority: 99
events.listen('recipes', event => {
   event.remove({output: 'cyclic:uncrafter'})
   event.remove({output: 'cyclic:harvester'})
})
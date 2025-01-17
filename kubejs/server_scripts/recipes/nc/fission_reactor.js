ServerEvents.recipes(event => {

    function reactor(io){
        event.custom({
            "type": "nuclearcraft:fission_reactor_controller",
            "input": [
              {
                "item": io[0]
              }
            ],
            "output": [
              {
                "item": io[1]
              }
            ],
            "powerModifier": (global.nc.energy)*2048,
            "radiation": (global.nc.rad),
            "timeModifier": (global.nc.speed)*2048
          }) 
    }
   
    reactor(['mekanism:ingot_uranium','kubejs:uranium'])
    reactor(['nuclearcraft:thorium_ingot', 'kubejs:thorium'])
    




    
})


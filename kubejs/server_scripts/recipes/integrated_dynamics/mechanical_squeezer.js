ServerEvents.recipes(event => {
    ////crushing
    //
    event.custom({
        "type": "integrateddynamics:mechanical_squeezer",
        "item": {
            "tag": "rootsclassic:berries"
        },
        "result": {
            "items": [{
                    "item": "minecraft:paper",
                    "chance": 0.5
                }, {
                    "item": "minecraft:redstone",
                    "chance": 0.5
                }, {
                    "item": "minecraft:glowstone_dust",
                    "chance": 0.5
                }, {
                    "item": "minecraft:glow_ink_sac",
                    "chance": 0.5
                }, {
                    "item": "minecraft:ink_sac",
                    "chance": 0.5
                }
            ],
            "fluid": {
                "fluid": "minecraft:water",
                "amount": 250
            }
        },
        "duration": 15
    })
    //
    //
    event.custom({
        "type": "integrateddynamics:mechanical_squeezer",
        "item": {
            "item": "homespun:ironberries"
        },
        "result": {
            "items": [{
                    "item": {
                        "item": "homespun:tiny_iron_dust",
                        "count": 3
                    }
                }, {
                    "item": "homespun:tiny_iron_dust",
                    "chance": 0.75
                }, {
                    "item": "homespun:tiny_iron_dust",
                    "chance": 0.5
                }
            ],
            "fluid": {
                "fluid": "homespun:ironberry_juice",
                "amount": 250
            }
        },
        "duration": 15
    })
    //
    //
    event.custom({
        "type": "integrateddynamics:mechanical_squeezer",
        "item": {
            "item": "minecraft:dirt"
        },
        "result": {
            "items": [{
                    "item": {
                        "item": "minecraft:clay_ball",
                        "count": 1
                    }
                }, {
                    "item": "minecraft:clay_ball",
                    "chance": 0.75
                }, {
                    "item": "minecraft:clay_ball",
                    "chance": 0.5
                }
            ],
            "fluid": {
                "fluid": "thermal:crude_oil",
                "amount": 125
            }
        },
        "duration": 15
    })
    //
    //

    event.custom({
        "type": "integrateddynamics:mechanical_squeezer",
        "item": {
            "item": "reactive:acid_bottle"
        },
        "result": {
            "items": [{
                    "item": "kubejs:alpha",
                    "chance": 0.5
                }, {
                    "item": "kubejs:beta",
                    "chance": 0.5
                }
            ],
            "fluid": {
                "fluid": "kubejs:acid",
                "amount": 125
            }
        },
        "duration": 15
    })
    //
    //
    event.custom({
        "type": "integrateddynamics:mechanical_squeezer",
        "item": {
            "item": "kubejs:beta"
        },
        "result": {
            "items": [{
                    "item": "bluepower:amethyst_gem",
                    "chance": 0.5
                }, {
                    "item": "bluepower:sapphire_gem",
                    "chance": 0.5
                }, {
                    "item": "minecraft:amethyst_shard",
                    "chance": 0.05
                }
            ],
            "fluid": {
                "fluid": "kubejs:acid",
                "amount": 125
            }
        },
        "duration": 15
    })
    //
    //


    event.custom({
        "type": "integrateddynamics:mechanical_squeezer",
        "item": {
            "item": "kubejs:alpha"
        },
        "result": {
            "items": [{
                    "item": "bluepower:green_sapphire_gem",
                    "chance": 0.5
                }, {
                    "item": "minecraft:emerald",
                    "chance": 0.05
                }, {
                    "item": "bluepower:ruby_gem",
                    "chance": 0.012
                }
            ],
            "fluid": {
                "fluid": "kubejs:acid",
                "amount": 125
            }
        },
        "duration": 15
    })
    //
    //
	
	
	    event.custom({
        "type": "integrateddynamics:mechanical_squeezer",
        "item": {
            "item": 'bluepower:teslatite_block'
        },
        "result": {
            "fluid": {
                "fluid": "integrateddynamics:menril_resin",
                "amount": 900
            }
        },
        "duration": 80
    })
    //
    //
		    event.custom({
        "type": "integrateddynamics:mechanical_squeezer",
        "item": {
            "item": 'minecraft:chorus_fruit'
        },
        "result": {
            "fluid": {
                "fluid": "integrateddynamics:liquid_chorus",
                "amount": 100
            }
        },
        "duration": 80
    })
    //
    //
	
})

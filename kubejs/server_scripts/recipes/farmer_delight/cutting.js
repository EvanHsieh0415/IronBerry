ServerEvents.recipes(event => {
    //cutting
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [{
                "item": "minecraft:smooth_stone"
            }
        ],
        "result": [{
                "item": "minecraft:cobblestone"
            }
        ],
        "tool": {
            "tag": "bluepower:saw"
        }
    })
    //
    //
	    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [{
                "item": 'quark:sturdy_stone'
            }
        ],
        "result": [	    
	{
	"chance": 0.5,
      "count": 1,
      "item": 'minecraft:cobbled_deepslate'
    },
		{
	"chance": 0.5,
      "count": 1,
      "item": 'bluepower:marble'
    },
		{
	"chance": 0.5,
      "count": 1,
      "item": 'minecraft:smooth_basalt'
    },
		{
	"chance": 0.5,
      "count": 1,
      "item": 'minecraft:calcite'
    }
        ],
        "tool": {
            "tag": "forge:pickaxes"
        }
    })
    //
    //
	    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [{
                "tag": 'ironberry:dark_stones'
            }
        ],
        "result": [	    
	{
      "count": 1,
      "item": 'tombstone:dark_marble'
    }
        ],
        "tool": {
            "tag": "forge:pickaxes"
        }
    })
	    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [{
                "tag": 'ironberry:white_stones'
            }
        ],
        "result": [	    
	{
      "count": 1,
      "item": 'tombstone:white_marble'
    }
        ],
        "tool": {
            "tag": "forge:pickaxes"
        }
    })	
	
	
		event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [{
                "item": 'farmersdelight:rich_soil'
            }
        ],
        "result": [	    
	{
      "count": 3,
      "item": 'kubejs:rich_bone_meal'
    },
		{
	"chance": 0.5,
      "count": 1,
      "item": 'kubejs:rich_bone_meal'
    }
        ],
        "tool": {
            "tag": "farmersdelight:tools/knives"
        }
    })
	
				event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [{
                "tag": 'tombstone:decorative_graves'
            }
        ],
        "result": [	    
		{
	"chance": 0.75,
      "count": 1,
      "item": 'minecraft:soul_sand'
    }
        ],
        "tool": {
            "tag": "forge:tools/shovels"
        }
    })	

				event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [{
                "item": 'minecraft:soul_sand'
            }
        ],
        "result": [	    
		{
	"chance": 0.25,
      "count": 2,
      "item": 'minecraft:nether_wart'
    },		{
	"chance": 0.05,
      "count": 1,
      "item": 'minecraft:nether_wart'
    }
        ],
        "tool": {
            "tag": "forge:tools/shovels"
        }
    })	
	
	
	
	
	
	
})
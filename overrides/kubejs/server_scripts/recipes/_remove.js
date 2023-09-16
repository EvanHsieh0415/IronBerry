//priority 9
ServerEvents.recipes(event => {
    ////recipe removed
    //-----------------------------------------------//
    let remod = (modlist) => {

        for (let i = 0; i < modlist.length; i++) {
            event.remove({
                mod: modlist[i]
            })
        }
    }
    //-----------------------------------------------//
    let remid = (idlist) => {

        for (let i = 0; i < idlist.length; i++) {
            event.remove({
                id: idlist[i]
            })
        }
    }
    //-----------------------------------------------//
    let remtype = (typelist) => {

        for (let i = 0; i < typelist.length; i++) {
            event.remove({
                type: typelist[i]
            })
        }
    }
    //-----------------------------------------------//
				//Dynamic Tag Remover//
    event.remove({
        output: [
            '#ironberry:output',
            '#ironberry:any',
            '#ironberry:disabled',
        ]
    })

    event.remove({
        input: [
            '#ironberry:input',
            '#ironberry:any',
            '#ironberry:disabled',
        ]
    })
    //-----------------------------------------------//
    remid([
			'craftingstation:crafting_station_slab',						
            'homespun:crushing_flint_from_gravel',			
            'homespun:crushing_sugar_from_beets',		
            'homespun:crushing_ironberry_juice_from_ironberries',
            'homespun:evaporating_tiny_iron_dust_from_ironberry_juice',
            'homespun:crushing_tiny_iron_dust_from_raw_iron',
            'pedestals:pedestals/pedestal_stone',
            'minecraft:raw_iron',
			'cyclic:compat/sturdy_stone',
			'cyclic:compressed_cobblestone',
			'twilightforest:uncrafting/tipped_arrow_uncraft',
			'cyclic:compressed_cobblestone_u',
			'cyclic:crusher/redstone_observer',
			'cyclic:crusher/redsone_comparator', //redsone o.o
			'ars_nouveau:stable_warp_scroll',
			
        ])

    remtype([
            'pedestals:cobblegen',
			'integrateddynamics:drying_basin',
			'integrateddynamics:mechanical_drying_basin',
			'integrateddynamics:mechanical_squeezer',
			'integrateddynamics:squeezer',
			'ars_nouveau:imbuement',
			'ars_nouveau:reactive_enchantment',
			'ars_nouveau:enchantment',
			'ars_nouveau:armor_upgrade',
        ])

    remod([
			'angelring',					//done
			'gateways',					//todo
            'thermal',					//todo
            'cobblefordays',			//todo
            'ironchest',					//done
            'systeams',					//todo
            'prettypipes',					//done
            'modularrouters',			//todo
            'pneumaticcraft',			//todo	
            //'integrateddynamics',			//done
            //'integratedtunnels',			//done
            //'integratednbt',				//done
			'alchemygadgetry',			//todo
			//'ars_nouveau',				//done
			'inventorypets',			//todo
			'hostilenetworks',			//todo
        ])

})

//priority 9
ServerEvents.recipes(event => {
    ////recipe removed
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
        'engineersdecor:dependent/small_solar_panel_recipe',
        'cyclic:crusher/granite',
        'cyclic:crusher/diorite',
        'bluepower:solar_panel',
        'mekanism:teleportation_core',
        'ironchest:upgrades/gold_to_diamond_chest_upgrade',
        'ironchest:upgrades/iron_to_gold_chest_upgrade',
        'ironchest:upgrades/copper_to_iron_chest_upgrade',
        'ironchest:upgrades/wood_to_copper_chest_upgrade',
            'cyclic:crusher/jukebox',
            //'thermal:machines/refinery/refinery_crude_oil',
            //'thermal:machines/refinery/refinery_resin',
            //'thermal:devices/rock_gen/rock_gen_deepslate',
            //'thermal:devices/rock_gen/rock_gen_cobbled_deepslate',
            'craftingstation:crafting_station_slab',
            'homespun:crushing/crushing_flint_from_gravel',
            'homespun:crushing/crushing_sugar_from_beets',
            'homespun:crushing/crushing_ironberry_juice_from_ironberries',
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
            'mekanism:coolant/sodium',
            'mekanism:coolant/water',
            'mekanism:processing/fissile_fuel',
            /* 			'mekanism:rotary/brine',
            'mekanism:rotary/chlorine',
            'mekanism:rotary/ethene',
            'mekanism:rotary/hydrofluoric_acid',
            'mekanism:rotary/hydrogen',
            'mekanism:rotary/hydrogen_chloride',
            'mekanism:rotary/lithium',
            'mekanism:rotary/oxygen',
            'mekanism:rotary/sodium',
            'mekanism:rotary/steam',
            'mekanism:rotary/sulfuric_acid',
            'mekanism:rotary/sulfur_dioxide',
            'mekanism:rotary/sulfur_trioxide',
            'mekanism:rotary/superheated_sodium',
            'mekanism:rotary/uranium_hexafluoride',
            'mekanism:rotary/uranium_oxide', */
            /* 			'mekanismgenerators:rotary/deuterium',
            'mekanismgenerators:rotary/fusion_fuel',
            'mekanismgenerators:rotary/tritium', */
            'mekanism:processing/iron/crystal/from_slurry',
            'mekanism:processing/tin/crystal/from_slurry',
            'mekanism:processing/uranium/crystal/from_slurry',
            'mekanism:processing/lead/crystal/from_slurry',
            'mekanism:processing/osmium/crystal/from_slurry',
            'mekanism:processing/gold/crystal/from_slurry',
            'mekanism:processing/copper/crystal/from_slurry',
            'mekanism:crystallizing/lithium',
            'mekanism:separator/water',
            'mekanismgenerators:separator/heavy_water',
            'mekanism:separator/brine',
        ])

    remtype([
			'mekanism:energy_conversion',
            /* 			'thermal:machines',
            'thermal:sawmill',
            'thermal:tree_extractor', */
            'cyclic:melter',
            'cyclic:solidifier',
            'pneumaticcraft:assembly_laser',
            'pneumaticcraft:assembly_drill',
            'pneumaticcraft:thermo_plant',
            'pneumaticcraft:explosion_crafting',
            'pneumaticcraft:pressure_chamber',
            'pneumaticcraft:fluid_mixer',
            'pedestals:cobblegen',
            'integrateddynamics:drying_basin',
            'integrateddynamics:mechanical_drying_basin',
            'integrateddynamics:mechanical_squeezer',
            'integrateddynamics:squeezer',
            'ars_nouveau:imbuement',
            'ars_nouveau:reactive_enchantment',
            'ars_nouveau:enchantment',
            'ars_nouveau:armor_upgrade',
            'mekanismgenerators:rotary',
            'cyclic:generator_fluid',
            'cyclic:generator_item',
            'mekanism:rotary',
            'mekanism:oxidizing',
			'mekanism:processing',
        ])

    event.remove({
        mod: 'alchemygadgetry'
    })
    event.remove({
        mod: 'thermal'
    })
    event.remove({
        mod: 'nuclearcraft'
    })
    event.remove({
        mod: 'gateways'
    })

    event.remove({
        mod: 'ae2'
    })

    event.remove({
        mod: 'appmek'
    })

    event.remove({
        mod: 'arseng'
    })

    event.remove({
        mod: 'expatternprovider'
    })

    event.remove({
        mod: 'extendedcrafting'
    })

    event.remove({
        mod: 'ae2things'
    })
    
    event.remove({
        mod: 'ae2wtlib'
    })
})


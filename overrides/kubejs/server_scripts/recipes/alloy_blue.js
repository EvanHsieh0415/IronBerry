ServerEvents.recipes(event => {
    //alloy_smelting bluepower
    //
    //		WARNING: MORE THAT 1 TYPE CAUSE ISSUES FROM BLUEPOWER
    //
    /*----------------------------------------------------------------------------------------------*/
    function alloy(inputs_name, inputs_count, output_name, output_count) {

		let ingredients = []
		
		for(let i =0;i<inputs_name.length;i++){
		ingredients.push(ItemOrTagAndCount(inputs_name[i],inputs_count[i]))
		}

        event.custom({
            "type": "bluepower:alloy_smelting",
            "ingredients": ingredients,
            "result": {
                "item": output_name,
                "count": output_count
            }
        }).id(RegX(inputs_name + "_" + inputs_count + "_" + output_name + "_" + output_count))

    }
    //------------------------------------//
    alloy(
        ["minecraft:coal", "minecraft:raw_iron"], [2, 4],
        "minecraft:iron_ingot",
        1)

    alloy(
        ["minecraft:iron_block"], [9],
        "homespun:cast_iron_block", 1)

    alloy(
        ["minecraft:iron_ingot"], [9],
        "ironchest:wood_to_copper_chest_upgrade", 1)

    alloy(
        ["bluepower:teslatite_dust",
            "minecraft:iron_ingot"], [4, 2],
        "bluepower:blue_alloy_ingot", 1)

    alloy(
        ["bluepower:brass_ingot",
            "bluepower:purple_alloy_ingot"], [4, 1],
        'kubejs:pre_compressed', 1)

    alloy([
            "bluepower:blue_doped_wafer",
            "bluepower:red_doped_wafer"], [1, 1],
        "prettypipes:blank_module", 64)

    alloy(
        ["minecraft:glowstone_dust",
            "bluepower:brass_ingot"], [2, 1],
        "thermal:electrum_ingot", 2)

    alloy(
        ["bluepower:infused_teslatite_dust",
            "minecraft:copper_ingot"], [2, 1],
        "thermal:lead_ingot", 1)

    alloy(
        ["#tombstone:magic_tablets"], [1],
        "tombstone:strange_tablet", 1)

    alloy(
        ["minecraft:sugar",
            "minecraft:stick",
            "reactive:stardust"], [4, 1, 1],
        "kubejs:iron_rod", 1)

    alloy(
        ['reactive:quartz_bottle',
            'minecraft:glass_bottle'], [9, 9],
        'alchemygadgetry:potion_flask', 1)

    alloy(
	['minecraft:redstone', 
	'minecraft:coal', 
	'minecraft:emerald', 
	'minecraft:copper_ingot', 
	'minecraft:iron_ingot', 
	'minecraft:gold_ingot',
	'kubejs:rich_bone_meal'],[1,1,1,1,1,1,1], 'kubejs:ore_bone_meal', 1)



	alloy([
	'homespun:ironwood_wood',
	'integrateddynamics:crystalized_menril_chunk',
	'kubejs:processor',
	'integrateddynamics:logic_director',
	],[4,8,1,1],
	'integrateddynamics:menril_wood_stripped'
	,1)


	alloy(['tombstone:voodoo_poppet'],[1],'kubejs:omni',1)



	alloy(
	['minecraft:stick','minecraft:gold_nugget','minecraft:amethyst_shard'],
	[2,1,1],
	'ars_nouveau:dominion_wand',1)

})
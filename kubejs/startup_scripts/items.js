StartupEvents.registry('item', event => {

    ////staff only
    event.create('wip')
    .texture('cofh_core:gui/icons/icon_cancel')
    .displayName('WorkInProgress')

    event.create('rose')
    .texture('ironberry:item/rose')
    .displayName('Rose')

        //gems
        event.create('alpha')
        .texture('ironberry:item/gems/alpha')
        .displayName('Alpha')

        event.create('beta')
        .texture('ironberry:item/gems/beta')
        .displayName('Beta')

        event.create('aquamarine')
        .texture('ironberry:item/gems/aquamarine')
        .displayName('Aquamarine')

        event.create('jade')
        .texture('ironberry:item/gems/jade')
        .displayName('Jade')

        event.create('iolite')
        .texture('ironberry:item/gems/iolite')
        .displayName('Iolite')

        event.create('topaz')
        .texture('ironberry:item/gems/topaz')
        .displayName('Topaz')



        //grave guardian spawn
        event.create('grave_spawn')
        .texture('ironberry:item/grave_spawn_egg')
        .displayName('Grave Guardian Spawn Egg')


	    event.create('scroll')
    .texture('ironberry:item/scroll')
	.displayName('Null Scroll')
	
		    event.create('omni')
    .texture('ironberry:item/omni')
	.displayName('OmniTablet')

		    event.create('iron_rod')
    .texture('ironberry:item/iron_rod')
	.displayName('Iron Rod')
	
			    event.create('soul')
    .texture('ironberry:item/soul')
	.displayName('Soul jar')
					
					
	event.create('ice_shard')
	.texture('ironberry:item/ice_shard')
	.displayName('Ice Shard')
	
	event.create('ore_bone_meal')
	.texture('ironberry:item/ore_bone_meal')
	.displayName('Mineral Fertilizer')
	
	event.create('rich_bone_meal')
	.texture('ironberry:item/rich_bone_meal')
	.displayName('Rich Fertilizer')

	//temporarly added , maybe on a future will removed
	event.create('illuminati')
	.texture('ironberry:item/illuminati_yota')
	.displayName('Illuminati Yota')
	
	event.create('pre_compressed')
	.texture('ironberry:item/pre_compressed')
	.displayName('Precompressed Iron Ingot')
	
	event.create('scroll_safety')
	.texture('ironberry:item/scroll_a')
	.displayName('Scroll of Safety')
	
	event.create('scroll_discontinuity')
	.texture('ironberry:item/scroll_b')
	.displayName('Scroll of Discontinuity')
	
	
	event.create('raw_iron_nugget')
	.texture('ironberry:item/raw_iron_nugget')
	.displayName('Raw Iron Nugget')
	
		event.create('raw_gold_nugget')
	.texture('ironberry:item/raw_gold_nugget')
	.displayName('Raw Gold Nugget')
	
		event.create('raw_copper_nugget')
	.texture('ironberry:item/raw_copper_nugget')
	.displayName('Raw Copper Nugget')
	
	
			event.create('processor')
	.texture('ironberry:item/processor')
	.displayName('Menril MicroProcessor Chip')
	
		event.create('ritual_tablet')
    .texture('ironberry:item/ritual_tablet')
	.displayName(' Empty Ritual Tablet')
	
	
})
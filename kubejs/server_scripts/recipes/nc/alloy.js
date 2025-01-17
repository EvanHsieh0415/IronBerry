ServerEvents.recipes(event => {

    function alloy(item_a,count1,item_b,count2,output,outcount){
        event.custom({
            "type": "nuclearcraft:alloy_smelter",
            "input": [
              {
                "item": item_a,
                "count": count1
              },
              {
                "item": item_b,
                "count": count2
              }
            ],
            "output": [
              {
                "count": outcount,
                "item": output
              }
            ],
            "powerModifier": (global.nc.energy/10),
            "radiation": (global.nc.rad),
            "timeModifier": (global.nc.speed*2)
          }).id(RegX(item_a +item_b+ '_' + output, '_'))
    }

    alloy('thermal:bitumen',1,'twilightforest:ironwood_ingot',1,'mekanism:ingot_steel',2)
    alloy('thermal:bitumen_block',1,'twilightforest:ironwood_block',1,'mekanism:block_steel',2)
    alloy('integrateddynamics:variable',1,'integrateddynamics:enhancement_offset',1,'kubejs:processor',1)

    function smart_alloy(item_list,output){
      alloy(item_list[0],1,item_list[1],1,output,1)
    }


    function infusion(ingredient,in_list,out_list){
      in_list.forEach((element , index) => {
        alloy(ingredient,1,element,1,out_list[index],1)
      });
    }


    infusion('bluepower:red_alloy_ingot',['kubejs:processor', 'mekanism:basic_control_circuit'],['mekanism:alloy_infused', 'mekanism:advanced_control_circuit'])
    infusion('bluepower:blue_alloy_ingot',['mekanism:alloy_infused', 'mekanism:advanced_control_circuit'],['mekanism:alloy_reinforced', 'mekanism:elite_control_circuit'])
    infusion('bluepower:purple_alloy_ingot',['mekanism:alloy_reinforced', 'mekanism:elite_control_circuit'],['mekanism:alloy_atomic', 'mekanism:ultimate_control_circuit'])

    smart_alloy(['nuclearcraft:basic_electric_circuit', 'pipez:item_pipe'],'mekanism:basic_logistical_transporter')
    smart_alloy(['nuclearcraft:basic_electric_circuit', 'pipez:fluid_pipe'],'mekanism:basic_mechanical_pipe')
    smart_alloy(['nuclearcraft:basic_electric_circuit', 'pipez:energy_pipe'],'mekanism:basic_universal_cable')
    smart_alloy(['nuclearcraft:basic_electric_circuit', 'pipez:gas_pipe'],'mekanism:basic_pressurized_tube')


    alloy('thermal:tin_ingot',1, 'minecraft:copper_ingot',3,'mekanism:ingot_bronze',4)
    alloy('nuclearcraft:boron_ingot',1,'mekanism:ingot_steel',1, 'nuclearcraft:ferroboron_ingot',2)
    alloy('nuclearcraft:ferroboron_ingot',1, 'nuclearcraft:lithium_ingot',1, 'nuclearcraft:tough_alloy_ingot',2)
    alloy('mekanism:ingot_osmium',1,'mekanism:dust_refined_obsidian',1,'mekanism:ingot_refined_obsidian',1)


})
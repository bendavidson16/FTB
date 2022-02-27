// priority: 98

events.listen("recipes", (event) => {
    event.shapeless(item.of("minecraft:clay_ball", 4), ["#forge:storage_blocks/clay"]);
    event.remove({ id: "minecraft:bread" });
    event.shapeless(item.of("minecraft:bread"), ["#forge:crops/wheat", "#forge:crops/wheat", "#forge:crops/wheat"]);
    event.shapeless(item.of("minecraft:flint"), ["#forge:gravel", "#forge:gravel", "#forge:gravel"]);
    event.shapeless(item.of("minecraft:wheat_seeds"), ["#forge:crops/wheat"]);
    event.shaped("minecraft:furnace", ["SSS", "S S", "SSS"], {
        S: "#quark:stone_tool_materials",
    });

    event.remove({ output: "absentbydesign:fence_log_acacia" });
    event.remove({ output: "absentbydesign:fence_log_birch" });
    event.remove({ output: "absentbydesign:fence_log_darkoak" });
    event.remove({ output: "absentbydesign:fence_log_jungle" });
    event.remove({ output: "absentbydesign:fence_log_oak" });
    event.remove({ output: "absentbydesign:fence_log_spruce" });
    event.remove({ output: "absentbydesign:fence_crimson" });
    event.remove({ output: "absentbydesign:fence_warped" });

    event.shapeless("absentbydesign:fence_log_acacia", ["cfm:acacia_upgraded_fence"]);
    event.shapeless("absentbydesign:fence_log_birch", ["cfm:birch_upgraded_fence"]);
    event.shapeless("absentbydesign:fence_log_darkoak", ["cfm:dark_oak_upgraded_fence"]);
    event.shapeless("absentbydesign:fence_log_jungle", ["cfm:jungle_upgraded_fence"]);
    event.shapeless("absentbydesign:fence_log_oak", ["cfm:oak_upgraded_fence"]);
    event.shapeless("absentbydesign:fence_log_spruce", ["cfm:spruce_upgraded_fence"]);
    event.shapeless("absentbydesign:fence_crimson", ["cfm:crimson_upgraded_fence"]);
    event.shapeless("absentbydesign:fence_warped", ["cfm:warped_upgraded_fence"]);

    event.shapeless("cfm:acacia_upgraded_fence", ["absentbydesign:fence_log_acacia"]);
    event.shapeless("cfm:birch_upgraded_fence", ["absentbydesign:fence_log_birch"]);
    event.shapeless("cfm:dark_oak_upgraded_fence", ["absentbydesign:fence_log_darkoak"]);
    event.shapeless("cfm:jungle_upgraded_fence", ["absentbydesign:fence_log_jungle"]);
    event.shapeless("cfm:oak_upgraded_fence", ["absentbydesign:fence_log_oak"]);
    event.shapeless("cfm:spruce_upgraded_fence", ["absentbydesign:fence_log_spruce"]);
    event.shapeless("cfm:crimson_upgraded_fence", ["absentbydesign:fence_crimson"]);
    event.shapeless("cfm:warped_upgraded_fence", ["absentbydesign:fence_warped"]);
});

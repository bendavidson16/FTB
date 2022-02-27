events.listen("ui.main_menu", (event) => {
    event.replace((ui) => {
        ui.fillBackground("uimenu:textures/bg.png", 1920, 1080);
        ui.widgetTexture = "uimenu:textures/widgets.png";

        //If MT is loaded
        if (Platform.mods.minetogether) {
            //MineTogether friends list
            ui.button((b) => {
                b.name = text.translate("Friends List").color(0x11577e);
                b.width = 70;
                b.x = ui.width - b.width - 5;
                b.y = 5;
                b.action = "minetogether:friends_list";
                b.shadow = false;
            });

            //MineTogether chat
            ui.imageButton((b) => {
                b.width = 20;
                b.x = ui.width - b.width - 77;
                b.y = 5;
                b.action = "minetogether:chat";
                b.texture = "uimenu:textures/chat.png";
            });

            //MineTogether order server
            ui.imageButton((b) => {
                b.width = 20;
                b.x = ui.width / 2 - 97;
                b.y = ui.height / 2 + 4;
                b.action = "minetogether:order";
                b.texture = "uimenu:textures/creeper.png";
            });
        }

        //Singleplayer
        ui.button((b) => {
            b.name = text.translate("menu.singleplayer").color(0x11577e);
            b.width = 150;
            b.x = ui.width / 2 - b.width / 2;
            b.y = ui.height / 2 - 40;
            b.action = "minecraft:singleplayer";
            b.shadow = false;
        });

        //multiplayer
        ui.button((b) => {
            b.name = text.translate("menu.multiplayer").color(0x11577e);
            b.width = 150;
            b.x = ui.width / 2 - b.width / 2;
            b.y = ui.height / 2 - 18;
            b.action = "minecraft:multiplayer";
            b.shadow = false;
        });

        //Mods
        ui.button((b) => {
            b.name = text.translate("fml.menu.mods").color(0x11577e);
            b.width = 75;
            b.x = ui.width / 2 - b.width;
            b.y = ui.height / 2 + 4;
            b.action = "forge:mod_list";
            b.shadow = false;
        });

        //Support
        ui.button((b) => {
            b.name = text.of("Support").color(0x11577e);
            b.width = 75;
            b.x = ui.width / 2 + 1;
            b.y = ui.height / 2 + 4;
            b.action = "https://www.feed-the-beast.com/support";
            b.shadow = false;
        });

        //Discord link
        ui.imageButton((b) => {
            b.width = 20;
            b.x = ui.width / 2 + 77;
            b.y = ui.height / 2 + 4;
            b.action = "https://ftb.team/discord";
            b.texture = "uimenu:textures/discord.png";
            b.hoverTexture = "uimenu:textures/discord_hover.png";
        });

        //Options
        ui.button((b) => {
            b.name = text.translate("menu.options").color(0x11577e);
            b.width = 75;
            b.x = ui.width / 2 - b.width;
            b.y = ui.height / 2 + 48;
            b.action = "minecraft:options";
            b.shadow = false;
        });

        //Quit
        ui.button((b) => {
            b.name = text.of("Quit").color(0x11577e);
            b.width = 75;
            b.x = ui.width / 2 + 1;
            b.y = ui.height / 2 + 48;
            b.action = "minecraft:quit";
            b.shadow = false;
        });

        //Pack name
        ui.image((i) => {
            i.height = 169 * 0.344;
            i.width = 895 * 0.344;
            i.x = ui.width / 2 - i.width / 2;
            i.y = ui.height / 2 - 116;
            i.texture = "uimenu:textures/logo.png";
        });

        //Forge version
        ui.label((l) => {
            l.height = 10;
            l.name = "Forge Version: " + Platform.mods.forge.version;
            l.x = ui.width - l.width - 2;
            l.y = ui.height - 31;
        });

        //Mods loaded
        ui.label((l) => {
            l.height = 10;
            l.name = Platform.mods.size() + " Mods Loaded";
            l.x = ui.width - l.width - 2;
            l.y = ui.height - 21;
        });

        //Mojang
        ui.label((l) => {
            l.height = 10;
            l.name = "Copyright Mojang AB";
            l.x = ui.width - l.width - 2;
            l.y = ui.height - 11;
        });
    });
});

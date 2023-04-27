const Player = require("../../classes/Player");
const Item = require("../../classes/Item");
const Player = require("../../classes/Player");

describe("Player", () => {
    it ("Should add an item to the inventory IF it is not already present", () => {
        const player = new Player ("sword", "John", "human", "forest")
        const item = new Item("potion", 5);
        player.addItem(Item);
        expect(player.inventory).toContain(item);
    
    });

    it("Shouldn't add an item to inventory if its already present", () =>{
        const logSpy = jest.spyOn(global.console, "log");
        const player = new Player ("sword", "John", "human", "forest")
        const item = new Item("potion", 5);
        player.addItem(item);
        expect(player.inventory).toHaveLength(1);
        expect(logSpy).toHaveBeenCalledWith(`${item.name} already in inventory.`)
    })

});
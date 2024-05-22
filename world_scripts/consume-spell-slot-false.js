//Hooks.on("dnd5e.preUseItem", (item, config) => {
//  if (config.consumeSpellSlot) config.consumeSpellSlot = false;
//});
Hooks.on("renderAbilityUseDialog", (dialog, el, content) => {
    // ignore NPCs (will also work if nothing is selected)
    if (canvas.tokens.controlled.every(token => token.actor.hasPlayerOwner)) {
        el.find("input[name='consumeSpellSlot']").prop("checked", false);
    }
});
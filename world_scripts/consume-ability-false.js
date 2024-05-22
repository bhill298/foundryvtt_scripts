Hooks.on("renderAbilityUseDialog", (dialog, el, content) => {
    // only include class feature uses, ignore e.g. consumables
    // ignore NPCs (will also work if nothing is selected)
    if (canvas.tokens.controlled.every(token => token.actor.hasPlayerOwner)) {
        if (el.find("p").toArray().some(el => $(el).text().toLowerCase().includes("feature"))) {
            el.find("input[name='consumeUsage']").prop("checked", false);
        }
    }
});
Hooks.on('renderCombatTracker', () => {
    $("#combat .token-resource input").prop('readOnly', true);
});
Hooks.on("createToken", (token, flags, id) => {
    if (token.documentName === "Token" && !token.actor.hasPlayerOwner) {
        token.update({
            "bar1.attribute": "attributes.hp",
            "bar2.attribute": "None",
            "displayName": CONST.TOKEN_DISPLAY_MODES.OWNER,
            "displayBars": CONST.TOKEN_DISPLAY_MODES.ALWAYS});
    }
});
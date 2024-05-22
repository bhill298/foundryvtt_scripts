// Display Modes: ALWAYS, CONTROL, HOVER, NONE, OWNER, OWNER_HOVER
// displayName, displayBars
let dialogEditor = new Dialog({
  title: `TokenNames`,
  buttons: {
    showAll: {
      label: `Show HP+Names`,
      callback: () => {
        const tokens = canvas.tokens.placeables.filter(token=>token.actor).map(token => {
            if (token.actor.hasPlayerOwner) {
                return {
                    _id: token.id
                };
            }
            else {
                return {
                    _id: token.id,
                    "bar1.attribute": "attributes.hp",
                    "bar2.attribute": "None",
                    "displayName": CONST.TOKEN_DISPLAY_MODES.ALWAYS,
                    "displayBars": CONST.TOKEN_DISPLAY_MODES.ALWAYS
                };
            }
        });
        canvas.scene.updateEmbeddedDocuments('Token', tokens);
      }
    },
    show: {
      label: `Show HP`,
      callback: () => {
        const tokens = canvas.tokens.placeables.filter(token=>token.actor).map(token => {
            if (token.actor.hasPlayerOwner) {
                return {
                    _id: token.id
                };
            }
            else {
                return {
                    _id: token.id,
                    "bar1.attribute": "attributes.hp",
                    "bar2.attribute": "None",
                    "displayName": CONST.TOKEN_DISPLAY_MODES.OWNER,
                    "displayBars": CONST.TOKEN_DISPLAY_MODES.ALWAYS
                };
            }
        });
        canvas.scene.updateEmbeddedDocuments('Token', tokens);
      }
    },
    hide: {
        label: `Hide HP`,
        callback: () => {
            const tokens = canvas.tokens.placeables.filter(token=>token.actor).map(token => {
                if (token.actor.hasPlayerOwner) {
                    return {
                        _id: token.id
                    };
                }
                else {
                    return {
                        _id: token.id,
                        "bar1.attribute": "attributes.hp",
                        "bar2.attribute": "None",
                        "displayName": CONST.TOKEN_DISPLAY_MODES.OWNER,
                        "displayBars": CONST.TOKEN_DISPLAY_MODES.OWNER
                    };
                }
            });
            canvas.scene.updateEmbeddedDocuments('Token', tokens);
        }
    },
    close: {
      icon: "<i class='fas fa-tick'></i>",
      label: `Exit`
    },
  },
  default: "close",
  close: () => {}
});
dialogEditor.render(true);
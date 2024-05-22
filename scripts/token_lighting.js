function updateLighting(dim, bright, color, alpha, animation) {
    canvas.tokens.controlled.forEach(token => {
        
    });
}

let dialogEditor = new Dialog({
  title: `LightPicker`,
  buttons: {
    none: {
      label: `None`,
      callback: () => {
        canvas.tokens.controlled.forEach(token => {
            token.document.update({light:{ dim: 0, bright: 0, color: "", alpha: 1, animation:{ type: "none"}}});
        });
      }
    },
    torch: {
      label: `Torch`,
      callback: () => {
        canvas.tokens.controlled.forEach(token => {
            token.document.update({light:{ dim: 40, bright : 20, color : "#ff830f", alpha: 0.05, angle: 360, animation:{ type: "torch", speed: 5, intensity: 5}}});
        });
      }
   },
    lamp: {
      label: `Lamp`,
      callback: () => {
        canvas.tokens.controlled.forEach(token => {
            token.document.update({light:{ dim: 45, bright : 15, color: "#ffa200", alpha: 0.05, angle: 360, animation:{ type: "torch", speed: 3, intensity: 3}}});
        });
      }
   },
    bullseye: {
      label: `BullseyeLantern`,
      callback: () => {
        canvas.tokens.controlled.forEach(token => {
            token.document.update({light:{ dim: 120, bright : 60, color : "#ffa200", alpha: 0.05, angle: 45, animation:{ type: "torch", speed: 3, intensity: 3}}});
        });
      }
   },
    hoodedOpen: {
      label: `HoodedLantern(O)`,
      callback: () => {
        canvas.tokens.controlled.forEach(token => {
            token.document.update({light:{ dim: 60, bright : 30, color : "#ffa200", alpha: 0.05, angle: 360, animation:{ type: "torch", speed: 3, intensity: 3}}});
        });
      }
   },
    hoodedClosed: {
      label: `HoodedLantern(C)`,
      callback: () => {
        canvas.tokens.controlled.forEach(token => {
            token.document.update({light:{ dim: 5, bright : 0, color : "#ffa200", alpha: 0.05, angle: 360, animation:{ type: "torch", speed: 3, intensity: 3}}});
        });
      }
    },
    lightcantrip: {
      label: `LightCantrip`,
      callback: () => {
        canvas.tokens.controlled.forEach(token => {
            token.document.update({light:{ dim: 40, bright : 20, color : "#fffab8", alpha: 0.05, angle: 360, animation:{ type: "torch", speed: 2, intensity: 1}}});
        });
      }
    },  
    moontouched: {
      label: `MoonTouched`,
      callback: () => {
        canvas.tokens.controlled.forEach(token => {
            token.document.update({light:{ dim: 30, bright : 15, color : "#38c0f3", alpha: 0.05, angle: 360, animation:{ type: "torch", speed: 1, intensity: 1}}});
        });
      }
    },
    sunlight: {
      label: `SunLight`,
      callback: () => {
        canvas.tokens.controlled.forEach(token => {
            token.document.update({light:{ dim: 60, bright : 30, color : "#fff45c", alpha: 0.25, angle: 360, animation:{ type: "torch", speed: 1, intensity: 5}}});
        });
      }
    },
    cursedsword: {
      // A detect magic spell reveals that the sword is magical. It sheds dim light in a 10-foot radius
      label: `CursedSword`,
      callback: () => {
        canvas.tokens.controlled.forEach(token => {
            token.document.update({light:{ dim: 10, bright : 0, color : "#fffab8", alpha: 0.05, angle: 360, animation:{ type: "torch", speed: 2, intensity: 1}}});
        });
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
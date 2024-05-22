async function updateTokens(tokenCoords) {
    let updates = [];
    for (let i = 0; i < tokenCoords.length; i++) {
        updates.push({
            _id: tokenCoords[i][0],
            x: tokenCoords[i][1],
            y: tokenCoords[i][2]
        });
    }
    return canvas.scene.updateEmbeddedDocuments('Token', updates);
}

// pixels per square
const canvasScale = canvas.scene.getDimensions().size;

// id, x, y
let tokenCoords = [];
for (let i = 0; i < canvas.tokens.controlled.length; i++) {
    let token = canvas.tokens.controlled[i];
    tokenCoords.push([token.document._id, token.document.x, token.document.y]);
}
let dialogEditor = new Dialog({
  title: `Select Party CR`,
  buttons: {
    horizontaltopleft: {
      label: `Horizontal Top-to-Left`,
      callback: () => {
          // Topmost goes to leftmost and the continues on left of that. Put all in same y as first token, all move one square over left to right.
          // Order is in ascending y; if at same y, use ascending x as tie breaker
          tokenCoords.sort((a, b) => {
              // sort in ascending y
              if (a[2] !== b[2]) {
                  return a[2] - b[2];
              }
              // fallback to ascending x
              return a[1] - b[1];
          });
          let startX = tokenCoords[0][1];
          let startY = tokenCoords[0][2];
          for (let i = 1; i < tokenCoords.length; i++) {
              tokenCoords[i][1] = startX + (i * canvasScale);
              tokenCoords[i][2] = startY;
          }
          updateTokens(tokenCoords);
      }
    },
    horizontaltopright: {
      label: `Horizontal Top-to-Right`,
      callback: () => {
          // Topmost goes to rightmost then continues left of that. Put all in same y as first token, all move one square over right to left.
          // Order is in ascending y; if at same y, use descending x as tie breaker
          tokenCoords.sort((a, b) => {
              // sort in ascending y
              if (a[2] !== b[2]) {
                  return a[2] - b[2];
              }
              // fallback to descending x
              return b[1] - a[1];
          });
          let startX = tokenCoords[0][1];
          let startY = tokenCoords[0][2];
          for (let i = 1; i < tokenCoords.length; i++) {
              tokenCoords[i][1] = startX - (i * canvasScale);
              tokenCoords[i][2] = startY;
          }
          updateTokens(tokenCoords);
      }
    },
    horizontalbottomleft: {
      label: `Horizontal Bottom-to-Left`,
      callback: () => {
          tokenCoords.sort((a, b) => {
              // sort in descending y
              if (a[2] !== b[2]) {
                  return b[2] - a[2];
              }
              // fallback to ascending x
              return a[1] - b[1];
          });
          let startX = tokenCoords[0][1];
          let startY = tokenCoords[0][2];
          for (let i = 1; i < tokenCoords.length; i++) {
              tokenCoords[i][1] = startX + (i * canvasScale);
              tokenCoords[i][2] = startY;
          }
          updateTokens(tokenCoords);
      }
    },
    horizontalbottomright: {
      label: `Horizontal Bottom-to-Right`,
      callback: () => {
          tokenCoords.sort((a, b) => {
              // sort in descending y
              if (a[2] !== b[2]) {
                  return b[2] - a[2];
              }
              // fallback to descending x
              return b[1] - a[1];
          });
          let startX = tokenCoords[0][1];
          let startY = tokenCoords[0][2];
          for (let i = 1; i < tokenCoords.length; i++) {
              tokenCoords[i][1] = startX - (i * canvasScale);
              tokenCoords[i][2] = startY;
          }
          updateTokens(tokenCoords);
      }
    },
    verticallefttop: {
      label: `Vertical Left-to-Top`,
      callback: () => {
          // Leftmost goes to topmost then continues down from that. Put all in same x as first token, all move one square over top to bottom.
          // Order is in ascending x; if at same x, use ascending y as tie breaker
          tokenCoords.sort((a, b) => {
              // sort in ascending x
              if (a[1] !== b[1]) {
                  return a[1] - b[1];
              }
              // fallback to ascending y
              return a[2] - b[2];
          });
          let startX = tokenCoords[0][1];
          let startY = tokenCoords[0][2];
          for (let i = 1; i < tokenCoords.length; i++) {
              tokenCoords[i][1] = startX;
              tokenCoords[i][2] = startY + (i * canvasScale);
          }
          updateTokens(tokenCoords);
      }
    },
    verticalrighttop: {
      label: `Vertical Right-to-Top`,
      callback: () => {
          // Rightmost goes to topmost then continues down from that. Put all in same x as first token, all move one square over top to bottom.
          // Order is in descending x; if at same x, use ascending y as tie breaker
          tokenCoords.sort((a, b) => {
              // sort in descending x
              if (a[1] !== b[1]) {
                  return b[1] - a[1];
              }
              // fallback to ascending y
              return a[2] - b[2];
          });
          let startX = tokenCoords[0][1];
          let startY = tokenCoords[0][2];
          for (let i = 1; i < tokenCoords.length; i++) {
              tokenCoords[i][1] = startX;
              tokenCoords[i][2] = startY + (i * canvasScale);
          }
          updateTokens(tokenCoords);
      }
    },
    verticalleftbottom: {
      label: `Vertical Left-to-Bottom`,
      callback: () => {
          tokenCoords.sort((a, b) => {
              // sort in ascending x
              if (a[1] !== b[1]) {
                  return a[1] - b[1];
              }
              // fallback to descending y
              return b[2] - a[2];
          });
          let startX = tokenCoords[0][1];
          let startY = tokenCoords[0][2];
          for (let i = 1; i < tokenCoords.length; i++) {
              tokenCoords[i][1] = startX;
              tokenCoords[i][2] = startY - (i * canvasScale);
          }
          updateTokens(tokenCoords);
      }
    },
    verticalrightbottom: {
      label: `Vertical Right-to-Bottom`,
      callback: () => {
          tokenCoords.sort((a, b) => {
              // sort in descending x
              if (a[1] !== b[1]) {
                  return b[1] - a[1];
              }
              // fallback to descending y
              return b[2] - a[2];
          });
          let startX = tokenCoords[0][1];
          let startY = tokenCoords[0][2];
          for (let i = 1; i < tokenCoords.length; i++) {
              tokenCoords[i][1] = startX;
              tokenCoords[i][2] = startY - (i * canvasScale);
          }
          updateTokens(tokenCoords);
      }
    },
    close: {
      // make this wide enough to be forced on the bottom row
      label: `=====================Exit=====================`
    },
  },
  default: "close",
  close: () => {}
});
dialogEditor.render(true);
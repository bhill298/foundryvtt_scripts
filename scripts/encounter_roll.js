async function rollMessage(msg) {
	// don't include the /roll
	let roll = new Roll(msg).evaluate({async: false});
	roll.toMessage({
        rollMode: 'roll',
        speaker: {alias: name}
	});
}

function buttonCallback(html, dc) {
    const rolls = html.find("input#fe5fc87f-3c46-4141-87bb-8b61889f8541").val();
    rollMessage(`${rolls}d20cs>=${dc}`);
}

/* safe short rest: Safe
 * every 10m while casting a ritual: normal
 * at random intervals: normal
 * Every 2 hours while taking a long rest in a safe location: normal
 */
const rollsContent = `
    Number of Rolls:
  <input id="fe5fc87f-3c46-4141-87bb-8b61889f8541" type="number" value="1" />
`;
let dialogEditor = new Dialog({
  title: `Encounter Roller`,
  content: rollsContent,
  buttons: {
    safe: {
      label: `Very Safe (20)`,
      callback: (html) => buttonCallback(html, 20)
    },
    safeish: {
      label: `Safe (19)`,
      callback: (html) => buttonCallback(html, 19)
    },
    normal: {
      label: `Normal (16)`,
      callback: (html) => buttonCallback(html, 16)
    },
    dangerous: {
      label: `Dangerous (11)`,
      callback: (html) => buttonCallback(html, 11)
    },
    deadly: {
      label: `Deadly (6)`,
      callback: (html) => buttonCallback(html, 6)
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
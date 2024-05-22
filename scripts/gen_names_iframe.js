async function RenderIframe(url, scrollY) {
    let frame = new FrameViewer(url, {});
    // need to use _render, because render is not async
    await frame._render(true, {focus: true, height: 800, width: 600});
    frame.element.find("iframe").css({"margin-top": `-${scrollY}px`})
};

let dialogEditor = new Dialog({
  title: `Name Generator`,
  buttons: {
    aarakockra: {
        label: `Aarakockra`,
        callback: () => {
            RenderIframe("https://www.fantasynamegenerators.com/dnd-aarakocra-names.php", 1300);
        }
    },
    aasimar: {
        label: `Aasimar`,
        callback: () => {
            RenderIframe("https://www.fantasynamegenerators.com/dnd-aasimar-names.php", 1300);
        }
    },
    bugbear: {
        label: `Bugbear`,
        callback: () => {
            RenderIframe("https://www.fantasynamegenerators.com/dnd-bugbear-names.php", 1200);
        }
    },
    deep_gnome: {
        label: `Deep Gnome`,
        callback: () => {
            RenderIframe("https://www.fantasynamegenerators.com/dnd-deep-gnome-names.php", 1200);
        }
    },
    dragonborn: {
        label: `Dragonborn`,
        callback: () => {
            RenderIframe("https://www.fantasynamegenerators.com/dnd-dragonborn-names.php", 1400);
        }
    },
    drow: {
        label: `Drow`,
        callback: () => {
            RenderIframe("https://www.fantasynamegenerators.com/dnd-drow-names.php", 1400);
        }
    },
    duergar: {
        label: `Duergar`,
        callback: () => {
            RenderIframe("https://www.fantasynamegenerators.com/dnd-duergar-names.php", 1300);
        }
    },
    dwarf: {
        label: `Dwarf`,
        callback: () => {
            RenderIframe("https://www.fantasynamegenerators.com/dnd-dwarf-names.php", 1350);
        }
    },
    elf: {
        label: `Elf`,
        callback: () => {
            RenderIframe("https://www.fantasynamegenerators.com/dnd-elf-names.php", 1600);
        }
    },
    githyanki: {
        label: `Githyanki`,
        callback: () => {
            RenderIframe("https://www.fantasynamegenerators.com/dnd-githyanki-names.php", 1350);
        }
    },
    githzerai: {
        label: `Githzerai`,
        callback: () => {
            RenderIframe("https://www.fantasynamegenerators.com/dnd-githzerai-names.php", 1250);
        }
    },
    gnome: {
        label: `Gnome`,
        callback: () => {
            RenderIframe("https://www.fantasynamegenerators.com/dnd-gnome-names.php", 1400);
        }
    },
    goblin: {
        label: `Goblin`,
        callback: () => {
            RenderIframe("https://www.fantasynamegenerators.com/dnd-goblin-names.php", 1250);
        }
    },
    goliath: {
        label: `Goliath`,
        callback: () => {
            RenderIframe("https://www.fantasynamegenerators.com/dnd-goliath-names.php", 1300);
        }
    },
    half_elf: {
        label: `HalfElf`,
        callback: () => {
            RenderIframe("https://www.fantasynamegenerators.com/dnd-half-elf-names.php", 1500);
        }
    },
    half_orc: {
        label: `HalfOrc`,
        callback: () => {
            RenderIframe("https://www.fantasynamegenerators.com/dnd-half-orc-names.php", 1300);
        }
    },
    halfling: {
        label: `Halfling`,
        callback: () => {
            RenderIframe("https://www.fantasynamegenerators.com/dnd-halfling-names.php", 1300);
        }
    },
    hobgoblin: {
        label: `Hobgoblin`,
        callback: () => {
            RenderIframe("https://www.fantasynamegenerators.com/dnd-hobgoblin-names.php", 1250);
        }
    },
    human: {
        label: `Human`,
        callback: () => {
            RenderIframe("https://www.fantasynamegenerators.com/dnd-human-names.php", 1450);
        }
    },
    kenku: {
        label: `Kenku`,
        callback: () => {
            RenderIframe("https://www.fantasynamegenerators.com/dnd-kenku-names.php", 1300);
        }
    },
    lizardfolk: {
        label: `Lizardfolk`,
        callback: () => {
            RenderIframe("https://www.fantasynamegenerators.com/dnd-lizardfolk-names.php", 1350);
        }
    },
    minotaur: {
        label: `Minotaur`,
        callback: () => {
            RenderIframe("https://www.fantasynamegenerators.com/dnd-minotaur-names.php", 1350);
        }
    },
    orc: {
        label: `Orc`,
        callback: () => {
            RenderIframe("https://www.fantasynamegenerators.com/dnd-orc-names.php", 1200);
        }
    },
    tabaxi: {
        label: `Tabaxi`,
        callback: () => {
            RenderIframe("https://www.fantasynamegenerators.com/dnd-tabaxi-names.php", 1300);
        }
    },
    tiefling: {
        label: `Tiefling`,
        callback: () => {
            RenderIframe("https://www.fantasynamegenerators.com/dnd-tiefling-names.php", 1400);
        }
    },
    tortle: {
        label: `Tortle`,
        callback: () => {
            RenderIframe("https://www.fantasynamegenerators.com/dnd-tortle-names.php", 1250);
        }
    },
    yuan_ti: {
        label: `YuanTi`,
        callback: () => {
            RenderIframe("https://www.fantasynamegenerators.com/dnd-yuan-ti-names.php", 1200);
        }
    },
    close: {
      label: `Exit`
    },
  },
  default: "close",
  close: () => {}
});
await dialogEditor.render(true, {width: 650});
const confirmed = await Dialog.confirm({
    title: "?",
    content: "Update D&D Beyond Tokens?",
    yes: () => true,
    no: () => false
});

if (confirmed) {
    const actors = game.actors;
    for (let [key, value] of actors.entries()) {
      const ddbImported = 'ddbimporter' in value.flags;
      if (ddbImported && value.type === "character") {
        console.log('Importing: ' + value.name);
        await game.modules.get("ddb-importer").api.importCharacter(value);
      }
    }
} else {
    return;
};
const confirmed = await Dialog.confirm({
    title: "?",
    content: "Remove all fog of war for current scene?",
    yes: () => true,
    no: () => false
});

if (confirmed) {
    const scene = canvas.scene;
    await scene.update({ fogExploration: false });
    for (const user of game.users) {
      const explorationData = {
        scene: scene.id,
        user: user.id,
        explored: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="
      };
      const fogExplorationCls = getDocumentClass("FogExploration");
      let exploration = await fogExplorationCls.get({ scene, user });
      if (exploration) await exploration.update(explorationData, { diff: false });
      else {
        exploration = new fogExplorationCls(explorationData);
        await fogExplorationCls.create(exploration.toJSON());
      }
    }
} else {
    return;
};
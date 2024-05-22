const confirmed = await Dialog.confirm({
    title: "?",
    content: "Clone selected tokens to actors?",
    yes: () => true,
    no: () => false
});
if (confirmed) {
    const actorNameSuffix = "_cloned";

    canvas.tokens.controlled.forEach(o => {
      Actor.create(o.actor).then(a => {
        a.update({name: a.name + actorNameSuffix});
      });
    });
}
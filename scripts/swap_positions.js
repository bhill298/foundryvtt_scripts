async function main () {
  const tokens = canvas.tokens.controlled
  if (tokens.length !== 2) {
    ui.notifications.warn('Please select exactly 2 tokens.', {})
    return
  }

  const updates = [
    {
      _id: tokens[0].document._id,
      x: tokens[1].document.x,
      y: tokens[1].document.y,
    },
    {
      _id: tokens[1].document._id,
      x: tokens[0].document.x,
      y: tokens[0].document.y,
    },
  ]

  await canvas.scene.updateEmbeddedDocuments('Token', updates)
}

main();
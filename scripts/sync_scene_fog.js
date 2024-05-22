const BYTES_PER_PIXEL = 4;
// 0.0 = highest compression, 1.0 = lossless (default 0.92)
const COMPRESSION_LEVEL = 0.7;

function getBlankExploration(width, height) {
    // generate base64 blank data
    let pixels = new Uint8Array(width * height * BYTES_PER_PIXEL);
    for (let i = 0; i < pixels.length; i+= BYTES_PER_PIXEL) {
        // not explored = black (r=0, g=0, b=0, a=255)
        setRGBA(pixels, i, 0, 0, 0, 255);
    }
    return pixels;
}

async function getExplorationBase64(scene, user) {
    // return base64 data of scene exploration
    let fogExplorationCls = getDocumentClass("FogExploration");
    let exploration = await fogExplorationCls.get({ scene, user });
    if (exploration) {
        return {
            explored: exploration.explored,
            empty: false
        }
    }
    else {
        // generate blank data
        /*let width = scene.getDimensions().sceneWidth;
        let height = scene.getDimensions().sceneHeight;
        return {
            explored: await pixelsToBase64(getBlankExploration(width, height), width, height),
            empty: true
        }*/
        return {
            explored: "",
            empty: true
        }
    }
}

async function setExplorationData(scene, user, base64Img) {
    const explorationData = {
        scene: scene.id,
        user: user.id,
        explored: base64Img
    };
    let fogExplorationCls = getDocumentClass("FogExploration");
    let exploration = await fogExplorationCls.get({ scene, user });
    if (exploration) {
        await exploration.update(explorationData, { diff: false });
    }
    else {
        exploration = new fogExplorationCls(explorationData);
        await fogExplorationCls.create(exploration.toJSON());
    }
}

async function base64ToPixels(base64) {
    // this returns a UINT8 array of r, g, b, a values; the size is w*h*4
    let sprite = PIXI.Sprite.from(base64);
    // check if already loaded
    if (sprite.texture.valid) {
        return {
            width: sprite.width,
            height: sprite.height,
            pixels: canvas.app.renderer.extract.pixels(sprite)
        }
    }
    //let app = new PIXI.Application();
    // otherwise, need to wait for the sprite to load; resolve the promise when this happens
    return new Promise(resolve => {
        sprite.texture.baseTexture.on('loaded', () => resolve(
        {
            width: sprite.width,
            height: sprite.height,
            pixels: canvas.app.renderer.extract.pixels(sprite)
        }));})
}

async function pixelsToBase64(pixels, width, height) {
    // https://pixijs.download/v4.4.4/docs/PIXI.Texture.html#fromBuffer
    let texture = PIXI.Texture.fromBuffer(pixels, width, height);
    let sprite = PIXI.Sprite.from(texture);
    //let app = new PIXI.Application();
    // image/webp is the default that foundry uses, but others will also work
    return await canvas.app.renderer.extract.base64(sprite, "image/webp", COMPRESSION_LEVEL);
}

function getLinearIndex(width, x, y) {
    // height only matters for bounds checking
    return (x + (y * width)) * BYTES_PER_PIXEL;
}

function setRGBA(pixels, idx, r, g, b, a) {
    // r, g, b, a are [0, 255]
    // idx comes from getLinearIndex or direct iteration of the bytes
    pixels[idx] = r;
    pixels[idx + 1] = g;
    pixels[idx + 2] = b;
    pixels[idx + 3] = a;
}

function debugMsg(msg) {
    if (debugOn) {
        console.log(msg);
    }
}

let DIALOG_YES = 1;
let DIALOG_DEBUG = 2;
const dialogResult = await Dialog.confirm({
    title: "?",
    content: "Sync current scene fog of war? (Close to cancel, No to debug)",
    yes: () => DIALOG_YES,
    no: () => DIALOG_DEBUG,
});
let confirmed = dialogResult !== null;
let debugOn = dialogResult === DIALOG_DEBUG;
let maxUserWidth = 0;
let maxUserHeight = 0;

if (confirmed) {
    if (debugOn) {
        console.log("Printing fog of war debug info...");
    }
    else {
        console.log("Syncing user fog of war...");
    }
    let scene = canvas.scene;
    let combinedWidth = scene.getDimensions().sceneWidth;
    let combinedHeight = scene.getDimensions().sceneHeight;
    // this combines the exploration from all the players
    let combinedPixels = getBlankExploration(combinedWidth, combinedHeight);
    for (const user of game.users) {
        if (!user.isGM && !user.isTheGM) {
            // for each user, get exploration data, then
            let explorationBase64Obj = await getExplorationBase64(scene, user);
            let explorationBase64 = explorationBase64Obj.explored;
            let emptyExploration = explorationBase64Obj.empty;
            if (emptyExploration) {
                debugMsg(user);
                debugMsg("exploration data was empty");
                continue;
            }
            let pixelsObj = await base64ToPixels(explorationBase64);
            let pixels = pixelsObj.pixels;
            let userWidth = pixelsObj.width;
            let userHeight = pixelsObj.height;
            let xRatio = (userWidth / combinedWidth);
            let yRatio = (userHeight / combinedHeight);
            if (userWidth > maxUserWidth) {
                maxUserWidth = userWidth;
            }
            if (userHeight > maxUserHeight) {
                maxUserHeight = userHeight;
            }
            // iterate over the larger combined image to deal with scaling (sometimes the user images are stored at a lower resolution)
            for (let x = 0; x < combinedWidth; x++) {
                for (let y = 0; y < combinedHeight; y++) {
                    let i = getLinearIndex(combinedWidth, x, y);
                    // get the user index by scaling down x and y
                    let userI = getLinearIndex(userWidth, Math.floor(xRatio * x), Math.floor(yRatio * y));
                    let r = pixels[userI];
                    let g = pixels[userI + 1];
                    let b = pixels[userI + 2];
                    let a = pixels[userI + 3];
                    // not explored = black (r=0, g=0, b=0, a=255)
                    if (r > 0 || g > 0 || b > 0) {
                        let dstR = combinedPixels[i];
                        let dstG = combinedPixels[i + 1];
                        let dstB = combinedPixels[i + 2];
                        let dstA = combinedPixels[i + 3];
                        // explored = red (r=255, g=1, b=0, a=255); may be other less intense colors for smoothing
                        setRGBA(combinedPixels, i, Math.max(r, dstR), Math.max(g, dstG), Math.max(b, dstB), Math.max(a, dstA));
                    }
                }
            }
            debugMsg(user);
            debugMsg(explorationBase64);
        }
    }
    debugMsg(`max width ${maxUserWidth} and height ${maxUserHeight}`);
    if (maxUserWidth === 0 || maxUserHeight === 0) {
        console.log("all data was empty or there was an error");
        return;
    }
    // recombine to a smaller image
    if (maxUserWidth < combinedWidth || maxUserHeight < combinedHeight) {
        let resizedCombinedPixels = getBlankExploration(maxUserWidth, maxUserHeight);
        let xRatio = (combinedWidth / maxUserWidth);
        let yRatio = (combinedHeight / maxUserHeight);
        for (let x = 0; x < maxUserWidth; x++) {
            for (let y = 0; y < maxUserHeight; y++) {
                let i = getLinearIndex(maxUserWidth, x, y);
                let combinedI = getLinearIndex(combinedWidth, Math.floor(xRatio * x), Math.floor(yRatio * y));
                let r = combinedPixels[combinedI];
                let g = combinedPixels[combinedI + 1];
                let b = combinedPixels[combinedI + 2];
                let a = combinedPixels[combinedI + 3];
                // not explored = black (r=0, g=0, b=0, a=255)
                if (r > 0 || g > 0 || b > 0) {
                    // explored = red (r=255, g=1, b=0, a=255); may be other less intense colors for smoothing
                    setRGBA(resizedCombinedPixels, i, r, g, b, a);
                }
            }
        }
        combinedPixels = resizedCombinedPixels;
        combinedWidth = maxUserWidth;
        combinedHeight = maxUserHeight;
    }
    let combinedBase64 = await pixelsToBase64(combinedPixels, combinedWidth, combinedHeight);
    debugMsg("Combined base64:");
    debugMsg(combinedBase64);
    if (dialogResult === DIALOG_YES) {
        for (const user of game.users) {
            if (!user.isGM && !user.isTheGM) {
                // set the combined data for all users/
                await setExplorationData(scene, user, combinedBase64);
            }
        }
    }
    console.log("Fog of war script done");
}
else {
    return;
}
async function readDir(dir) {
    let files = new FilePicker();
    // dir goes to data dir, can be prefixed with slash or not
    try {
        // .dirs array of strings, , files array of strings
        let result = await files.constructor.browse("data" /*files.activeSource*/, dir);
        return {dirs: result.dirs, files: result.files};
    }
    catch (error) {
        return {dirs: [], files: []};
    }
}

async function exists(file) {
    let files = new FilePicker()
    // dir goes to data dir, can be prefixed with slash or not
    try {
        let result = await files.constructor.browse("data" /*files.activeSource*/, file)
        return true;
    }
    catch (error) {
        return false;
    }
}
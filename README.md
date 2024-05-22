# FoundryVTT Scripts

Miscellaneous [FoundryVTT](https://foundryvtt.com/) scripts of varying quality. These are provided with no guarantees that they will still work or will work for your use case. See the last modified date on each file for an idea of what version they were last updated for.

The scripts in the `scripts` directory are meant to be run as script macros.

The scripts in the `world_scripts` directory are world scripts, meant to run at world load. To get these to run, edit your world's `world.json` and add a path to each script, placed within the world directory, under the "esmodules" key as an array of strings. E.g.:
```
  "title": "....",
  "esmodules": [
    "world-scripts/script1.js",
    "world-scripts/script2.js"
  ],
....
```

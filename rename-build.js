const fs = require("fs");
const path = require("path");

const dist = path.join(__dirname, "dist");

for (const file of fs.readdirSync(dist)) {

    if (!file.endsWith(".exe")) continue;

    let newName = file;

    // Remove version numbers like " 1.0.0"
    newName = newName.replace(/ \d+\.\d+\.\d+/g, "");

    // Make installer name cleaner
    newName = newName.replace("Setup ", "Setup ");

    if (newName !== file) {

        fs.renameSync(
            path.join(dist, file),
            path.join(dist, newName)
        );

        console.log(`${file} -> ${newName}`);
    }
}
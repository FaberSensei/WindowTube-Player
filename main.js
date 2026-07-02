const { app, BrowserWindow } = require("electron");
const fs = require("fs");
const path = require("path");

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 1280,
        height: 720,
        backgroundColor: "#000000",
        autoHideMenuBar: true,

        webPreferences: {
            autoplayPolicy: "no-user-gesture-required"
        }
    });

    win.loadURL("https://www.youtube.com");

    // For Debugging
    // win.webContents.openDevTools();

    win.webContents.on("dom-ready", () => {

        const inject = fs.readFileSync(
            path.join(__dirname, "inject.js"),
            "utf8"
        );

        win.webContents.executeJavaScript(inject);

        const css = fs.readFileSync(
            path.join(__dirname, "youtube.css"),
            "utf8"
        );

        win.webContents.insertCSS(css);

    });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin")
        app.quit();
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0)
        createWindow();
});
# WindowTube Player

A lightweight Electron-based YouTube player that provides a clean, windowed fullscreen viewing experience.

## Screenshots

### YouTube vs WindowTube Player

<table>
<tr>
<td align="center"><b>YouTube</b></td>
<td align="center"><b>WindowTube Player</b></td>
</tr>

<tr>
<td>
<img src="https://github.com/user-attachments/assets/f60162e6-8170-46fd-b359-966fe239036a" width="450">
</td>

<td>
<img src="https://github.com/user-attachments/assets/025b2e94-7a1d-4ece-918f-397ab7a29967" width="450">
</td>
</tr>
</table>

## Features

- Automatic Theater Mode
- Windowed fullscreen player
- Home page and search work normally
- Automatically selects the highest available video quality
- Supports YouTube Premium (just sign in normally)
- Portable and installer builds
- Built with Electron

## Installation

Download the latest release from the **Releases** page.

- **WindowTube Player Setup.exe** — Installs the application.
- **WindowTube Player.exe** — Runs without installation.

## Building

Clone the repository:

```bash
git clone https://github.com/FaberSensei/WindowTube.git
cd WindowTube
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm start
```

Build the installer and portable executable:

```bash
npm run dist
```

## Usage

- Launch the application.
- Sign in to your YouTube account if you want access to Premium features.
- Browse YouTube normally from the home page.
- Opening a video automatically switches to the windowed fullscreen player.
- Press **Backspace** while watching a video to return to the YouTube home page.

## License

This project is licensed under the MIT License.

## Disclaimer

WindowTube Player is an unofficial Electron wrapper for YouTube. It is not affiliated with, endorsed by, or sponsored by YouTube or Google. All trademarks belong to their respective owners.
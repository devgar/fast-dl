# fast-dl

## Requirements
 - [node.js](https://nodejs.org)
 - A browser compatible with chrome extensions (like chrome)
 - [youtube-dl](https://github.com/devgar/fast-dl)

## Installation

### First clone this repo

```sh
git clone https://github.com/devgar/fast-dl.git
```

### Second, install all node.js dependecies and link executable

```sh
cd fast-dl
npm install # or yarn
npm link # or yarn link
```

### Finally add the extension to your browser
You can check the path of the extension by runing `fast-dl`.

## Usage

- Go to your desired downloading folder and run `fast-dl`.
```
fast-dl server listening on port 3000
Extension path: /path/to/browser/extension
Downloads path: /path/to/downloading/dir
```
- Visit a youtube video.
- Click the extension icon to download the video as mp3.


## Options

### Port

Set downloading server's port using `PORT` env variable.
```sh
PORT=8000 fast-dl
```

// TODO:
But the extension will continue to try communicate with the
downloading server by port 3000.

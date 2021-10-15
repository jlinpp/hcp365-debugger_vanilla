# HCP365 Debugger (vanilla)

This is a chrome extention built in vanilla JS.

### Structure

```
.
├── README.md
├── background.js
├── images
│   ├── icon_128.png
│   ├── icon_16.png
│   ├── icon_32.png
│   └── icon_48.png
├── main.css
├── manifest.json
└── popup
    ├── popup.html
    └── popup.js
```

- `background.js`: This is a file that allows code to run within the background while the extension is running. 
- `./popup`: This folder contains the files that allow the use of the popup window if the extension icon is clicked.
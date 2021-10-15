# HCP365 Debugger (vanilla)

This is a chrome extention built in vanilla JS.

### Structure

```
.
├── README.md
├── background.js
├── devtools
│   ├── devtools.html
│   └── devtools.js
├── images
│   ├── icon_128.png
│   ├── icon_16.png
│   ├── icon_32.png
│   └── icon_48.png
├── main.css
├── manifest.json
├── panel
│   ├── panel.html
│   └── panel.js
└── popup
    ├── popup.html
    └── popup.js
```

- `background.js`: This is a file that allows code to run within the background while the extension is running. 
- `./devtools`: This folder contains `devtools.html` which will load `devtools.js` that creates the HCP365 panel in the devtools
- `./panel`: This folder contains the HC365 panel, here we aim to display the network calls for our pixel
- `./popup`: This folder contains the files that allow the use of the popup window if the extension icon is clicked.
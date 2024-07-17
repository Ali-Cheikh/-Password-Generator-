<img src="/11374143.png" align="right" width="11%">


# Password-manager

```Js
{
  "main": "main.js",
  "name": "password-generator",
  "version": "1.0.0",
  "description": "A simple password generator",
  "author": "Ali Cheikh",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/Ali-Cheikh/-Password-Generator-"
    },
  "scripts": {
    "start": "electron .",
    "pack": "electron-builder --dir",
    "dist": "electron-builder"
  },
  "build": {
    "productName": "Password Generator",
    "appId": "com.unexpected.PG",
    "directories": {
      "output": "dist"
    },
    "files": [
      "main.js",
      "index.html",
      "style.css",
      "script.js"
    ],
    "win": {
      "target": "portable",
      "icon": "11374143.png"
    },
    "mac": {
      "target": "dmg",
      "icon": "11374143.png"
    },
    "linux": {
      "target": "AppImage",
      "icon": "11374143.png"
    }
  },
  "devDependencies": {
    "electron": "^12.0.0",
    "electron-builder": "^22.10.5"
  }
}
```
## Getting the Code

You can get the source code for the Password Generator app from GitHub:

- <a aligb="center" href="https://www.mediafire.com/file/z9gqg2l0wwnb506/Password+Generator+1.0.0.exe/file">[Download Windows app</a>
- [Source Code Repository](https://github.com/Ali-Cheikh/-Password-Generator-)

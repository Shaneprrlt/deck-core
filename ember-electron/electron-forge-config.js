module.exports = {
  "make_targets": {
    "win32": [
      "squirrel"
    ],
    "darwin": [
      "zip"
    ],
    "linux": [
      "deb",
      "rpm"
    ]
  },
  "electronPackagerConfig": {
    "name": "Deck",
    "app-copyright": "Copyright 2017 Deck, Inc.",
    "app-version": "1.0",
    "platform": "darwin",
    "icon": "/public/app_icon@3x.png.icns",
    "protocols": [
      {
        name: "Deck",
        schemes: ["deck"]
      }
    ]
  },
  "electronWinstallerConfig": {
    "name": ""
  },
  "electronInstallerDebian": {},
  "electronInstallerRedhat": {},
  "github_repository": {
    "owner": "",
    "name": ""
  },
  "windowsStoreConfig": {
    "packageName": ""
  }
};

# MMM-Namnsdag
Magic Mirror module that displays Swedish names of the day. Relys on [Svenska Dagar Api](https://api.dryg.net/).

[![Known Vulnerabilities](https://snyk.io/test/github/Menturan/MMM-Namnsdag/badge.svg)](https://snyk.io/test/github/Menturan/MMM-Namnsdag)
![Maintenance](https://img.shields.io/maintenance/yes/2023.svg?style=flat-square)
![GitHub](https://img.shields.io/github/license/Menturan/MMM-Namnsdag.svg?style=flat-square)

## Screenshot
![Screenshot](screenshot.png)

## Install
```sh
  $ cd ~/MagicMirror/modules
  $ git clone https://github.com/Menturan/MMM-Namnsdag.git
  $ cd MMM-Namnsdag
  $ npm install
```

## Configuration

| Key | Value | Required | Default | Description |
|-----|-------|---------|---------|---------|
|debug|_boolean_| N| false| Debug output. |

## Example config

``` json
{
    module: "MMM-Namnsdag",
    position: "bottom_right",
    header: "Namnsdag"
}
```
## Development
This module isn't perfect. If you find a bug or has a feature request don't hesitate to create an issue OR even better, create a pull request! :D


# MMM-Namnsdag
Magic Mirror module that displays Swedish names of the day. Relys on [Svenska Dagar Api](https://api.dryg.net/).

![David](https://img.shields.io/david/Menturan/MMM-Namnsdag.svg?style=flat-square)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/Menturan/MMM-Namnsdag.svg?style=flat-square)
![LGTM Alerts](https://img.shields.io/lgtm/alerts/g/Menturan/MMM-Namnsdag.svg?style=flat-square)
![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/g/Menturan/MMM-Namnsdag.svg?style=flat-square)
![Yarn](https://img.shields.io/badge/dependency%20manager-Yarn-blue.svg?style=flat-square)

![Maintenance](https://img.shields.io/maintenance/yes/2019.svg?style=flat-square)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Menturan/MMM-Namnsdag.svg?style=flat-square)
![GitHub](https://img.shields.io/github/license/Menturan/MMM-Namnsdag.svg?style=flat-square)

## Screenshot
![Screenshot](screenshot.png)

## Install
This module uses [Yarn](https://yarnpkg.com/lang/en/).
```sh
  cd ~/MagicMirror/modules
  git clone https://github.com/Menturan/MMM-Namnsdag.git
  cd MMM-Namnsdag
  yarn install
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


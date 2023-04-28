# SaarClimb Monorepo

Hier werden alle SaarClimb-Projekte verwaltet.

## Installation und Entwicklung
Installation:
```sh
pnpm install
```
Monorepo lokal ausführen:
```sh
# Alle Projekte werden ausgeführt
pnpm run dev
```

## Neue App hinzufügen
App erstellen:
```sh
cd apps
# Kommando zur Erstellung einer neuen App
```
Anpassung der `package.json` in der App:
```sh
"dependencies": {
  "ui": "workspace:*"
},
```
Style hinzufügen:
```js
// In der Startdatei oder in jeder Komponente styles importieren
import "ui/styles.css"; 
```

## Storybook
- Storybook wird als eigene App angelegt
- So lassen sich UI-Komponenten isoliert erstellen
- Die Komponenten können anschließend in jedes Projekt importiert werden

UI-Komponente importieren:
```js
// Beliebige JSX-Datei
import { SolidButton } from "ui";
// ...
<SolidButton backgroundColor={"red"} label={"Button"} onClick={showAlert} primary={true} size={"medium"}/>
```
# React Native

display flex by default, Typescript,

### Requisitos

- node 
- expo: `npm install -g expo-cli`
    - Para criar uma aplicação, digite no terminal: expo init

- Ao final do processo, uma pasta com o nome definido para a aplicação será criada e, dentro dela, a estrutura básica do projeto. Ainda no terminal, navegue para dentro da pasta do projeto. Em seguida, para iniciar a aplicação, digite o comando: `npm start`

## Get started

- `npx create-expo-app --template` - √ Choose a template: » Navigation (TypeScript)


## nativewind
- `npm i nativewind@2.0.11`
- `npm i tailwindcss@3.3.2 --save-dev`
- `npx tailwindcss init`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

e no balbel adicionar: `plugins: ["nativewind/babel"]`

## Instalação de fonts

- `npx expo install expo-font @expo-google-fonts/inter`

## start server:

- `npx expo start`
- `npx expo start --clear`

## aplicar classe de forma condicional:

- `npm i clsx`

## Generate APK

- expo login
- npm install -g eas-cli
- `eas build --platform android --profile preview`

## Zustand - Estados globais

- https://zustand.docs.pmnd.rs/getting-started/introduction

- `npm install zustand`


## Lib better scroll

- https://github.com/APSL/react-native-keyboard-aware-scroll-view



## links

https://react-native.rocketseat.dev/expo-managed/windows

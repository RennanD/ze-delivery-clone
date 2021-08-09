<h1 align="center" >
    <img src="./.github/small-logo.png" width = "100px">
    
</h1>

<h1 align="center"> Clone Zé Delivery 🥤🍻 </h1>


<h3 align="center">
  O intuito deste projeto foi treinar alguns conheceitos 
  que aprendi no Ignite de React Native da Rocketseat.
</h3>

# Clonando este projeto

```
git clone https://github.com/RennanD/ze-delivery-clone.git
```

# ❗️ Requisitos

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/) (Opicional)
- [Expo cli](https://docs.expo.io/get-started/installation/)


## 💻 Detalhes do Aplicativo

<h1 align="center">
  <img alt="WebApp" src="./.github/smartphone.svg" width = "120px">
</h1>


<p>
  Neste projeto utilizei:
</p>

- [Expo](https://docs.expo.io/bare/exploring-bare-workflow/) como abstração do React Native.
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) para trabalhar com animações.
- [styled-components](https://styled-components.com/) para criar componentes estilizados.
- [json-server](https://github.com/typicode/json-server) e [axios](https://github.com/axios/axios) para trabalhar com requisições externas à aplicação.
- [Svg Transformer](https://github.com/kristerkari/react-native-svg-transformer) para lidar com images(ícones) em Svg


### ⚡️ Iniciando a aplicação

Primeiro vamos ativar nossa api fake:


Em uma aba do terminal, na raiz do projeto rode o comando abaixo: 
```
npx json-server ./src/services/server.json --host xxx.xxx.xx.x --port 3333 --delay 800
```

### Obs.:

Altere "xxx.xxx.xx.x", pelo ip da sua máquina, tanto no script acima quanto no arquivo `./src/services/api.ts`

Para iniciar a aplicação, em uma nova aba do terminal e na raiz do projeto execute:

```
yarn
expo start

# ou

npm install
expo start
```
## Iniciando o projeto no emulador/simulado

### IOS 🍎

Na interface do servidor do Expo, clique em `Run on iOS simulator`

### Android 👾

Na interface do servidor do Expo, clique em `Run on Android device/emulator`

## Para rodar o aplicativo no dispositivo físico

Primeiro, faça o download do aplicativo Expo go.
  - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US)
  - [IOS](https://apps.apple.com/br/app/expo-go/id982107779)

Com o Expo Go instalado, escaneie o qrcode que aparece na interface do expo


# App Demo 

<h1 align="center">
  <img alt = "The app" src = "./.github/ze-delivery.gif" width = "300px" />
</h1>

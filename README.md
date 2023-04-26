1. Pobierz paczke
2. Zmien jej nazwe
3. Nacisnij " Ctrl + ` "
4. Wpisz " npm init -y "
5. Wpisz " npm install --save-dev webpack webpack-cli webpack-dev-server css-loader style-loader html-webpack-plugin"

w pliku package.json zmien script na:

    "scripts": {
        "start": "webpack-dev-server --config webpack.dev.js --open",
        "build": "webpack --config webpack.prod.js"
    },

i usun description

6. Powinno dzialac

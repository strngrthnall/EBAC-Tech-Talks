# Configurando o Parcel

## No terminal

-- Iniciando o projeto Node
```Shell
npm init --yes
```

-- Instalando o Parcel
```Shell
npm i --save-dev parcel
```

## Organizando as pastas

```
src{
  index.html
  images{
    ***
  }
  scripts {
    main.js
    ***
  }
  styles {
    components {
      _buttons.sass (exemplo)
      ***
    }
    main.sass
    ***
  }
}
```

## Scripts

No arquivo package.json, devemos criar um script para o parcel indicando os arquivos

ex.:

```json
"scripts": {
    "dev": "parcel src/index.html src/styles/main.scss src/scripts/main.js",
    ...
  },
```

## Minificando Imagens

Devemos criar um arquivo sharp.config.json na mesma pasta do package.json com o seguinte conteúdo:

```json
{
  "png": {
    "quality": 75
  }
}
```
Onde png é a extensão da imagem, e o numero em quality é a porcentagem da qualidade desejada na imagem.
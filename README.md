# Estrutura Monorepo

- Estamos utilizando essa estruturar para poder gerenciar o pacote de componentes e a documentação com storybook ao mesmo tempo
- É necessário estar em uma aplicação React ou Next com tailwind@v4 configurado

Importar esse código tailwind.css

```
@import "tailwindcss";

@theme {
  --color-white: #fff;
  --color-black: #000;

  --color-primary: #0897E9;
  --color-primary-1: #E6F5FD;
  --color-primary-2: #6BC1F2;
  --color-primary-3: #055B8C;
  --color-primary-4: #02304A;

  --color-secondary: #FEAC0E;
  --color-secondary-1: #FFF7E7;
  --color-secondary-2: #FFE6B7;
  --color-secondary-3: #FECD6E;
  --color-secondary-4: #FEBD3E;
  --color-secondary-5: #CB8A0B;
  --color-secondary-6: #4C3404;

  --color-complementary: #6B48FF;
  --color-complementary-1: #F0EDFF;
  --color-complementary-2: #D3C8FF;
  --color-complementary-3: #896DFF;
  --color-complementary-4: #563ACC;
  --color-complementary-5: #2B1D66;
  --color-complementary-6: #150E33;

  --color-grey: #363636;
  --color-grey-1: #FAFAFA;
  --color-grey-2: #EEEEEE;
  --color-grey-3: #D2D2D2;
  --color-grey-4: #5E5E5E;
  --color-grey-5: #363636;
  --color-grey-6: #000000;

  --color-warning: #BF0F30;
  --color-success: #007332;
  --color-alert: #E07817;
  --color-info: #0897E9;
  --color-warning-light: #FEE6E8;
  --color-success-light: #EDF8EC;
  --color-alert-light: #FEF4EA;
  --color-info-light: #E6F5FD;
}
```

## Packages

- tokens: Pacote público, contém os tokens do design system sem nenhuma dependencia externa (cores, fontes, tamanhos, etc).
- react: Pacote público, implementação dos componentes do design system em react
- eslint-config e ts-config: Pacote privado, visto apenas dentro do monorepo para que a configuração do eslint seja reaproveitada entre os projetos do monorepo

## Erros para corrigir

- fix: deploy documentação storybook

## Documentações para adicionar

1. explicação geral e links de referencia
2. instalação da lib e uso simples
4. como controlar versionamento

## Passo a passo para criar novo componente com documentação
- criar componente em /packages/react/src/components
- export o componente em /packages/react/src/index.tsx
- criar documentação em /packages/docs/src/stories

## Como controlar versionamento

Após alterações seguir os passos

- Rodar npm run changeset
- selecionar tipo de mudanças patch, minor ou major e adicionar descrição da mudança feita
- Você pode ir adicionando outras alterações e após finalizar repetir o processo anterior, assim adicionando mais de uma mudança em uma mesma versão
- Para atualizar a versão do pacote, rode primeiro npm run version-packages. Isso irá atualizar a versão e o Changelog dentro dos projetos alterados.
- Para atualizar o pacote no npm é necessário ter permissão do pacote e estar logado com npm. Rode npm login e siga as instruções.
- Logado no npm, para subir a atualização do pacote no npm, rode npm run release
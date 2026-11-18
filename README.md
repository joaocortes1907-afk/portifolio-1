# Portfólio Acadêmico — Relações, Princípios e Valores

Site estático de um portfólio acadêmico sobre as vivências, reflexões e aprendizados da disciplina **Relações, Princípios e Valores**.

## Recursos

- Layout responsivo para celular e computador.
- Navegação entre as seções da página.
- Galeria de fotos com visualização ampliada.
- Filtros interativos para as estrofes da paródia.
- Textos e imagens definidos diretamente nos arquivos do projeto.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Tailwind CSS via CDN
- Google Fonts

## Estrutura do projeto

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── img/
    ├── foto.de.perfil.jpeg
    └── ...outras imagens da página
```

## Executar localmente

Não é necessário instalar dependências nem executar um processo de build. Baixe ou clone o repositório e abra `index.html` no navegador.

O Tailwind CSS e as fontes são carregados por serviços externos; para que esses recursos apareçam corretamente, é necessário ter conexão com a internet.

## Editar textos e imagens

### Textos

Edite o conteúdo diretamente em `index.html` e salve o arquivo. Os textos da página não são editáveis pelos visitantes no navegador.

### Imagens

As imagens ficam na pasta `img/`. Para trocar uma imagem, coloque o novo arquivo nessa pasta e altere o caminho no atributo `src` da tag `<img>` correspondente em `index.html`.

Exemplo:

```html
<img src="img/minha-foto.jpg" alt="Descrição da imagem">
```

Mantenha os nomes e caminhos iguais aos usados no HTML. Se renomear ou mover uma imagem, atualize também o `src` correspondente.

### Estilos e funcionalidades

- Altere cores, espaçamentos e aparência em `css/style.css`.
- Altere o comportamento da página em `js/script.js`.

## Publicar

O projeto é estático e pode ser publicado pelo GitHub Pages ou por outro serviço de hospedagem de sites estáticos. Publique a pasta do projeto mantendo `index.html`, `css/`, `js/` e `img/` juntos.

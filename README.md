# github-client

<img alt="favicon" src="https://avatars2.githubusercontent.com/oa/1406180?s=140&u=b44629cbec5079f99a61e6f1b6297bc4797f796b&v=4" height=120 align="right" />

GitHub client within the *React Akvelon 2020* course.

[wiki]: https://github.com/martis-git/github-client/wiki
[requirements]: https://github.com/niyazm524/github-client/wiki/%5BRU%5D-Requirements
[codestyle]: https://github.com/niyazm524/github-client/wiki/CodeStyle
[structure]: https://github.com/niyazm524/github-client/wiki/Project-Structure

- [Project WIKI][wiki]
   - [Requirements (RU)][requirements]
   - [Design](https://www.figma.com/file/HxOqIdmTNtLcFLcQZzAYJC/github-client "Super design from @AdeliyaG")
   - [CodeStyle][codestyle]
   - [Structure][structure]
- [Contributing guide](CONTRIBUTING.md)

## Technology stack
- **UI**: `react`, `antd`, `classnames`, `tailwindcss`
- **Lang**: `typescript (3.7+)`
- **Fetching**: `graphql`, `apollo-client (3+)`
   - **API Codegen**: `graphql-codegen`
- **Routing**: `react-router`
- **Tests**: `eslint`, `prettier`, `graphql-eslint`, `stylelint`
- **Auth**: `GitHub OAuth`, `firebase`
- <b title="Super CI/CD from @niyazm524">CI/CD</b>: `github-actions`, `firebase`

<div align="center">
<img title="react" alt="react" height=48 src="https://cdn.auth0.com/blog/react-js/react.png"/>
<img title="typescript" alt="typescript" height=48 src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png"/>
<img title="antdesign" alt="antdesign" height=48 src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
<img title="graphql" alt="graphql" height=48 src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png"/>
<img title="apollo" alt="apollo" height=48 src="https://miro.medium.com/max/300/0*xdVGlEH7f9cRVaR-"/>
<img title="eslint" alt="eslint" height=48 src="https://d33wubrfki0l68.cloudfront.net/204482ca413433c80cd14fe369e2181dd97a2a40/092e2/assets/img/logo.svg"/>
<img title="prettier" alt="prettier" height=48 src="https://prettier.io/icon.png"/>
<img title="stylelint" alt="stylelint" height=48 src="https://camo.githubusercontent.com/aa04feafbd080140cd834905cf171ccf7b06fc5f1f1ae07ce9879218165312d1/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f7374796c656c696e742e737667"/>
<img title="github" alt="github" height=48 src="https://image.flaticon.com/icons/png/512/25/25231.png" />
<img title="github-actions" alt="github-actions" height=48 src="https://avatars0.githubusercontent.com/u/44036562?s=200&v=4" />
<img title="firebase" alt="firebase" height=48 src="https://www.gstatic.com/devrel-devsite/prod/v73fbca10ce7899da426d451b3f74ee09bc6846fcf427552c7e8e85261505ef2c/firebase/images/touchicon-180.png" />
</div>

## Usage

### Launch dev-stand
```sh
$ npm i                   # install dependencies
$ npm run start           # launch stand
```

### Launch test
```sh
$ npm run test            # launch all tests
```

```sh
$ npm run react:test      # unit tests
$ npm run lint:test       # linters tests
$ npm run lint:fix        # linters tests + autofix
```

### Work with dependencies
```sh
$ npm run deps:clean      # removing redundant created files, node_modules
$ npm run deps:reinstall  # reinstall dependencies
```

### API Codegen
```sh
$ npm run api:gen         # generate types and hooks for work with API - once
$ npm run api:gen--watch  # generate types and hooks for work with API - watch-mode
```

## VSCode

Plugins list for better DX<a title="Developer Experience">*</a>
> There is a required base config for all of these

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Autocomplete for Tailwind classes in components
- [Apollo GraphQL](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo) - IntelliSense with autocomplete (but with freezes, possible)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - Autofix on save, testing from linters

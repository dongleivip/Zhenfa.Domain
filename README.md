# ZhenfaDomain

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Publish to ghpages

```bash
git checkout -b gh-pages
git push origin gh-pages
npm install -g angular-cli-ghpages
ng build --prod --base-href https://[username].github.io/[repo]/
ngh --dir=dist/[project-name]
```

[Learn more](https://medium.com/code-sketch/how-to-deploy-an-angular-7-app-to-github-pages-9427b609645f)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

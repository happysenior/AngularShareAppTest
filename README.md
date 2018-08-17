# SharedApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

1. Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
2. Go to `cd C:\Data\Angular-shared\shared-app\projects\component-library` and run `ng build component-library` to build the shared component library. 
3. Then go to `cd C:\Data\Angular-shared\shared-app` and run `ng serve`. 

Every time you make changes to a component inside the component-library, you will need to follow step 2.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Create component in component library

ng generate component components/<compName> --project=component-library

## Replacing CSS with SCSS

Angular 6 comes with its own sass pre-processor so there is no need to install any processing components. Steps taken to switch css to scss:
1. Add schematics to include scss to new generated components
```typescript
"schematics": {
      "@schematics/angular:component": {
        "styleext": "scss"
      }
    },
```
2 Change all css files to scss and all of their references.
3 Private scss files begin with an underscore `_variables.scss`. This will prevent from all scss files generating their own css. You then need to reference these files in your global style scss file like this `@import 'variables', 'functions', 'typography';` Note, referencing files like this only works if they are in the root folder unless that containing folder is listed in your angular.json under `stylePreprocessorOptions`. For example:
```typescript
"stylePreprocessorOptions": {
              "includePaths": [
                "src/scss"
              ]
            },
```

## Navigation

Top nav component is a non-collapsible bootstrap menu.
Side nav uses `ng-sidebar` module accessed here: https://www.npmjs.com/package/ng-sidebar.

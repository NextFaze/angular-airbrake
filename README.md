# Angular (2+) Airbrake Integration

[![Build Status](https://travis-ci.org/NextFaze/angular-airbrake.svg?branch=master)](https://travis-ci.org/NextFaze/angular-airbrake) [![Coverage Status](https://coveralls.io/repos/github/NextFaze/angular-airbrake/badge.svg?branch=master)](https://coveralls.io/github/NextFaze/angular-airbrake?branch=master)

This package provides an Angular 2+ service for logging to Airbrake.

## Installation

    npm install angular-airbrake

### Dependencies

This module relies on the official `airbrake-js` npm package. In addition, it has Angular >= 2 as a peer dependency.

## Usage

### Bootstrap the module

```ts
import { AirbrakeModule, AirbrakeService } from 'angular-airbrake'

NgModule({
    imports: [
        AirbrakeModule.forRoot({
            // Your Airbrake options here, follow the Airbrake documentation
        })
    ],
    providers: [
        { provide: ErrorHandler, useClass: AirbrakeService }
    ]
})
export class MyAngularApp {}

```

### Use the service

Let the Angular DI do all the magic for you.

```ts
import { Component } from '@angular/core'
import { RollbarService } from 'angular-rollbar';

@Component(...)
export class MyComponent {

    constructor (airbrake: AirbrakeService) {
        airbrake.error('Logging to Airbrake!');
    }
}
```

## Development

We are using Angular CLI to make things a little bearable.

```sh
npm install
npm test
```

## Disclaimer

This project is not affiliated in anyway with Airbrake.
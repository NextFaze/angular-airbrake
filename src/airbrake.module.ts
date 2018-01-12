import { ModuleWithProviders, NgModule } from '@angular/core';
import { AirbrakeService, AIRBRAKE_CONFIG } from './airbrake.service';

@NgModule({
    providers: [
        AirbrakeService 
    ],
})
/**
 * Airbrake Logging support for Angular 2.
 */
export class AirbrakeModule {

    /**
     * 
     * Setup the module in your application's root bootstrap.
     * 
     * @static
     * @param {Object} config The configuration object for Airbrake
     * @returns {ModuleWithProviders} The module ready for your bootstrap
     * 
     * @memberOf AirbrakeModule
     */
    static forRoot(config: Object): ModuleWithProviders {

        return {
            ngModule: AirbrakeModule,
            providers: [
                {provide: AIRBRAKE_CONFIG, useValue: config}
            ],
        }
    }
}
import {ErrorHandler, Injectable, Inject, InjectionToken} from '@angular/core';
import * as Airbrake from 'airbrake-js';

export const AIRBRAKE_CONFIG = new InjectionToken<any>('airbrake config');


@Injectable()
/**
 * Airbrake Logging Service.
 *
 * Wraps the logging functions of Aibrake in an Angular 2+ service to make
 * things a little smoother.
 */
export class AirbrakeService implements ErrorHandler {
  public airbrake: any;

  /**
   * Creates an instance of AirbrakeService.
   *
   * @param {Object} options The configuration options for Airbrake
   *
   * @memberOf AirbrakeService
   */
  constructor(@Inject(AIRBRAKE_CONFIG) options) {
    this.airbrake = new Airbrake(options);
  }


  public handleError(err: any): void {
    this.airbrake.notify(err.originalError || err);
  }

  public error(err: any): void {
    this.handleError(err);
  }

  /**
   * Passthrough for the Airbrake notify function. For full documentation check out Airbrake's docs:
   * 
   * https://github.com/airbrake/airbrake-js#advanced-usage
   * 
   * @param payload Error payload, supports anything supported by Airbrake
   */
  public notify(payload: any) {
    return this.airbrake.notify(payload);
  }

}
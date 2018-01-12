import {ErrorHandler, Injectable, Inject, InjectionToken} from '@angular/core';
import { AirbrakeClient} from 'airbrake-js';

export const AIRBRAKE_CONFIG = new InjectionToken<any>('airbrake config');

@Injectable()
/**
 * Airbrake Logging Service.
 *
 * Wraps the logging functions of Aibrake in an Angular 2+ service to make
 * things a little smoother.
 */
export class AirbrakeService implements ErrorHandler {
  private airbrake: AirbrakeClient;

  /**
   * Creates an instance of AirbrakeService.
   *
   * @param {Object} options The configuration options for Airbrake
   *
   * @memberOf AirbrakeService
   */
  constructor(@Inject(AIRBRAKE_CONFIG) options) {
    this.airbrake = new AirbrakeClient(options);
  }


  public handleError(err: any): void {
    this.airbrake.notify(err.originalError || err);
  }

  public error(err: any): void {
    this.handleError(err);
  }

}
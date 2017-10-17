import { XHRBackend } from '@angular/http';
import {AngularReduxRequestOptions} from "./options";
import {HttpService} from "./http.service";


function httpServiceFactory(backend: XHRBackend, options: AngularReduxRequestOptions) {
  // return new HttpService(backend, options, loaderService);
}
export { httpServiceFactory };

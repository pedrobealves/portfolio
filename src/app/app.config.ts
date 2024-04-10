import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'
import { provideAngularSvgIcon } from 'angular-svg-icon'

import { routes } from './app.routes'
import { provideHttpClient } from '@angular/common/http'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAngularSvgIcon()
  ]
}

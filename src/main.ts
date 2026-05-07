import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig } from './app/app.config';
import { NzDemoTableExpandChildrenComponent } from './app/app';

bootstrapApplication(NzDemoTableExpandChildrenComponent, appConfig)
  .catch((err) => console.error(err));

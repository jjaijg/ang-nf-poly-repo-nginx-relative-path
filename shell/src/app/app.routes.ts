import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'mfe',
    // Dynamically loading the remote module from mfe1
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'mfe',
        exposedModule: './Component',
      }).then((m) => m.App),
  },
];

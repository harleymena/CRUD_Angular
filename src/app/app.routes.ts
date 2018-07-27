import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './pages/crud/crud.component';
import { BlankComponent } from './pages/blank/blank.component';
import { DesplegableComponent } from './pages/desplegable/desplegable.component';
import { StorageComponent } from './pages/storage/storage.component';

const appRoutes: Routes = [
    {path: 'crud', component: CrudComponent},
    {path: 'desplegable', component: DesplegableComponent},
    {path: 'storage', component: StorageComponent},
    {path: '**', component: BlankComponent}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash: true} );

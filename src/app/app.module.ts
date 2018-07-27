import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CrudComponent } from './pages/crud/crud.component';
import { BlankComponent } from './pages/blank/blank.component';
import { APP_ROUTES } from './app.routes';
import { StorageComponent } from './pages/storage/storage.component';
import { DesplegableComponent } from './pages/desplegable/desplegable.component';
import { LinkComponent } from './link/link.component';
import { TaskComponent } from './pages/task/task.component';
import { TaskFormComponent } from './pages/task-form/task-form.component';
import { TaskListComponent } from './pages/task-list/task-list.component';

import { TaskService } from './services/task.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CrudComponent,
    BlankComponent,
    StorageComponent,
    DesplegableComponent,
    LinkComponent,
    TaskComponent,
    TaskFormComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }

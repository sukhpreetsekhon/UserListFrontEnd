import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {RouterModule, Routes} from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const appRoutes: Routes = [
  {
    path: 'users',
    component: UserComponent,
    data: {title: 'User List'}

  },
  {
    path: 'user-create',
    component: UserCreateComponent,
    data: {title: 'Create User'}

  },

  {
    path: 'user-edit/:id',
    component: UserEditComponent,
    data: {title: 'Edit User'}

  },

  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },

  {
    path: 'user-detail/:id',
    component: UserDetailComponent,
    data: {title: 'User Detail'}
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

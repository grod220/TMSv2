import { NgModule }                 from '@angular/core';
import { Routes,
         RouterModule }             from '@angular/router';

//Layouts
import { MainComponent }      from './layouts/main.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '',
        component: MainComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'home',
                loadChildren: 'app/home/home.module#HomeModule'
            }
        ]
    },


];


@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

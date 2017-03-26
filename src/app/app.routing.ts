import { NgModule }                 from '@angular/core';
import { Routes,
         RouterModule }             from '@angular/router';

//Layouts
import { MainComponent } from './layouts/main.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: '',
                loadChildren: 'app/home/home.module#HomeModule'
            }
        ]
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }

];


@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

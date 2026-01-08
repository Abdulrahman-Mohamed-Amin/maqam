import { Routes } from '@angular/router';
import { HomeComponent } from './features/landing/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { AllServicesComponent } from './features/all-services/all-services.component';
import { AllProjectsComponent } from './features/all-projects/all-projects.component';
import { ContactComponent } from './features/contact/contact.component';
import { PriceComponent } from './features/price/price.component';

export const routes: Routes = [
    {path:'' , redirectTo:"home" , pathMatch:'full'},
    {path:'home' , component:HomeComponent},
    {path:'about' , component:AboutComponent},
    {path:'services' , component:AllServicesComponent},
    {path:'projects' , component:AllProjectsComponent},
    {path:'contact' , component:ContactComponent},
    {path:'price' , component:PriceComponent},
];

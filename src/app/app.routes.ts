import { Routes } from '@angular/router';
import { GetTokenComponent } from './auth/get-token/get-token.component';
import { HomeComponent } from './home/home.component';
import { WeatherforecastComponent } from './weatherforecast/weatherforecast.component';
import { CustomersComponent } from './customers/customers.component';

export const routes: Routes = [{
    path: "auth", component: GetTokenComponent
},
{
    path: "home", component: HomeComponent
}, {
    path: "weatherforecast", component: WeatherforecastComponent
},
{
    path: "customers", component: CustomersComponent
}];

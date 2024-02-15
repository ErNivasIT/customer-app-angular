import { Routes } from '@angular/router';
import { GetTokenComponent } from './auth/get-token/get-token.component';
import { HomeComponent } from './home/home.component';
import { WeatherforecastComponent } from './weatherforecast/weatherforecast.component';
import { CustomersComponent } from './customers/customers.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' }, {
    path: "auth", component: GetTokenComponent
},
{
    path: "home", component: HomeComponent
}, {
    path: "weatherforecast", component: WeatherforecastComponent
},
{
    path: "customers", component: CustomersComponent,canActivate:[authGuard]
},
{
    path: "edit-customer/:id", component: EditCustomerComponent
}];

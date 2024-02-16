import { Routes } from '@angular/router';
import { GetTokenComponent } from './auth/get-token/get-token.component';
import { HomeComponent } from './home/home.component';
import { WeatherforecastComponent } from './weatherforecast/weatherforecast.component';
import { CustomersComponent } from './customers/customers.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { authGuard } from './guards/auth.guard';
import { CustomerOrdersComponent } from './orders/customer-orders/customer-orders.component';
import { AddUserComponent } from './administration/add-user/add-user.component';
import { AllUsersComponent } from './administration/all-users/all-users.component';

export const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' }, {
    path: "auth", component: GetTokenComponent
},
{
    path: "home", component: HomeComponent
}, {
    path: "weatherforecast", component: WeatherforecastComponent
},
{
    path: "customers", component: CustomersComponent, canActivate: [authGuard]
},
{
    path: "edit-customer/:id", component: EditCustomerComponent
}, {
    path: "orders/:username", component: CustomerOrdersComponent
}, {
    path: "add-user", component: AddUserComponent
}, {
    path: "all-users", component: AllUsersComponent
}];

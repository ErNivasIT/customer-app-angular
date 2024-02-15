import { Component } from '@angular/core';
import { CustomerapiService } from '../customerapi.service';
import { customerviewmodel } from '../models/customerviewmodel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-edit-customer',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './edit-customer.component.html'
})
export class EditCustomerComponent {
  customer: customerviewmodel = { id: 0, name: '', dob: '' }
  constructor(private customerApi: CustomerapiService, private route: ActivatedRoute) {
    const id = this.route.snapshot.params['id'];
    this.customerApi.getCustomerById(id)
      .subscribe(p => {
        this.customer = p;
      });
  }
  onSubmit(): void {
    console.log(this.customer);

    this.customerApi.updateCustomer(this.customer.id, this.customer)
      .subscribe(p => {
        console.log(p);
      });
  }
}
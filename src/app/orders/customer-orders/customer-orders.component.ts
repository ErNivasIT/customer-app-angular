import { Component } from '@angular/core';
import { CustomerapiService } from '../../customerapi.service';
import { ActivatedRoute } from '@angular/router';
import { orderviewmodel } from '../../models/order';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-orders.component.html' 
})
export class CustomerOrdersComponent {
  orders!:orderviewmodel[]
  constructor(private customerApi: CustomerapiService, private route: ActivatedRoute) {
    const username = this.route.snapshot.params['username'];
    this.customerApi.getOrdersByUserName(username)
      .subscribe(p => {
        this.orders = p;
        console.log(this.orders);
      });
  }
}

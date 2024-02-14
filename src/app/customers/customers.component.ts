import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CustomerapiService } from '../customerapi.service';
import { CommonModule } from '@angular/common';
import { customerviewmodel } from '../models/customerviewmodel';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customers.component.html'
})
export class CustomersComponent {
  customersList!: any[];
  customerForAdd!: customerviewmodel
  @ViewChild('addModal', { static: false }) addModal!: TemplateRef<any>;
  
  constructor(private customerApi: CustomerapiService, private modalService: NgbModal) {
    customerApi.getCustomers()
      .subscribe(p => {
        this.customersList = p;
        console.log(this.customersList);
      });
  }
  onSubmit(): void {
    console.log(this.customerForAdd);
    this.customerApi.addCustomer(this.customerForAdd)
      .subscribe(p => {
        console.log(p);
      });
    ;
  }
  openModal(): void {
    this.modalService.open(this.addModal);
  }
}

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
  customerForAdd: customerviewmodel={id:0,name:'',dob:'' }
  @ViewChild('addModal', { static: false }) addModal!: TemplateRef<any>;
  
  constructor(private customerApi: CustomerapiService, private modalService: NgbModal) {
   this.getCustomers();
  }
  onSubmit(): void {
    this.customerApi.addCustomer(this.customerForAdd)
      .subscribe(p => {
        this.getCustomers();
      });
    ;
  }
  openModal(): void {
    this.modalService.open(this.addModal);
  }
  getCustomers()
  {
    this.customerApi.getCustomers()
    .subscribe(p => {
      this.customersList = p;
    });
  }
}

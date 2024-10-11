import { Component, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { Firestore } from 'firebase/firestore';
import { Customer, CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  currentCustomers: Customer = { id: '', name: '', email: '', tel: '', urlphoto: '' }

  constructor(
    private customersService: CustomersService, 
    private firestore: Firestore,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.customersService.getCustomers().subscribe(customers => {
      this.customers = customers
    }); 
  }

  createCustomer() {
    this.customersService.createCustomer(this.currentCustomers)
    .then(() => {
      this.toast.success("Customer created successfully!");
      this.currentCustomers = { id: '', name: '', email: '', tel: '', urlphoto: '' };
    })
    .catch(error => {
      console.log('Error in created customer! =>' + error.message);
      this.toast.error('Error in created customer!');
    });
  }

  updateCustomer(customer: Customer) {
    this.customersService.updateCustomer(customer, this.firestore)
      .then(() => {
        this.toast.success('Customer updated successfully!');
      })
      .catch((error) => {
        console.log('Error updating customer:' + error.message);
        this.toast.error('Error updating customer');
      });
  }

  deleteCustomer(id: string) {
    this.customersService.deleteCustomer(id)
    .then(() => {
      this.toast.success("Customer deleted successfully!");
    })
    .catch(error => {
      console.log("Error in deleted your customer!" + error.message);
      this.toast.error('Error in deleted your customer!');
    });
  }

  selectCustomer(customer: Customer) {
    this.currentCustomers = { ...customer };
  }
}

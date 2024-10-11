import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

export interface Customer {
  id?: string;
  name: string;
  email: string;
  tel: string;
  urlphoto: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private customersCollection = collection(this.firestore, 'customers');
  constructor(private firestore: Firestore) { }

  async createCustomer(customer: Customer): Promise<void> {
    const id = doc(this.customersCollection).id;
    const customerWithId = { id, ...customer };
    await setDoc(doc(this.firestore, 'customers', id), customerWithId);
  }

  getCustomers(): Observable<Customer[]> {
    return collectionData(this.customersCollection, { idField: 'id' }) as Observable<Customer[]>;
  }

  async updateCustomer(customer: Partial<Customer>, firestore: Firestore): Promise<void> {
    if (!customer.id) {
      throw new Error('Customer ID is required for update.');
    }
    const customerDoc = doc(firestore, 'customers', customer.id);
    await updateDoc(customerDoc, customer as { [key: string]: any });
  }

  async deleteCustomer(id: string): Promise<void> {
    const customerDoc = doc(this.firestore, 'customers', id);
    await deleteDoc(customerDoc);
  }
}

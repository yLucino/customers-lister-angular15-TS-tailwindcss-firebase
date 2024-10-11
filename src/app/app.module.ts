import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CustomersComponent } from './components/customers/customers.component';
import { HeaderComponent } from './components/header/header.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from './environments/environments';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomersComponent,
    HeaderComponent,
  ],
   imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    AngularToastifyModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [
    ToastService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

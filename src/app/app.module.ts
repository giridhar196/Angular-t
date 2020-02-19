import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductsComponent } from './admin/products/products.component';
import { AllProductsComponent } from './admin/products/all-products/all-products.component';
import { AddProductComponent } from './admin/products/add-product/add-product.component';
import { CategoryComponent } from './admin/products/category/category.component';
import { AddCategoryComponent } from './admin/products/category/add-category/add-category.component';
import { AdminComponent } from './admin/admin.component';
import { SellerRegisterComponent } from './register/seller-register/seller-register.component';
import { BuyerRegisterComponent } from './register/buyer-register/buyer-register.component';
import { UsersComponent } from './admin/users/users.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProductsComponent,
    AllProductsComponent,
    AddProductComponent,
    CategoryComponent,
    AddCategoryComponent,
    AdminComponent,
    SellerRegisterComponent,
    BuyerRegisterComponent,
    UsersComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

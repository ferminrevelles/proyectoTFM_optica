import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { ProductService } from 'src/app/services/product.service'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  dataAdmin:any;
  //Variables para mostrar los procesos hijos.
  showProfileWeb:boolean=true;
  showProductWeb:boolean=false;
  showOrderWeb:boolean=false;
  showUserWeb:boolean=false;
  showCalendarWeb:boolean=false;

  listproducts:any;   //Listado de productos del componente padre pasados al hijo mediante @Input
  
  //showListProduct:boolean=false;
  
  constructor( 
    public adminService: AdminService,
    private productService: ProductService,
    private userService: UserService,
    private router : Router  ) { }

  ngOnInit(): void {
    this.dataAdmin = this.adminService.dataAdmin;
    console.log(this.dataAdmin);
  }

  getIsAdmin(): boolean{
    return this.adminService.isAdmin;
  }

  showProfile(){
    this.showProfileWeb=true;
    this.showProductWeb=false;
    this.showOrderWeb=false;
    this.showUserWeb=false;
    this.showCalendarWeb=false;
  }

  showProducts(typeProduct:any){
    this.showProductWeb=true;
    this.showProfileWeb=false;
    this.showOrderWeb=false;
    this.showUserWeb=false;
    this.showCalendarWeb=false;

    this.adminService.typeListProduct=typeProduct;
    const subscription = this.productService.allTypeProducts(typeProduct).subscribe((response:any) =>{
      this.listproducts = response;
      console.log(this.listproducts);
      subscription.unsubscribe();
    });
  }

  showOrders(){
    this.showProductWeb=false;
    this.showProfileWeb=false;
    this.showOrderWeb=true;
    this.showUserWeb=false;
    this.showCalendarWeb=false;
  }
  
  showUsers(){
    this.showProductWeb=false;
    this.showProfileWeb=false;
    this.showOrderWeb=false;
    this.showUserWeb=true;
    this.showCalendarWeb=false;
  }

  showCalendar(){
    console.log("Mostrar Calendario de citas");
    this.showProductWeb=false;
    this.showProfileWeb=false;
    this.showOrderWeb=false;
    this.showUserWeb=false;
    this.showCalendarWeb=true;
/*
    this.adminService.typeListProduct=typeProduct;
    const subscription = this.productService.allTypeProducts(typeProduct).subscribe((response:any) =>{
      this.listproducts = response;
      console.log(this.listproducts);
      subscription.unsubscribe();
    });*/
  }

  modifyAdmin(){
    console.log(this.dataAdmin);
    this.userService.userModify = this.dataAdmin.dataUser;
    this.router.navigate(['modifyuser']);
  }
/*
  allProducts():any{
    const subscription = this.adminService.allProducts().subscribe((response) =>{
      this.products=response;
      this.isDataAvailable=true;
      subscription.unsubscribe();
    });
  }


  // Borrar producto
  deleteProduct(model:any){ 
    const deletePr = this.productService.deleteProduct(model).subscribe((response)=>{
      console.log(response);
      this.allProducts();
      deletePr.unsubscribe();
    });
  }

  modifyProduct(input:any){
    this.productService.productModify = input;
    this.router.navigate(['modifyproduct']);
  }

  mostrar(){
    console.log("Entra");
    console.log(this.adminService.products);
  }*/

}

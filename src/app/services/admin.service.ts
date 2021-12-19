import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  isAdmin:boolean=false;   //cambiar al false
  listProducts:any;
  typeListProduct:any;
  dataAdmin:any;
  
  //isDataAvailable:boolean=false;

  //private apiProducts = 'http://localhost:3000/allproducts';

  constructor( private http: HttpClient) {   }

  changeAdmin(){
    this.isAdmin = !this.isAdmin;
  }
/*
  allProducts(){
    return this.http.post(this.apiProducts, {responseType: 'text'}).pipe(
      map(
        (response:any) =>{
          if (response){
            console.log(response.product);
            this.products = response.product;
            return response.product;
          }
        },
        (error:any) =>{
          console.log("Usuario incorrecto");
          return error;
        }
      )
    )
  }*/
}

import { ProductoService } from './../producto.service';
import { Producto } from './../producto';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { nextTick } from 'process';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent {
  producto:Producto = new Producto();

  constructor(private ProductoServicio: ProductoService,
    private enrutador: Router){}

  onSubmit(){
    this.guardarProducto();
  }

  guardarProducto(){
    this.ProductoServicio.agregarProducto(this.producto).subscribe(
      {
        next:(datos) => {
          this.irListaProductos();
        },
        error: (error:any) => {console.log(error)}
      }
    );
  }

  irListaProductos(){
    this.enrutador.navigate(['/productos'])
  }
}

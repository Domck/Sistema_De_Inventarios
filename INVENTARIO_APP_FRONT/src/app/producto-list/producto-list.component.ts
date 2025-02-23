import { Router } from '@angular/router';
import { ProductoService } from '../producto.service';
import { Producto } from './../producto';
import { Component } from '@angular/core';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css'
})
export class ProductoListComponent {
  productos: Producto[];
  constructor(private productoServicio: ProductoService, private enrutador: Router){}
  ngOnInit(){
    this.obtenerProductos();
  }
  private obtenerProductos(){
    this.productoServicio.obtenerProductoLista().subscribe(
      (datos => {
         this.productos = datos;

      })
    );
  }

  editarProducto(id: number){
    this.enrutador.navigate(['editar-producto', id]);
  }

  eliminarProducto(id: number){
    this.productoServicio.eliminarProducto(id).subscribe(
      {
        next:(datos) => this.obtenerProductos(),
        error: (errores) => console.log(errores)
      }
    );
  }
}

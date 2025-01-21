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
  constructor(private productoServicio: ProductoService){}
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
}

import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';

const routes: Routes = [
  {path:'productos', component: ProductoListComponent},
  {path:'', redirectTo:'productos',pathMatch:'full'},
  {path:'agregar-producto', component: AgregarProductoComponent},
  {path:'editar-producto/:id', component: EditarProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

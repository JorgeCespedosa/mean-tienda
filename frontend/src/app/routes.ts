import { Routes } from '@angular/router';
import { AdminComponent } from './componentes/admin/admin.component';
import { CarritocompraComponent } from './componentes/carritocompra/carritocompra.component';
import { LoginComponent } from './componentes/login/login.component';
import { StockComponent } from './componentes/stock/stock.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ListadocomprasComponent } from './listadocompras/listadocompras.component';

export const appRoutes: Routes = [
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full',
    },
    {
      path: 'stock',
      component: StockComponent,
    },
    {
      path: 'admin',
      component: AdminComponent,
    },
    {
      path: 'carrito',
      component: CarritocompraComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'registro',
        component: RegistroComponent,
      },
      {
        path: 'listadocompras',
        component: ListadocomprasComponent,
      },
  ];
  
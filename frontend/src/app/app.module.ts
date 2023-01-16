import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './routes';

import { NavigationComponent } from './componentes/navigation/navigation.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { CarritocompraComponent } from './componentes/carritocompra/carritocompra.component';
import { LoginComponent } from './componentes/login/login.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { StockComponent } from './componentes/stock/stock.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ListadocomprasComponent } from './listadocompras/listadocompras.component';
import { FooterComponent } from './componentes/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AdminComponent,
    CarritocompraComponent,
    LoginComponent,
    CategoriasComponent,
    StockComponent,
    RegistroComponent,
    ListadocomprasComponent,
    FooterComponent
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

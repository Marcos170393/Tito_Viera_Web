import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiografiaComponent } from './components/biografia/biografia.component';
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';



const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'home'},
  {path:'home', component:HomeComponent},
  {path:'bio', component:BiografiaComponent},
  {path:'proyectos', component:ProyectosComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'**',pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

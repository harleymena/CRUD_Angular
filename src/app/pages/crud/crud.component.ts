import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {

  empleados: Empleado[] = [
    {id: 1 , name: 'Fulano', country: 'España'},
    {id: 2 , name: 'Mengano', country: 'Suiza'},
    {id: 3 , name: 'Detal', country: 'Alemania'}
  ];

  seleccionarEmpleado: Empleado = new Empleado();

  agregarOEditar() {
    if (this.seleccionarEmpleado.id === 0 && this.seleccionarEmpleado.name !== ''  ) {
      this.seleccionarEmpleado.id = this.empleados.length + 1;
      this.empleados.push(this.seleccionarEmpleado);
    }
  this.seleccionarEmpleado = new Empleado();
  }

  editar(employe: Empleado) {
    this.seleccionarEmpleado = employe;
  }

  delete() {
    if (confirm('Desea eliminar')) {
      this.empleados = this.empleados.filter(x => x !== this.seleccionarEmpleado);
      this.seleccionarEmpleado = new Empleado();
    }
  }

}

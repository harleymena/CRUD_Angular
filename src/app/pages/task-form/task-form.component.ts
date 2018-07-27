import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

   constructor ( public taskService: TaskService) { }

  ngOnInit() {
  }

  addtask(titulo: HTMLInputElement, descripcion: HTMLInputElement) {
    console.log(titulo.value + ' ' + descripcion.value);
    this.taskService.addTask({
      titulo: titulo.value,
      descripcion: descripcion.value,
      hide: true
    });
    // console.log(this.taskService.getTask());
    titulo.value = '';
    descripcion.value = '';
    titulo.focus();
    return false;
  }

}

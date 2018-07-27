import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[];

  constructor() {
     this.tasks = [
    //   {titulo: 'Escribir', descripcion: 'Debes leer', hide: true},
    //   {titulo: 'Leer', descripcion: 'Debes escribir', hide: true}
    ];
  }

  getTask() {
    return this.tasks;
  }

  addTask(task: Task) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    // return false; //
  }

  deleteTask(task: Task) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (task === this.tasks[i]) {
        this.tasks.splice(i, 1);
      }
    }
  }
}

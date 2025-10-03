import { NgModule } from "@angular/core";

import { Task } from "./task/task";
import { Tasks } from "./tasks";
import { NewTask } from "./new-task/new-task";

import { Card } from "../shared/card/card";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [Task, Tasks, NewTask],
  imports: [Card, CommonModule, FormsModule],
  exports: [Tasks],
})

export class TasksModule {}

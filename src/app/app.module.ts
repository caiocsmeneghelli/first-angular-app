import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { App } from "./app";
import { Header } from "./header/header";
import { User } from "./user/user";
import { Tasks } from "./tasks/tasks";


@NgModule({
  declarations: [App],
  bootstrap: [App],
  imports: [Header, User, Tasks, BrowserModule],
})

export class AppModuke { }

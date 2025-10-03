import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Header } from './header/header';
import { User } from './user/user';

import { Card } from './shared/card/card';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [App, Header, User],
  bootstrap: [App],
  imports: [BrowserModule, Card, TasksModule],
})
export class AppModuke {}

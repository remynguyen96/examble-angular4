import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocketRoutingModule } from './socket-routing.module';
import { SocketComponent } from './socket.component';
import {ShareModuleModule} from "../share-module/share-module.module";
import { ChatComponent } from './chat/chat.component';
import { RoomComponent } from './room/room.component';

@NgModule({
  imports: [
    CommonModule,
    SocketRoutingModule,
      ShareModuleModule
  ],
  declarations: [
      SocketComponent,
      ChatComponent,
      RoomComponent
  ]
})
export class SocketModule { }

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SocketComponent} from "./socket.component";
import {ChatComponent} from "./chat/chat.component";
import {RoomComponent} from "./room/room.component";

const routes: Routes = [
    {
        path: '',
        component: SocketComponent
    },
    {
        path: 'chat-room',
        component: ChatComponent,
        children:[
            {
                path: ':room',
                component: RoomComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SocketRoutingModule {
}

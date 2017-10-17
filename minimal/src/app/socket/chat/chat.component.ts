import {Component, OnInit} from '@angular/core';
import * as io from 'socket.io-client';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs/Observable";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {observable} from "rxjs/symbol/observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

    socket: any;
    allMessage: any[] = [];
    formData: FormGroup;
    clientOnline: number;
    allRoom: number;
    dataSocket: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor(private formBuilder: FormBuilder) {
        this.socket = io(environment.socket.baseUrl);
    }

    ngOnInit() {
        this.formMessage();
        // this.socket.on('connect', () => {
        // });
        this.socket.on('joinRoom', (result) => {
            this.clientOnline = result.clientsCount;
            this.allRoom = result.roomsCount;
        });
        this.socket.on('chatMessages', (data) => {
            this.allMessage.push(data);
        });

    }

    // listen(event: string): Observable<any> {
    //     return new Observable(observer => {
    //         this.socket.on(event, data => {
    //             observer.next(data);
    //         });
    //         return () => {
    //             this.socket.off(event);
    //         }
    //     });
    // }


    formMessage() {
        this.formData = this.formBuilder.group({
            room: [null, Validators.required],
            name: [null, Validators.required],
            message: [null, Validators.required],
        });
    }

    sendMessage() {
        const data = this.formData.value;
        this.socket.emit('join', data);
        this.socket.emit('send', data);
        // this.allMessage.push(data);
    }



}

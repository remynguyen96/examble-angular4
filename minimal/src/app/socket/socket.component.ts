import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SocketService} from "./shared/socket.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-socket',
    templateUrl: './socket.component.html',
    styleUrls: ['./socket.component.scss']
})
export class SocketComponent implements OnInit {

    formData: FormGroup;

    constructor(
        private _formBuilder: FormBuilder,
        // private _socketService: SocketService,
        private _router: Router
    ) {
    }

    ngOnInit() {
        this.formSignup();
        // this._socketService.on('chatMessages').subscribe(result => {
        //     console.log(result);
        // });
    }

    formSignup() {
        this.formData = this._formBuilder.group({
            name: [null, Validators.required],
            age: [null, Validators.required]
        });
    }

    onSubmit() {
        const data = JSON.stringify(this.formData.value);
        let store = localStorage.setItem('member',data);
        // this._router.navigate(['/socket/chat-room']);
        // console.log(data);
        const dataDemo = {
            name: 'Remy',
            message: 'Hello My Friends',
            room: 'app',
        }
    }



}

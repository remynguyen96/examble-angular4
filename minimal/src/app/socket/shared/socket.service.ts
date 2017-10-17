import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import * as io from 'socket.io-client';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';

export interface Member {
    name: string;
    age: number;
}

@Injectable()
export class SocketService {

    socket: any;
    totalClients = 0;
    totalRooms = 0;
    socketConnected$ = new BehaviorSubject<boolean>(false);
    private host: string = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;

    constructor(private http: Http) {
        this.socket = io(environment.socket.baseUrl,environment.socket.opts);
        this.socket.on('connect', () => this.socketConnected$.next(true));
        // this.socket.on('disconnect', () => this.socketConnected$.next(false));
        this.socketConnected$.asObservable().subscribe( connected => {
            console.log('Socket connected: ', connected);
        });

        // this.getServerStats().subscribe(res => {
            // this.totalClients = res.clientsCount;
            // this.totalRooms = res.roomsCount;
            // console.log(res);
        // });

        this.emit('join','app');
        this.on('roomUpdate').subscribe(res => {
            console.log(res);
            this.totalRooms  = res.roomsCount;
            this.totalClients = res.clientsCount;
        });

    }

    demo() {
        console.log("SAdsadsadsa");
    }


    getServerStats(): Observable<any> {
        return this.http.get(`${environment.api.baseUrl}/socket`).map(res => res.json());
    }

    listen(event: string): Observable<any> {
        return new Observable(observer => {
            this.socket.on(event, data => {
                observer.next(data);
            });
            return () => {
                this.socket.off(event);
            }
        });
    }

    on(event: string): Observable<any> {
        return new Observable(observer => {
            this.socket.on(event, data => {
                observer.next(data);
            });
        });
    }

    emit(name, data): void {
        this.socket.emit(name, data);
    }




}

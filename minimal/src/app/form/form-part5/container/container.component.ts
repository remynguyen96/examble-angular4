import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {FormBuilder, FormGroup} from "@angular/forms";
import {PartialObserver} from "rxjs/Observer";
import {User} from "../form-part5.component";
import {Subject} from "rxjs/Subject";

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerComponent implements OnInit, OnDestroy {

    @Input() observer: Subject<string>;
    // @Input() observer: PartialObserver<string>;
    @Input() users: User[];
    public form: FormGroup;
    private _subscription: Subscription;

    constructor(private formBuilder: FormBuilder) {

    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            username: [null]
        });

        this._subscription = this.form.valueChanges
            .map(values => values.username)
            .subscribe(result => {
                this.observer.next(result);
            });
    }

    ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }

}

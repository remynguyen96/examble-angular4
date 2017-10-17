import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-form-part2',
    templateUrl: './form-part2.component.html',
    styleUrls: ['./form-part2.component.scss']
})
export class FormPart2Component implements OnInit {

    myForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.myForm = this.formBuilder.group({
            // mySwitch: this.formBuilder.control(true)
            mySwitch: [false]
        });
    }

    submit() {
        alert(`Value: ${this.myForm.controls.mySwitch.value}`);
        console.log(`Value: ${this.myForm.controls.mySwitch.value}`);
    }

}

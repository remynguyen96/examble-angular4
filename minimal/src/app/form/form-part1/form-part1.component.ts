import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidationService} from "./form-service.service";

@Component({
    selector: 'app-form-part1',
    templateUrl: './form-part1.component.html',
    styleUrls: ['./form-part1.component.scss'],
})
export class FormPart1Component implements OnInit {

    formData: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.loadFormData();
    }

    ngOnInit() {

    }

    loadFormData() {
        this.formData = this.formBuilder.group({
            // name: this.formBuilder.control(null, Validators.required),
            // email: this.formBuilder.control(null, Validators.required),
            // description: this.formBuilder.control(null,Validators.required)
            description: ['', Validators.required],
            name: ['', Validators.required],
            email: ['', [Validators.required, ValidationService.emailValidator]]
        });
    }

    onSubmit() {

    }

}

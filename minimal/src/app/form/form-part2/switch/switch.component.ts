import {Component, Input, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SwitchComponent),
    multi: true
}

@Component({
    selector: 'app-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss'],
    providers: [VALUE_ACCESSOR]
})
export class SwitchComponent implements ControlValueAccessor {


    @Input() label = 'switch';
    @Input('value') _value;
    onChange: any = () => {};
    onTouched: any = () => {};

    get valueSwitch() {
        return this._value;
    }

    set valueSwitch(val) {
        this._value = val;
        this.onChange(val);
        this.onTouched();
    }

    writeValue(value):void {
        console.log(value);
        if (value) {
            this.valueSwitch = value;
        }
    }

    registerOnChange(fn): void {
        this.onChange = fn;
    }

    registerOnTouched(fn): void  {
        this.onTouched = fn;
    }

    switch() {
        this.valueSwitch = ! this.valueSwitch;
    }
}

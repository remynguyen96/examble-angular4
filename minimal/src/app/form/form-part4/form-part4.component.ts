import {Component, forwardRef, HostBinding, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";


const VALUE_ACCESSTOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FormPart4Component),
    multi: true,
}

@Component({
    selector: 'app-form-part4',
    template: `
        <!--  <style>
              span {
                  display: inline-block;
                  width: 25px;
                  line-height: 25px;
                  text-align: center;
                  cursor: pointer;
              }
          </style>-->
        <span *ngFor="let starred of stars; let i = index"
              (click)="onTouched(); rate(i + (starred ? (value > i + 1 ? 1 : 0) : 1) )">
          <ng-container *ngIf="starred; else noStar">⭐</ng-container>
          <ng-template #noStar>·</ng-template>
        </span>
    `,
    styles: [`
        span {
            display: inline-block;
            width: 25px;
            line-height: 25px;
            text-align: center;
            cursor: pointer;
        }
    `],
    providers: [VALUE_ACCESSTOR]
})
export class FormPart4Component implements ControlValueAccessor {

    stars: boolean[] = new Array(5).fill(false);
    onTouched: any = () => {};
    onChange: any = (rating: number) => {};
    @Input() disabled = false;

    @HostBinding('style.opacity')
    get opacity() {
        return this.disabled ? 0.25 : 1;
    }

    get value(): number {
        return this.stars.reduce((total, starred) => {
            return total + (starred ? 1 : 0);
        }, 0);
    }

    rate(rating: number) {
        if (!this.disabled) {
            this.writeValue(rating);
        }
    }

    writeValue(rating: number): void {
        this.stars = this.stars.map((_, i) => {
            return rating > i;
        });
        this.onChange(this.value)
    }

    registerOnChange(fn: (rating: number) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }


}

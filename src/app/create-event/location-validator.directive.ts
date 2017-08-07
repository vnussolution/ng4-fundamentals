import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms'


@Directive({
    selector: '[validate-location]',
    providers: [{ provide: NG_VALIDATORS, useExisting: LocationValidatorDirective, multi: true }]
})
export class LocationValidatorDirective implements Validator {

    validate(formGroup: FormGroup): { [key: string]: any } {
        let addressControl = formGroup.controls['address'];
        let cityControl = formGroup.controls['city'];
        let countryControl = formGroup.controls['country'];
        let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

        if ((addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value) ||
            (onlineUrlControl && onlineUrlControl.value)
        ) {
            return null;
        } else { return { validationLocation123: false } }

    }
}



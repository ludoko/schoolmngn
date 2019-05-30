import { AbstractControl, CheckboxControlValueAccessor, ValidationErrors } from "@angular/forms";
import { reject } from "q";

export class UsernameValidators {

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        } else {
         return null;
        }
    }

    // static shouldBeUnique (control: AbstractControl): Promise<ValidationErrors | null> {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if (control.value === 'kubo') {
    //                 resolve({ shouldBeUnique : true });
    //             } else {
    //                 resolve(null);
    //             }
    //         }, 2000);
    //     });
    // }

}

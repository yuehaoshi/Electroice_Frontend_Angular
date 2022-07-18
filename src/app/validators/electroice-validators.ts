import { FormControl, ValidationErrors } from "@angular/forms";

export class ElectroiceValidators {
    //whitespace validation
    static notOnlyWhitespace(control: FormControl) : ValidationErrors {
        
        // check if string only contains whitespace 
        if ((control.value != null) && (control.value.trim().length === 0)) {
            //If validation check fails, return validation error
            return { 'notOnlyWhitespace': true };
        }
        else {
            //If valiadation passes return null
            return null;
        }
        
    }
}

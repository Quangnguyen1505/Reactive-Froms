import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function NoWhitespaceValidator () {
    return (control: AbstractControl): ValidationErrors | null => {
        const { value: controlVar } = control;
        const isWhiteSpaceOnly = (controlVar || '').trim().length === 0;
        
        return isWhiteSpaceOnly ? { whiteSpace: "value is only whitespace" }: null;
    } 
}


// export function NoWhitespaceValidator (control: AbstractControl){
//     const { value: controlVar } = control;
//     const isWhiteSpaceOnly = (controlVar || '').trim().length === 0;
//     return isWhiteSpaceOnly ? { whiteSpace: "value is only whitespace" }: null;
// }


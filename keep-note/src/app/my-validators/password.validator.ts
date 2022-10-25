import { AbstractControl } from "@angular/forms";

export function passwordValidator(control:AbstractControl):{[key:string]:any}|null{

    const password=control.get("password");
    const confirmPassword=control.get("confirmPassword")

    return (password?.value!=confirmPassword?.value)?{'misMatch':true}:null;
}
import { FormGroup } from "@angular/forms";

// La función compara los campos de la contraseña y la confirmación de la contraseña
export function passwordMatchValidators(FormGroup: FormGroup) {
    const password = FormGroup.get('password');
    const confirmPassword = FormGroup.get('confirmPassword');

    if (password?.value !==confirmPassword?.value) {
        confirmPassword?.setErrors({passwordMismatch: true});
    } else {
        confirmPassword?.setErrors(null);
    }
}
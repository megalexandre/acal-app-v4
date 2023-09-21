import { AbstractControl, ValidatorFn } from '@angular/forms';

export function phoneNumberPreferentialValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const phoneNumbers = control.value;

    if (!phoneNumbers || phoneNumbers.length === 0) {
      return null;
    }




    const preferentialCount = phoneNumbers.filter((phoneNumber: any) => phoneNumber.preferential).length;

    if (preferentialCount === 0) {

      return { zeroPreferentialError: true };

    } else if (preferentialCount > 1){

      return { twoPreferentialError: true };
    }

    return null;
  };
}

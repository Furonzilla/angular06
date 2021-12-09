import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function rangeDateValidator(
  minYear: number, // 1990
  maxYear: Date // new Date()
): ValidatorFn {
  return (abstractControl: AbstractControl): ValidationErrors | null => {
    const yearControl = abstractControl.get('yearOfRelease'); 
    const maxYearRequired = maxYear.getFullYear();
    if ( minYear > yearControl?.value || maxYearRequired < yearControl?.value) {   
        console.log("erreur")
      return {
        min: {
          minYearRequired: minYear.toString(),
          maxYearRequired: maxYearRequired.toString(),
        },
      };
    } else {   
        console.log("good")     
      return null;
    }
  };
}

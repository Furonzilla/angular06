import { AbstractControl } from '@angular/forms';

// Function CustomValidator which checks if the id or title are entered
export function isRequiredValidator(
  abstractControl: AbstractControl
): { [key: string]: boolean } | null {
  const identifierControl = abstractControl.get('identifier');
  const titleControl = abstractControl.get('title');

  if (identifierControl?.value || titleControl?.value) {
    return null;
  }
  return { isRequired: true };
}

import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent {

  fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm = this.fb.group({
    name: ['',
       /* validadadores sincronos*/[Validators.required, Validators.minLength(3)],
       /* validadores asincronos*/   ],
    price:[0,
      [Validators.required,Validators.min(10)]
    ],
    inStorage:[0,
      [Validators.required,Validators.min(0)]
    ],
  });

  /*myForm = new FormGroup({
    name : new FormControl(''),
    price : new FormControl(0),
    inStorage : new FormControl(0),
  });*/

  /* isValidField(fieldName: keyof typeof this.myForm.controls): boolean | null {
     return (
       this.myForm.controls[fieldName].errors &&
       this.myForm.controls[fieldName].touched
     );
   } */

   /* getFieldError(fieldName: keyof typeof this.myForm.controls): string | null {
    if (!this.myForm.controls[fieldName]) return null;

    const errors = this.myForm.controls[fieldName].errors ?? {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Mínimo de ${errors['minlength'].requiredLength} caracteres.`;

        case 'min':
          return `Valor mínimo de ${errors['min'].min}`;
      }
    }

    return null;
  } */

  onSave(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);

    this.myForm.reset({
      price: 100,
      inStorage: 1000,
      name: 'Atún'
    })
  }

}

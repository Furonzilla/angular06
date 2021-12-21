import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { isRequiredValidator } from '../idOrTitleRequired';
import { rangeDateValidator } from '../range-date-validator';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css'],
})
export class SearchMovieComponent implements OnInit {
  searchForm;

  constructor(formBuilder: FormBuilder) {
    this.searchForm = formBuilder.group({
      identifierAndTitle: formBuilder.group(
        {
          identifier: [''],
          title: [''],
        },
        {
          validator: isRequiredValidator('identifier' , 'title'),
        }
      ),
      type: ['série'],
      yearOfRelease: ['', [Validators.required, rangeDateValidator(1900, new Date())]],
      sheet: [''],
    });
  }

  ngOnInit(): void {
    this.setSheet();
    this.searchForm.valueChanges.subscribe(x => {
      console.log('form value changed')
      console.log(x)
  })

  }

  setSheet() {
    // Update searchForm
    this.searchForm.patchValue({
      sheet: 'courte',
    });
  }

  onSubmit() {
    const formInfo = this.searchForm.value;
    console.log('form value submitted')
    console.log(formInfo);
  }
}

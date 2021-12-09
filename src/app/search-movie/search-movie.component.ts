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
          validator: isRequiredValidator,
        }
      ),
      type: ['série'],
      yearOfRelease: ['', [Validators.required]],
      sheet: [''],
    }, {validator : rangeDateValidator(1900, new Date())});
  }

  ngOnInit(): void {
    this.setSheet();
  }

  setSheet() {
    // Update searchForm
    this.searchForm.patchValue({
      sheet: 'courte',
    });
  }

  onSubmit() {
    const formInfo = this.searchForm.value;
    console.log(formInfo);
  }
}

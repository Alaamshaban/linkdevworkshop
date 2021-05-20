import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { SourceCategoryModel } from '../../models/news.moddel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() categories$: Observable<SourceCategoryModel[]>;
  @Output() SearchFilter = new EventEmitter();
  form: FormGroup;

  constructor(
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.setForm();
  }

  setForm(): void {
    this.form = this.fb.group({
      category: [null],
      text: ['']
    });
  }

  search(): void {
    this.SearchFilter.next(this.form.value);
  }

}

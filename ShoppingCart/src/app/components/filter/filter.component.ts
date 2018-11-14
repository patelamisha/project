import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../models/category'
import { Product } from '../../models/Product';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {




  constructor() { }

  ngOnInit() {}
}

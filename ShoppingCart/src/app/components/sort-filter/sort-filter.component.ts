import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-filter',
  templateUrl: './sort-filter.component.html',
  styleUrls: ['./sort-filter.component.scss']
})
export class SortFilterComponent implements OnInit {

  @Input()
  filters: any[]

  @Output()
  onSortChange = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  onSelectChange($event) {
    this.onSortChange.emit($event.target.value)
  }

}

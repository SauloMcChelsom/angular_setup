import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Filter } from '../../models/filter';
import { Subject } from 'rxjs';

interface FilterOption {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit, OnDestroy {
  
  public foods: FilterOption[] = [
    {value: 'isPrivate', viewValue: 'Private'},
    {value: 'isBusiness', viewValue: 'Business'},
  ];


  @Input()
  set filter(filter: Filter) {
    this.formGroup.setValue(filter, { emitEvent: false });
  }

  @Output()
  filterUpdate: EventEmitter<Filter> = new EventEmitter();

  formGroup: FormGroup = new FormGroup({
    search: new FormControl(),
    category: new FormControl({
      isBusiness: new FormControl(),
      isPrivate: new FormControl(),
    }),
  });

  private unsubscribe$ = new Subject();

  constructor() {}

  ngOnInit(): void {
    // Debounce just the text input
    this.formGroup.get('search').valueChanges.pipe(takeUntil(this.unsubscribe$), debounceTime(350)).subscribe((value) => {
      this.filterUpdate.emit({
        ...this.formGroup.value,
        search: value,
      });
    });

    this.formGroup.get('category').valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe((value) => {
        let category_value = { isBusiness:false, isPrivate:false}
        if(value == 'isBusiness'){
          category_value =  { isBusiness:true, isPrivate:false}
        } if (value == 'isPrivate'){
          category_value =  { isBusiness:false, isPrivate:true}
        }

      this.filterUpdate.emit({
        ...this.formGroup.value,
        category: category_value
      });
    });
  }

  public get search(): FormControl { 
    return this.formGroup.get('search') as FormControl;
  }

  public  get category(): FormControl {
    return this.formGroup.get('category') as FormControl;
  }

  public cleanUser(){
    this.formGroup.get('search').reset()
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

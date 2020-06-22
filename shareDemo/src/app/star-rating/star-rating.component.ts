import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ContentChild,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent implements OnInit {
  @Input() parentScope: string;
  @Output() childScope = new EventEmitter<string>();
  vcChildScope: string;
  isCheck: boolean;
  star = [
    { rate: '5', value: '5' },
    { rate: '45', value: '4.5' },
    { rate: '4', value: '4' },
    { rate: '35', value: '3.5' },
    { rate: '3', value: '3' },
    { rate: '25', value: '2.5' },
    { rate: '2', value: '2' },
    { rate: '15', value: '1.5' },
    { rate: '1', value: '1' },
    { rate: '05', value: '0.5' },
  ];
  constructor() {}

  ngOnInit(): void {}

  currentScope(current?: string) {
    this.vcChildScope = current;
    // this.childScope.emit(current);
  }
}

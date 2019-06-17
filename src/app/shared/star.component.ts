import {Component, OnChanges, Input, EventEmitter, Output} from '@angular/core'

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']

})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    ngOnChanges(): void {
        this.starWidth = this.rating * 90 / 5;
    }

    @Output() notify: EventEmitter<number> = 
                new EventEmitter <number>();
    onClick() {
        this.notify.emit(this.rating);
    }
}
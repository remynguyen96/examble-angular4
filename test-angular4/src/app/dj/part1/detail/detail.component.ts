import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DetailService} from './detail.service';
import {Detail} from './detail';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [DetailService],
})
export class DetailComponent {
  message: string = '';

  get taxReturn(): Detail {
    return this.detailService.taxReturn;
  }

  @Input() set taxReturn(htr: Detail) {
    this.detailService.taxReturn = htr;
  }
  @Output() close = new EventEmitter<void>();

  constructor(private detailService: DetailService) {
  }


  onCanceled() {
    this.flashMessage('Canceled');
    this.detailService.restore();
  }

  onClose() {
    this.close.emit();
  }

  onSaved() {
    this.flashMessage('Saved');
    this.detailService.save();
  }

  flashMessage(text: string) {
    this.message = text;
    setTimeout(() => this.message = '',1000);
  }

}

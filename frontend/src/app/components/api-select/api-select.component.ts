import { Component } from '@angular/core';

import { environment } from '../../environment/environment';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-api-select',
  templateUrl: './api-select.component.html',
})
export class ApiSelectComponent {
  apiConnectionSuccess: boolean | undefined;

  constructor(private bookService: BookService) {
    this.apiConnectionSuccess = undefined;
  }

  ngOnInit(): void {
    const currentApiUrl = this.bookService.getApiUrl();
    this.setSelectValue(currentApiUrl);
  }

  setSelectValue(apiUrl: string): void {
    const selectElement = document.getElementById(
      'api-select'
    ) as HTMLSelectElement;
    if (selectElement) {
      if (apiUrl === environment.apiLaravel) {
        selectElement.value = 'laravel';
      } else if (apiUrl === environment.apiNodeExpress) {
        selectElement.value = 'node';
      } else {
        selectElement.value = '';
      }
    }
  }

  changeApi(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    if (selectElement) {
      const selectedApi = selectElement.value;
      this.bookService.setApiUrl(selectedApi);

      let message = '';
      if (selectedApi === 'laravel') {
        message = 'Selected API: Laravel';
      } else if (selectedApi === 'node') {
        message = 'Selected API: Node/Express';
      }
      console.log(message);
    }
  }

  testApiConnection(): void {
    this.bookService.test().subscribe({
      next: (data) => {
        this.apiConnectionSuccess = true;
        this.resetConnectionStatus();
      },
      error: (e) => {
        this.apiConnectionSuccess = false;
        this.resetConnectionStatus();
      },
    });
  }

  resetConnectionStatus(): void {
    setTimeout(() => {
      this.apiConnectionSuccess = undefined;
    }, 2000);
  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
})
export class AddBookComponent {
  book: Book = {
    title: '',
    author: '',
    publishedYear: undefined,
  };
  submitted = false;

  message = '';

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.message = '';
  }

  saveBook(bookForm: NgForm): void {
    this.message = '';

    if (bookForm.invalid) {
      this.message = 'Please fill in all required fields.';
      return;
    }

    const data = {
      title: this.book.title,
      author: this.book.author,
      publishedYear: this.book.publishedYear,
    };

    this.bookService.create(data).subscribe({
      next: (res) => {
        this.submitted = true;
        this.message = 'Book was submitted successfully!';
      },
      error: (e) => console.error(e),
    });
  }

  newBook(): void {
    this.submitted = false;
    this.message = '';
    this.book = {
      title: '',
      author: '',
      publishedYear: undefined,
    };
  }
}

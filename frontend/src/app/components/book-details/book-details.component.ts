import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
})
export class BookDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentBook: Book = {
    title: '',
    author: '',
    publishedYear: undefined,
  };

  message = '';

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getBook(this.route.snapshot.params['id']);
    }
  }

  getBook(id: string): void {
    this.bookService.get(id).subscribe({
      next: (data) => {
        this.currentBook = data;
      },
      error: (e) => console.error(e),
    });
  }

  updateBook(bookForm: NgForm): void {
    this.message = '';

    if (bookForm.invalid) {
      this.message = 'Please fill in all required fields.';
      return;
    }

    this.bookService.update(this.currentBook.id, this.currentBook).subscribe({
      next: (res) => {
        this.message = 'This book was updated successfully!';
      },
      error: (e) => console.error(e),
    });
  }

  deleteBook(): void {
    this.bookService.delete(this.currentBook.id).subscribe({
      next: (res) => {
        this.router.navigate(['/books']);
      },
      error: (e) => console.error(e),
    });
  }
}

<?php

use App\Http\Controllers\Api\BookController;
use Illuminate\Support\Facades\Route;

Route::prefix('books')->group(function () {

    // Test route to check if the API is working
    Route::get('/test', function () {
        return response()->json("Response from Laravel API!");
    });

    // Retrieve all books, optionally filtered by title
    Route::get('/', [BookController::class, 'index']);

    // Retrieve a book by id
    Route::get('{id}', [BookController::class, 'show']);

    // Create a new book
    Route::post('/', [BookController::class, 'store']);

    // Update a book
    Route::put('{id}', [BookController::class, 'update']);

    // Delete a book
    Route::delete('{id}', [BookController::class, 'destroy']);
});

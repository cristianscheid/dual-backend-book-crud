<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\BookRequest;
use App\Models\Book;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        try {
            $title = $request->query('title');
            $books = $title ? Book::where('title', 'like', "%$title%")->get() : Book::all();

            return response()->json($books);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Some error occurred while retrieving books.'
            ], 500);
        }
    }

    public function show($id)
    {
        try {
            $book = Book::find($id);

            return $book;
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Error retrieving Book with id=' . $id
            ], 500);
        }
    }

    public function store(BookRequest $request): JsonResponse
    {
        try {
            $data = $request->validated();
            $book = Book::create($data);

            return response()->json($book, 201);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Some error occurred while creating the Book.'
            ], 500);
        }
    }

    public function update(BookRequest $request, $id): JsonResponse
    {
        try {
            $data = $request->validated();
            $book = Book::find($id);
            if (!$book) {
                return response()->json(['message' => 'Book not found'], 404);
            }
            $book->update($data);

            return response()->json($book);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Error updating Book with id=' . $id
            ], 500);
        }
    }

    public function destroy($id): JsonResponse
    {
        try {
            $book = Book::find($id);
            if (!$book) {
                return response()->json(['message' => 'Book not found'], 404);
            }
            $book->delete();

            return response()->json(['message' => 'Book was deleted successfully!']);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Could not delete Book with id=' . $id
            ], 500);
        }
    }
}

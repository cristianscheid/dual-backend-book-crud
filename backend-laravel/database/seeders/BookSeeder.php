<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('books')->insert([
            [
                'title' => 'Lorem Ipsum',
                'author' => 'Lorem Ipsum',
                'publishedYear' => 2021,
            ],
            [
                'title' => 'Vitae Ipsum',
                'author' => 'Consectetur Adipiscing',
                'publishedYear' => 2018,
            ],
            [
                'title' => 'Dolor Sit Amet',
                'author' => 'Curabitur Vel',
                'publishedYear' => 2020,
            ],
            [
                'title' => 'Fusce Nec Dolor',
                'author' => 'Sed Justo',
                'publishedYear' => 2015,
            ],
            [
                'title' => 'Aliquam Tincidunt',
                'author' => 'Phasellus Integer',
                'publishedYear' => 2019,
            ],
        ]);
    }
}

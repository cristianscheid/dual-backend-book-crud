# Dual Backend Book CRUD

## Description

This project was developed to gain hands-on experience with Node.js and Express.js. The backend was first created as a RESTful API in Laravel, then replicated in Node.js/Express.js to explore the stack. It provides CRUD operations for managing book records, with the flexibility to choose between Laravel (PHP) or Node.js/Express.js APIs. Both backends connect to a shared SQLite database, while the Angular frontend maintains a consistent user experience, regardless of the selected backend.

### Features

- Two RESTful APIs (Laravel and Node.js/Express.js) with equivalent routes for managing data, allowing users to choose between them via the frontend.
- Both backends utilize the same SQLite database, ensuring data consistency.
- Angular frontend for performing CRUD operations on book records (List, Filter, Create, Update, Delete).

## Built With

![PHP][php-badge]
![Laravel][laravel-badge]
![SQLite][sqlite-badge]

![JavaScript][javascript-badge]
![Node.js][nodejs-badge]
![Express.js][express-badge]

![TypeScript][typescript-badge]
![Angular][angular-badge]
![Tailwind CSS][tailwindcss-badge]

## Visuals

https://github.com/user-attachments/assets/33b23f0b-1d17-431a-9b0a-bf5b45df12a5

## Installation

To get started with this project, follow the steps below:

1. **Clone the repository**

   ```
   git clone https://github.com/cristianscheid/dual-backend-book-crud.git
   cd dual-backend-book-crud
   ```

2. **Set up Laravel backend environment**

   - Navigate to Laravel the backend directory (`dual-backend-book-crud/backend-laravel/`).
   - Install dependencies:

     ```
     composer install
     ```

   - Set up environment variables:

     ```
     cp .env.example .env
     ```

   - Generate application key:

     ```
     php artisan key:generate --ansi
     ```

   - Run database migrations:

     ```
     php artisan migrate
     ```

   - Seed the database with book records:

     ```
     php artisan db:seed --class=BookSeeder
     ```

3. **Set up Node backend environment**

   - Navigate to the Node backend directory (`dual-backend-book-crud/backend-node/`).
   - Install dependencies:

     ```
     npm install
     ```

   - Set up environment variables:

     ```
     cp .env.example .env
     ```

4. **Set up frontend environment**

   - Navigate to the frontend directory (`dual-backend-book-crud/frontend/`).
   - Install dependencies:

     ```
     npm install
     ```

5. **Start the servers**

   - From Laravel backend directory (`dual-backend-book-crud/backend-laravel/`):

     ```
     php artisan serve
     ```

   - From Node backend directory (`dual-backend-book-crud/backend-node/`):

     ```
     npm run dev
     ```

   - From frontend directory (`dual-backend-book-crud/frontend/`):

     ```
     ng serve
     ```

## Usage

Once the application is running, you can access it at `http://localhost:4200`.

## License

Distributed under the MIT License. See LICENSE.txt for more information.

<!-- Badges for 'Built With' section -->

[php-badge]: https://img.shields.io/badge/PHP-8.4-gray?style=for-the-badge&logo=php&logoColor=white
[laravel-badge]: https://img.shields.io/badge/Laravel-12.3-gray?style=for-the-badge&logo=laravel&logoColor=white
[sqlite-badge]: https://img.shields.io/badge/SQLite-3.37-gray?style=for-the-badge&logo=sqlite&logoColor=white
[javascript-badge]: https://img.shields.io/badge/JavaScript-ES6-gray?style=for-the-badge&logo=javascript&logoColor=white
[nodejs-badge]: https://img.shields.io/badge/Node.js-22.14-gray?style=for-the-badge&logo=node.js&logoColor=white
[express-badge]: https://img.shields.io/badge/Express-4.21-gray?style=for-the-badge&logo=express&logoColor=white
[typescript-badge]: https://img.shields.io/badge/TypeScript-5.4-gray?style=for-the-badge&logo=typescript&logoColor=white
[angular-badge]: https://img.shields.io/badge/Angular-17.3-gray?style=for-the-badge&logo=angular&logoColor=white
[tailwindcss-badge]: https://img.shields.io/badge/Tailwind%20CSS-3.4-gray?style=for-the-badge&logo=tailwindcss&logoColor=white

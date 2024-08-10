# Inertia.js React Login with Laravel API
This project demonstrates a login system using Inertia.js with React on the frontend and Laravel as the backend API. The authentication is handled using Laravel Sanctum.

## Prerequisites
- Node.js
- Composer
- PHP
- Laravel
- MySQL or any other database supported by Laravel

## Functionalities
- **Login**: Users can log in using their email and password.
- **Dashboard**: After logging in, users are redirected to a dashboard where they can see an overview of their account.
- **Edit User**: Users can edit their profile information.

## Installation
git clone https://github.com/croko22/inertia_login
cd inertia_login
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
npm run dev

## Usage
1. Open your browser and navigate to `http://localhost:8000`.
2. You should see the login page. Enter your credentials to log in.
3. Upon successful login, you will be redirected to the dashboard.

## License
This project is open-source and available under the [MIT License](LICENSE).
<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\AboutUsController;
use App\Http\Controllers\FoodController;

Route::get('/', [HomeController::class,'home']);
Route::get('/about', [AboutUsController::class,'index']);
Route::get('/food', [FoodController::class, 'index']);
Route::post('/food', [FoodController::class, 'store']);
Route::delete('/food/{id}', [FoodController::class, 'destroy']);

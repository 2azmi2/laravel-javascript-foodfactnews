<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FoodController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::get('/food', [FoodController::class, 'index']);
Route::post('/food', [FoodController::class, 'store']);
Route::get('/food/{food}', [FoodController::class, 'show']);
Route::put('/food/{food}', [FoodController::class, 'update']);
Route::delete('/food/{id}', [FoodController::class, 'destroy']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

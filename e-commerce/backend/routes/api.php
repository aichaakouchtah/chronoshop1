<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController as ApiProductController;
use App\Http\Controllers\Api\OrderController as ApiOrderController;
use App\Http\Controllers\Admin\ProductController as AdminProductController;
use App\Http\Controllers\Admin\OrderController as AdminOrderController;

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

// Public API Routes
Route::get('/products', [ApiProductController::class, 'index']);
Route::get('/products/{product}', [ApiProductController::class, 'show']);

// Public Order Creation Route (No Auth Required)
Route::post('/orders', [ApiOrderController::class, 'store']);

// Authenticated User API Routes (Only for retrieving user info if needed, e.g., for admin)
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// Removed user-specific order routes as per Cahier-charge
// Route::middleware('auth:sanctum')->group(function () {
//     Route::get('/user', function (Request $request) {
//         return $request->user();
//     });
//     // Order routes for authenticated users
//     Route::get('/orders', [ApiOrderController::class, 'index']);
//     Route::post('/orders', [ApiOrderController::class, 'store']);
//     Route::get('/orders/{order}', [ApiOrderController::class, 'show']);
//     Route::patch('/orders/{order}', [ApiOrderController::class, 'update']); // Use PATCH for partial updates like cancellation
// });


// Admin API Routes (Consider adding 'auth:sanctum', 'abilities:admin' middleware later)
Route::prefix('admin')->group(function () {
    Route::apiResource('products', AdminProductController::class);
    // Explicit Admin Order Routes (apiResource might be too broad if store/destroy are not standard)
    Route::get('/orders', [AdminOrderController::class, 'index']);
    Route::get('/orders/{order}', [AdminOrderController::class, 'show']);
    Route::put('/orders/{order}', [AdminOrderController::class, 'update']); // PUT or PATCH for updates
    Route::delete('/orders/{order}', [AdminOrderController::class, 'destroy']); // Added destroy route
});

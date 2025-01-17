<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\usuariosController;
use App\Http\Controllers\AuthController;

Route::get('/user', [usuariosController::class, 'index']);
Route::post('/register', [usuariosController::class, 'store']);
Route::post('/login', [AuthController::class, 'login']);
// Ruta protegida que solo puede ser accedida con un token válido
Route::middleware('auth:sanctum')->post('/perfil', function (Request $request) {
    return response()->json($request->user()); // Devuelve el usuario autenticado
});
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

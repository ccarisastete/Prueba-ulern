<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;

class Usuarios extends Model
{
    use HasApiTokens;

    protected $table = 'usuarios';

    protected $fillable = [
        'nombre',
        'apellido',
        'telefono',
        'correo',
        'contraseña',
    ];

    // Asegurarse de que la contraseña esté siempre cifrada
    public static function boot()
    {
        parent::boot();

        static::saving(function ($usuario) {
            if ($usuario->isDirty('contraseña')) {
                $usuario->contraseña = Hash::make($usuario->contraseña);
            }
        });
    }
}

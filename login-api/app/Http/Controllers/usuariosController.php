<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuarios;
use Illuminate\Support\Facades\Validator;

class usuariosController extends Controller
{
    public function index(){
        $usuarios = Usuarios::all();
        return response() -> json($usuarios, 200);
    }

    public function store(Request $request){
        $validator = Validator::make($request -> all(),[
            'nombre' => 'required',
            'apellido' => 'required',
            'telefono' => 'required',
            'correo' => 'required|email',
            'contraseña' => 'required',
        ]);

        if ($validator -> fails()){
            $data =[
                'message' => 'error en la validación de los datos',
                'error' => $validator -> errors(),
                'status' => 400
            ];
            return response() -> json($data, 400);
        }

        $usuario = Usuarios::create([
            'nombre' => $request -> nombre,
            'apellido' => $request -> apellido,
            'telefono' => $request -> telefono,
            'correo' => $request -> correo,
            'contraseña' => $request -> contraseña,
        ]);

        if(!$usuario){
            $data = [
                'message' => 'error al crear el usuario',
                'status' => 400
            ];
            return response() -> json($data, 400);
        }

        $data = [
            'usuario' => $usuario,
            'status' => 201
        ];
        return response() -> json($data, 201);
    }
}

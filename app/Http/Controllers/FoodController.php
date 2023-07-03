<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\food;

class FoodController extends Controller
{
    public function index(){
        return view('food',[
            "title" => "food",
            "data" => food::all()
        ]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            // 'gambar' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'nama' => 'required',
            'deskripsi' => 'required',
            'lokasi' => 'required',
            'review' => 'required|numeric',
        ]);

        // $imageName = time().'.'.$request->file('gambar')->extension();
        // $request->file('gambar')->move(public_path('images'), $imageName);
        
        $food = food::create([
            // 'gambar' => $imageName,
            'nama' => $validatedData['nama'],
            'deskripsi' => $validatedData['deskripsi'],
            'lokasi' => $validatedData['lokasi'],
            'review' => $validatedData['review'],
        ]);

        return response()->json($food, 201);
    }

    public function show(food $food){
        return $food;
    }

    public function update(Request $request, food $food){
        $food->update($request->all());
        return response()->json($food, 200);
    }

    public function destroy($id){
        $food = Food::find($id);

        if (!$food) {
            return response()->json(['message' => 'Data not found'], 404);
        }

        $food->delete();

        return response()->json(['message' => 'Data deleted successfully'], 204);
    }
}

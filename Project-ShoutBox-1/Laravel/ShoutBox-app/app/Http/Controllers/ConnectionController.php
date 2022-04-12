<?php

namespace App\Http\Controllers;

use App\Models\connection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;                                                                        

class ConnectionController extends Controller
{
    public function addConnection(Request $request){

        $data=connection::create($request->all());
        $response['data'] =$data;
        $response['code']=201;
        $response['message']='Request sent successfully';
        return response()->json($response);


    }

    public function getFriends($id){
        $data = DB::table('users')
        ->select('users.id','users.name','users.email','connections.following_id','connections.follower_id')
        ->join('connections','users.id','=','connections.follower_id')
        ->where('connections.following_id','=',$id)
        ->get();
        return response()->json($data, 200);
    }
}

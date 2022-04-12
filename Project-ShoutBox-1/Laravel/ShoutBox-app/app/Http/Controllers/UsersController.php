<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Models\connection;
use App\Models\FollowRequest;

class UsersController extends Controller
{
    function register(Request $request) {

        $checkIfEmailExist = User::where('email', $request->input('email'))->first();

        if ($checkIfEmailExist) {
            $response['message'] = 'Email already exist.Please try another email!!';
            $response['status'] = 0;
            return response()->json($response);
        }

        $user= new User;
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));
        $user->save();
        $response['message'] = "Congratulations You Register Successfully!!";
        $response['status'] = 1;
        $response['data'] = $request->all();
        return response()->json($response);
    }

    function login(Request $request) {

        $user = User::where('email',$request->email)->first();
        if(!$user || !Hash::check($request->password, $user->password))
        {
            $response['data'] = $user;
            $response['status'] = 0;
            $response['message'] = "Email or password is wrong!!";
            return response()->json($response);
        }
        else{
            $response['status'] = 1;
            $response['message'] = "Login Successfully";
            $response['data'] = $user;
            return response()->json($response);
        }

    }

    public function getData()
    {
        return User::all();
    }

    public function userList(){
        $data = User::all();
        return view('/showuser',['users'=>$data]);
    }

    public function deleteUser($id){
      $data = User::find($id);
      connection::where('follower_id',$id)->delete();
      connection::where('following_id',$id)->delete();
      FollowRequest::where('receiver',$id)->delete();
      FollowRequest::where('sender',$id)->delete();
      $data->delete();
      return redirect('userlist');
    }

    
    
}

<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\User;



use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\Validator;
use Illuminate\Support\Facades\Redirect;

class AdminController extends Controller
{
    public function login()
    {
        $data['title']='Login';
        return view('/adminlogin', $data);
    }


    public function login_action(Request $request)
    {
        $admin= Admin::where('email', $request->input('username'))->get();
        return Redirect::to("/userApproveList");
       
    }

    protected function logOut(Request $request)
    {
        return redirect('adminlogin');
    }

    public function approveRequests($id){
        $user = User::where('id',$id)->update(['approved' => 1]);
        return redirect('userApproveList');
    }

    public function disapproveRequests($id){
        $user = User::where('id',$id)->update(['approved' => 0]);
        return redirect('userApproveList');
    }

    public function userApproveList(){
        $data = User::all();
        return view('/approveRequest',['user'=>$data]);
    }
}

<?php

namespace App\Http\Controllers;
use App\Models\FollowRequest;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;

class RequestController extends Controller
{
    public function sendRequest(Request $request){   
    $req = FollowRequest::create($request->all());
    $response['data'] =$req;
    $response['code']=201;
    $response['message']='Request sent successfully';
    return response()->json($response);
  }

  
  public function getRequests($id){
      $data = DB::table('users')
      ->select('users.id','users.name','users.email','follow_requests.id','follow_requests.sender','follow_requests.receiver')
      ->join('follow_requests','users.id','=','follow_requests.sender')
      ->where('follow_requests.receiver','=',$id)
      ->get();
      return response()->json($data, 200);
  }


  public function deleteRequest($id){
    FollowRequest::where('id',$id)->delete();
    return response()->json(200);
}
  




}
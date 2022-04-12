<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\RequestController;
use App\Http\Controllers\ConnectionController;
use App\Http\Controllers\PostController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post("/login",[UsersController::class,'login']);

Route::post("/register",[UsersController::class,'register']);

Route::get('data',[UsersController::class,'getData']);
Route::post('request',[RequestController::class,'sendRequest']);
Route::get('getrequest/{id}',[RequestController::class,'getRequests']);
// Route::get('addfriend/{id}',[RequestController::class,'addFriend']);

Route::post('addconnection',[ConnectionController::class,'addConnection']);  
Route::delete('deleterequest/{id}',[RequestController::class,'deleterequest']);  
Route::get('getfriend/{id}',[ConnectionController::class,'getFriends']);


//routes for posts

 //get post 
Route::get('posts',[PostController::class,'getPost']); 

//get specific post detail
Route::get('post/{id}',[PostController::class,'getPostId']);

//add post
Route::post('addPost',[PostController::class,'addPost']);

//update post
Route::put('updatePost/{id}',[PostController::class,'updatePost']);

//delete post
Route::delete('deletePost/{id}',[PostController::class,'deletePost']);

//get user name
Route::get('getUserName',[PostController::class,'getUserName']);
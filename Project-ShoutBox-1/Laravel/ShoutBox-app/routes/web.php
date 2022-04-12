<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\PostController;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('adminlogin');
});


Route::get('/app', function () {
    return view('app');
});


Route::get('logout',[AdminController::class,'logOut'])->name('logout');
Route::get('adminlogin',[AdminController::class, 'login'])->name('login');
Route::post('adminlogin',[AdminController::class, 'login_action'])->name('login.action');

Route::get('userlist',[UsersController::class,'userList'])->name('userlist');
Route::get('deleteuser/{id}',[UsersController::class,'deleteUser'])->name('deleteuser');
Route::get('postlist',[PostController::class,'postList']);
Route::get('deletepost/{id}',[PostController::class,'deletePosts']);

Route::get('userApproveList',[AdminController::class, 'userApproveList'])->name('userApproveList');
Route::get('approveRequests/{id}',[AdminController::class, 'approveRequests'])->name('approveRequests');
Route::get('disapproveRequests/{id}',[AdminController::class, 'disapproveRequests'])->name('disapproveRequests');
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Post;

class PostController extends Controller
{
    public function getPost() {
        $posts = Post::all();
        
        return response()->json($posts,200);
    }

    public function getPostId($id) {
        $post = Post::find($id);
        if(is_null($post)) {
            return response()->json(['message' => 'Post not found']);
        }
        return response()->json($post::find($id),200);
    }

    public function addPost(Request $request) {
        $post = Post::create($request->all());
        return response($post,201);

    }

    public function updatePost(Request $request,  $id) {
        $post = Post::find($id);
        if(is_null($post)){
            return response()->json(['message' => 'Post not found'], 404);
        }
        $post->update($request->all());
        return response($post,200);
    }

    public function deletePost(Request $request, $id) {
        $post = Post::find($id);
        if(is_null($post)) {
            return response()->json(['message' => 'Post Not found'], 404);
        }

        $post->delete();
        return response()->json(null, 204);
    }

    


    //admin functionality

    public function postList(){
        $data = Post::all();
        return view('/showposts',['shouts'=>$data]);
    }

    public function deletePosts($id){
        $data = Post::where('id',$id);
        $data->delete();
        return redirect('postlist');

      }
}

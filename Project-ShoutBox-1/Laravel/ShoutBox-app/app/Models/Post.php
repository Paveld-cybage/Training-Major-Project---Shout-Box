<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    public $timestamps = true;
    protected $fillable = ['user_id','sender_id', 'description'];
    protected $visible = ['user_id','id','description','created_at', 'updated_at', 'user'];
    protected $appends = ['user'];

   public function user() {
       return  $this->belongsTo(User::class);
   }
    public function getUserAttribute() {
        return $this->user()->get();
    }
}

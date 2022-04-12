

@extends('app')

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@2.8.2/dist/alpine.min.js"></script>
</head>
<body>
    @section('content')
    <div class="top" style="text-align: center;" >
        <h1>Users</h1>
    </div><br>
    <table class="table table-hover" >
    <thead>
        <tr>
        <th scope="col">User_Id</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Delete User</th>
        </tr>
    </thead>
    <tbody>
        @foreach($users as $user)
        @if ($user->approved == 1)
        <tr>
        <th scope="row">{{$user['id']}}</th>
        <td>{{$user['name']}}</td>
        <td>{{$user['email']}}</td>
        <td><a class="text-danger" href={{"deleteuser/" .$user [ 'id' ] }}>Delete</a></td>
        </tr>
        @endif
        @endforeach
    </tbody>
    </table>
    @endsection
</body>
</html>



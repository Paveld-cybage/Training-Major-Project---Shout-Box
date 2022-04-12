@extends('app')

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shouts</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@2.8.2/dist/alpine.min.js"></script>
</head>
<body>
@section('content')
<div class="top" style="text-align: center;">
  <h1>Shouts</h1>
</div>
<table class="table table-hover" style="text-align: center;">
  <thead>
    <tr>
      <th scope="col">Shout_Id</th>
      <th scope="col">User_Id</th>
      <th scope="col">Shouts</th>
      <th scope="col">Delete Shout</th>
    </tr>
  </thead>
  <tbody>
    @foreach($shouts as $shout)
    <tr>
      <th scope="row">{{$shout['id']}}</th>
      <td>{{$shout['user_id']}}</td>
      <td>{{$shout['description']}}</td>
      <td><a class="text-danger" href={{"deletepost/" .$shout['id']}}>Delete</a></td>
    </tr>
    @endforeach
  </tbody>
</table>
@endsection
</body>
</html>


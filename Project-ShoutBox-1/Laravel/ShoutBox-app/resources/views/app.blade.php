<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@2.8.2/dist/alpine.min.js"></script>
   
    
</head>
<body>
    <!-- <div class="container"> -->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <a class="navbar-brand">Shout Box</a>
      
  <div class="container-fluid">
    <ul class="navbar-nav">
    <li class="nav-item">
        <a class="nav-link active" href="/userApproveList">Requests</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="/userlist">Users</a>
      </li>
     <li class="nav-item">
        <a class="nav-link active" href="/postlist">Posts</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="/logout">Logout</a>
      </li>
      
    </ul>
  </div>
</nav>
  </div> 
  <div class="container">
         
         @yield('content')
    </div>
 </body>
</html> 
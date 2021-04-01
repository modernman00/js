@extends('baseBulma')

@section('title', 'login')
@section('content')

<div class="styleForm" style="margin-top: 2rem;">

  <img src={{ getenv('IMG_CONTRACT2')}} alt="logo" class="mb-4 form__login__logo" width="72" height="72" style="margin-left:40%; margin-bottom:5rem;">



  {{-- <h1>{{ $_SESSION['loginType'] }}</h1> --}}
  <form action="{{ $_SESSION['loginType'] }}" method="POST" class="login" style="margin-left:15%; margin-right:15%;">
  
    <div class="form-group" id="login">

     @php  

      $formArray = [ 'email' => 'email', 'password' => 'password', 'checkbox'=> 'Remember me', 'token' => 'token', 'button' => 'button'];

      $form = new App\classes\BuildFormBulma($formArray);
      $form->genForm();

    @endphp
    <br>

    <a href="/login/forgot"> Forgot password? Please click this link</a>
    <br><br>

    </div>
  </form>

</div>



@endsection
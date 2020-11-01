@extends('base')

@section('title', 'login')
@section('content')

<div class="styleForm" style="margin-top: 4rem;">

  <img src={{ getenv('IMG_CONTRACT2')}} alt="logo" class="mb-4 form__login__logo" width="72" height="72"
    style="margin-left:40%">

  <h4 class="text-center "> Please sign in </h4>

  <form action="{{ $_SESSION['loginTpe'] }}" method="POST">
    <div class="form-group" id="login">

      <?php $token = urlencode(base64_encode((random_bytes(32))));
      $_SESSION['token'] = $token;
    ?>

      <div class="checkbox mb-3">

        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <input type="hidden" id="token" name="token" value={{ $token }}>
      <button type="submit" id="submit" class="btn btn-lg btn-primary btn-block">Submit</button>

    </div>
  </form>

</div>


@endsection
@extends('base')

@section('title','Register')
@section('data-page-id', 'registration')
@section('content')

<div class="styleForm">
  <form action="/register" method="POST" class="register" enctype="multipart/form-data">

    @php
    $token = urlencode(base64_encode((random_bytes(32))));
    $_SESSION['token'] = $token;
    @endphp

    <br><br><br>
    <div class="row" id="personal"></div><hr>
    <div id="contact"></div><hr>
    <div id="work"></div><hr>
    <div id="interest"></div><hr>
    <div id="account"></div><hr>

    {{--  <br><br>  --}}
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="checkbox">
      <label class="form-check-label" for="checkbox">By submitting this form, you agree handling your information as
        outlined in our <a href="/privacy"> PRIVACY POLICY</a></label>
    </div>
    
    <!-- Button trigger modal -->

    <input type="hidden" id="token" name="token" value={{ $token }}>

    <input class="btn btn-primary btn-lg btn-block submit" type="button" id="submit" name="submit" value="Submit Form">




    {{--  <br><br>  --}}


  </form>

</div>


@includeIf("registration.include.kidsModal")
{{-- @include('registration/include/siblingsModal') --}}

@endsection


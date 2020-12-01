<div class="w3-container w3-card w3-white w3-round w3-margin"><br>
  <img src="/img/seyi/seyi3.jpeg" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:60px">

  <span class="w3-right w3-opacity">{{ $allData['post_time']  }}{{ $allData['post_no'] }}</span>

  <h4 id="fullName"> {{ $allData['fullName'] }}</h4>
  {{-- 
        <canvas id="user-icon" width="25" height="25"></canvas> --}}

  <hr class="w3-clear">

  <p> {{ $allData['postMessage'] }} </p>
  {{-- PICTURES --}}
  <div class="w3-row-padding" style="margin:0 -16px">
    <div class="w3-half">
      <img src="/img/seyi/seyi3.jpeg" style="width:100%" alt="images" class="w3-margin-bottom">
    </div>
    <div class="w3-half">
      <img src="/img/seyi/seyi3.jpeg" style="width:100%" alt="images" class="w3-margin-bottom">
    </div>
  </div>
    <button type="button" name="likeButton" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>
       Like</button>
         <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>
       Comment</button>

  {{-- show comment --}}

  @foreach($_SESSION['commentData'] as $data)
     @if ($allData['post_no'] === $data['post_no'] ) 
      @include('member/includes/comment')
    @endif     
  @endforeach

  <form action="/postCommentProfile" method="post" id="postCommentProfile">
    {{-- like and comment --}}
  
 
    {{-- COMMENTS --}}
    <input name='post_no' type="hidden" name="{{ $allData['post_no'] }}" value={{ $allData['post_no'] }} />
{{-- 
    <input name='post_no' type="hidden" value={{ $allData['post_no'] }} /> --}}

    <input class="w3-input w3-border w3-round-large" type="text" placeholder="Write a comment"
      id={{ $allData['post_no'] }} name='comment'>
      <button type='submit' class="w3-button w3-green">Submit</button>
  </form>

  <br><br>
</div>


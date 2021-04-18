<!DOCTYPE html>
<html lang="en">
<title>PROFILE PAGE</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<style>
  body,
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: "Raleway", sans-serif
  }

  .w3-quarter img {
    margin-bottom: -6px;
    cursor: pointer
  }

  .w3-quarter img:hover {
    opacity: 0.6;
    transition: 0.3s
  }
</style>

<body class="w3-light-grey" data-page-id="profilePage">

  <!-- Sidebar/menu -->
  <nav class="w3-sidebar w3-bar-block w3-black w3-animate-right w3-top w3-text-light-grey w3-large"
    style="z-index:3;width:250px;font-weight:bold;display:none;right:0;" id="mySidebar">
    <a href="javascript:void()" onclick="w3_close()" class="w3-bar-item w3-button w3-center w3-padding-32">CLOSE</a>
    <a href="#" onclick="w3_close()" class="w3-bar-item w3-button w3-center w3-padding-16">PICTURES</a>
    <a href="#about" onclick="w3_close()" class="w3-bar-item w3-button w3-center w3-padding-16">ABOUT ME</a>
    <a href="#contact" onclick="w3_close()" class="w3-bar-item w3-button w3-center w3-padding-16">CONTACT</a>
    <a href="/member/ProfilePage" onclick="w3_close()" class="w3-bar-item w3-button w3-center w3-padding-16">MY PAGE</a>
    <a href="/allMembers" onclick="w3_close()" class="w3-bar-item w3-button w3-center w3-padding-16">ALL MEMBERS</a>
  </nav>

  <!-- Top menu on small screens -->
  <header class="w3-container w3-top w3-white w3-xlarge w3-padding-16">
    <span class="w3-left w3-padding">{{ $data['firstName'] }} {{ $data['lastName'] }} --- <a
        href="/organogram?id={{ $data['id'] }}"> SEE MY FAMILY TREE</a> </span>
    <a href="javascript:void(0)" class="w3-right w3-button w3-white" onclick="w3_open()">☰</a>
  </header>

  <!-- Overlay effect when opening sidebar on small screens -->
  <div class="w3-overlay w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="close side menu"
    id="myOverlay"></div>

  <!-- !PAGE CONTENT! -->
  <div class="w3-main w3-content" style="max-width:1600px;margin-top:83px">

    <!-- Photo grid -->

    {{--  <div class="w3-row w3-grayscale-min">  --}}
    <div class="w3-row-padding w3-margin-top">
      @foreach ($pictures as $image)


      <div class="w3-third">
        <div class="w3-card">

          <img src="img/photos/{{ $image['img'] }}" style="width:100%" class="w3-hover-opacity" onclick="onClick(this)"
            alt={{ $image['img'] }}>

        </div>
      </div>

      @endforeach
    </div>

    {{--  </div>  --}}

    {{--  <div class="w3-quarter">
      <img src="/w3images/girl.jpg" style="width:100%" onclick="onClick(this)" alt="Canoeing again">
      <img src="/w3images/boy.jpg" style="width:100%" onclick="onClick(this)" alt="Quiet day at the beach. Cold, but beautiful">
      <img src="/w3images/girl.jpg" style="width:100%" onclick="onClick(this)" alt="The Beach. Me. Alone. Beautiful">
   </div>  --}}

    {{--  <div class="w3-quarter">
      <img src="/w3images/girl_train.jpg" style="width:100%" onclick="onClick(this)" alt="A girl, and a train passing">
      <img src="/w3images/man_bench.jpg" style="width:100%" onclick="onClick(this)" alt="Waiting for the bus in the desert">
      <img src="/w3images/natureboy.jpg" style="width:100%" onclick="onClick(this)" alt="Nature again.. At its finest!">
    </div>  --}}

    {{--  <div class="w3-quarter">
      <img src="/w3images/man_bench.jpg" style="width:100%" onclick="onClick(this)" alt="Waiting for the bus in the desert">
      <img src="/w3images/girl_mountain.jpg" style="width:100%" onclick="onClick(this)" alt="What a beautiful scenery this sunset">
      <img src="/w3images/closegirl.jpg" style="width:100%" onclick="onClick(this)" alt="The Beach. Me. Alone. Beautiful">
    </div>  --}}

    {{--  <div class="w3-quarter">
      <img src="/w3images/natureboy.jpg" style="width:100%" onclick="onClick(this)" alt="A boy surrounded by beautiful nature">
      <img src="/w3images/girl_train.jpg" style="width:100%" onclick="onClick(this)" alt="A girl, and a train passing">
      <img src="/w3images/boy.jpg" style="width:100%" onclick="onClick(this)" alt="Quiet day at the beach. Cold, but beautiful">
    </div>  --}}
  </div>

  <!-- Pagination -->
  <div class="w3-center w3-padding-32">
    <div class="w3-bar">
      <a href="#" class="w3-bar-item w3-button w3-hover-black">«</a>
      <a href="#" class="w3-bar-item w3-black w3-button">1</a>
      <a href="#" class="w3-bar-item w3-button w3-hover-black">2</a>
      <a href="#" class="w3-bar-item w3-button w3-hover-black">3</a>
      <a href="#" class="w3-bar-item w3-button w3-hover-black">4</a>
      <a href="#" class="w3-bar-item w3-button w3-hover-black">»</a>
    </div>
  </div>

  <!-- Modal for full size images on click-->
  <div id="modal01" class="w3-modal w3-black" style="padding-top:0" onclick="this.style.display='none'">
    <span class="w3-button w3-black w3-xlarge w3-display-topright">×</span>
    <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
      <img id="img01" class="w3-image">
      <p id="caption"></p>
    </div>
  </div>

  <!-- About section -->
  <div class="w3-container w3-dark-grey w3-center w3-text-light-grey w3-padding-32" id="about">
    <h4><b>About Me</b></h4>

    <img src="/img/profile/{{ $data['img'] }}" alt="Me" class="w3-image w3-padding-32" width="600" height="650">

    <div class="w3-content w3-justify" style="max-width:600px">
      <h4>{{ $data['firstName'] }} {{ $data['lastName'] }}</h4>
      <p>Some text about me. I love taking photos of PEOPLE. I am lorem ipsum consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing
        elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.
      </p>
      <p>mail: {{ $data['email'] }}</p>
      <p>tel: {{ $data['mobile'] }}</p>
      <hr class="w3-opacity">

      <div class="w3-white">

        <hr class="w3-opacity">


      </div>
    </div>

    <!-- Contact section -->
    <div class="w3-container w3-light-grey w3-padding-32 w3-padding-large" id="contact">
      <div class="w3-content" style="max-width:600px">
        <h4 class="w3-center"><b>Contact Me</b></h4>
        <p>Do you want me to photograph you? Fill out the form and fill me in with the details :) I love meeting new
          people!</p>
        <form action="/action_page.php" target="_blank">
          <div class="w3-section">
            <label>Name</label>
            <input class="w3-input w3-border" type="text" name="Name" required>
          </div>
          <div class="w3-section">
            <label>Email</label>
            <input class="w3-input w3-border" type="text" name="Email" required>
          </div>
          <div class="w3-section">
            <label>Message</label>
            <input class="w3-input w3-border" type="text" name="Message" required>
          </div>
          <button type="submit" class="w3-button w3-block w3-black w3-margin-bottom">Send Message</button>
        </form>
      </div>
    </div>

    <!-- Footer -->
    <footer class="w3-container w3-padding-32 w3-grey">
      <div class="w3-row-padding">
        <div class="w3-third">
          <h3>INFO</h3>
          <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue
            gravida diam non fringilla.</p>
        </div>

        <div class="w3-third">
          <h3>BLOG POSTS</h3>
          <ul class="w3-ul">
            <li class="w3-padding-16 w3-hover-black">
              <img src="/w3images/workshop.jpg" class="w3-left w3-margin-right" style="width:50px">
              <span class="w3-large">Lorem</span><br>
              <span>Sed mattis nunc</span>
            </li>
            <li class="w3-padding-16 w3-hover-black">
              <img src="/w3images/gondol.jpg" class="w3-left w3-margin-right" style="width:50px">
              <span class="w3-large">Ipsum</span><br>
              <span>Praes tinci sed</span>
            </li>
          </ul>
        </div>

        <div class="w3-third">
          <h3>POPULAR TAGS</h3>
          <p>
            <span class="w3-tag w3-black w3-margin-bottom">Travel</span> <span
              class="w3-tag w3-dark-grey w3-small w3-margin-bottom">New York</span> <span
              class="w3-tag w3-dark-grey w3-small w3-margin-bottom">London</span>
            <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">IKEA</span> <span
              class="w3-tag w3-dark-grey w3-small w3-margin-bottom">NORWAY</span> <span
              class="w3-tag w3-dark-grey w3-small w3-margin-bottom">DIY</span>
            <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Ideas</span> <span
              class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Baby</span> <span
              class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Family</span>
            <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">News</span> <span
              class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Clothing</span> <span
              class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Shopping</span>
            <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Sports</span> <span
              class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Games</span>
          </p>
        </div>
      </div>
    </footer>

    <div class="w3-black w3-center w3-padding-24">Powered by <a href="https://www.w3schools.com/w3css/default.asp"
        title="W3.CSS" target="_blank" class="w3-hover-opacity">w3.css</a></div>

    <!-- End page content -->
  </div>

  <script>
    // Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

  </script>


</body>

</html>
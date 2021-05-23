<?php

declare(strict_types=1);

namespace App\controller\login;

use App\classes\CheckToken;
use Exception;

class Forgot
{
  public $table = 'login';
  public $email;

  public function show()
  {
    try {
      if (!$_SESSION['token']) {
        $login = "login";
        return view('error/notFound', compact('login'));
      }
      return view('login/forgot');
    } catch (\Throwable $th) {
      showError($th);
    }
  }

  public function verify()
  {
    try {

      //1.  token verified
      CheckToken::tokenCheck('token', '/login/forgot');

      //2.  sanitise input   
      $cleanData = getSanitisedInputData($_POST, null);

      // 3. get database data
      $getData = findOneColUsingEmail(col: "id", data: $cleanData);

      $_SESSION['identifyCust'] = $getData['id'];
      $getData['email'] = $cleanData['email'];
      $_SESSION['email'] = $cleanData['email'];

      //5. use the forgot class to verify, generate code and send msg
      generateSendTokenEmail($getData, null);

      //6. check if the $_SESSION['login'] from the login controller is active if yes, unset and use changePW session
      unset($_SESSION['login']);

      //7. to be used on the code controller for identification and redirection
      $_SESSION['changePW'] = 1;

  
      echo json_encode("Authentication Code sent to your email");
    } catch (\Throwable $th) {
      showError($th);
    }
  }
}

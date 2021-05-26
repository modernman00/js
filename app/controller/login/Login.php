<?php

declare(strict_types=1);

namespace App\controller\login;

use App\classes\{
    CheckToken,
    Select, JwtHandler, verifyToken
};

use Exception;

class Login extends Select
{
    private const ACCOUNT = "account";
    private const ADMIN = "/lasu";
    private const LOGIN = "/login";
    private const LOGIN_TYPE = "/loginType";

    public function show()
    {
        $formAction = self::LOGIN;
        $_SESSION[self::LOGIN_TYPE] = self::LOGIN;
        return view('login', compact('formAction'));
    }

    public function showAdmin()
    {
        $formAction = self::ADMIN;
        $_SESSION[self::LOGIN_TYPE] = self::ADMIN;
        return view('login', compact('formAction'));
    }

    public function login()
    {
        try {

            header("Access-Control-Allow-Origin: " . getenv("APP_URL"));
            header("Content-Type: application/json; charset=UTF-8");
            header("Access-Control-Allow-Methods: POST");
            header("Access-Control-Max-Age: 3600");
            header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

            //1.  token verified
            CheckToken::tokenCheck('token', '/error/token');
            //2. create min and max limit
            $minMaxData = [
                'data' => ['email', 'password'],
                'min' => [5, 3],
                'max' => [35, 65]
            ];

            //3. sanitise the post data 
            $sanitisedData = getSanitisedInputData($_POST, $minMaxData);

            //4 check if email exist and get the database password
            $data = useEmailToFindData($sanitisedData);

            //5. check password 
            checkPassword(inputData: $sanitisedData, databaseData: $data);

            $jwt = new JwtHandler();
            $token = $jwt->jwtEncodeData(getenv('APP_URL'), ['id' => $data['id'], 'email'=>$sanitisedData['email']]);
            msgSuccess(201, "Credentials validated", $token);

            //4. control for login
            $detectIfAdminOrCustomer = $_SESSION[self::LOGIN_TYPE] ?? 0;

            // Login now based on login type
            if ($detectIfAdminOrCustomer === self::ADMIN) {
                $this->adminLogin($sanitisedData);
            } else if ($detectIfAdminOrCustomer === self::LOGIN) {
                $this->customerLogin($data);
            }

        } catch (\Throwable $th) {
            showError($th);
        }
    }

    private function customerLogin($data)
    {

        $query = parent::formAndMatchQuery(selection: 'SELECT_AND', table: self::ACCOUNT, identifier1: 'email', identifier2: "status");

        $checkAccountIsApproved = $this->selectFn(query: $query, bind: [$data['email'], 'approved']);

        if (!$checkAccountIsApproved) {
            // http_response_code(406); // sets the response to 406
            // echo http_response_code(); // echo the new response code
            // throw new Exception("We do not recognise your account", 1);

            msgException(406, 'We do not recognise your account');


        }

        generateSendTokenEmail($data);
        $_SESSION['login'] = 1;
        session_regenerate_id();
    }

    private function adminLogin($sanitisedData)
    {
        $getAdminCode = getenv('CODING');

        $query = parent::formAndMatchQuery(selection: 'SELECT_AND', table: self::ACCOUNT, identifier1: 'type', identifier2: "email");

        $outcome = $this->selectFn(query: $query, bind: [$getAdminCode, $sanitisedData['email']]);

        if (!$outcome) {
            http_response_code(406); // sets the response to 406
            echo http_response_code(); // echo the new response code
            throw new Exception("Your input to code is not recognised");
        }

        loggedDetection("http://olaogun.dev.com/lasu");

        session_regenerate_id();

        header('Location: /admin/reviewApps');
    }

    function adminSignOut()
    {
        $url = $_SESSION[self::LOGIN_TYPE] ?? '/';
        session_regenerate_id();
        \session_unset();
        session_destroy();
        setcookie('PHPSESSID', "", time() - 3600);
        header("Location: $url");
    }
}

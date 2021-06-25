<?php 
namespace App\classes;
use \Firebase\JWT\JWT;
use \Firebase\JWT\BeforeValidException;
use \Firebase\JWT\SignatureInvalidException;
use \Firebase\JWT\ExpiredException;


class JwtHandler {
    protected $jwtSecret;
    protected $token;
    protected $issuedAt;
    protected $expired;
    protected $jwt;

    public function __construct()
    {
        date_default_timezone_set('Europe/London');
        
        $this->issuedAt =time();

        //Token validity  2 hours (7300)
        $this->expired = $this->issuedAt + getenv('COOKIE_EXPIRE');

        // secret word or signature 
        $this->jwtSecret = getenv('JWT_TOKEN');
    }

    // encoding the token 

    public function jwtEncodeData($serverName, $data)
    {
        $this->token = array(
            'iss' => $serverName,
            'aud' => $serverName,
            'iat'=> $this->issuedAt,
            'nbf'=> $this->issuedAt,
            'exp'=> $this->expired,
            'data'=> $data
        );
        $this->jwt = JWT::encode($this->token, $this->jwtSecret, 'HS512');
        return $this->jwt;
    }

    protected function _errMsg($msg){
        return [
            "auth" => 0,
            "message" => $msg
        ];
    }
    
    //DECODING THE TOKEN
    public function jwtDecodeData($jwt_token)
    {
        try{
            $decode = JWT::decode($jwt_token, $this->jwtSecret, array('HS512'));
            return [
                "auth" => 1,
                "data" => $decode->data
            ];
        }
        catch(\Firebase\JWT\ExpiredException $e){
            return $this->_errMsg($e->getMessage());
        }
        catch(\Firebase\JWT\SignatureInvalidException $e){
            return $this->_errMsg($e->getMessage());
        }
        catch(\Firebase\JWT\BeforeValidException $e){
            return $this->_errMsg($e->getMessage());
        }
        catch(\DomainException $e){
            return $this->_errMsg($e->getMessage());
        }
        catch(\InvalidArgumentException $e){
            return $this->_errMsg($e->getMessage());
        }
        catch(\UnexpectedValueException $e){
            return $this->_errMsg($e->getMessage());
        }
    
    }
}
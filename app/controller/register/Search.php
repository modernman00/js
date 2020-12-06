<?php

namespace App\controller\register;

use App\Controller\Base;

class Search extends Base
{
    public function index()
    {
        try {
            
            $hint =  checkInput($_REQUEST['hint']);  
            $attribute = checkInput($_GET['attribute']);
            $attribute2 = checkInput($_GET['attribute2']);
            $subject = checkInput($_GET['subject']);
 
            $hint = strtolower($hint);
            $msg1 = "Good news! We think your $subject is already registered on the platform";

            $msg2 = "<h4><i>Your $subject is not on the platform. Do you want us to send them an email to register</i>? </h4>". $this->checkBox($subject);

            $outcome = $this->select_count('otherFamily', $attribute, $hint); 
            // if(!$outcome) {
            //      $outcome = $this->select_count('account', $attribute2, $hint); 
            // }
            $result = (!$outcome) ? $msg2 : $msg1 ;
            echo ($result);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    private function checkBox($subject)
    {
        return "<div class='form-check form-check-inline'>
            <input class='form-check-input' type='radio' id='{$subject}Yes' name = '{$subject}Checkbox' value=Yes'>
            <label class='form-check-label' for='{$subject}Yes'>Yes</label>
            </div>
            <div class='form-check form-check-inline'>
            <input class='form-check-input' type='radio' id='{$subject}No' name = '{$subject}Checkbox' value='No'>
            <label class='form-check-label' for='{$subject}No'>No</label>
            </div>
           ";
    }
}

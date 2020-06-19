<?php

namespace App\classes;

use App\classes\Insert;
use Exception;

class Sanitise extends Insert
{
    private $formData = array();
    private $key  = array();
    private $value = array();
    private $value2 = array();
    private $error = array();
    private $cleanData = array();
    private $dataLength;
    private $image;

    /**
     * Class constructor.
     *  $data  = [min = [12, 12], max = [12, 12], data = [name, password]]
     */
    public function __construct(array $array, array $data = null)
    {
       try {
         unset($array['submit']);
        $this->checkToken('token');

        $this->formData = $array;

        $this->key = array_keys($this->formData);
        $this->value = array_values($this->formData);
        $this->dataCount = count($this->value);
        $this->dataLength = $data ?? null;  //code...
       } catch (\Throwable $th) {
            echo " Are you humna or robot";
       } 
    }

    private function emailVal()
    {
        if (isset($this->formData['email'])) {
            if (!filter_var($this->formData['email'], FILTER_VALIDATE_EMAIL)) {
                $this->error[] = "Invalid Email Format \n";
            }
        }
    }

    private function passVal()
    {
        if (isset($this->formData['password']) && isset($this->formData['confirm_password'])) {
            if ($this->formData['password'] !== $this->formData['confirm_password']) {
                $this->error[] = " Your passwords do not match\n";
                // unset($this->formData['confirm_password']);
            }
        }
    }


    private function checkEmpty()
    {

        for ($x = 0; $x < count($this->key); $x++) {
            if (empty($this->value[$x]) && $this->value[$x] == "" || $this->value[$x] == 'select') {
                $cleanNameKey = strtoupper(preg_replace('/[^0-9A-Za-z@.]/', ' ', $this->key[$x]));
                $this->error[]  = "The $cleanNameKey question is required\n";
            }
        }
    }

    /**
     * both arrays data must be of the same length
     *   min is the minimum length expected of the post
     *   Max is the minimum length expected of the post
    
     */
    private function checkLength()
    {
        if ($this->dataLength)
            for ($x = 0; $x < count($this->dataLength['data']); $x++) {
                $dataKey[] = $this->dataLength['data'][$x];
                $dataPost = $_POST[$this->dataLength['data'][$x]];
                $cleanNameKey = strtoupper(preg_replace('/[^0-9A-Za-z@.]/', ' ', $dataKey[$x]));
                if (strlen($dataPost) < $this->dataLength['min'][$x]) {
                    $this->error[]  = "Your response to '{$cleanNameKey}' question does not meet either the required minimum input limit\n";
                } elseif (strlen($dataPost) > $this->dataLength['max'][$x]) {
                    $this->error[]  = "Your response to '{$cleanNameKey}' question exceeds the required maximum limit\n";
                }
            };
    }

    protected function sanitise()
    {
        for ($x = 0; $x < count($this->key); $x++) {
            $this->data = $this->value[$x];
            $this->data = trim($this->value[$x]);
            $this->data = stripslashes($this->value[$x]);
            $this->data = htmlspecialchars($this->value[$x]);
            $this->data = strip_tags($this->value[$x]);
            $this->data = htmlentities($this->value[$x]);
            $this->data = preg_replace('/[^0-9A-Za-z@._]/', ' ', $this->value[$x]);
            $this->value2[] = $this->data;
        }
    }

    private function setArrayData()
    {
        $this->cleanData = array_combine($this->key, $this->value2);
        // if password and confirm password are given, hash password
        // if only password is given, do not hash password

        if (isset($this->cleanData['password']) && isset($this->cleanData['confirm_password'])) {
            $this->cleanData['password'] = password_hash($this->cleanData['password'], PASSWORD_DEFAULT) ?? null;
            unset($this->cleanData['confirm_password']);
        }

        //  return true;
        // if($this->image) {
        // $this->key2['image_path'] = $this->image;
        //  }
        return $this->cleanData;
    }

    private function runFunctions()
    {
        $this->emailVal();
        $this->passVal();
        $this->checkEmpty();
        $this->checkLength();
        $this->sanitise();
        $this->setArrayData();
    }

    public function getErr()
    {
        return $this->error;
    }

    /**
     * either returns an error which it will echo or the sanitised data in an array
     * @return mixed 
     */

    public function getData()
    {
        try {
            $this->runFunctions();

            if (count($this->error) > 0) return "Error";
            
            return $this->cleanData;
            
        } catch (\Throwable $th) {
            echo $th->getMessage();
        } catch ( Exception $e) {
            echo $e->getMessage();
        }
    }
}

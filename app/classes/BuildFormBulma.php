<?php

namespace App\classes;

use App\classes\AlterTable;

/**
 *  'select' => ['select', 'Mr', 'Senator'], string=>'s', email=>'email', number=>'i', password=>'password', checkbox => checkbox
 */

class BuildFormBulma extends AlterTable
{
    /**
     * This function is used to build a form
     * it takes an array which denotes the type of question
     * When there is a need for new entries, use the newEnt array
     *
     */
    public $question = array();
    public $question2 = array();
    private $EntKey;
    private $EntValue;
    private $EntCount;
    private $token;
    public $ref;
    public $year;
    public $month;
    public $setYear = array();
    public $setDay = array();


    /**
     * enter the array to create the form 'name'=> 's' s denotes string, 1 integer, date for date, textera for textera and select is an array ['select' followed by the options]
     * mixed - you can use to generate text, number, select, inputButton
     * textera
     * it also autogenerate the token
     * title of section ( work_information => title)
     */

    function __construct($array)
    {
        $this->question = $array;
        $this->token = urlencode(base64_encode((random_bytes(32))));
    }

    /**
     * it extracts out the values of the form. this is what we use to decide the type of question
     *
     * @return void
     */
    public function setEntValue()
    {
        $this->EntValue = array_values($this->question);
        $this->EntCount = count($this->EntValue);
        return $this->EntValue;
    }
    /**
     * to creat the year of birth
     * set the years and create an array
     */

    private function createYear(int $startVar, $dayOrYear)
    {
        for ($i = $startVar; $i < (int) $dayOrYear; $i++) {
         //   $this->setYear[] = "<option value=$i>$i</option>";
            $this->setYear[] = $i;
        }
        return $this->setYear;
    }

    private function createDay(int $startVar, $dayOrYear)
    {
        for ($i = $startVar; $i < (int) $dayOrYear; $i++) {
                 $this->setDay[] = $i;
        }
        return $this->setDay;
    }

    public function getYear()
    {
        $minAge = 17;
        $yearLimit = (int) date('Y') - $minAge;
        $this->createYear(1945, $yearLimit);

        for ($i = 0; $i < count($this->setYear); $i++) {
            $no = $this->setYear[$i];
            echo "<option value=$no> $no </option>";
        }
        // echo "</select>";
    }

    private function getDay()
    {
        $this->createDay(1, 32);
            // echo "<select>";
        for ($i = 0; $i < count($this->setDay); $i++) {
            $no = $this->setDay[$i];
            echo "<option value=$no> $no </option>";
        }
    }


    /**
     * function to set the key of the form. Keys are the names of questions and the names of the database
     */
    public function setEntKey()
    {
        $this->EntKey = array_keys($this->question);
        return $this->EntKey;
    }
    /**
     * function to build the form although it is not modular
     */

    public function setSessionToken()
    {
        $_SESSION['token'] = $this->token;
        return $_SESSION['token'];
    }


    public function genForm()
    {
        // set the array key
        $this->setEntValue();
        // set the array key
        $this->setEntKey();

        //return session
        $this->setSessionToken();

        //ITERATE TO CREATE A FORM
        for ($i = 0; $i < $this->EntCount; $i++) {
        //    $value = "";

            if (isset($_POST['submit'])) {
             $value = $_POST[$this->EntKey[$i]];
            } else{
                $value = "";
            }

            // The questions, remove the underscore and change to uppercase

            $var = strtoupper(preg_replace('/[^0-9A-Za-z@.]/', ' ', $this->EntKey[$i]));

            // this is the form question, id and name
            $nameKey = $this->EntKey[$i];

            // CREATE THE FORM - NUMBER AND STRING

            if ($this->EntValue[$i] === 'text') {
                echo " <div class = field>
                    <label class='label' id=$nameKey><b> $var</b></label>
                    <div class= control has-icons-left has-icons-right>
                    <input type='text' autocomplete='new-$nameKey' class = 'input' placeholder= '$var' required name= $nameKey value=$value>

                     <p class='help' id={$nameKey}_help></p>
                    <p class='help' id={$nameKey}_error></p>
                    </div></div>";
                //integer
            } elseif ($this->EntValue[$i][0] === 'text-icon') {
                $fontAwesome = $this->EntValue[$i][1];
                echo " <div class='field'>
                <label class='label' id=$nameKey><b> $var</b></label>
                 <div class='control has-icons-left has-icons-right'>
                 <input type='text' autocomplete='new-$nameKey' class = 'input' placeholder= '$var' required name= $nameKey value=$value>
                   <span class='icon is-small is-left'>
                   $fontAwesome
                   </span>
                   <span class='icon is-small is-right'>
                     <i class='fas fa-check fa-xs'></i>
                   </span>
                    <p class='help' id={$nameKey}_help></p>
                    <p class='help' id={$nameKey}_error></p>
                 </div>
               </div>";
            } elseif ($this->EntValue[$i] === 'integer') {
                echo " <div class = field>

                    <label class='label' id=$nameKey><b> $var</b></label>
                    <div class= control>
                    <input type='number' autocomplete='new-$nameKey' class ='input' placeholder= '$var' name= $nameKey value=$value>
                     <p class='help' id={$nameKey}_help></p>
                    <p class='help' id={$nameKey}_error></p>
                    </div></div> ";
                //select
            } elseif ($this->EntValue[$i][0] === 'integer-icon') {
                $fontAwesome1 = $this->EntValue[$i][1];
                echo " <div class='field'>
                <label class='label' id=$nameKey><b> $var</b></label>
                 <div class='control has-icons-left has-icons-right'>
                 <input type='number' autocomplete='new-$nameKey' class = 'input' placeholder= '$var' required name= $nameKey value=$value>
                   <span class='icon is-small is-left'>
                   $fontAwesome1
                   </span>
                   <span class='icon is-small is-right'>
                     <i class='fas fa-check fa-xs'></i>
                   </span>
                    <p class='help' id={$nameKey}_help></p>
                    <p class='help' id={$nameKey}_error></p>
                 </div>
               </div>";
            } elseif ($this->EntValue[$i][0] == 'select') {
                echo " <div class = field>
                    <label class='label' id=$nameKey><b> $var</b></label>
                        <div class= control has-icons-left>
                            <select class='input' id={$nameKey}_id name=$nameKey>";
                for ($y = 0; $y < count($this->EntValue[$i]); $y++) {
                    echo "<option>" . $this->EntValue[$i][$y] . "</option>";
                }
                    echo " </select>
                         <p class='help' id={$nameKey}_help></p>
                    <p class='help' id={$nameKey}_error></p>
                    </div></div> ";
                //date
            } elseif ($this->EntValue[$i][0] === 'select-icon') {
                $fontAwesome = $this->EntValue[$i][1];
                echo " <div class='field'>
                <label class='label' id=$nameKey><b> $var</b></label>
                    <div class='control has-icons-left'>

                        <select class='input' id='$nameKey' name=$nameKey>";
                        for ($y = 1; $y < count($this->EntValue[$i]); $y++) {
                            echo "<option>" . $this->EntValue[$i][$y] . "</option>";
                        }
                       echo "</select>


                        <span class='icon is-small is-left'>
                        $fontAwesome
                        </span>
                    </p>
                     <p class='help' id={$nameKey}_help></p>
                    <p class='help' id={$nameKey}_error></p>
                    </div>";
            } elseif ($this->EntValue[$i] === 'date') {
                echo " <div class = field>

                    <label class='label'  id=$nameKey><b> $var</b></label>
                        <div class= control>
                    <input type='date' class ='input' placeholder= '$nameKey' id={$nameKey}_id name= $nameKey value=$value>
                    <p class='help' id={$nameKey}_help></p>
                    <p class='help' id={$nameKey}_error></p>
                    </div></div> ";
                //textera
            } elseif ($this->EntValue[$i] === 'textera') {
                echo "
                <div class = 'field' id = {$nameKey}_class >
                    <label class='label'  id=$nameKey><b> $var</b></label>
                        <div class= control>
                            <textarea class='input' name= $nameKey id={$nameKey}_id class='control' rows='3'></textarea>
                            <p class='help error' id={$nameKey}_error></p>
                            <p class='help' id={$nameKey}_help></p>
                        </div>
                </div> ";
                // email
            } elseif ($this->EntValue[$i] === 'email') {
                //password
                echo "   <div class='field'>
                        <label class='label'  id=$nameKey><b> $var</b></label>
                        <div class='control has-icons-left has-icons-right'>
                        <input type='email' id='{$nameKey}_id' placeholder= 'alex@gmail.com' class ='input' name= $nameKey value=$value>
                        <span class='icon is-small is-left'>
                        <i class='fas fa-envelope'></i>
                        </span>
                        <span class='icon is-small is-right'>
                        <i class='fas fa-check'></i>
                        </span>
                        <p class='help' id={$nameKey}_help></p>
                        <p class='help error' id={$nameKey}_error></p>
                        </div>
                        </div>";
            } elseif ($this->EntValue[$i] === 'password') {
                echo "   <div class='field'>
                    <label class='label'  id=$nameKey><b> $var</b></label>
                    <div class='control has-icons-left has-icons-right'>
                    <input type='password' id='$nameKey' placeholder= 'password' autocomplete='new-password' class ='input' name= $nameKey >
                    <span class='icon is-small is-left'>
                    <i class='fas fa-lock'></i>
                    </span>
                    <span class='icon is-small is-right'>
                    <i class='fas fa-check'></i>
                    </span>
                    </div>
                    <p class='help' id={$nameKey}_help></p>
                    <p class='help' id={$nameKey}_error></p>
                    </div>";
            } elseif ($this->EntKey[$i] === 'checkbox') {
                echo " <div class='field'>
                        <div class='control'>
                        <label class='checkbox'>

                            <input type='checkbox' id='{$nameKey}_id' name = '{$nameKey}_id'>
                            {$this->EntValue[$i]}

                        </label>
                        <p class='help' id={$nameKey}_error></p>
                        </div>
                    </div>";
            } elseif ($this->EntValue[$i] === 'button') {
                echo "<div class='field'>
                    <p class='control'>
                    <button name= 'submit' type = 'button' class='button is-warning submit'>
                    Submit
                    </button>
                    </p>
                    </div>";
            } elseif ($this->EntValue[$i] === 'submit') {
                echo "<div class='field'>
                    <p class='control'>
                    <button name= 'submit' type = 'submit' class='button is-warning submit'>
                    Submit
                    </button>
                    </p>
                    </div>";
            } elseif ($this->EntValue[$i] === 'token') {
                echo " <div class = field>

                    <div class= control>
                    <input type='hidden' class ='input' name='token' value=$this->token>

                    </div></div> ";
            } elseif ($this->EntValue[$i][0] === 'col-6') {
                echo "  <div class = field>
                <label class='label' id=$nameKey><b> $var</b></label>
                    <div class='field-body'> ";
                    for ($y = 1; $y < count($this->EntValue[$i]); $y++) {
                    $name = $this->EntValue[$i][$y];
                    $id = $name.'_id';
                    $error = $name.'_error';
                    $help = $name.'_help';
                    $autocomplete = 'new-'.$name;
                    $namePlaceholder = strtoupper(preg_replace('/[^0-9A-Za-z@.]/', ' ', $name));
                      echo   "<div class='field'>
                    <p class='control is-expanded has-icons-left'>

                      <input class='input' type='text' name='$name' id=$id autocomplete = $autocomplete placeholder='$namePlaceholder'>

                      <span class='icon is-small is-left'>
                        <i class='fas fa-user'></i>
                      </span>
                    </p>
                  </div>";
                }
                 echo "
                  </div>
                  <p class='help' id=$help></p>
                  <p class='help error' id=$error></p>
                    </div>";
            } elseif ($this->EntValue[$i][0] === 'col-6-label') {

                echo "  <div class = field>

                    <div class='field-body'> ";
                    for ($y = 1; $y < count($this->EntValue[$i]); $y++) {
                    $name = $this->EntValue[$i][$y];
                    $id = $name.'_id';
                    $error = $name.'_error';
                    $help = $name.'_help';
                    $autocomplete = 'new-'.$name;
                    $namePlaceholder = strtoupper(preg_replace('/[^0-9A-Za-z@.]/', ' ', $name));
                      echo   "<div class='field'>
                      <label class='label' id=$name><b> $namePlaceholder</b></label>

                      <input class='input' type='text' id=$id name='$name' autocomplete = $autocomplete placeholder='$namePlaceholder'>
                      <p class='help' id=$help></p>
                    <p class='help error' id=$error></p>
                  </div>";
                }
                 echo "
                  </div>
                    </div>";
            } elseif ($this->EntKey[$i] === 'blank') {
                echo "  <div class = field>
                 ";
                    for ($y = 1; $y < count($this->EntKey[$i]); $y++) {
                    $name = $this->EntValue['type'][$y];
                    $label = $this->EntValue['label'][$y];
                    $id = $name.'id';
                    $error = $name.'_error';
                    $help = $name.'_help';
                    $namePlaceholder = strtoupper(preg_replace('/[^0-9A-Za-z@.]/', ' ', $name));
                echo   "<div class='field'>
                <label class='label' id=$label><b> $label</b></label>
                    <div class='field-body'>
                    <p class='control is-expanded has-icons-left'>
                      <input class='input' type='text' name='$name' placeholder='$namePlaceholder'>
                      <span class='icon is-small is-left'>
                        <i class='fas fa-user'></i>
                      </span>
                    </p>
                  </div>";
                }
                 echo "
                  </div>
                    </div>";
            } elseif ($this->EntValue[$i] === 'birthday') {
                echo " <div class='field'>
                        <label class='label' id=$nameKey><b> $var</b>
                        </label>
                        <p class='help error' id={$nameKey}_error></p>

                    <div class='field-body'>
                        <div class='field'>
                        <div class='control'>
                        <div class='select is-fullwidth'>
                            <select name='birth_day' id=birth_day>
                            <option selected value=select>Day</option>";
                            echo $this->getDay();
                     echo "

                </select>
                        </div>
                        </div>
                        <p class='help error' id=birth_day_error></p>
                        </div>
                        <div class='field'>
                        <div class='control'>
                        <div class='select is-fullwidth'>
                            <select name=birth_month id=birth_month>
                            <option selected value=select>Month</option>
                            <option value='Jan'>Jan</option>
                            <option value='Feb'>Feb</option>
                            <option value='Mar'>Mar</option>
                            <option value='Apr'>Apr</option>
                            <option value='May'>May</option>
                            <option value='Jun'>Jun</option>
                            <option value='Jul'>Jul</option>
                            <option value='Aug'>Aug</option>
                            <option value='Sep'>Sep</option>
                            <option value='Oct'>Oct</option>
                            <option value='Nov'>Nov</option>
                            <option value='Dec'>Dec</option>
                            </select>
                        </div>
                        </div>
                        <p class='help error' id=birth_month_error></p>
                        </div>
                        <div class='field'>
                        <div class='control'>
                        <div class='select is-fullwidth'>
                                <select name='birth_year' id=birth_year>
                                <option selected value=select>Year
                                ";
                                    echo $this->getYear();
                             echo " </select>
                        </div>
                        </div>
                        <p class='help' error id=birth_year_error></p>
                        </div>
                    </div>

                </div>";
            } elseif ($this->EntValue[$i][0] === 'slider') {
              echo " <div class = field>
                    <label class='label' id=$nameKey><b> $var</b></label>
                        <div class='field-body'>
                          <div class = field>";
                            $fAwesome = $this->EntValue[$i][1];
                            $slider_id = $this->EntValue[$i][2];
                            $input_id = $this->EntValue[$i][3];
                            echo  "<div id = '$slider_id'>
                          </div>
                        </div>

                    <div class='field'>
                        <p class='control is-expanded has-icons-left'>
                        <input class='input is-success' type='number' name='$input_id' id='$input_id' value =$value readonly>
                        <span class='icon is-small is-left'>$fAwesome
                        </span>
                        <span class='icon is-small is-right'>
                        <i class='fas fa-check'></i>
                        </span>
                        </p>  <p class='help' id={$input_id}_help></p
                        </p>  <p class='help error' id={$input_id}_error></p>
                    </div>

                </div>";
            } elseif ($this->EntValue[$i][0] === 'col-4-int') {
                echo " <br><div class = field>
                <div class='field-label' id=$nameKey><b> </b></div>
                    <div class='field-body'>";
                    for ($y = 2; $y < count($this->EntValue[$i]); $y++) {
                        $name = $this->EntValue[$i][$y];
                        $id = $name.'_id';
                        $error = $name.'_error';
                        $help = $name.'_help';
                        $autocomplete = 'new-'.$name;
                        $readonly = $this->EntValue[$i][1];
                        // $fontAwesome = $this->EntValue[$i][1];
                        $namePlaceholder = strtoupper(preg_replace('/[^0-9A-Za-z@.]/', ' ', $name));

                      echo " <div class = field is-expanded>
                      <div class='field has-addons'>
                         <p class='control'>
                            <a class='button is-static'>
                            <b>$namePlaceholder</b>
                            </a>
                          </p>
                      <p class='control is-expanded has-icons-left'>
                            <input class='input' type='number' value='1' $readonly name='$name'  id='$id'>
                            <span class='icon is-small is-left'>
                            <i class='fas fa-pound-sign'></i>
                        </span>
                        </p>
                        <p class='help' id=$help></p>
                        <p class='help error' id=$error></p>
                        </div>

                        </div>";
                    }
                echo "
                </div>";
            } elseif ($this->EntValue[$i][0] === 'mixed') {            
                $label = $this->EntValue[$i]['label'];
                echo " <div class = field>
                <div class='field-body'> ";
                  for ($y = 0; $y < count($label); $y++) {
                  $name = $this->EntValue[$i]['label'][$y];
                  $id = $name.'_id';
                  $error = $name.'_error';
                  $help = $name.'_help';
                  $cleanName = strtoupper(preg_replace('/[^0-9A-Za-z@.]/', ' ', $name));
                  $labelType = $this->EntValue[$i]['inputType'][$y];
                  $icon =  $this->EntValue[$i]['icon'][$y];

                  echo   "<div class='field $name'>
                  <label class='label' id=$name><b> $cleanName</b></label>";
                  if($labelType === 'select')  {
                    echo "<div class='control has-icons-left has-icons-right '>
                        <select class='input' id='$id' name=$name>";
                        for ($yii = 0; $yii < count($this->EntValue[$i]['options']); $yii++) {
                            echo "<option>" . $this->EntValue[$i]['options'][$yii] . "</option>";
                        }
                    echo "</select>

                    <span class='icon is-small is-left'>
                    $icon
                    </span>
                    <span class='icon is-small is-right'>
                    <i class='fas fa-angle-down fasCol' ></i>
                    </span>
                    <p class='help' id=$help</p>
                    <p class='help error' id=$error></p>
                    </div>";
                  }
                  if($labelType === 'inputButton'){
                      echo " 
                      <div class='field has-addons has-addons-left '>

                      <div class= 'control is-expanded'> 
                        <input class='input {$name}' id='{$name}_id' type='text' placeholder='$cleanName'>
                    </div>
                       <div class='control'>
                        <a class='button is-info' id='{$name}_button'>
                        Search
                        </a>
                    </div>          
                 </div>";
;
                  }
                  if($labelType != 'select' && $labelType != 'inputButton' ) {
                        echo "<div class='control is-expanded has-icons-left'>
                        <input class='input {$name}' type='$labelType' value='$value' maxlength='30' minlength='1' name='$name' id = $id placeholder='$cleanName'>
                        <span class='icon is-small is-left'>
                                    $icon
                            </span>

                        <p class='help' id={$name}_help></p>
                        <p class='help error' id={$name}_error></p>
                        </div>";
                  }
                 echo " </div>";

                }
                echo "  </div>
                </div>";
            } elseif ($this->EntValue[$i][0] === 'select-many') {

              echo " <div class='field'>
              <div class='field-body'> ";
                        for ($y = 0; $y < count($this->EntValue[$i]['label']); $y++){      $options = $this->EntValue[$i]['options'];
                            $name = $this->EntValue[$i]['label'][$y];
                            $id = $name.'_id';
                            $error = $name.'_error';
                            $help = $name.'_help';
                            $cleanName = strtoupper(preg_replace('/[^0-9A-Za-z@.]/', ' ', $name));
                            $icon =  $this->EntValue[$i]['icon'][$y];
                            echo "<div class='field'>
                            <label class='label' id=$name><b> $cleanName</b></label>
                            <div class='control has-icons-left has-icons-right'>
                            <select class='input' id='$id' name=$name>";
                            for($x = 0; $x < count($options[$y]); $x++ ){
                                echo "<option>" . $options[$y][$x] . "</option>";
                            }
                            echo "</select>
                                <span class='icon is-small is-left'>
                                $icon
                                </span>
                                <span class='icon is-small is-right'>
                                <i class='fas fa-angle-down fasCol' ></i>
                                </span>
                            </div>
                        <p class='help' id=$help</p>
                        <p class='help error' id=$error></p>
                        </div>";
                        };
                    echo "
                    </div>
                    </div>";
            } elseif ($this->EntValue[$i] === 'title') {
                echo "<hr><br><p id={$nameKey}1 class='title is-3 is-spaced
                has-text-centered is-primary the-title'>$var</p><br>
                <p class='subtitle is-6 has-text-centered' id='{$nameKey}_help'></p>"
                ;
            } elseif ($this->EntValue[$i] === 'subtitle') {
                echo "<h2 class='subtitle has-text-centered is-primary>
                            $var
                        </h2>";
            } elseif ($this->EntValue[$i][0] === 'radio') {
                echo "<hr><br>
                <div class='control'>
                   <label class='radio'>
                        {$this->EntValue[$i][1]}
                      <input type='radio' name='{$this->EntKey[$i]}' id='{$this->EntKey[$i]}_yes' class='{$this->EntKey[$i]}'>
                        {$this->EntValue[$i][2]}
                     </label>
                    <label class='radio'>
                      <input type='radio' name='{$this->EntKey[$i]}' id='{$this->EntKey[$i]}_no' class='{$this->EntKey[$i]}'>
                      {$this->EntValue[$i][3]}
                    </label>
                </div>";
            } elseif ($this->EntValue[$i] === 'empty') {
                echo " <div class = field id=$nameKey></div>";
            } 
            // elseif($this->EntValue[$i] === 'inputButton'){
            //     echo "<div class='field has-addons'>
                 
            //         <div class='control'>
            //             <input class='input' id='{$nameKey}_id' type='text' placeholder='$var'>
            //         </div>
            //         <div class='control'>
            //             <a class='button is-info' id='{$nameKey}_button'>
            //             Search
            //             </a>
            //         </div>
            //         </div>";
            // }
        } 
    }
}
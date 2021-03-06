<?php

declare(strict_types=1);

namespace App\controller\members;

use App\model\{
    AllMembersData
};

use App\classes\Select;

use Exception;

class AllMembersController extends AllMembersData
{
    public function index()
    {
        try {


            view('member/homePage', compact('result'));
        } catch (\Throwable $th) {
            showError($th);
        }
    }

    public function processApiData()
    {
        try {
            $result = $this->getAllMembers();

            echo json_encode($result);
        } catch (\Throwable $th) {
            showError($th);
        }
    }



    // public function index2()
    // {
    //     try {
    //         $result = $this->getAllMembers();

    //         view('member/allMembers', compact('result'));
    //     } catch (\Throwable $th) {
    //         showError($th);
    //     }
    // }

    public function setProfile()
    {
        $id = checkInput($_GET['id']);
        $_SESSION['id'] = $id;
        header("Location: /allMembers/getProfile");
    }

    public function getProfile()
    {
        $id = checkInput($_SESSION['id']);
        $result = $this->getAllMembersById($id);
        if (!$result) {
            throw new Exception("It could not process the data", 1);
        }

        $query = Select::formAndMatchQuery(selection: "SELECT_ONE", table: 'images', identifier1: "id");

        $pictures = Select::selectFn2(query: $query, bind: [$id]);



        foreach ($result as $data);



        view('member/getProfile', compact('data', 'pictures'));
    }
}

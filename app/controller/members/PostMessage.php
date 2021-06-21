<?php

declare(strict_types=1);

namespace App\controller\members;

use App\model\{
    SingleCustomerData,
    Post
};

use App\classes\{
    Select
};


class PostMessage
{

    function index()
    {
        try {

            $newPost = new Post();
            $message = $newPost->getAllPostProfilePics();
            $count = count($message);

            $_SESSION['COUNT'] = $count;
            msgSuccess(200, $message);
        } catch (\Throwable $th) {
            showErrorExp($th);
        }
    }

    static function update()
    {
        try {
            // session_destroy();
            // make session read-only
            session_write_close();
            // disable default disconnect checks
            ignore_user_abort(true);

            header('Content-Type: text/event-stream');
            header('Cache-Control: no-cache');
            header('Access-Control-Allow-Origin: *');

            // pick the newly added post using the session

            if ($_SESSION['LAST_INSERT_ID']) {
                
                // ! deprecated at some point
                $lastEventId = floatval(isset($_SERVER['HTTP_LAST_EVENT_ID']) ? $_SERVER['HTTP_LAST_EVENT_ID'] : 0);

                if ($lastEventId == 0) {
                    $lastEventId = floatval(isset($_GET['lastEventId']) ? $_GET['lastEventId'] : 0);
                }

                // find the new post data using the last insert id
                
                $query = Select::formAndMatchQuery(selection: 'SELECT_ONE', table: 'post', identifier1: "post_no");

                $message = Select::selectFn2($query, [$_SESSION['LAST_INSERT_ID']]);

                $id = (int) $_SESSION['LAST_INSERT_ID'];

               $_SESSION['LAST_INSERT_ID'] = false;

                msgServerSent($message, $id);
            }
        } catch (\Throwable $th) {
            showErrorExp($th);
        }
    }
}

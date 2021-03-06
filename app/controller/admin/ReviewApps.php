<?php

declare(strict_types=1);

namespace App\controller\admin;

use App\model\ReviewAppsData;
use Exception;
use App\classes\AllFunctionalities;

class ReviewApps extends ReviewAppsData
{
    private $id;
    private const REDIRECT = "Location: /admin/reviewApps";

    // get the new application page 
    function get()
    {
        $result = $this->index();
        return view('admin/ReviewApps', ['result' => $result, 'no' => 1]);
    }

    // once the $GET IS clicked, use this to get the customers data and set customers id as well
    private function getCustomerData() : array
    {
        $this->id = checkInput($_GET['id']);
        $data = $this->getWithId($this->id);
        foreach ($data as $data2);

        // // Set the customer Id
        // $custNo = $data2['last_name'];
        // $custNo .= $this->rand;
        // $this->custId = $custNo;
        // $_SESSION['terms'] = $data2['terms'];

        return $data2;
    }


    // // email functionality
    private function toSendEmail($viewPath, $data, $subject, $emailRoute)
    {
        // generate the data to send the email
        $sendEmailArray = genEmailArray(
            $viewPath,
            $data,
            $subject
        );

        // send the email
        return sendEmailWrapper(var: $sendEmailArray, recipientType: $emailRoute);
    }
    // // update the account status in the decision table 
    private function updateAccountStatus($acctStatus)
    {
        $updateClass = new AllFunctionalities();
        $checkUpdateStatus = $updateClass->update('account', 'status', $acctStatus, 'id', $this->id);

       return $checkUpdateStatus ??= throw new Exception("Error Processing Request - account status");
    }

    public function approve()
    {
        try {
            $data = $this->getCustomerData();
            $this->toSendEmail("msg/admin/approve", $data, "Membership Approval for {$data['firstName']}", 'member');

            $this->updateAccountStatus('approved');
            header(self::REDIRECT);
        } catch (\Throwable $th) {
            showError($th);
        }
    }

    public function cancel()
    {
        try {
            $data = $this->getCustomerData();
            $this->toSendEmail("msg/admin/cancel", $data, "Loan application cancellation", 'member');
            $this->updateAccountStatus('cancel');
            header(self::REDIRECT);
        } catch (\Throwable $th) {
            showError($th);
        }
    }

    public function delete()
    {
        try {

            $data = $this->getCustomerData();
            $data['email'] = 'application@loaneasyfinance.com';
            $this->toSendEmail("msg/admin/delete", $data, "Delete App", 'internal');
            $this->updateAccountStatus('deleted');
            header(self::REDIRECT);
        } catch (\Throwable $th) {
            showError($th);
        }
    }

    public function decline()
    {
        try {
            $data = $this->getCustomerData();
            $this->toSendEmail("msg/admin/decline", $data, 'Decision', 'member');
            $this->updateAccountStatus('declined');
            header(self::REDIRECT);
        } catch (\Throwable $th) {
            showError($th);
        }
    }
}

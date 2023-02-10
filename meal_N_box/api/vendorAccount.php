<?php
include_once ("config.php");
include_once ("constants.php");

if (isset($_POST['store']))
{
    $data = json_decode($_POST['store']);

    $sqlCommand = "
    INSERT INTO `vendor_table`
        (
            `Vendor_ID`, 
            `VendorName`, 
            `OwnerName`, 
            `EmailAddress`, 
            `ContactNum`,
            `Password`,
            `BuildingNumber`,
            `StreetName`,
            `BarangayName`,
            `Municipality`,
            `Province`,
            `PermitNumber`,
            `DTIPermitNumber`,
            `Registration_Date`
        ) 
    VALUES 
        (
            '{$data-> Vendor}',
            '{$data-> busName}',
            '{$data-> ownerName}',
            '{$data-> email}',
            '{$data-> busContact}',
            '{$data-> pass}',
            '{$data-> homeAdd}',
            '{$data-> street}',
            '{$data-> barangay}',
            '{$data-> city}',
            '{$data-> prov }',
            '{$data-> busPermit }',
            '{$data-> dtiPermit}',
            '{$data-> regDate}'
            )
    ";

    $isInserted = $connection->query($sqlCommand);

    $response = array();

    if ($isInserted)
    {
        $response["code"] = SUCCESS;
        $response["description"] = "Successfully Saved New Employee";
    } else 
    {
        $response["code"] = SERVER_ERROR; 
        $response["description"] = "!!!Unsuccessfully Registration";
    }

    echo json_encode($response);
}


If (isset($_GET['getVendor']))
{
    $sqlcommand= "SELECT * FROM `vendor_table`;";

    $results=$connection->query($sqlcommand);
    $response=array();
    $records=array();

        while ($row=$results->fetch_assoc())
        {
            array_push($records,$row);
        }
   $response["code"]= SUCCESS;
   $response["total_rows"]=$results->num_rows;
   $response["records"]=$records;
   echo json_encode($response);
}
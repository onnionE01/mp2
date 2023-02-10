<?php
include_once ("config.php");
include_once ("constants.php");

if (isset($_POST['store']))
{
    $data = json_decode($_POST['store']);
   
    //@TODO
    //@var these are columns and values of the table
    $columns = array(
            "Vendor_ID" =>$data-> Vendor,
            "VendorName" => $data-> busName, 
            "OwnerName" => $data-> ownerName, 
            "EmailAddress"=>$data-> email , 
            "ContactNum"=> $data-> busContact,
            "Password"=> $data-> pass,
            "BuildingNumber"=> $data-> homeAd,
            "street StreetName"=>$data-> street ,
            "BarangayName"=>$data-> barangay ,
            "Municipality"=>$data-> city ,
            "Province"=>$data-> prov ,
            "PermitNumber"=>$data-> busPermit ,
            "DTIPermitNumber"=>$data-> dtiPermit,
            "regDate Registration_Date"=>$data-> regDate 
    );

    $id = $database->insert(productmenu_table, $columns);

    echo $id ? parseResponse(SUCCESS, "Succesfully Inserted", $id) : parseResponse(SERVER_ERROR, "Insert failed");
    
}


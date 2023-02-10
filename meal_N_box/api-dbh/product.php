<?php
include_once ("config.php");
include_once ("constants.php");

if (isset($_GET['index']))
{

    $users = $database->get(productmenu_table);
    $data['records'] = $users;
    $data['total_rows'] = count($users);

    echo parseResponse(SUCCESS, "Successful", null, $data);
}

if (isset($_POST['store']))
{
    $data = json_decode($_POST['store']);
    $picPath= $_SESSION["file-path"];
    //@TODO
    //@var these are columns and values of the table
    $columns = array(
            "Menu_ID" => $data->ProdID , 
            "Product_Name" => $data->prodName , 
            "Price" => $data-> prodPrice , 
            "Product_Pic" => $data-> $_SESSION["file-path"], 
            "Vendor_ID" => $data->vendor,
            "Breakfast" => $data-> CategA ,
            "Lunch" => $data-> CategB ,
            "Dinner" => $data-> CategC ,
            "Snacks " => $data-> CategD ,
            "Dessert " => $data-> CategE ,
            "Status" => $data->stat
    );

    $id = $database->insert(productmenu_table, $columns);

    echo $id ? parseResponse(SUCCESS, "Succesfully Inserted", $id) : parseResponse(SERVER_ERROR, "Insert failed");
    
}

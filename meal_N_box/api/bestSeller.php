<?php
include_once ("config.php");
include_once ("constants.php");

if (isset($_GET['showBestSeller']))
{
    $sqlcommand= "SELECT * FROM `productmenu_table` ORDER BY `Quantity_Sold` DESC";
    $results=$connection->query($sqlcommand);
    $response=array();
    $records=array();
    $x=0;
    while ($row=$results->fetch_assoc())
    {
        if ($x<=10){
            $x++;
            array_push($records,array(
            "img" => $row['Product_Pic'],
            "pName" => $row['Product_Name'],
            "pPrice" => $row['Price']
         ));
        } else {
            return false;
        }

    }
   $response["code"]= SUCCESS;
   $response["total_rows"]=$results->num_rows;
   $response["records"]=$records;
   echo json_encode($response);
}
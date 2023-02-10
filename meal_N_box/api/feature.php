<?php
include_once ("config.php");
include_once ("constants.php");

// If (isset($_GET['show']))
// {
//     $sqlcommand1= "SELECT * FROM `featured_product`;";
//     $sqlcommand2= "SELECT * FROM `productmenu_table`;";

//     $results1=$connection->query($sqlcommand1);
//     $results2=$connection->query($sqlcommand2);

//     $response=array();
//     $records=array();
//         while ($row=$results1->fetch_assoc())
//         {
//             while($row2=$results2->fetch_assoc())
//             {
//             if ($row["Menu_ID"]==$row2["Menu_ID"]){
//                 array_push($records,$row2);
//             }
//             $response["code"]= SUCESS;
//             $response["records"]=$records;
          
//         }
       
//         $response["total_rows"]=$results1->num_rows;
//         echo json_encode($response);
// }
// }

if (isset($_GET['showFeaturedProducts']))
{
    $sqlcommand= "SELECT * FROM `featured_product` f join productmenu_table p on f.Menu_ID = p.Menu_ID";

    $results=$connection->query($sqlcommand);
    $response=array();
    $records=array();

    while ($row=$results->fetch_assoc())
    {
        array_push($records, $row);
    }
    $response["code"]= SUCCESS;
    $response["total_rows"]=$results->num_rows;
    $response["records"]=$records;
    echo json_encode($response);
}
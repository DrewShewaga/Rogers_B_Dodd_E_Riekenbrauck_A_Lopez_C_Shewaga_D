<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once '../config/database.php';
include_once '../objects/product.php';

// instantiate database and product object
$database = new Database();
$db       = $database->getConnection();

// initialize object
$product = new Product($db);

// query products
$stmt = $product->getProducts();
$num  = $stmt->rowCount();

// check if more than 0 record found
if ($num > 0) {

    // products array
    $results = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $single_product = $row;
        $product_id     = $single_product[$product->product_table_primary_key];
        $descs_stmt     = $product->getProductDescs($product_id);
        $descs          = array();
        while ($desc_row = $descs_stmt->fetch(PDO::FETCH_ASSOC)) {
            $descs[] = $desc_row;
        }

        //Note: you might need update the node key from `colors` to other name
        $single_product['product_desc']  = $descs;
        $results[]                = $single_product;
    }

    echo json_encode($results);
} else {
    echo json_encode(
        array(
            "message" => "No products found."
        )
    );
}
?>
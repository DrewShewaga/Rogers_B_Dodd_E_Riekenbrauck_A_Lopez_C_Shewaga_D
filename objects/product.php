<?php
class Product {

    private $conn;

    // Note: update table names, column names in here
    public $product_table                          = 'tbl_product';

    public $product_table_primary_key              = 'id';

    public $desc_table                             = 'tbl_desc';

    public $desc_table_primary_key                 = 'id';

    public $linking_table                          = 'tbl_product_desc';

    public $linking_table_ref_product_table_column = 'product_id';

    public $linking_table_ref_desc_table_column    = 'desc_id';


    public function __construct($db) {
        $this->conn = $db;
    }

    function getProducts() {
        $query = 'SELECT * FROM ' . $this->product_table;

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }

    function getProductDescs($product_id) {
        $query = 'SELECT desc_id.* FROM ' . $this->linking_table . ' AS linking, ' . $this->desc_table . ' AS desc_id';
        $query .= ' WHERE desc_id.' . $this->desc_table_primary_key . ' = linking.' . $this->linking_table_ref_desc_table_column;
        $query .= ' AND linking.' . $this->linking_table_ref_product_table_column . ' = ' . $product_id;

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }
}
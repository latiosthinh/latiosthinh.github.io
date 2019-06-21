<?php

$post = array(
    'post_title' => wp_strip_all_tags( $title ),
    'post_status' => 'publish', 
    'post_type' => 'customer',
    'meta_input' => array(
        'custom_field_one' => $custom_field_one
    )
);
$post_id = wp_insert_post($post);
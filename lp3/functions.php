<?php

function brighton_scripts() {
	wp_style_add_data( 'reallink-style', 'rtl', 'replace' );

	

	wp_enqueue_style( 'brighton-style', get_stylesheet_uri(), array(), wp_get_theme()->get( 'Version' ) );
}
add_action( 'wp_enqueue_scripts', 'brighton_scripts' );
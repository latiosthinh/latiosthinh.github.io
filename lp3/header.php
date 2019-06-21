<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="simple pug template"/>
	<meta name="author" content="latiosthinh"/>
	<link rel="profile" href="https://gmpg.org/xfn/11" />

	<title>BrighTon</title>
	<link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/bootstrap.min.css"/>
	<link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/jquery-ui.min.css"/>
	<link href="<?php bloginfo('stylesheet_url'); ?>" rel="stylesheet">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div class="wrap">
<header>
<nav class="d-nav">
	<a class="psy-btn logo" href="#home"><img src="<?php bloginfo('template_url'); ?>/images/logo.png" alt=""/></a>
	<ul class="psy-pane">
		<li><a class="smooth psy-btn" href="#home">Home</a></li>
		<li><a class="smooth psy-btn" href="#about">About us</a></li>
		<li><a class="smooth psy-btn" href="#team">Team</a></li>
		<li><a class="smooth psy-btn" href="#programme">Programme</a></li>
		<li><a class="smooth psy-btn" href="#curriculum">Curriculum</a></li>
		<li><a class="smooth" href=""><img src="<?php bloginfo('template_url'); ?>/images/bees.png" alt=""/></a></li>
	</ul>
</nav>
<!-- <button class="open-mnav"><span></span><span></span><span></span></button> -->
</header>



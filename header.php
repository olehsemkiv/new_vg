<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package vanguard-wachschutz
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<header class="header">
	<div class="site-container">
		<div class="header__wrapper">
			<a href="<?php echo get_home_url() ?>" class="header__logo"></a>
			<nav class="header__menu menu">
				<?php $menu_list = wp_nav_menu(array(
					'theme_location' => 'header_menu',
					'container' => '',
					'echo' => false
				));
				echo strip_tags($menu_list, '<ul><li><a>'); ?>

			</nav>
			<nav class="header__side-menu side-menu">
				<div class="close-button"></div>
				<?php $menu_list = wp_nav_menu(array(
					'theme_location' => 'header_menu',
					'container' => '',
					'echo' => false
				));
				echo strip_tags($menu_list, '<ul><li><a>'); ?>
				<div class="header__social">
					<a href="#" class="header__social-item">
						<img src="https://i.ibb.co/xMncycz/facebook.png" alt="facebook">
					</a>
					<a href="#" class="header__social-item">
						<img src="https://i.ibb.co/Thm4WSf/instagram.png" alt="instagram">
					</a>
					<a href="#" class="header__social-item">
						<img src="https://i.ibb.co/GcTvLqb/twitter.png" alt="twitter">
					</a>
				</div>
			</nav>
			<div class="header__menu-button">Menü</div>
		</div>
	</div>
</header>
<?php
/**
 * Created by PhpStorm.
 * User: reuelteodoro
 * Date: 13/08/2016
 * Time: 7:41 PM
 */
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Situla - Bucketlist with a difference</title>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport'/>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<div class="tbl height-100">
    <div class="tbl-row">
        <div id="site-masterhead" class="tbl-cell">
            <div id="site-navbar" class="">
                <div class="container-fluid">

                    <div class="tbl">
                        <div class="tbl-cell middle">
                            <header class="navbar-header" itemscope itemtype="http://schema.org/WPHeader">
                                <a href="#/" class="site-title">
                                    <img src="img/situla.png" alt="">
                                    <span class="sr-only">Situla List</span>
                                </a>
                            </header>
                        </div>
                        <div class="tbl-cell middle right">
                            <nav class="clearfix">
                                <div class="sr-only sr-only-focusable"><a href="#site-content" title="Skip to content">Skip to content</a></div>
                                <ul class="">
                                    <li>
                                        <a class="btn" itemprop="url" href="#/profile">
                                            <span itemprop="name">Profile</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>


                </div>
            </div>

            <?php include 'partials/insight.php' ?>

        </div>
    </div>



<?php
/**
 * Created by PhpStorm.
 * User: reuelteodoro
 * Date: 13/08/2016
 * Time: 10:45 PM
 */
?>


<section id="bucketlist-selection-v2" class="" ng-show="selectItem">

        <div class="container">

            <button type="button" class="close btn btn-default" ng-click="pathTo('/')"><span class="sr-only">Close</span> <i class="glyphicon glyphicon-remove"></i></button>

            <header class="page-header">
                <h1 class="page-title text-center">Add a Goal</h1>
            </header>

            <div class="page-content">
                <p class="text-center">Choose a popular bucketlist item</p>

                <div class="row bucketlist-list">
                    <div class="col-sm-6 col-md-4">

                        <article class="well bucketlist-list-item-v2" ng-click="bucketlist.new({title:'See the Northern Lights', img: 'http://www.bucketlist.net/site_media/media/thumbnails/Anonymous/342/342_jpg_320x320_crop_upscale_detail_q85.jpg', description: 'Seeing the beautiful aura of nature would be very amazing indeed',alreadySaved: 0 })">
                            <div class="img-frame bucketlist-list-item-img">
                                <div class="img-container bucketlist-list-img">
                                    <img src="http://www.bucketlist.net/site_media/media/thumbnails/Anonymous/342/342_jpg_320x320_crop_upscale_detail_q85.jpg" alt="See the Northern Lights">
                                </div>
                                <div class="img-overlay">
                                    <div class="tbl height-100">
                                        <div class="tbl-cell center middle"><p class="h1"><i class="glyphicon glyphicon-plus"></i></p></div>
                                    </div>
                                </div>
                            </div>
                            <div class="bucketlist-list-item-content">
                                <div class="tbl height-100">
                                    <div class="tbl-row">
                                        <div class="tbl-cell top">
                                        </div>
                                    </div>
                                    <div class="tbl-row bottom">
                                        <div class="tbl-cell">
                                            <h3 class="h2 bucketlist-list-title">See the Northern Lights</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                    </div>

                    <div class="col-sm-6 col-md-4">

                        <article class="well bucketlist-list-item-v2" ng-click="bucketlist.new({title:'Sky Diving', img:'http://www.bucketlist.net/site_media/media/thumbnails/Anonymous/19/19_jpg_320x320_crop_upscale_detail_q85.jpg',description: 'A little scared of heights and fancy the thrill of it ',alreadySaved: 0})">
                            <div class="img-frame bucketlist-list-item-img">
                                <div class="img-container bucketlist-list-img">
                                    <img src="http://www.bucketlist.net/site_media/media/thumbnails/Anonymous/19/19_jpg_320x320_crop_upscale_detail_q85.jpg" alt="See the Northern Lights">
                                </div>
                                <div class="img-overlay">
                                    <div class="tbl height-100">
                                        <div class="tbl-cell center middle"><p class="h1"><i class="glyphicon glyphicon-plus"></i></p></div>
                                    </div>
                                </div>
                            </div>
                            <div class="bucketlist-list-item-content">
                                <div class="tbl height-100">
                                    <div class="tbl-row">
                                        <div class="tbl-cell top">
                                        </div>
                                    </div>
                                    <div class="tbl-row bottom">
                                        <div class="tbl-cell">
                                            <h3 class="h2 bucketlist-list-title">Sky Diving</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                    </div>

                    <div class="col-sm-6 col-md-4">

                        <article class="well bucketlist-list-item-v2" ng-click="bucketlist.new({title:'Get a Tattoo', img : 'http://www.bucketlist.net/site_media/media/thumbnails/Anonymous/28/28_jpg_320x320_crop_upscale_detail_q85.jpg', description: 'A tattoo is a commitment. Whatever is is it has to mean the world to me. ', alreadySaved: 0})">
                            <div class="img-frame bucketlist-list-item-img">
                                <div class="img-container bucketlist-list-img">
                                    <img src="http://www.bucketlist.net/site_media/media/thumbnails/Anonymous/28/28_jpg_320x320_crop_upscale_detail_q85.jpg" alt="See the Northern Lights">
                                </div>
                                <div class="img-overlay">
                                    <div class="tbl height-100">
                                        <div class="tbl-cell center middle"><p class="h1"><i class="glyphicon glyphicon-plus"></i></p></div>
                                    </div>
                                </div>
                            </div>
                            <div class="bucketlist-list-item-content">
                                <div class="tbl height-100">
                                    <div class="tbl-row">
                                        <div class="tbl-cell top">
                                        </div>
                                    </div>
                                    <div class="tbl-row bottom">
                                        <div class="tbl-cell">
                                            <h3 class="h2 bucketlist-list-title">Get a Tattoo</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div class="col-sm-6 col-md-4">

                        <article class="well bucketlist-list-item-v2" ng-click="bucketlist.new({title:'Swim with Dolphins', img:'http://www.bucketlist.net/site_media/media/thumbnails/Anonymous/25/25_jpeg_320x320_crop_upscale_detail_q85.jpg', description: 'Provided that they\'re in a safe location with plenty of room and the conditions they deserve.', alreadySaved: 0})">
                            <div class="img-frame bucketlist-list-item-img">
                                <div class="img-container bucketlist-list-img">
                                    <img src="http://www.bucketlist.net/site_media/media/thumbnails/Anonymous/25/25_jpeg_320x320_crop_upscale_detail_q85.jpg" alt="See the Northern Lights">
                                </div>
                                <div class="img-overlay">
                                    <div class="tbl height-100">
                                        <div class="tbl-cell center middle"><p class="h1"><i class="glyphicon glyphicon-plus"></i></p></div>
                                    </div>
                                </div>
                            </div>
                            <div class="bucketlist-list-item-content">
                                <div class="tbl height-100">
                                    <div class="tbl-row">
                                        <div class="tbl-cell top">
                                        </div>
                                    </div>
                                    <div class="tbl-row bottom">
                                        <div class="tbl-cell">
                                            <h3 class="h2 bucketlist-list-title">Swim with Dolphins</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                    </div>

                    <div class="col-sm-6 col-md-4">

                        <article class="well bucketlist-list-item-v2" ng-click="bucketlist.new({title:'Go on a Cruise', img: 'http://www.bucketlist.net/site_media/media/thumbnails/Anonymous/35/35_JPG_320x320_crop_upscale_detail_q85.jpg', description: 'I wanted to experience the fun and party in a big ship. And see place from the ocean view. ', alreadySaved: 0})">
                            <div class="img-frame bucketlist-list-item-img">
                                <div class="img-container bucketlist-list-img">
                                    <img src="http://www.bucketlist.net/site_media/media/thumbnails/Anonymous/35/35_JPG_320x320_crop_upscale_detail_q85.jpg" alt="See the Northern Lights">
                                </div>
                                <div class="img-overlay">
                                    <div class="tbl height-100">
                                        <div class="tbl-cell center middle"><p class="h1"><i class="glyphicon glyphicon-plus"></i></p></div>
                                    </div>
                                </div>
                            </div>
                            <div class="bucketlist-list-item-content">
                                <div class="tbl height-100">
                                    <div class="tbl-row">
                                        <div class="tbl-cell top">
                                        </div>
                                    </div>
                                    <div class="tbl-row bottom">
                                        <div class="tbl-cell">
                                            <h3 class="h2 bucketlist-list-title">Go on a Cruise</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                    </div>

                    <div class="col-sm-6 col-md-4">

                        <article class="well bucketlist-list-item-v2" ng-click="bucketlist.new({title:'Other', img :'http://www.bucketlist.net/site_media/media/thumbnails/Anonymous/410/410_jpg_320x320_crop_upscale_detail_q85.jpg', alreadySaved: 0})">
                            <div class="img-frame bucketlist-list-item-img">
                                <div class="img-container bucketlist-list-img">
                                    <img src="http://www.bucketlist.net/site_media/media/thumbnails/Anonymous/410/410_jpg_320x320_crop_upscale_detail_q85.jpg" alt="See the Northern Lights">
                                </div>
                                <div class="img-overlay">
                                    <div class="tbl height-100">
                                        <div class="tbl-cell center middle"><p class="h1"><i class="glyphicon glyphicon-plus"></i></p></div>
                                    </div>
                                </div>
                            </div>
                            <div class="bucketlist-list-item-content">
                                <div class="tbl height-100">
                                    <div class="tbl-row">
                                        <div class="tbl-cell top">
                                        </div>
                                    </div>
                                    <div class="tbl-row bottom">
                                        <div class="tbl-cell">
                                            <h3 class="h2 bucketlist-list-title">Other (Add your own)</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                    </div>

                </div>
            </div>
        </div>

</section>


<?php
/**
 * Created by PhpStorm.
 * User: reuelteodoro
 * Date: 14/08/2016
 * Time: 4:22 PM
 */
?>
<section id="bucketlist" ng-class="{fade:selectItem}">
    <div class="container">
        <header class="page-header">
            <h1 class="page-title text-center">Your Bucketlist</h1>
        </header>

        <div class="page-content">

            <?php include 'bucketlistInfo.php' ?>

            <div class="row bucketlist-list">
                <div class="col-sm-6 col-md-4" ng-repeat="(k,v) in bucketlist.get('_data') track by $index">

                    <article class="well bucketlist-list-item-v2" tabindex="1" ng-click="bucketlist.open(k)">
                        <div class="img-frame bucketlist-list-item-img">
                            <div class="img-container bucketlist-list-img">
                                <img alt="{{v.title}}" ng-src="{{v.img}}">
                            </div>
                            <div class="img-overlay"></div>
                        </div>
                        <div class="bucketlist-list-item-content">
                            <div class="bucketlist-list-item-badges" ng-show="(v.alreadySaved / v.totalCost * 100) >= 100">
                                <p class="complete"><span class="sr-only">Ready to Complete</span> <i class="glyphicon glyphicon-ok"></i></p>
                                <!--<p class="message">99 <span class="sr-only">Message(s)</span></p>-->
                            </div>

                            <div class="tbl height-100">
                                <div class="tbl-row">
                                    <div class="tbl-cell top">
                                        <p class="h4 bucketlist-list-item-date">{{v.date | date : 'MMM d, y'}}</p>
                                    </div>
                                </div>
                                <div class="tbl-row bottom">
                                    <div class="tbl-cell">
                                        <h3 class="h2 bucketlist-list-title">{{v.title}}</h3>
                                        <p class="h4 bucketlist-list-saving">Saved {{v.alreadySaved | currency}} <span class="small">of {{v.totalCost | currency}}</span></p>
                                    </div>
                                </div>
                            </div>

                            <div class="bucketlist-list-progress" ng-style="{ width: v.alreadySaved / v.totalCost * 100 + '%'}"></div>
                        </div>
                    </article>

                </div>

                <div class="col-sm-6 col-md-4">
                    <article id="bucketlist-list-item-add" class="well bucketlist-list-item-add-v2" tabindex="1" ng-click="pathTo('/select')">
                        <div class="tbl-sm">
                            <div class="tbl-cell middle center">
                                <div class="bucketlist-list-item-content">
                                    <div class="left-cell cell"><i class="glyphicon glyphicon-plus"></i></div>
                                    <div class="right-cell cell"><h3 class="bucketlist-list-title">Add a Goal</h3></div>
                                </div>

                            </div>
                        </div>

                    </article>
                </div>
            </div>
        </div>
    </div>
</section>

<?php include 'goalSelect.php' ?>

<section id="complete-bucketlist" ng-class="{fade:selectItem}">
    <div class="container">

        <header class="page-header">
            <h1 class="page-title text-center">Completed <span class="sr-only">Bucketlist</span></h1>
        </header>

        <div class="page-content">

            <div class="row bucketlist-list">

                <div class="col-sm-6 col-md-4" ng-repeat="(k,v) in completeBucketlist.get('_data') track by $index">

                    <article class="well bucketlist-list-item-v2" tabindex="1" ng-click="completeBucketlist.open(k)">
                        <div class="img-frame bucketlist-list-item-img">
                            <div class="img-container bucketlist-list-img">
                                <img alt="{{v.title}}" ng-src="{{v.img}}">
                            </div>
                            <div class="img-overlay"></div>
                        </div>
                        <div class="bucketlist-list-item-content">
                            <div class="bucketlist-list-item-badges" ng-show="(v.alreadySaved / v.totalCost * 100) >= 100">
                                <p class="complete"><span class="sr-only">Completed</span> <i class="glyphicon glyphicon-ok"></i></p>
                                <!--<p class="message">99 <span class="sr-only">Message(s)</span></p>-->
                            </div>

                            <div class="tbl height-100">
                                <div class="tbl-row">
                                    <div class="tbl-cell top">
                                        <p class="h4 bucketlist-list-item-date">{{v.date | date : 'MMM d, y'}}</p>
                                    </div>
                                </div>
                                <div class="tbl-row bottom">
                                    <div class="tbl-cell">
                                        <h3 class="h2 bucketlist-list-title">{{v.title}}</h3>
                                        <p class="h4 bucketlist-list-saving">Saved {{v.alreadySaved | currency}} <span class="small">of {{v.totalCost | currency}}</span></p>
                                    </div>
                                </div>
                            </div>

                            <div class="bucketlist-list-progress" ng-style="{ width: v.alreadySaved / v.totalCost * 100 + '%'}"></div>

                        </div>
                    </article>

                </div>


            </div>
        </div>

    </div>
</section>
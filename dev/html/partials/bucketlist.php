<?php
/**
 * Created by PhpStorm.
 * User: reuelteodoro
 * Date: 14/08/2016
 * Time: 4:22 PM
 */
?>


<section id="bucketlist">
    <header class="page-header">
        <h1 class="page-title text-center">Your Bucketlist</h1>
    </header>

    <div class="page-content">
        <p class="text-center">Based on your needs you to contribute $999,999.00 a week to achieve your goals</p>

        <div class="alert alert-info text-center" ng-show="false">
            <p class="">Warning you do not earn enough per week to achieve your goals.</p>
            <br>
            <button class="btn btn-primary">Click here to optimize your goals</button>
        </div>

        <div class="row bucketlist-list">
            <div class="col-sm-6 col-md-4" ng-repeat="(k,v) in bucketlist.model track by $index">
                <article class="well img-frame bucketlist-list-item" tabindex="1" ng-click="bucketlist.update(bucketlist.model[k])">
                    <div class="bucketlist-list-badges" ng-show="(v.alreadySaved / v.totalCost * 100) >= 100">
                        <p class="complete"><span class="sr-only">Ready to Complete</span> <i class="glyphicon glyphicon-ok"></i></p>
<!--                        <p class="message">99 <span class="sr-only">Message(s)</span></p>-->
                    </div>
                    <div class="img-container bucketlist-list-img">
                        <img  alt="{{v.title}}" ng-src="{{v.img}}">
                    </div>
                    <div class="img-content bucketlist-list-item-content tbl height-100" data-min-height="190px">
                        <div class="tbl-row">
                            <div class="tbl-cell top">
                                <p class="h4">{{v.date}}</p>
                            </div>
                        </div>
                        <div class="tbl-row bottom">
                            <div class="tbl-cell">
                                <h3 class="h2 bucketlist-list-title">{{v.title}}</h3>
                                <p class="h4 bucketlist-list-saving" ><span ng-show="v.alreadySaved">Saved</span> {{v.alreadySaved | currency}} <span class="small" ng-show="v.totalCost"><span ng-show="v.alreadySaved">of</span> {{v.totalCost | currency}}</span></p>
                            </div>
                        </div>

                    </div>
                    <div class="bucketlist-list-progress" style=" width: {{v.alreadySaved / v.totalCost * 100}}%;"></div>
                    <div class="img-overlay"></div>
                </article>
            </div>

            <div class="col-sm-6 col-md-4">
                <article class="well img-frame bucketlist-list-item-add" tabindex="1" ng-click="pathTo('/select')">
                    <div class="img-content bucketlist-list-item-content tbl height-100" data-min-height="190px">
                        <div class="tbl-row">
                            <div class="tbl-cell height-100 center middle">
                                <h3 class="bucketlist-list-title">Add a Goal</h3>
                                <i class="glyphicon glyphicon-plus"></i>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</section>

<section id="complete-bucketlist">
    <header class="page-header">
        <h1 class="page-title text-center">Completed <span class="sr-only">Bucketlist</span></h1>
    </header>

    <div class="page-content">

        <div class="row bucketlist-list">
            <div class="col-sm-6 col-md-4" ng-repeat="(k,v) in completeBucketlist.model track by $index">
                <article class="well img-frame bucketlist-list-item" tabindex="1" ng-click="completeBucketlist.update(completeBucketlist.model[k])">
                    <div class="bucketlist-list-badges">
                        <p class="complete"><span class="sr-only">Complete</span> <i class="glyphicon glyphicon-ok"></i></p>
<!--                        <p class="message">99 <span class="sr-only">Message(s)</span></p>-->
                    </div>
                    <div class="img-container bucketlist-list-img">
                        <img  alt="{{v.title}}" ng-src="{{v.img}}">
                    </div>
                    <div class="img-content bucketlist-list-item-content tbl height-100" data-min-height="190px">
                        <div class="tbl-row">
                            <div class="tbl-cell top">
                                <p class="h4">{{v.date}}</p>
                            </div>
                        </div>
                        <div class="tbl-row bottom">
                            <div class="tbl-cell">
                                <h3 class="h2 bucketlist-list-title">{{v.title}}</h3>
                                <p class="h4 bucketlist-list-saving"><span ng-show="v.alreadySaved">Saved</span> {{v.alreadySaved | currency}} <span class="small" ng-show="v.totalCost"><span ng-show="v.alreadySaved">of</span>  {{v.totalCost | currency}}</span></p>
                            </div>
                        </div>

                    </div>
                    <div class="bucketlist-list-progress" style=" width: {{v.alreadySaved / v.totalCost * 100}}%;"></div>
                    <div class="img-overlay"></div>
                </article>
            </div>
        </div>

    </div>
</section>
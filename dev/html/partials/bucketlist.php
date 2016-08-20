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

        <?php include 'bucketlistInfo.php' ?>

        <div class="bucketlist-add">
            <div class="well">
                <form class="tbl-sm height-100">
                    <div class="tbl-cell bottom">
                        <div class="non-hoverable">
                            <p class="h3">Add a Goal</p>
                        </div>
                    </div>

                    <div class="tbl-cell">

                        <div class="form-group hoverable">
                            <label for="title" class="control-label">Title*<span class="sr-only">required</span> <i class="glyphicon glyphicon-question-sign" tooltip data-toggle="tooltip" data-placement="top" title="The Title of your Goal"><span class="sr-only">description</span></i></label>
                            <input type="text" name="title" id="title" class="form-control">
                        </div>
                    </div>
                    <div class="tbl-cell">
                        <div class="form-group hoverable">
                            <label for="total-cost" class="control-label">Total Cost*<span class="sr-only">required</span> <i class="glyphicon glyphicon-question-sign" tooltip data-toggle="tooltip" data-placement="top" title="The Total Cost of your Goal"><span class="sr-only">description</span></i></label>

                            <div class="input-group">
                                <span class="input-group-addon">$</span>
                                <input type="text" name="total-cost" id="total-cost" class="form-control" ng-model="modal.model.totalCost" currency>
                            </div>
                        </div>
                    </div>
                    <div class="tbl-cell hoverable">
                        <div class="form-group">
                            <label for="target-date" class="control-label">Target Date*<span class="sr-only">required</span> <i class="glyphicon glyphicon-question-sign" tooltip data-toggle="tooltip" data-placement="top" title="The Date you Expect to Complete your Goal"><span class="sr-only">description</span></i></label>
                            <input type="text" name="target-date" id="target-date" class="form-control" ng-model="modal.model.date" date-picker>
                        </div>
                    </div>
                    <div class="tbl-cell bottom hoverable">
                        <div class="form-group ">
                            <input type="submit" value="Save" class="btn btn-block btn-primary">
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="row bucketlist-list">
            <div class="col-sm-6 col-md-4" ng-repeat="(k,v) in bucketlist.get('_data') track by $index">
                <article class="well img-frame bucketlist-list-item" tabindex="1" ng-click="bucketlist.open(k)">
                    <div class="bucketlist-list-badges" ng-show="(v.alreadySaved / v.totalCost * 100) >= 100">
                        <p class="complete"><span class="sr-only">Ready to Complete</span> <i class="glyphicon glyphicon-ok"></i></p>
<!--                        <p class="message">99 <span class="sr-only">Message(s)</span></p>-->
                    </div>
                    <div class="img-container bucketlist-list-img">
                        <img  alt="{{v.title}}" ng-src="{{v.img}}">
                    </div>
                    <div class="img-content bucketlist-list-item-content tbl height-100" min-height="190">
                        <div class="tbl-row">
                            <div class="tbl-cell top">
                                <p class="h4">{{v.date | date : 'MMM d, y'}}</p>
                            </div>
                        </div>
                        <div class="tbl-row bottom">
                            <div class="tbl-cell">
                                <h3 class="h2 bucketlist-list-title">{{v.title}}</h3>
                                <p class="h4 bucketlist-list-saving" >Saved {{v.alreadySaved | currency}} <span class="small">of {{v.totalCost | currency}}</span></p>
                            </div>
                        </div>

                    </div>
                    <div class="bucketlist-list-progress" style=" width: {{v.alreadySaved / v.totalCost * 100}}%;"></div>
                    <div class="img-overlay"></div>
                </article>
            </div>

            <div class="col-sm-6 col-md-4">
                <article class="well img-frame bucketlist-list-item-add" tabindex="1" ng-click="pathTo('/select')">
                    <div class="img-content bucketlist-list-item-content tbl height-100" min-height="190">
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

            <div class="col-sm-6 col-md-4" ng-repeat="(k,v) in completeBucketlist.get('_data') track by $index">
                <article class="well img-frame bucketlist-list-item" tabindex="1" ng-click="completeBucketlist.open(k)">
                    <div class="bucketlist-list-badges">
                        <p class="complete"><span class="sr-only">Completed</span> <i class="glyphicon glyphicon-ok"></i></p>
                        <!--                        <p class="message">99 <span class="sr-only">Message(s)</span></p>-->
                    </div>
                    <div class="img-container bucketlist-list-img">
                        <img  alt="{{v.title}}" ng-src="{{v.img}}">
                    </div>
                    <div class="img-content bucketlist-list-item-content tbl height-100" min-height="190">
                        <div class="tbl-row">
                            <div class="tbl-cell top">
                                <p class="h4">{{v.date | date : 'MMM d, y'}}</p>
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

        </div>

    </div>
</section>
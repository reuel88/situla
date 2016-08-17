<?php
/**
 * Created by PhpStorm.
 * User: reuelteodoro
 * Date: 14/08/2016
 * Time: 3:08 PM
 */
?>
<!-- start of, bucketlist-modal-->
<div class="bucketlist-modal" ng-controller="modal.ctrl" ng-show="modal.attrs.open">
    <!-- start of, scrollable -->
    <div class="scrollable">
        <div class="tbl height-100">
            <div class="tbl-cell middle center">
                <div class="container text-left">
                    <div class="row" modal>
                        <div class="col-sm-push-3 col-sm-6">
                            <section class="well bucketlist-item">

                                <form class="" enctype="multipart/form-data" ng-submit="modal.submit()">
                                    <div class="visible-xs-block visible-sm-block visible-md-block visible-lg-block clearfix">
                                        <input type="button" value="Delete your Goal" class="btn btn-link" ng-click="modal.delete()">
                                        <input type="button" value="Close" class="pull-right btn btn-default" ng-click="modal.close()">
                                    </div>


                                    <!-- start of, img-->
                                    <div class="non-hoverable">
                                        <div class="img-frame bucketlist-item-img">
                                            <div class="img-container">
                                                <img alt="{{modal.model.title}}" ng-src="{{modal.model.img}}">
                                            </div>

                                            <div class="img-content bucketlist-item-img-content tbl height-100" ng-click="(modal.model.edit) ? (modal.attrs.editing = true) : (modal.attrs.editing = false)">
                                                <div class="tbl-cell height-100 bottom right">
                                                    <div class="form-group container-fluid" ng-show="!modal.model.edit || modal.attrs.editing">
                                                        <label for="img" class="btn btn-default">Replace Image</label>

                                                        <input type="file" id="img" class="sr-only" file-upload="modal.model.img">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of, title-->


                                    <!-- start of, title-->
                                    <div ng-class="modal.model.new || modal.attrs.editing? 'hoverable' : 'expand-hoverable'">
                                        <h1 class="page-title h2 bucketlist-item-title pointer" ng-show="!modal.model.new && !modal.attrs.editing" ng-click="modal.attrs.editing = true">{{modal.model.title}}</h1>

                                        <div class="form-group" ng-show="!modal.model.edit || modal.attrs.editing">
                                            <label for="title" class="control-label">Title <i class="glyphicon glyphicon-question-sign" tooltip data-toggle="tooltip" data-placement="top" title="The Title of your Goal"><span class="sr-only">description</span></i></label>
                                            <input type="text" name="title" id="title" class="form-control" ng-model="modal.model.title">
                                        </div>
                                    </div>
                                    <!-- end of, title-->

                                    <!-- start of, description-->
                                    <div ng-class="modal.model.new || modal.attrs.editing? 'hoverable' : 'expand-hoverable'">
                                        <p class="bucketlist-item-description pointer" ng-show="!modal.model.new && !modal.attrs.editing" ng-click="modal.attrs.editing = true">{{modal.model.description}}</p>

                                        <div class="form-group" ng-show="!modal.model.edit ||  modal.attrs.editing">
                                            <label for="description" class="control-label">Short Description <i class="glyphicon glyphicon-question-sign" tooltip data-toggle="tooltip" data-placement="top" title="Short Description of your Goal"><span class="sr-only">description</span></i></label>
                                            <textarea name="description" id="description" cols="30" rows="3" class="form-control" ng-model="modal.model.description"></textarea>
                                        </div>
                                    </div>
                                    <!-- end of, description-->

                                    <!-- start of, hr-->
                                    <div class="non-hoverable-side">
                                        <div class="bucketlist-list-progress" ng-show="!modal.model.new && !modal.attrs.editing">
                                            <div class="bar" style=" width: {{modal.model.alreadySaved / modal.model.totalCost * 100}}%;"></div>
                                            <p ng-show="((modal.model.alreadySaved || 0)/ (modal.model.totalCost|| 0) * 100) >= 100"><i class="glyphicon glyphicon-ok"></i></p>
                                        </div>
                                    </div>
                                    <!-- end of, hr-->


                                    <div class="tbl-sm expand-hoverable cost-date">
                                        <div class="tbl-cell-6">
                                            <p class="h4 bucketlist-item-savings pointer" ng-show="!modal.model.new && !modal.attrs.editing" ng-click="modal.attrs.editing = true">{{modal.model.alreadySaved | currency}} <span class="small" ng-show="modal.model.totalCost"><span ng-show="modal.model.alreadySaved">of</span> {{modal.model.totalCost | currency}}</span></p>
                                        </div>
                                        <div class="tbl-cell-6 right">
                                            <p class="h4 bucketlist-item-date pointer" ng-show="!modal.model.new && !modal.attrs.editing" ng-click="modal.attrs.editing = true">{{modal.model.date | date : 'MMM d, y' }}</p>
                                        </div>
                                    </div>


                                    <!-- start of, cost-->
                                    <div ng-class="modal.model.new || modal.attrs.editing? 'hoverable' : 'expand-hoverable'">

                                        <div class="form-group" ng-show="!modal.model.edit || modal.attrs.editing ">
                                            <label for="already-saved" class="control-label">Already Saved <i class="glyphicon glyphicon-question-sign" tooltip data-toggle="tooltip" data-placement="top" title="How much have you saved towards your Goal"><span class="sr-only">description</span></i></label>

                                            <div class="input-group">
                                                <span class="input-group-addon">$</span>
                                                <input type="text" name="already-saved" id="already-saved" class="form-control" ng-model="modal.model.alreadySaved" currency>
                                            </div>
                                        </div>

                                        <div class="form-group" ng-show="!modal.model.edit || modal.attrs.editing ">
                                            <label for="total-cost" class="control-label">Total Cost <i class="glyphicon glyphicon-question-sign" tooltip data-toggle="tooltip" data-placement="top" title="The Total Cost of your Goal"><span class="sr-only">description</span></i></label>

                                            <div class="input-group">
                                                <span class="input-group-addon">$</span>
                                                <input type="text" name="total-cost" id="total-cost" class="form-control" ng-model="modal.model.totalCost" currency>
                                            </div>
                                        </div>


                                    </div>
                                    <!-- end of, cost-->


                                    <!-- start of, date-->
                                    <div ng-class="modal.model.new || modal.attrs.editing ? 'hoverable' : 'expand-hoverable'">

                                        <div class="form-group" ng-show="!modal.model.edit || modal.attrs.editing">
                                            <label for="target-date" class="control-label">Target Date <i class="glyphicon glyphicon-question-sign" tooltip data-toggle="tooltip" data-placement="top" title="The Date you Expect to Complete your Goal"><span class="sr-only">description</span></i></label>
                                            <input type="text" name="target-date" id="target-date" class="form-control" ng-model="modal.model.date" date-picker='{"singleDatePicker":true,"showDropdowns":true, "locale":{"format":"MMM DD, YYYY"}}'>
                                            <!--                                            <input type="date" name="target-date" id="target-date" class="form-control" ng-model="modal.model.date" date-picker='{"singleDatePicker":true,"showDropdowns":true, "locale":{"format":"x"}}'>-->
                                            <!--                                            <input type="date" name="target-date" id="target-date" class="form-control" ng-model="modal.model.date" format-date>-->
                                        </div>

                                    </div>
                                    <!-- end of, date-->

                                    <div class="non-hoverable" ng-show="!modal.model.new && !modal.attrs.editing && !modal.model.complete">
                                        <div class="form-group text-center ">
                                            <input type="button" value="Complete your Goal" class="btn btn-default" ng-click="modal.complete()" ng-class="!(((modal.model.alreadySaved || 0)/ (modal.model.totalCost|| 0) * 100) >= 100) ?'btn-default':'btn-primary'">
                                        </div>

                                        <div class="contribute alert alert-info" ng-show="!(((modal.model.alreadySaved || 0)/ (modal.model.totalCost|| 0) * 100) >= 100) ">
                                            <div class="form-group">
                                                <label for="contribute" class="control-label">Contribute to my Savings <i class="glyphicon glyphicon-question-sign" tooltip data-toggle="tooltip" data-placement="top" title="Contribute more money to your goal"><span class="sr-only">description</span></i></label>

                                                <div class="input-group">
                                                    <span class="input-group-addon">$</span>
                                                    <input type="text" name="contribute" id="contribute" class="form-control" ng-model="modal.model._contribute" currency>
                                                    <div class="input-group-btn">
                                                        <input type="button" value="Save" class="btn btn-primary" ng-click="modal.contribute()">

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <!-- start of, save-->
                                    <div class="form-group non-hoverable-side" ng-show="modal.model.new || modal.attrs.editing">
                                        <input type="submit" value="Save" class="btn btn-primary">
                                        <input type="button" value="Cancel" class=" btn btn-link" ng-show="modal.model.new " ng-click="modal.close()">
                                        <input type="button" value="Cancel" class=" btn btn-link" ng-show="!modal.model.new || modal.attrs.editing" ng-click="modal.cancel();">

                                        <hr>
                                    </div>
                                    <!-- esnd of, save-->

                                </form>

                                <?php include 'todoList.php' ?>

                                <hr>

                                <?php include 'comments.php' ?>

                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end of, scrollable -->
</div>
<!-- end of, bucketlist-modal-->

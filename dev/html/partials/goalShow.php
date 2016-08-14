<?php
/**
 * Created by PhpStorm.
 * User: reuelteodoro
 * Date: 14/08/2016
 * Time: 3:08 PM
 */
?>
<div class="row">
    <div class="col-sm-push-3 col-sm-6">
        <section class="well bucketlist-item">
            <div class="visible-xs-block visible-sm-block visible-md-block visible-lg-block clearfix">
                <button class="pull-right btn btn-default" ng-click="modal.close()">Close</button>
            </div>
            <form enctype="multipart/form-data" ng-submit="modal.submit()">

                <div class="non-hoverable">
                    <div class="img-frame bucketlist-item-img">
                        <div class="img-container">
                            <img alt="{{modal.model.title}}" ng-src="{{modal.model.img}}">
                        </div>

                        <div class="img-content bucketlist-item-img-content tbl height-100">
                            <div class="tbl-row">
                                <div class="tbl-cell height-100 bottom right">
                                    <div class="form-group container-fluid">
                                        <label for="img" class="btn btn-default">Replace Image</label>

                                        <input type="file" id="img" class="sr-only" data-model="modal.model.img" file-upload>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div ng-class="modal.model.new ? 'hoverable' : 'expand-hoverable'">
                    <h1 class="page-title h2 bucketlist-item-title" ng-show="!modal.model.new">{{modal.model.title}}</h1>

                    <div class="form-group">
                        <label for="title" class="control-label">Title <i class="glyphicon glyphicon-question-sign" tooltip data-toggle="tooltip" data-placement="top" title="The Title of your Goal"><span class="sr-only">description</span></i></label>
                        <input type="text" name="title" id="title" class="form-control" ng-model="modal.model.title">
                    </div>

                    <div ng-show="!modal.model.new">
                        <input type="submit" value="Save" class="btn btn-primary">
                        <input type="button" value="Cancel" class="btn btn-link">
                    </div>

                </div>

                <div ng-class="modal.model.new ? 'hoverable' : 'expand-hoverable'">
                    <p class="bucketlist-item-description" ng-show="!modal.model.new">{{modal.model.description}}</p>

                    <div class="form-group">
                        <label for="description" class="control-label">Short Description <i class="glyphicon glyphicon-question-sign" tooltip data-toggle="tooltip" data-placement="top" title="Short Description of your Goal"><span class="sr-only">description</span></i></label>
                        <textarea name="description" id="description" cols="30" rows="3" class="form-control" ng-model="modal.model.description"></textarea>
                    </div>

                    <div ng-show="!modal.model.new">
                        <input type="submit" value="Save" class="btn btn-primary">
                        <input type="button" value="Cancel" class="btn btn-link">
                    </div>

                </div>

                <div ng-class="modal.model.new ? 'hoverable' : 'expand-hoverable'">

                    <p class="h3 bucketlist-item-savings" ng-show="!modal.model.new">{{modal.model.alreadySaved | currency}} <span class="small">of {{modal.model.totalCost | currency}}</span></p>

                    <div class="form-group">
                        <label for="already-saved" class="control-label">Already Saved <i class="glyphicon glyphicon-question-sign" tooltip data-toggle="tooltip" data-placement="top" title="How much have you saved towards your Goal"><span class="sr-only">description</span></i></label>

                        <div class="input-group">
                            <span class="input-group-addon">$</span>
                            <input type="text" name="already-saved" id="already-saved" class="form-control" ng-model="modal.model.alreadySaved" currency>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="total-cost" class="control-label">Total Cost <i class="glyphicon glyphicon-question-sign" tooltip data-toggle="tooltip" data-placement="top" title="The Total Cost of your Goal"><span class="sr-only">description</span></i></label>

                        <div class="input-group">
                            <span class="input-group-addon">$</span>
                            <input type="text" name="total-cost" id="total-cost" class="form-control" ng-model="modal.model.totalCost" currency>
                        </div>
                    </div>

                    <div ng-show="!modal.model.new">
                        <input type="submit" value="Save" class="btn btn-primary">
                        <input type="button" value="Cancel" class="btn btn-link">
                    </div>
                </div>

                <div ng-class="modal.model.new ? 'hoverable' : 'expand-hoverable'">

                    <p class="h3 bucketlist-item-date" ng-show="!modal.model.new">July 10</p>

                    <div class="form-group">
                        <label for="target-date" class="control-label">Target Date <i class="glyphicon glyphicon-question-sign" tooltip data-toggle="tooltip" data-placement="top" title="The Date you Expect to Complete your Goal"><span class="sr-only">description</span></i></label>
                        <input type="text" name="target-date" id="target-date" class="form-control" ng-model="modal.model.date" date-picker='{"singleDatePicker":true,"showDropdowns":true, "locale":{"format":"Do of MMM, YYYY"}}'>
                    </div>
                    <div ng-show="!modal.model.new">
                        <input type="submit" value="Save" class="btn btn-primary">
                        <input type="button" value="Cancel" class="btn btn-link">
                    </div>
                </div>

                <div class="non-hoverable" ng-show="!modal.model.new">
                    <div class="form-group text-center ">
                        <input type="button" value="Complete Your Goal" class="btn btn-lg btn-primary">
                    </div>
                    <div class="form-group text-center">
                        <input type="button" value="Contributions to Your Goal" class="btn btn-default">
                    </div>
                </div>

                <div class="form-group non-hoverable" ng-show="modal.model.new">
                    <input type="submit" value="Save" class="btn btn-lg btn-primary">
                </div>

            </form>

            <?php include 'html/partials/todoList.php' ?>
            <?php include 'html/partials/comments.php' ?>

        </section>
    </div>
</div>

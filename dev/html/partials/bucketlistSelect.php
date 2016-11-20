<?php
/**
 * Created by PhpStorm.
 * User: reuelteodoro
 * Date: 21/08/2016
 * Time: 3:02 PM
 */
?>

<div class="bucketlist-add active">
    <div class="bucketlist-add-modal">
        <div class="tbl height-100">
            <div class="tbl-cell middle center">
                <div class="container">
                    <div class="well">
                        <form class="tbl-md height-100">
                            <div class="tbl-cell bottom">
                                <div class="non-hoverable">
                                    <p class="h3">Add a Goal</p>
                                </div>
                            </div>

                            <div class="tbl-cell">

                                <div class="form-group hoverable">
                                    <label for="title" class="control-label">Title*<span class="sr-only">required</span> <i class="glyphicon glyphicon-question-sign" tooltip data-toggle="tooltip" data-placement="top" title="The Title of my goal"><span class="sr-only">description</span></i></label>
                                    <input type="text" name="title" id="title" class="form-control">
                                </div>
                            </div>
                            <div class="tbl-cell">
                                <div class="form-group hoverable">
                                    <label for="total-cost" class="control-label">Total Cost*<span class="sr-only">required</span> <i class="glyphicon glyphicon-question-sign" tooltip data-toggle="tooltip" data-placement="top" title="The Total Cost of my goal"><span class="sr-only">description</span></i></label>

                                    <div class="input-group">
                                        <span class="input-group-addon">$</span>
                                        <input type="text" name="total-cost" id="total-cost" class="form-control" ng-model="modal.model.totalCost" currency>
                                    </div>
                                </div>
                            </div>
                            <div class="tbl-cell hoverable">
                                <div class="form-group">
                                    <label for="target-date" class="control-label">Target Date*<span class="sr-only">required</span> <i class="glyphicon glyphicon-question-sign" tooltip data-toggle="tooltip" data-placement="top" title="The Date I expect to complete my goal"><span class="sr-only">description</span></i></label>
                                    <input type="text" name="target-date" id="target-date" class="form-control" ng-model="modal.model.date" date-picker>
                                </div>
                            </div>
                            <div class="tbl-cell bottom hoverable">
                                <div class="form-group ">
                                    <input type="submit" value="Save" class="btn btn-primary save">
                                    <input type="button" value="Cancel" class="btn btn-link cancel">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


</div>

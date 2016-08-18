<?php
/**
 * Created by PhpStorm.
 * User: reuelteodoro
 * Date: 18/08/2016
 * Time: 11:39 PM
 */
?>

<div class="well bucketlist-info">
    <div class="row">
        <div class="col-sm-6">
            <p class="h4 ">Based on your needs, you need to contribute
                <br>
                <br>
                <span class="h1">{{goal.model.totalWeeklyContribution | currency}}</span>
                <br>
                <br>
                a week to achieve your goals.</p>
        </div>
        <div class="col-sm-6">
            <form class="contribute-info" ng-submit="goal.contribute()">

                <p class="h2"><span class="small">Total saved</span> <br>{{goal.model.totalAlreadySaved | currency}} <span class="small">of&nbsp;{{goal.model.totalCost | currency}}</span></p>


                <div class="form-group ">
                    <label for="contribute" class="control-label">Contribute to your Savings <i class="glyphicon glyphicon-question-sign" tooltip data-toggle="tooltip" data-placement="top" title="Contribute more money to your goal"><span class="sr-only">description</span></i></label>

                    <div class="input-group">
                        <span class="input-group-addon">$</span>
                        <input type="text" name="contribute" id="contribute" class="form-control" ng-model="goal.contributeModel.contribute" currency>
                        <div class="input-group-btn">
                            <input type="submit" value="Save" class="btn btn-primary">
                        </div>
                    </div>
                </div>
            </form>
        </div>


    </div>


</div>

<div class="alert alert-info text-center" ng-show="goal.model.weeklyCashFlow < goal.model.totalWeeklyContribution">
    <p class="">Warning you do not earn enough per week to achieve your goals.</p>
    <br>
    <button class="btn btn-primary" ng-click="goal.optimize()">Click here to optimize your goals</button>
</div>


<?php
/**
 * Created by PhpStorm.
 * User: reuelteodoro
 * Date: 13/08/2016
 * Time: 9:20 PM
 */
?>

<div class="row">
    <div class="col-sm-push-3 col-sm-6">
        <section class="well">

            <header class="home-header page-header">
                <hgroup>
                    <h1 class="page-title text-center">Situla List</h1>
                    <h2 class="page-subtitle text-center small">We’re a bucketlist with a difference.</h2>
                </hgroup>
            </header>

            <div class="home-body page-body">

                <p class="text-center">We actually believe in reaching your goals,
                    And sometimes your goals take money.</p>
                <p class="text-center">Completing your bucketlist can be as simple as
                    budgeting your money. That's why we need to ask what is your average income?</p>

                <form ng-submit="user.saveSpending()">
                    <div class="form-group hoverable">
                        <label for="income" class="control-label">Income <i class="glyphicon glyphicon-question-sign" tooltip data-toggle="tooltip" data-placement="top" title="Your average income"><span class="sr-only">description</span></i></label>

                        <div class="input-group input-select">
                            <span class="input-group-addon">$</span>
                            <input type="text" name="income" id="income" class="form-control" ng-model="user.model.income" ng-change="user.calCashFlow()" currency>


                            <label for="incomeFreq" class="sr-only">Income Frequency</label>
                            <select name="incomeFreq" id="incomeFreq" class="form-control" ng-model="user.model.incomeFreq" ng-change="user.calCashFlow()" convert-to-integer>
                                <option value="52">Weekly</option>
                                <option value="26">Fortnightly</option>
                                <option value="12">Monthly</option>
                                <option value="1">Yearly</option>
                            </select>
                        </div>
                    </div>

                    <div class="alert alert-warning" ng-show="user.errors.income">
                        <p>{{user.errors.income}}</p>
                    </div>

                    <div class="form-group hoverable">
                        <label for="expense" class="control-label" >Expenses <i class="glyphicon glyphicon-question-sign" tooltip data-toggle="tooltip" data-placement="top" title="Your average expenses"><span class="sr-only">description</span></i></label>

                        <div class="input-group input-select">
                            <span class="input-group-addon">$</span>
                            <input type="text" name="expense" id="expense" class="form-control" ng-model="user.model.expense" ng-change="user.calCashFlow()" currency>

                            <label for="expenseFreq" class="sr-only">Expense Frequency</label>
                            <select name="expenseFreq" id="expenseFreq" class="form-control" ng-model="user.model.expenseFreq" ng-change="user.calCashFlow()" convert-to-integer>
                                <option value="52">Weekly</option>
                                <option value="26">Fortnightly</option>
                                <option value="12">Monthly</option>
                                <option value="1">Yearly</option>
                            </select>
                        </div>
                    </div>

                    <div class="alert alert-warning" ng-show="user.errors.expense">
                        <p>{{user.errors.expense}}</p>
                    </div>

                    <div class="home-result" ng-show="((user.model.expense || 0) * (user.model.income || 0)) != 0">
                        <p class="text-center">You earn</p>
                        <p class="h1 text-center">{{user.model._cashFlow | currency}}</p>

                        <div class="row">
                            <div class="col-sm-push-3 col-sm-6">
                                <div class="form-group non-hoverable">
                                    <label for="cashFlowFreq" class="sr-only">Cash Flow</label>
                                    <select name="cashFlowFreq" id="cashFlowFreq" class=form-control ng-model="user.model._cashFlowFreq" ng-change="user.calCashFlow()" convert-to-integer>
                                        <option value="52">Weekly</option>
                                        <option value="26">Fortnightly</option>
                                        <option value="12">Monthly</option>
                                        <option value="1">Yearly</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group non-hoverable">
                        <button type="submit" class="btn btn-primary btn-block">Achieve Greatness<br><span class="small">(Start your bucket list)</span></button>
                    </div>

                </form>
            </div>


        </section>
    </div>
</div>

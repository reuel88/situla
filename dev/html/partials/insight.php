<?php
/**
 * Created by PhpStorm.
 * User: reuelteodoro
 * Date: 16/09/2016
 * Time: 1:56 PM
 */
?>
<div class="insight alert alert-info">
    <div class="row">
        <form class="container container-sm">
            <div class="tbl-sm middle">
                <div class="tbl-cell top">
                    <p class="label">
                        How many paying jobs do you work?
                        <i class="glyphicon glyphicon-question-sign" tooltip data-toggle="tooltip" data-placement="bottom" title="I work (1) job"><span class="sr-only">description</span></i>
                        <br>
                        <span class="small" tooltip data-toggle="tooltip" data-placement="bottom" title="We're looking to achieve your goals earlier, this information will be used to help you make a budget planner.">Why am I being asked this?</span>
                    </p>
                </div>

                <div class="tbl-cell width-100 right">

                    <div class="row">
                        <div class="form-group col-xs-5 col-md-3 col-sm-push-7 col-md-push-9">
                            <label for="numberOfJobs" class="sr-only">Number of Jobs worked</label>
                            <div class="input-group">
                                <input type="text" id="numberOfJobs" name="numberOfJobs" value="1" class="form-control text-right">
                                <span class="input-group-addon">Jobs</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="tbl-cell right">

                    <input type="submit" value="Save" class="btn btn-primary">

                </div>

            </div>

        </form>
    </div>
</div>

<div class="insight alert alert-info">
    <div class="row">
        <form class="container container-md">
            <div class="tbl-md middle">
                <div class="tbl-cell top">
                    <p class="label">
                        How much do you earn working?
                        <i class="glyphicon glyphicon-question-sign" tooltip data-toggle="tooltip" data-placement="bottom" title="I earn (?) from my job"><span class="sr-only">description</span></i>
                        <br>
                        <span class="small" tooltip data-toggle="tooltip" data-placement="bottom" title="We're looking to achieve your goals earlier, this information will be used to help you make a budget planner.">Why am I being asked this?</span>
                    </p>
                </div>

                <div class="tbl-cell width-100 right">

                    <div class="row " data-content="Job 1">
                        <div class="form-group  col-md-3 col-md-push-1">
                            <label for="job_0_title" class="sr-only">Jobe Title</label>
                            <input type="text" id="job_0_title" name="job[0][title]" placeholder="Job Title" class="form-control ">
                        </div>

                        <div class="form-group col-md-3 col-md-push-1">
                            <label for="job_0_freq" class="sr-only">Income Frequency</label>
                            <select name="job_0_freq" id="job_0_freq" class="form-control">
                                <option value="52">Weekly</option>
                                <option value="26" selected>Fortnightly</option>
                                <option value="12">Monthly</option>
                                <option value="1">Yearly</option>
                            </select>
                        </div>

                        <div class="form-group col-md-3 col-md-push-1">
                            <label for="job_0_income" class="sr-only">Income</label>
                            <div class="input-group">
                                <span class="input-group-addon">$</span>
                                <input type="text" id="job_0_income" name="job[0][income]" value="999,999.99" class="form-control ">
                            </div>
                        </div>
                        <div class="form-group col-md-2 col-md-push-1 text-left">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="job_0_taxed" value="0">
                                    After Tax
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="form-group text-left">
                            <input type="button" value="Add New Job" class="btn btn-link">
                        </div>
                    </div>
                </div>

                <div class="tbl-cell right bottom">

                    <input type="submit" value="Save" class="btn btn-primary">

                </div>

            </div>

        </form>
    </div>
</div>

<div class="insight alert alert-info">
    <div class="row">
        <form class="container container-md">
            <div class="tbl-md middle">
                <div class="tbl-cell top">
                    <p class="label">
                        How much do you earn working?
                        <i class="glyphicon glyphicon-question-sign" tooltip data-toggle="tooltip" data-placement="bottom" title="I earn (?) from my jobs"><span class="sr-only">description</span></i>
                        <br>
                        <span class="small" tooltip data-toggle="tooltip" data-placement="bottom" title="We're looking to achieve your goals earlier, this information will be used to help you make a budget planner.">Why am I being asked this?</span>
                    </p>
                </div>

                <div class="tbl-cell width-100 right">

                    <div class="row" data-content="Job 1">

                        <div class="form-group  col-md-3 col-md-push-1">
                            <label for="job_0_title" class="sr-only">Jobe Title</label>
                            <input type="text" id="job_0_title" name="job[0][title]" placeholder="Job Title" class="form-control ">
                        </div>

                        <div class="form-group col-md-3 col-md-push-1">
                            <label for="job_0_freq" class="sr-only">Income Frequency</label>
                            <select name="job_0_freq" id="job_0_freq" class="form-control">
                                <option value="52">Weekly</option>
                                <option value="26" selected>Fortnightly</option>
                                <option value="12">Monthly</option>
                                <option value="1">Yearly</option>
                            </select>
                        </div>

                        <div class="form-group col-md-3 col-md-push-1">
                            <label for="job_0_income" class="sr-only">Income</label>
                            <div class="input-group">
                                <span class="input-group-addon">$</span>
                                <input type="text" id="job_0_income" name="job[0][income]" value="999,999.99" class="form-control ">
                            </div>
                        </div>
                        <div class="form-group col-md-2 col-md-push-1 text-left">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="job_0_taxed" value="0">
                                    After Tax
                                </label>
                            </div>
                        </div>
                    </div>

                    <hr>

                    <div class="row" data-content="Job 2">

                        <div class="form-group  col-md-3 col-md-push-1">
                            <label for="job_1_title" class="sr-only">Jobe Title</label>
                            <input type="text" id="job_1_title" name="job[1][title]" placeholder="Job Title" class="form-control ">
                        </div>

                        <div class="form-group col-md-3 col-md-push-1">
                            <label for="job_1_freq" class="sr-only">Income Frequency</label>
                            <select name="job_1_freq" id="job_0_freq" class="form-control">
                                <option value="52">Weekly</option>
                                <option value="26" selected>Fortnightly</option>
                                <option value="12">Monthly</option>
                                <option value="1">Yearly</option>
                            </select>
                        </div>

                        <div class="form-group col-md-3 col-md-push-1">
                            <label for="job_1_income" class="sr-only">Income</label>
                            <div class="input-group">
                                <span class="input-group-addon">$</span>
                                <input type="text" id="job_1_income" name="job[1][income]" value="999,999.99" class="form-control ">
                            </div>
                        </div>
                        <div class="form-group col-md-2 col-md-push-1 text-left">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="job_1_taxed" value="0">
                                    After Tax
                                </label>
                            </div>
                        </div>
                    </div>

                    <hr>

                    <div class="row" data-content="Job 3">

                        <div class="form-group  col-md-3 col-md-push-1">
                            <label for="job_2_title" class="sr-only">Job Title</label>
                            <input type="text" id="job_2_title" name="job[2][title]" placeholder="Job Title" class="form-control ">
                        </div>

                        <div class="form-group col-md-3 col-md-push-1">
                            <label for="job_2_freq" class="sr-only">Income Frequency</label>
                            <select name="job_2_freq" id="job_0_freq" class="form-control">
                                <option value="52">Weekly</option>
                                <option value="26" selected>Fortnightly</option>
                                <option value="12">Monthly</option>
                                <option value="1">Yearly</option>
                            </select>
                        </div>

                        <div class="form-group col-md-3 col-md-push-1">
                            <label for="job_2_income" class="sr-only">Income</label>
                            <div class="input-group">
                                <span class="input-group-addon">$</span>
                                <input type="text" id="job_2_income" name="job[2][income]" value="999,999.99" class="form-control ">
                            </div>
                        </div>
                        <div class="form-group col-md-2 col-md-push-1 text-left">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="job_2_taxed" value="0">
                                    After Tax
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="form-group text-left">
                            <input type="button" value="Add New Job" class="btn btn-link">
                        </div>
                    </div>

                </div>

                <div class="tbl-cell right bottom">

                    <input type="submit" value="Save" class="btn btn-primary">

                </div>

            </div>

        </form>
    </div>
</div>

<div class="insight alert alert-info">
    <div class="row">
        <form class="container container-md">
            <div class="tbl-lg middle">
                <div class="tbl-cell top">
                    <p class="label">
                        How much do you earn in Centerlink Benefits?
                        <i class="glyphicon glyphicon-question-sign" tooltip data-toggle="tooltip" data-placement="bottom" title="I earn (?) from Centerlink Benefits"><span class="sr-only">description</span></i>
                        <br>
                        <span class="small" tooltip data-toggle="tooltip" data-placement="bottom" title="We're looking to achieve your goals earlier, this information will be used to help you make a budget planner.">Why am I being asked this?</span>
                    </p>
                </div>

                <div class="tbl-cell right">

                    <div class="row ">


                        <div class="form-group col-sm-2 col-lg-4 col-lg-push-2">
                            <label for="centerlink_freq" class="sr-only">Income Frequency</label>
                            <select name="centerlink_freq" id="job_freq" class="form-control">
                                <option value="52">Weekly</option>
                                <option value="26" selected>Fortnightly</option>
                                <option value="12">Monthly</option>
                                <option value="1">Yearly</option>
                            </select>
                        </div>

                        <div class="form-group col-sm-3 col-lg-6 col-lg-push-2">
                            <label for="centerlink_income" class="sr-only">Income</label>
                            <div class="input-group">
                                <span class="input-group-addon">$</span>
                                <input type="text" id="centerlink_income" name="centerlink_income" value="999,999.99" class="form-control ">
                            </div>
                        </div>
                    </div>

                </div>

                <div class="tbl-cell right bottom">
                    <div class="btn-group" role="group" aria-label="Action buttons">
                        <input type="button" value="I don't earn Centerlink Benefits" class="btn btn-default">
                        <input type="submit" value="Save" class="btn btn-primary">
                    </div>
                </div>

            </div>

        </form>
    </div>
</div>

<div class="insight alert alert-info">
    <div class="row">
        <form class="container container-md">
            <div class="tbl-lg middle">
                <div class="tbl-cell top">
                    <p class="label">
                        How much do you earn in Family Benefit Payments?
                        <i class="glyphicon glyphicon-question-sign" tooltip data-toggle="tooltip" data-placement="bottom" title="I earn (?) from Family Benefit Payments"><span class="sr-only">description</span></i>
                        <br>
                        <span class="small" tooltip data-toggle="tooltip" data-placement="bottom" title="We're looking to achieve your goals earlier, this information will be used to help you make a budget planner.">Why am I being asked this?</span>
                    </p>
                </div>

                <div class="tbl-cell right">

                    <div class="row ">


                        <div class="form-group col-sm-2 col-lg-4 col-lg-push-2">
                            <label for="centerlink_freq" class="sr-only">Family Benefit Payments Frequency</label>
                            <select name="centerlink_freq" id="job_freq" class="form-control">
                                <option value="52">Weekly</option>
                                <option value="26" selected>Fortnightly</option>
                                <option value="12">Monthly</option>
                                <option value="1">Yearly</option>
                            </select>
                        </div>

                        <div class="form-group col-sm-3 col-lg-6 col-lg-push-2">
                            <label for="centerlink_income" class="sr-only">Family Benefit Payments</label>
                            <div class="input-group">
                                <span class="input-group-addon">$</span>
                                <input type="text" id="centerlink_income" name="centerlink_income" value="999,999.99" class="form-control ">
                            </div>
                        </div>
                    </div>

                </div>

                <div class="tbl-cell right bottom">
                    <div class="btn-group" role="group" aria-label="Action buttons">
                        <input type="button" value="I don't earn Family Benefit Payments" class="btn btn-default">
                        <input type="submit" value="Save" class="btn btn-primary">
                    </div>
                </div>

            </div>

        </form>
    </div>
</div>

<div class="insight alert alert-info">
    <div class="row">
        <form class="container container-md">
            <div class="tbl-lg middle">
                <div class="tbl-cell top">
                    <p class="label">
                        How much do you earn in Child Support?
                        <i class="glyphicon glyphicon-question-sign" tooltip data-toggle="tooltip" data-placement="bottom" title="I earn (?) from Child Support"><span class="sr-only">description</span></i>
                        <br>
                        <span class="small" tooltip data-toggle="tooltip" data-placement="bottom" title="We're looking to achieve your goals earlier, this information will be used to help you make a budget planner.">Why am I being asked this?</span>
                    </p>
                </div>

                <div class="tbl-cell right">

                    <div class="row ">


                        <div class="form-group col-sm-2 col-lg-4 col-lg-push-2">
                            <label for="centerlink_freq" class="sr-only">Child Support Frequency</label>
                            <select name="centerlink_freq" id="job_freq" class="form-control">
                                <option value="52">Weekly</option>
                                <option value="26" selected>Fortnightly</option>
                                <option value="12">Monthly</option>
                                <option value="1">Yearly</option>
                            </select>
                        </div>

                        <div class="form-group col-sm-3 col-lg-6 col-lg-push-2">
                            <label for="centerlink_income" class="sr-only">Child Support</label>
                            <div class="input-group">
                                <span class="input-group-addon">$</span>
                                <input type="text" id="centerlink_income" name="centerlink_income" value="999,999.99" class="form-control ">
                            </div>
                        </div>
                    </div>

                </div>

                <div class="tbl-cell right bottom">
                    <div class="btn-group" role="group" aria-label="Action buttons">
                        <input type="button" value="I don't earn Child Support" class="btn btn-default">
                        <input type="submit" value="Save" class="btn btn-primary">
                    </div>
                </div>

            </div>

        </form>
    </div>
</div>

<div class="insight alert alert-info">
    <div class="row">
        <form class="container container-sm">
            <div class="tbl-md middle">
                <div class="tbl-cell top">
                    <p class="label">
                        How many dependants live in your household?
                        <i class="glyphicon glyphicon-question-sign" tooltip data-toggle="tooltip" data-placement="bottom" title="People who require financial support such as children, elderly, and/or disabled"><span class="sr-only">description</span></i>
                        <br>
                        <span class="small" tooltip data-toggle="tooltip" data-placement="bottom" title="We're looking to achieve your goals earlier, this information will be used to help you make a budget planner.">Why am I being asked this?</span>
                    </p>
                </div>

                <div class="tbl-cell width-100 right">

                    <div class="row">
                        <div class="form-group col-sm-4 col-md-push-3">
                            <label for="numberOfJobs" class="sr-only">Number of children</label>
                            <div class="input-group">
                                <input type="text" id="numberOfJobs" name="numberOfJobs" value="1" class="form-control text-right">
                                <span class="input-group-addon">Children</span>
                            </div>
                        </div>

                        <div class="form-group col-sm-5 col-md-push-3">
                            <label for="numberOfJobs" class="sr-only">Number of Elderly/Disabled</label>
                            <div class="input-group">
                                <input type="text" id="numberOfJobs" name="numberOfJobs" value="1" class="form-control text-right">
                                <span class="input-group-addon">Elderly/ Disabled</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="tbl-cell right">

                    <input type="submit" value="Save" class="btn btn-primary">

                </div>

            </div>

        </form>
    </div>
</div>


<div class="insight alert alert-info">
    <div class="row">
        <form class="container container-sm">
            <div class="tbl-sm middle">
                <div class="tbl-cell top">
                    <p class="label">
                        In your household do you live with your partner
                        <i class="glyphicon glyphicon-question-sign" tooltip data-toggle="tooltip" data-placement="bottom" title="Am I living alone or with my partner"><span class="sr-only">description</span></i>
                        <br>
                        <span class="small" tooltip data-toggle="tooltip" data-placement="bottom" title="We're looking to achieve your goals earlier, this information will be used to help you make a budget planner.">Why am I being asked this?</span>
                    </p>
                </div>

                <div class="tbl-cell width-100 right">

                    <div class="form-inline">
                        <div class="radio">
                            <label>
                                <input type="radio" name="liveWithPartner" value="1">
                                Yes
                            </label>
                        </div>
                        <div class="radio">
                            <label>
                                <input type="radio" name="liveWithPartner" value="0">
                                No
                            </label>
                        </div>
                    </div>

                </div>

                <div class="tbl-cell right">

                    <input type="submit" value="Save" class="btn btn-primary">

                </div>

            </div>

        </form>
    </div>

</div>
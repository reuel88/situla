<?php
/**
 * Created by PhpStorm.
 * User: reuelteodoro
 * Date: 14/08/2016
 * Time: 2:04 PM
 */
?>

<section class="todo" ng-show="!modal.model.new ">
    <header class="non-hoverable-side">
        <h2>Todo</h2>
    </header>

    <ol class="todo-list">
        <li  ng-class="v.editing? 'hoverable' : 'expand-hoverable'" ng-repeat="(k,v) in modal.model.todo track by $index">

            <div class="tbl">
                <div class="tbl-row">
                    <div class="tbl-cell middle">
                        <input type="checkbox" id="todo-item_{{k}}" ng-model="v.done" ng-click="todo.check(modal.model.todo, k)">
                        <label for="todo-item_{{k}}">
                            <span class="checkbox"></span>
                            <span class="sr-only">{{v.label}}</span>
                        </label>
                    </div>

                    <div class="tbl-cell middle width-100">
                        <div class="tbl pointer" ng-class="{'done': v.done}" ng-click="todo.edit(modal.model.todo, k)" ng-show="!v.editing">
                            <div class="tbl-row" >
                                <div class="tbl-cell">{{v.label}}</div>
                                <div class="tbl-cell right">{{v.date}}</div>
                            </div>
                        </div>

                        <div ng-show="v.editing">
                            <div class="form-group">
                                <label for="todo-label" class="control-label sr-only">Label</label>
                                <input type="text" placeholder="Label" id="todo-label" class="form-control" ng-model="todo.temp.label">
                            </div>

                            <div class="form-group">
                                <label for="todo-date" class="control-date sr-only">Date</label>
                                <input type="text" placeholder="Date" id="todo-date" class="form-control" ng-model="todo.temp.date" date-picker='{"singleDatePicker":true,"showDropdowns":true, "locale":{"format":"Do of MMM, YYYY"}}'>
                            </div>

                            <div class="tbl">
                                <div class="tbl-row">
                                    <div class="tbl-cell">
                                        <input type="submit" value="Save" class="btn btn-primary" ng-click="todo.update()">
                                        <input type="button" value="Cancel" class="btn btn-link" ng-click="todo.cancel()">
                                    </div>
                                    <div class="tbl-cell right">
                                        <input type="button" value="Delete" class="btn btn-default" ng-click="todo.delete()">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>

        <li>
            <form class="non-hoverable" ng-show="todo.attrs.new" ng-submit="todo.new()">
                    <div class="form-group">
                        <label for="todo-label" class="control-label sr-only">Label</label>
                        <input type="text" placeholder="Label" id="todo-label" class="form-control" ng-model="todo.temp.label">
                    </div>

                    <div class="form-group">
                        <label for="todo-date" class="control-date sr-only">Date</label>
                        <input type="text" placeholder="Date" id="todo-date" class="form-control" ng-model="todo.temp.date" date-picker='{"singleDatePicker":true,"showDropdowns":true, "locale":{"format":"Do of MMM, YYYY"}}'>
                    </div>

                    <input type="submit" value="Create" class="btn btn-primary">
                    <input type="button" value="Cancel" class="btn btn-link" ng-click="todo.attrs.new = false">
            </form>

            <input type="button" value="Add New Item..." class="btn btn-link" ng-click="todo.attrs.new = true;">


        </li>


    </ol>
</section>

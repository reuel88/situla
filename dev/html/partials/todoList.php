<?php
/**
 * Created by PhpStorm.
 * User: reuelteodoro
 * Date: 14/08/2016
 * Time: 2:04 PM
 */
?>

<section class="todo" ng-show="!modal.model.new ">
    <header class="non-hoverable">
        <h2>Todo</h2>
    </header>

    <ol class="todo-list">
        <li class="expand-hoverable" ng-repeat="(k,v) in todo.model.todo track by $index">

            <div class="tbl">
                <div class="tbl-row">
                    <div class="tbl-cell middle">
                        <input type="checkbox" id="todo-item">
                        <label for="todo-item">
                            <span class="checkbox"></span>
                            <span class="sr-only">{{v.label}}</span>
                        </label>
                    </div>

                    <div class="tbl-cell middle width-100">
                        <div class="tbl">
                            <div class="tbl-row">
                                <div class="tbl-cell">{{v.label}}</div>
                                <div class="tbl-cell right">{{v.date}}</div>
                            </div>
                        </div>

                        <div class="sr-only">
                            <div class="form-group">
                                <label for="todo-label" class="control-label sr-only">Label</label>
                                <input type="text" placeholder="Label" id="todo-label" class="form-control" ng-model="v.label">
                            </div>

                            <div class="form-group">
                                <label for="todo-date" class="control-date sr-only">Date</label>
                                <input type="text" placeholder="Date" id="todo-date" class="form-control" ng-model="v.date">
                            </div>

                            <div class="tbl">
                                <div class="tbl-row">
                                    <div class="tbl-cell">
                                        <input type="submit" value="Save" class="btn btn-primary">
                                        <input type="button" value="Cancel" class="btn btn-link">
                                    </div>
                                    <div class="tbl-cell right">
                                        <input type="button" value="Delete" class="btn btn-default">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </li>

        <li>
            <div class="non-hoverable" ng-show="todo.attrs.new">
                <div class="form-group">
                    <label for="todo-label" class="control-label sr-only">Label</label>
                    <input type="text" placeholder="Label" id="todo-label" class="form-control" ng-model="todo._model.label">
                </div>

                <div class="form-group">
                    <label for="todo-date" class="control-date sr-only">Date</label>
                    <input type="text" placeholder="Date" id="todo-date" class="form-control" ng-model="todo._model.date">
                </div>

                <input type="submit" value="Create" class="btn btn-primary" ng-click="todo.new()">
                <input type="button" value="Cancel" class="btn btn-link" ng-click="todo.attrs.new = false">
            </div>

            <input type="button" value="Add New Item..." class="btn btn-link" ng-click="todo.attrs.new = true;">
        </li>


    </ol>
</section>

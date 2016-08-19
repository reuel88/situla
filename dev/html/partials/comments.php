<?php
/**
 * Created by PhpStorm.
 * User: reuelteodoro
 * Date: 14/08/2016
 * Time: 7:42 PM
 */
?>
<section class="comments" ng-show="!modal.model.new">
    <header class="non-hoverable-side">
        <h2 clas        s="h3">Comments</h2>
    </header>

    <form class="comment-new non-hoverable" enctype="multipart/form-data" ng-submit="comment.new()" autocomplete="off">

        <div class="img-frame comment-img margin-bottom">
            <div class="img-container" ng-show="comment.temp.img ">
                <img alt="{{comment.temp.content}}" ng-src="{{comment.temp.img}}">
            </div>

            <div class="img-content comment-img-content tbl height-100" min-height="250">
                <div class="tbl-cell height-100 bottom left">
                    <p class="h5 comment-new-subtitle" ng-show="!comment.temp.img">Add a Comment</p>
                </div>
                <div class="tbl-cell height-100 bottom right">
                    <div class="form-group container-fluid">
                        <label for="image" class="btn btn-default">
                            <span ng-show="!comment.temp.img">Choose Image</span>
                            <span ng-show="comment.temp.img">Replace Image</span>
                        </label>

                        <input type="file" id="image" class="sr-only" file-upload="comment.temp.img">

                        <input type="button" value="Delete Image" class="btn btn-default" ng-show="comment.temp.img " ng-click="comment.temp.img = '';">
                    </div>
                </div>
            </div>
        </div>


        <div class="form-group ">
            <label for="comment" class="control-label sr-only">Write a comment...</label>
            <textarea name="comment" id="comment" cols="30" rows="3" placeholder="Write a comment..." class="form-control" ng-model="comment.temp.content"></textarea>
        </div>


        <div class="tbl">
            <div class="tbl-row">
                <div class="tbl-cell">
                    <input type="submit" value="Create" class="btn btn-primary" ng-show="comment.temp.img || comment.temp.content">
                    <input type="button" value="Cancel" class="btn btn-link" ng-click="comment.cancel()" ng-show="comment.temp.img || comment.temp.content">
                </div>

            </div>
        </div>
    </form>


    <ol class="comment-list">
        <li ng-repeat="(k,v) in modal.model.comment track by $index ">

           <div ng-class="v.editing? 'active-hoverable' : 'hoverable'">
               <div class="comment-item">
                   <div class="tbl"  ng-show="v.editing || v.img">
                       <div class="tbl-cell">
                           <div class="img-frame comment-item-img margin-bottom">
                               <div class="img-container comment-item-img" ng-show="comment.tempItem.img || (v.img && !v.editing)">
                                   <img alt="{{v.content}}" ng-src="{{v.img}}" ng-show="(v.img && !v.editing)">
                                   <img alt="{{comment.tempItem.content}}" ng-src="{{comment.tempItem.img}}" ng-show="(comment.tempItem.img && v.editing)">
                               </div>

                               <div class="img-content comment-item-img-content tbl height-100" min-height="250">
                                   <div class="tbl-cell height-100 right bottom">
                                       <div class="form-group container-fluid" ng-show="v.editing">
                                           <label for="image_{{k}}" class="btn btn-default">
                                               <span ng-show="!comment.tempItem.img">Choose Image</span>
                                               <span ng-show="comment.tempItem.img ">Replace Image</span>
                                           </label>

                                           <input type="file" id="image_{{k}}" class="sr-only" file-upload="comment.tempItem.img">

                                           <input type="button" value="Delete Image" class="btn btn-default" ng-show="comment.tempItem.img " ng-click="comment.tempItem.img = ''; ">
                                       </div>
                                   </div>
                               </div>
                           </div>

                       </div>
                   </div>

                   <p ng-show="!v.editing">{{v.content}}</p>

                   <div class="form-group content" ng-show="v.editing">
                       <label for="comment" class="control-label sr-only">Write a comment...</label>
                       <textarea name="comment" id="comment" cols="30" rows="4" placeholder="Write a comment..." class="form-control" ng-model="comment.tempItem.content"></textarea>
                   </div>
               </div>


               <div class="tbl" ng-show="!v.editing">
                   <div class="tbl-cell middle"><span class="small">{{v.date | date : 'MMM d, y h:mma'}}</span></div>

                   <div class="tbl-cell middle right">
                       <input type="button" value="Edit" class="btn btn-link" ng-click="comment.edit(modal.model.comment, k)" ng-disabled="comment.attrs.isEditing">
                   </div>
               </div>

               <div class="tbl padding-top" ng-show="v.editing">
                   <div class="tbl-cell">
                       <input type="submit" value="Save" class="btn btn-primary" ng-click="comment.update()">
                       <input type="button" value="Cancel" class="btn btn-link" ng-click="comment.cancel()">
                   </div>
                   <div class="tbl-cell right">
                       <input type="button" value="Delete" class="btn btn-default" ng-click="comment.delete()">
                   </div>
               </div>
           </div>


        </li>

    </ol>


</section>

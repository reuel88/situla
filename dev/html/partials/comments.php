<?php
/**
 * Created by PhpStorm.
 * User: reuelteodoro
 * Date: 14/08/2016
 * Time: 7:42 PM
 */
?>
<section class="comments" ng-show="!modal.model.new">
    <header class="non-hoverable">
        <h2>Comments</h2>
    </header>

    <div class="comment-new non-hoverable">

<!--        <div class="img-frame comment-img">-->
<!--            <div class="img-container">-->
<!--                <img src="./img/9i9rquptxsg-lionello-delpiccolo.jpg" alt="">-->
<!--            </div>-->
<!---->
<!--            <div class="img-content comment-img-content tbl height-100">-->
<!--                <div class="tbl-row">-->
<!--                    <div class="tbl-cell height-100 bottom right">-->
<!--                        <div class="form-group container-fluid">-->
<!--                            <input type="button" value="Delete Image" class="btn btn-default">-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

        <div class="form-group">
            <label for="image" class="control-label">Image</label>

            <input type="file" id="image" class="form-control">
        </div>

        <div class="form-group ">
            <label for="comment" class="control-label">Write a comment...</label>
            <textarea name="comment" id="comment" cols="30" rows="4" class="form-control"></textarea>
        </div>


        <div class="tbl">
            <div class="tbl-row">
                <div class="tbl-cell">
                    <input type="submit" value="Save" class="btn btn-primary">
                    <input type="button" value="Cancel" class="btn btn-link">
                </div>
                <div class="tbl-cell right">
<!--                    <input type="button" value="Delete" class="btn btn-default">-->
                </div>
            </div>
        </div>
    </div>

    <hr>

    <ol class="comment-list">
        <li class="hoverable">
            <div class="tbl">
                <div class="tbl-row">
                    <div class="tbl-cell">
                        <div class="img-frame comment-item-img margin-bottom">
                            <div class="img-container">
                                <img src="./img/9i9rquptxsg-lionello-delpiccolo.jpg" alt="">
                            </div>

                            <div class="img-content comment-item-img-content tbl height-100">
                                <div class="tbl-row">
                                    <div class="tbl-cell height-100 bottom right">
                                        <div class="form-group container-fluid">
                                            <input type="button" value="Delete Image" class="btn btn-default">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

<!--                        <div class="form-group">-->
<!--                            <label for="image" class="control-label">Image</label>-->
<!---->
<!--                            <input type="file" id="image" class="form-control">-->
<!--                        </div>-->
                    </div>
                </div>
                <div class="tbl-row">
                    <div class="tbl-cell">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra viverra mollis. Maecenas nec porta tellus, eu consequat quam. Phasellus posuere lectus quis interdum porta. </p>

<!--                        <div class="form-group ">-->
<!--                            <label for="comment" class="control-label">Write a comment...</label>-->
<!--                            <textarea name="comment" id="comment" cols="30" rows="4" class="form-control"></textarea>-->
<!--                        </div>-->
                    </div>
                </div>
                <div class="tbl-row">
                    <div class="tbl-cell">Aug 3 at 4:03 PM - <a href="#" class="btn btn-link">Edit</a> | <a href="#" class="btn btn-link">Delete</a>

<!--                        <div class="tbl">-->
<!--                            <div class="tbl-row">-->
<!--                                <div class="tbl-cell">-->
<!--                                    <input type="submit" value="Save" class="btn btn-primary">-->
<!--                                    <input type="button" value="Cancel" class="btn btn-link">-->
<!--                                </div>-->
<!--                                <div class="tbl-cell right">-->
<!--                                    <input type="button" value="Delete" class="btn btn-default">-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
                    </div>


                </div>
            </div>

            <hr>

        </li>

    </ol>



</section>

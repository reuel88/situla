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
            <form action="#">

                <div class="non-hoverable">
                    <div class="bucketlist-item-img">
                        <div class="img-center">
                            <img src="./img/9i9rquptxsg-lionello-delpiccolo.jpg" alt="">
                        </div>

                        <div class="bucketlist-item-img-content tbl height-100">
                            <div class="tbl-row">
                                <div class="tbl-cell height-100 bottom right">
                                    <div class="form-group container-fluid">
                                        <label for="image" class="control-label">Image</label>

                                        <input type="file" id="image" class="form-control">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="hoverable">
                    <h1 class="page-title h2">Title </h1>

                    <div class="form-group">
                        <label for="title" class="control-label">Title <i class="glyphicon glyphicon-question-sign"><span class="sr-only">description</span></i></label>
                        <input type="text" name="title" id="title" class="form-control">
                    </div>

                    <input type="submit" value="Save" class="btn btn-primary">
                    <input type="button" value="Cancel" class="btn btn-link">
                </div>

                <div class="hoverable">
                    <p>Short Description</p>

                    <div class="form-group">
                        <label for="description" class="control-label">Short Description <i class="glyphicon glyphicon-question-sign"><span class="sr-only">description</span></i></label>
                        <textarea name="description" id="description" cols="30" rows="3" class="form-control"></textarea>
                    </div>

                    <input type="submit" value="Save" class="btn btn-primary">
                    <input type="button" value="Cancel" class="btn btn-link">
                </div>

                <div class="hoverable">

                    <p class="h3">$999,999.99 <span class="small">of $999,999.99</span></p>

                    <div class="form-group">
                        <label for="already-saved" class="control-label">Already Saved <i class="glyphicon glyphicon-question-sign"><span class="sr-only">description</span></i></label>
                        <input type="text" name="already-saved" id="already-saved" class="form-control">
                    </div>

                    <div class="form-group">
                        <label for="total-cost" class="control-label">Total Cost <i class="glyphicon glyphicon-question-sign"><span class="sr-only">description</span></i></label>
                        <input type="text" name="total-cost" id="total-cost" class="form-control">
                    </div>

                    <input type="submit" value="Save" class="btn btn-primary">
                    <input type="button" value="Cancel" class="btn btn-link">
                </div>


                <div class="hoverable">

                    <p class="h3">Target Date</p>

                    <div class="form-group">
                        <label for="target-date" class="control-label">Target Date <i class="glyphicon glyphicon-question-sign"><span class="sr-only">description</span></i></label>
                        <input type="text" name="target-date" id="target-date" class="form-control">
                    </div>
                    <input type="submit" value="Save" class="btn btn-primary">
                    <input type="button" value="Cancel" class="btn btn-link">
                </div>


                <div class="form-group non-hoverable">
                    <input type="submit" value="Contribute to Goal" class="btn btn-lg btn-primary btn-block">
                </div>

                <?php include 'html/partials/todoList.php' ?>

                <section class="comments">
                    <header class="non-hoverable">
                        <h2>Comments</h2>
                    </header>

                    <div class="comment-new non-hoverable">

                        <div class="comment-img">
                            <div class="img-center">
                                <img src="./img/9i9rquptxsg-lionello-delpiccolo.jpg" alt="">
                            </div>

                            <div class="comment-img-content tbl height-100">
                                <div class="tbl-row">
                                    <div class="tbl-cell height-100 bottom right">
                                        <div class="form-group container-fluid">
                                            <input type="button" value="Delete Image" class="btn btn-default">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                                    <input type="button" value="Delete" class="btn btn-default">
                                </div>
                            </div>
                        </div>
                    </div>

                    <ol class="comment-list">
                        <li class="hoverable">
                            <div class="tbl">
                                <div class="tbl-row">
                                    <div class="tbl-cell">
                                        <div class="comment-item-img">
                                            <div class="img-center">
                                                <img src="./img/9i9rquptxsg-lionello-delpiccolo.jpg" alt="">
                                            </div>

                                            <div class="comment-item-img-content tbl height-100">
                                                <div class="tbl-row">
                                                    <div class="tbl-cell height-100 bottom right">
                                                        <div class="form-group container-fluid">
                                                            <input type="button" value="Delete Image" class="btn btn-default">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="image" class="control-label">Image</label>

                                            <input type="file" id="image" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="tbl-row">
                                    <div class="tbl-cell">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra viverra mollis. Maecenas nec porta tellus, eu consequat quam. Phasellus posuere lectus quis interdum porta. </p>

                                        <div class="form-group ">
                                            <label for="comment" class="control-label">Write a comment...</label>
                                            <textarea name="comment" id="comment" cols="30" rows="4" class="form-control"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="tbl-row">
                                    <div class="tbl-cell">Aug 3 at 4:03 PM - <a href="#" class="btn btn-link">Edit</a> | <a href="#" class="btn btn-link">Delete</a>


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

                            <hr>

                        </li>
                    </ol>


                </section>

            </form>


        </section>
    </div>
</div>

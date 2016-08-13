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
            <form action="#" class="">

                <div class="non-hoverable">
                    <div class="img-frame bucketlist-item-img">
                        <div class="img-container">
                            <img src="./img/9i9rquptxsg-lionello-delpiccolo.jpg" alt="">
                        </div>

                        <div class="img-content bucketlist-item-img-content tbl height-100">
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

                <div class="expand-hoverable">
                    <h1 class="page-title h2 bucketlist-item-title">Title </h1>

<!--                    <div class="form-group">-->
<!--                        <label for="title" class="control-label">Title <i class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="top" title="The Title of your Goal"><span class="sr-only">description</span></i></label>-->
<!--                        <input type="text" name="title" id="title" class="form-control">-->
<!--                    </div>-->
<!---->
<!--                    <input type="submit" value="Save" class="btn btn-primary">-->
<!--                    <input type="button" value="Cancel" class="btn btn-link">-->
                </div>

                <div class="expand-hoverable">
                    <p class="bucketlist-item-description">Short Description</p>

<!--                    <div class="form-group">-->
<!--                        <label for="description" class="control-label">Short Description <i class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="top" title="Short Description of your Goal"><span class="sr-only">description</span></i></label>-->
<!--                        <textarea name="description" id="description" cols="30" rows="3" class="form-control"></textarea>-->
<!--                    </div>-->
<!---->
<!--                    <input type="submit" value="Save" class="btn btn-primary">-->
<!--                    <input type="button" value="Cancel" class="btn btn-link">-->
                </div>

                <div class="expand-hoverable">

                    <p class="h3 bucketlist-item-savings">$999,999.99 <span class="small">of $999,999.99</span></p>

<!--                    <div class="form-group">-->
<!--                        <label for="already-saved" class="control-label">Already Saved <i class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="top" title="How much have you saved towards your Goal"><span class="sr-only">description</span></i></label>-->
<!--                        <input type="text" name="already-saved" id="already-saved" class="form-control">-->
<!--                    </div>-->
<!---->
<!--                    <div class="form-group">-->
<!--                        <label for="total-cost" class="control-label">Total Cost <i class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="top" title="The Total Cost of your Goal"><span class="sr-only">description</span></i></label>-->
<!--                        <input type="text" name="total-cost" id="total-cost" class="form-control">-->
<!--                    </div>-->
<!---->
<!--                    <input type="submit" value="Save" class="btn btn-primary">-->
<!--                    <input type="button" value="Cancel" class="btn btn-link">-->
                </div>

                <div class="expand-hoverable">

                    <p class="h3 bucketlist-item-date">July 10</p>

<!--                    <div class="form-group">-->
<!--                        <label for="target-date" class="control-label">Target Date <i class="glyphicon glyphicon-question-sign" data-toggle="tooltip" data-placement="top" title="The Date you Expect to Complete your Goal"><span class="sr-only">description</span></i></label>-->
<!--                        <input type="text" name="target-date" id="target-date" class="form-control">-->
<!--                    </div>-->
<!--                    <input type="submit" value="Save" class="btn btn-primary">-->
<!--                    <input type="button" value="Cancel" class="btn btn-link">-->
                </div>

                <div class="non-hoverable">
                <div class="form-group text-center ">
                    <input type="button" value="Complete Your Goal" class="btn btn-lg btn-primary">
                </div>
                <div class="form-group text-center">
                    <input type="button" value="Contributions to Your Goal" class="btn btn-default">
                </div>
                </div>

<!--                <div class="form-group non-hoverable">-->
<!--                    <input type="submit" value="Save" class="btn  btn-primary">-->
<!--                </div>-->


                <?php include 'html/partials/todoList.php' ?>
                                    <?php include 'html/partials/comments.php' ?>
            </form>


        </section>
    </div>
</div>

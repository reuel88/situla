<?php include 'html/header.php' ?>

    <div class="tbl-row">
        <div id="site-content" class="tbl-cell height-100">

            <div class="container">


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
                                    <h1 class="page-title">Title <i class="glyphicon glyphicon-question-sign"></i></h1>

                                    <div class="form-group">
                                        <label for="title" class="control-label">Title</label>
                                        <input type="text" name="title" id="title" class="form-control">
                                    </div>
                                </div>

                                <div class="hoverable">
                                    <p>Short Description</p>

                                    <div class="form-group">
                                        <label for="description" class="control-label">Short Description</label>
                                        <textarea name="description" id="description" cols="30" rows="3" class="form-control"></textarea>
                                    </div>
                                </div>

                                <div class="hoverable">

                                    <p class="h3">$999,999.99 <span class="small">of $999,999.99</span></p>

                                    <div class="form-group">
                                        <label for="already-saved" class="control-label">Already Saved</label>
                                        <input type="text" name="already-saved" id="already-saved" class="form-control">
                                    </div>

                                    <div class="form-group">
                                        <label for="total-cost" class="control-label">Total Cost</label>
                                        <input type="text" name="total-cost" id="total-cost" class="form-control">
                                    </div>
                                </div>




                                <div class="hoverable">

                                    <p class="h3">Target Date</p>

                                    <div class="form-group">
                                        <label for="target-date" class="control-label">Target Date</label>
                                        <input type="text" name="target-date" id="target-date" class="form-control">
                                    </div>
                                </div>



                                <div class="form-group non-hoverable">
                                    <input type="submit" value="Save" class="btn btn-primary">
                                </div>

                            </form>




                        </section>
                    </div>
                </div>


                <?php include 'html/partials/goalNew.php' ?>
                <?php include 'html/partials/goalSelect.php' ?>
                <?php include 'html/partials/home.php' ?>
            </div>

        </div>
    </div>


<?php include 'html/footer.php' ?>
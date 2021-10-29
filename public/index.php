<?php
include_once(__DIR__ . '/../private/config.php');

?>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="css/style.css">

<script src="js/request.js"></script>


<div class="container col-lg-4 col-md-6">
    <form action="api.php?api-name=add" class="row" id="todo_form">
        <h1 style="text-align: center;">Todo</h1>
        <div class="col mb-3">
            <input type="text" class="form-control" name="todo-description" id="todo-description">
        </div>
        <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">submit</button>
        </div>
    </form>

    <div>
        <li class="list-group-item template todo">
            <div class="todo__li form-check form-switch d-flex align-items-center">
                <input class="form-check-input me-3" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                <span class="text todo__description"></span>
                <a href="api.php?api-name=delete" class="btn btn-sm btn-dark todo__delete">x</a>
            </div>
        </li>
        <ul class="todo-list list-group">

        </ul>
    </div>
</div>



<script src="js/script.js"></script>



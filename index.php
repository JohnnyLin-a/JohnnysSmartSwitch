<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8"> 
        <title>Johnny's smart switch</title>
        <link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico"/>
        <link rel="stylesheet" href="index.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script type="text/javascript" src="index.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <body>
        <div class="jumbotron text-center">
            <h1>Welcome to Johnny's smart switch! <span class="fa fa-cog"></span></h1>
        </div>
        <div class="container text-center">
            <div class="row text-center">
                <div class="col-lg-12 text-center">
                    <button type="button" id="openComputerBtn" class="btn btn-warning btn-lg btn-block mainMenuBtn" >
                        <h1><i class="fa fa-power-off"></i> Open computer!</h1>
                    </button>
                </div>
            </div>
            <div class="row text-center">
                <div class="col-lg-12 text-center">
                    <button type="button" id="openLightsBtn" class="btn btn-success btn-lg btn-block mainMenuBtn">
                        <h1><i class="fa fa-eye"></i> Open lights!</h1>
                    </button>
                </div>
            </div>
            <div class="row text-center">
                <div class="col-lg-12 text-center">
                    <button type="button" id="closeLightsBtn" class="btn btn-danger btn-lg btn-block mainMenuBtn">
                        <h1><i class="fa fa-eye-slash"></i> Close lights!</h1>
                    </button>
                </div>
            </div>
        </div>

        <div id="reminderModal" class="modal fade" role="dialog">
            <div class="modal-dialog">
        
            <div class="modal-content">
                <div class="modal-header">
                <h4 class="modal-title">Reminder</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                <h3>Don't forget to open the humidifier!</h3>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        
            </div>
        </div>
    </body>
</html>


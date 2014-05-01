<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <link rel="stylesheet" href="style.css">
        <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
        <link href='http://fonts.googleapis.com/css?family=Paytone+One' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.1.0/animate.css">
        <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->
    <section class="masthead">
        <a href="/">
            <div class="logo">
                <img src="/assets/img/cbrewers.png" alt=""><h1><span class="code">Code</span>Brewers</h1>
            </div>
        </a>
        <nav class="navigation navbar navbar-right">
           <ul>
              <li><a href="">who</a></li>
              <li><a href="">why</a></li>
              <li><a href="">where</a></li>
              <li><a href="">how</a></li>
              
           </ul>
        </nav>
    </section>

    <section class="team section">
        <div class="container">
            
            <div class="teamate wow fadeInLeft" data-wow-delay="0.6s" data-wow-duration="1.3s">
                <div class="teamate_inner">
                    <div class="blockicon">
                        <img src="assets/img/manfred.jpg" alt="">
                    </div>
                    <h1>UX</h1>
                </div>
            </div>
            <div class="teamate wow fadeIn" data-wow-delay="0.6s" data-wow-duration="1.3s">
                <div class="teamate_inner">
                    <div class="blockicon">
                        <img src="assets/img/dillon.jpg" alt="">
                    </div>
                    <h1>DV</h1>
                </div>
            </div> 
           <div class="teamate wow fadeInRight" data-wow-delay="0.6s" data-wow-duration="1.3s">
                <div class="teamate_inner">
                    <div class="blockicon">
                        <img src="assets/img/johann.jpg" alt="">
                    </div>
                    <h1>DS</h1>
                </div>
            </div>
        </div>
    </section>

    <section class="why section">
        <div class="container">
            <h1>Why should you work with us?</h1>
            <p>We’re a company of three because we believe the best results come from a direct partnership with clients. In other words, we do the work and we maintain the relationship. No sales reps, no account execs, no big guns trying to represent the work of someone else. We are with you every step of the way.</p>
            <p>No matter what, we've got you covered.</p>
        </div>
    </section>

    <section class="where section">
        <h1>Here's where you can see our work</h1>
        <div class="portfolio">
            <div class="container">
                <div class="client">
                    <a class="wow flipInY" data-wow-duration="1s" data-wow-delay="0.3s" href="/portfolio.html"><img src="http://placehold.it/200/202024&text=client" alt=""></a>
                    <a class="wow flipInY" data-wow-duration="1s" data-wow-delay="0.5s" href="/portfolio.html"><img src="http://placehold.it/200/202024&text=client" alt=""></a>
                    <a class="wow flipInY" data-wow-duration="1s" data-wow-delay="0.7s" href="/portfolio.html"><img src="http://placehold.it/200/202024&text=client" alt=""></a>
                    <a class="wow flipInY" data-wow-duration="1s" data-wow-delay="0.9s" href="/portfolio.html"><img src="http://placehold.it/200/202024&text=client" alt=""></a>
                </div>
            </div>
        </div>
    </section>

    <section class="how section">
    <div class="container">
        
        <div class="contact">
            <div class="blurb">
                <h1>We'd love to learn more about you and your needs.</h1>
                <p><span class="accent">M</span> : 416-888-2556 </p>
                <p><span class="accent">E</span> : info@brolli.com </p>
            </div>
            <div class="form">
                <form name="contactform" method="POST" role="form" action="send_form_email.php">
                    <legend>Let's work together</legend>
                
                    <div class="form-group">
                        <label for="full_name">Name</label>
                        <input type="text" class="form-control" id="" >
                        <label for="email">Email</label>
                        <input type="text" class="form-control" id="" >
                        <label for="comments">Project Details</label>
                        <textarea type="textarea" class="form-control" id=""></textarea>
                    </div>
                    <a href="send_form_email.php"><button type="submit" class="btn btn-primary">Submit</button></a>
                </form>
                <?php print_r($_POST); ?>
            </div>
        </div>
    </div>
    </section>

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.1.min.js"><\/script>')</script>

        <script src="assets/js/vendor/bootstrap.min.js"></script>
        <script src="assets/js/vendor/wow.min.js"></script>

        <script src="assets/js/main.js"></script>

        <script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src='//www.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
    </body>
</html>

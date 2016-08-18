<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Vae Victis - 1418</title>
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="icon" type="image/png" href="favicon.png">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/banners.css">
</head>

<body>
  <?php include("header.php"); ?>
    <div class="video-ext-container">
        <div class="video-container">
            <!-- This video's src is added by JavaScript.
                That way it won't load the extra data on a mobile device. -->
            <video src autoplay loop></video>
        </div>
    </div>
    <div class="jumbotron">
        <h1>Welcome</h1>
        <h3>Our team, whose name means "woe to the vanquished," has been one of the most successful and inventive FIRST Robotics teams in the Chesapeake District.</h3>
        <a href="robot" class="button">Our Robot</a>
    </div>
    <article>
        <div>
            <img src="img/team.jpg">
            <p>We are team 1418 Vae Victis, a <a href="http://firstinspires.org/robotics/frc">FIRST Robotics Competition (FRC)</a> team from George Mason High School in Falls Church, VA. Since our founding in 2004, our team has grown in every way, and has maintained a high place in competition and in the community. To do this, we maintain an active and engaged student body of about 25 students who work with the team on and off season. We attend competitions, volunteer, take part in community events, build robots, and have lots of fun.</p>
            <p>In the 2016 season, we took first place in the Greater DC District competition, the Bethesda District competition, and the FIRST Chesapeake District championship. This qualified us for the World Championship. After a challenging but thrilling fight at worlds, we made it to the division quarterfinals in the 2016 Newton Division, widely believed to have been the strongest group of teams in FIRST history.</p>
            <p>We are excited for the 2017 season to start! If you'd like to help us with fundraising, please visit <a href="sponsorship">this page</a>.</p>
        </div>
    </article>
    <ul class="banners">
        <li><img src="img/first.svg">2016 Chesapeake Regional Champions</li>
        <li><img src="img/first.svg">2016 Innovation in Control Chesapeake</li>
        <li><img src="img/first.svg">2016 Bethesda District Champions</li>
        <li><img src="img/first.svg">2016 Industrial Design (Bethesda)</li>
        <li><img src="img/first.svg">2016 District of Columbia Champs</li>
        <li><img src="img/first.svg">2016 Innovation in Control (DC)</li>
    </ul>
  <?php
    include "footer.php";
  ?>
</body>
</html>

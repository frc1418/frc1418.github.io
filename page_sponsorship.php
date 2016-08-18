<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sponsorship | Team 1418</title>
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="icon" type="image/png" href="favicon.png">
    <link rel="stylesheet" href="css/style.css">
    <style>
        table {
            background: white;
            padding: 0 20px;
        }
        @media (max-width: 585px) {
            table {
                padding: 0;
            }
            td {
                padding: 20px;
            }
        }
    </style>
</head>

<body>
  <?php
    $order = 2;
    $name = "Sponsor Us";
    include_once("header.php");
  ?>
  <article>
      <p>Without our generous sponsors, we would not have the opportunity to get the most out of this wonderful program. Below you can find a list of our sponsors.</p>
      <p>If you are interested in sponsoring us, we would love to hear from you!</p>
      <h5>To Donate</h5>
      <p>Please make checks payable to: GMHS Robotics Team.</p>
      <p>Address to:</p>
      <p>George Mason High School Attn. Janice Nette
          <br>7124 Leesburg Pike
          <br>Falls Church, VA 22043</p>
      <p>You can also contact us about sponsorship by emailing us <a href="mailto:robotics1418ATSYMBOLgmailPERIODcom">here</a>.</p>
      <table>
          <tr>
              <td>
                  <a href="http://fccps.org"><img src="img/sponsors/fccps.png"></a>
                  <a href="http://robotpy.readthedocs.io/en/latest/getting_started.html"><img src="img/sponsors/robotpy.png"></a>
                  <a href="http://www.boozallen.com/"><img src="img/sponsors/Booz-Allen-Hamilton.jpg"></a>
              </td>
              <td>
                  <a href="http://fccps.org/gm"><img src="img/sponsors/MustangLogo.png"></a>
                  <a href="http://www.fcedf.org/"><img src="img/sponsors/fcef.png"></a>
                  <a href="http://www.clarkconstruction.com/"><img src="img/sponsors/clarkconstructionlogo.jpg"></a>
              </td>
              <td>
                  <a href="http://unity3d.com/"><img src="img/sponsors/unity.png"></a>
                  <a href="http://www.missionanalytics.com/"><img src="img/sponsors/mission-analytics.jpg"></a>
                  <a href="http://r2c.biz/"><img src="img/sponsors/r2c.jpg"></a>
              </td>
          </tr>
      </table>
  </article>
  <?php include_once("footer.php"); ?>
</body>
</html>

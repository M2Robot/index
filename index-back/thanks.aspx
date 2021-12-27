<html lang="en"><head>
	<title>Ask - Me</title>
	<meta charset="UTF-8">

<!--===============================================================================================-->
	<link rel="apple-touch-icon" sizes="180x180" href="ask.me/images/icons/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="ask.me/images/icons/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="ask.me/images/icons/favicon-16x16.png">
	<link rel="manifest" href="ask.me/images/icons/site.webmanifest">
	<link rel="mask-icon" href="ask.me/images/icons/safari-pinned-tab.svg" color="#8b8f91">
	<meta name="apple-mobile-web-app-title" content="ask.me">
	<meta name="application-name" content="ask.me">
	<meta name="msapplication-TileColor" content="#fbfdff">
	<meta name="theme-color" content="#ffffff">
  
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
<!--===============================================================================================-->
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->
	<link rel="icon" type="image/png" href="ask.me/images/icons/favicon.png">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="ask.me/vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="ask.me/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="ask.me/vendor/animate/animate.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="ask.me/vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="ask.me/vendor/select2/select2.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="ask.me/css/util.css">
  <link rel="stylesheet" href="./assets/css/bootstrap.min.css">
  <link href="./assets/css/css2.css" rel="stylesheet">
  <link rel="stylesheet" href="./assets/css/style1.css">

	<link rel="stylesheet" type="text/css" href="ask.me/css/main.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
<script>
	window.console = window.console || function(t) {};
  </script>
  
	<script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>
  
	
	<script>
	if (document.location.search.match(/type=embed/gi)) {
	  window.parent.postMessage("resize", "*");
	}
  </script>
  <!--===============================================================================================-->
  <style>
	@import 'https://fonts.googleapis.com/css?family=Roboto+Mono:100';
	html,
	body {
	  font-family: 'Roboto Mono', monospace;
	  height: 100%;
    background-color: #1f1f1f;
	}
	.text {
	  font-weight: auto;
	  font-size: 25px;
	  color: #fafafa;
	}


       @media only screen and (max-width: 480px) {
 
        .ara {
      direction: ltr;
      margin-top: 5%;
      margin-left: 50px;
    }
        footer p {
    margin-top: 0;
    margin-bottom: 1rem;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: medium;
    color: var(--mode-color);
    line-height: 2rem;
    padding: 0.25em 0em;    
	  text-align: center;
    margin-top: 10%;
    }


	</style>
	<!--===============================================================================================-->
</head>
<body translate="no" >



							
				<img src="ask.me/images/sent.gif" class="rounded mx-auto d-block" alt="IMG">
        <div class="text-center">	
				<div class="text text-center"></div>
        <br><br><br><br><br>
<a class="btn btn-primary" href="en" role="button center-block" style = "width:200px;">HOME</a>


<br><br><br><br>



<!--===============================================================================================-->
	<script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script src="ask.me/vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="ask.me/vendor/bootstrap/js/popper.js"></script>
	<script src="ask.me/vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="ask.me/vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->
	<script src="ask.me/vendor/tilt/tilt.jquery.min.js"></script>
	<script>
		$('.js-tilt').tilt({
			scale: 1.1
		})
	</script>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async="" src="ask.me/https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-23581568-13');
</script>
    <script src="https://cpwebassets.codepen.io/assets/common/stopExecutionOnTimeout-8216c69d01441f36c0ea791ae2d4469f0f8ff5326f00ae2d00e4bb7d20e24edb.js"></script>

  
      <script id="rendered-js" >
// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }}


// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
'Done!',
  'Your Message ',
  'Sent successfully.',
  'Thanks. ',
  ':)'
]


const el = document.querySelector('.text');
const fx = new TextScramble(el);

let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800);
  });
  counter = (counter + 1) % phrases.length;
};

next();
//# sourceURL=pen.js
    </script>

<!--===============================================================================================-->
	<script src="ask.me/js/main.js"></script>
      <script src="assets/js/jquery-3.4.1.min.js"></script>
      <script src="assets/js/popper.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/main1.js"></script>
      <!-- End Scrijs/pt -->  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>


<footer class="mastfoot mt-auto footer">
        <div class="inner">
          <p>© 2021 Copyright: <a href="404" style="text-decoration: none; color: #dc143c;">MrRobot.ga</a></p>
        </div>
      </footer>
</body>
</html>
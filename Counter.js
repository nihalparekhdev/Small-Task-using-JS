<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="../../Practice/react-app/src/app.js" type="module"></script>
    <title>Vite + React</title>
  </head>
  <body>
    <h1>Counter</h1>
    <div id="displayResult">0</div><br>
    <button onclick="increase()">Increase</button>
    <button onclick="reset()">Reset</button>
    <button onclick="decrease()">Decrease</button>
  </body>
  <script>
    let counter = 0;
    function updateDisplay(){
      document.getElementById('displayResult').textContent = counter;
    }

    function increase(){
      counter++;
      updateDisplay();
    }

    function decrease(){
      counter--;
      updateDisplay();
    }

    function reset(){
      counter=0;
      updateDisplay();
    }
  </script>
</html>

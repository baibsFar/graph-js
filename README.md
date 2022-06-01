# graph-js
An implementation of graph in javascript


## Usage
There is a sample code in index.js

### Js file

```js

import Point from './utils/point.js'
import Vertice from './utils/vertice.js'
import Graph from './utils/graph.js'
import { colors } from './colors/colors.js'
import { dom } from './elements/elements.js'

// Create Points
const   A = Point('A', 50, 50),
        B = Point('B', 100, 100),
        C = Point('C', 150, 150),
        D = Point('D', 30, 200)

// Create Vertices
const   vA = Vertice(A),
        vB = Vertice(B),
        vC = Vertice(C),
        vD = Vertice(D)

// Add successors for each
vA.successors.add(B)
vB.successors.add(C)
vD.successors
.add(A)
.add(B)
.add(C)

// Create Graph on the canvas
// Canvas setup must be set in styles or in JS script
const graph = Graph(colors, dom.canvas, { verticeRadius: 15, succRadius: 1, fontSize: 14 })
graph.vertices
.add(vA)
.add(vB)
.add(vC)
.add(vD)

// Draw Vertices
graph.drawVertices(colors.yellow, colors.dark)

// Draw Arcs
graph.drawArc(colors.yellow)

// Draw Pounds
graph.drawPound(colors.pink)

```

### HTML file with canvas

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Graph implementation</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <canvas id="canvas" width="300" height="300"></canvas>
    

    <script src="js/index.js" type="module"></script>
</body>
</html>

```

### CSS file for style

```css
* {
    margin: 0;
    padding: 0;
}

body {
    background-color: rgb(5, 5, 5);
}

#canvas {
    background-color: rgb(30, 30, 30);
}

```

<p>Happy hacking </p>

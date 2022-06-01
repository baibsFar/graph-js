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
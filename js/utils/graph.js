/**
 * Create an instance of Graph
 * @param {Object} _colors 
 * @param {HTMLCanvasElement} _canvas 
 * @param {Object} _options 
 * @returns {vertices, colors, drawVertices, drawArc, drawPound}
 */
export default function Graph(_colors = {}, _canvas, _options = {}) {
    const vertices = new Set()
    const colors = _colors
    const ctx = _canvas.getContext('2d')
    const options = _options


    const drawVertices = (_verticeColor, _verticeBgColor) => {
        if (ctx) {
            vertices.forEach(vertice => {
                ctx.beginPath()
                ctx.fillStyle = _verticeBgColor
                ctx.arc(vertice.self.x, vertice.self.y, options.verticeRadius, 0, Math.PI * 2)
                ctx.fill()

                ctx.fillStyle = _verticeColor
                ctx.font = `${options.fontSize}px sans-serif`
                ctx.fillText(vertice.self.name, vertice.self.x - options.verticeRadius, vertice.self.y - options.verticeRadius)
            })
        }
    }

    const drawArc = (_arcColor) => {
        if (ctx) {
            vertices.forEach(vertice => {
                if (vertice.successors.size > 0) {
                    vertice.successors.forEach(successor =>{
                        // Succ circle
                        ctx.beginPath()
                        ctx.fillStyle = _arcColor
                        ctx.arc(successor.x + 10, successor.y + 10, options.succRadius, 0, Math.PI * 2)
                        ctx.fill()

                        // // Succ name
                        // ctx.fillStyle = _arcColor
                        // ctx.font = '10px sans-serif'
                        // ctx.fillText(vertice.self.name, successor.x + options.succRadius, successor.y + 15)

                        // Arcs
                        ctx.beginPath()
                        ctx.strokeStyle = _arcColor
                        ctx.moveTo(vertice.self.x, vertice.self.y)
                        ctx.lineTo(successor.x, successor.y)
                        ctx.stroke()

                    })
                }
            })
        }
    }
    
    const drawPound = (_poundColor) => {
        if (ctx) {
            vertices.forEach(vertice => {
                if (vertice.successors.size > 0) {
                    vertice.successors.forEach(successor => {
                        // Pound
                        const middle = { x: (vertice.self.x + successor.x) / 2, y: (vertice.self.y + successor.y) / 2 }
                        const distance = Math.sqrt(Math.pow(successor.x - vertice.self.x, 2) + Math.pow(successor.y - vertice.self.y, 2))
                        ctx.beginPath()
                        ctx.fillStyle = _poundColor
                        ctx.fillText(parseInt(distance), middle.x - 5, middle.y - 5)
                    })
                }
            })
        }
    }
    
    return { 
        vertices,
        colors,
        drawVertices,
        drawArc,
        drawPound
    }
}
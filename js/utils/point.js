// This algorithm implement a graph that only supports
// positive pound between each vertice
/**
 * Create an instance of Point
 * @param {String} _name 
 * @param {Number} _x 
 * @param {Number} _y 
 * @returns {name, x, y}
 */
export default function Point(_name= '', _x = 0, _y = 0) {
    const name = _name
    const x = _x
    const y = _y
    return {
        name,
        x,
        y
    }
}
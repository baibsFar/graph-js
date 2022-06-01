import Point from './point.js'

/**
 * Create an instance of Vertice
 * @param {Point} _self 
 * @param {Set<Point>} _successors 
 * @param {Set<Point>} _predecessors 
 * @returns {self, successors, predecessors}
 */
export default function Vertice(_self = Point(), _successors = new Set(), _predecessors = new Set()) {
    const self = _self
    const successors = _successors
    const predecessors = _predecessors
    return {
        self,
        successors,
        predecessors
    }
}
function slope(points) {
    let rise = points[1] - points[3]
    let run = points[0] - points[2]

    return run === 0 ? 'undefined' : String(rise / run)

}
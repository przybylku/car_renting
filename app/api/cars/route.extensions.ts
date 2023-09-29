interface Number {
    isEmpty(this: number): boolean
}

Number.prototype.isEmpty = function(this: number): boolean {
    return this < 0 ? true : false
}
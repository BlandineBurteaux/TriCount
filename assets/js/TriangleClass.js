class Triangle {
    constructor(ab, ac, bc) {
        this.ab = ab;
        this.ac = ac;
        this.bc = bc;
    }

    /**
    * @description Retourne si triangle est approprié
    * (la somme des deux plus petits côtés est supérieur au grand côté)
    *
    * @returns {bool}
    */
    isAppropriate(){
        var sides = this.getSortSides();
        return (sides[0] + sides[1] > sides[2]);
    }

    /**
    * @description Retourne le périmètre du triangle
    *
    * @returns {bool}
    */
    getPerimeter(){
        return this.ab + this.ac + this.bc;
    }

    /**
    * @description Retourne le tableau des côtés du triangle triés du plus petit au plus grand
    *
    * @returns {Array}
    */
    getSortSides() {
        var sides = [this.ab, this.ac, this.bc];
        return sides.sort((a, b) => a - b);
    }
}
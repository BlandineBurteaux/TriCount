class TriCount {

    /**
    * @description Compte le nombre de triangle approprié selon un max et un min
    *
    * @param {int minLength taille minimale}
    * @param {int maxLength taille maximale}
    * @returns {int}
    */
    count(minLength, maxLength) {
        if (
            !isInt(minLength)
            || !isInt(maxLength)
            || minLength > maxLength
            || minLength < 1
            || maxLength > 1000000
            || (maxLength - minLength) === 999999
        )
        {
            return -1;
        }

        var o__count = 0;
        var o__TriCount = [];
        
        // Fonction commentée ; non fonctionnelle car trop longue à éxécuter
        // Cotés du Triangle : ab, ac, bc
        /*for (var ab = minLength; ab <= maxLength; ab++)
        {
            for (var ac = minLength; ac <= maxLength; ac++)
            {
                for (var bc = minLength; bc <= maxLength; bc++)
                {
                    var triangle = new Triangle(ab, ac, bc);
                    var idCalc = triangle.getSortSides().join("|");

                    // Si le triangle est approprié
                    // et si ce triangle n'est pas déjà référencé
                    // ex : ab=1;ac=2; est équivalent à ab=2;ac=1;
                    if (
                        triangle.isAppropriate()
                        && o__TriCount.indexOf(idCalc) === -1
                    )
                    {
                        o__TriCount.push(idCalc);
                        o__count++;

                        if (o__count > 1000000000) {
                            return -1;
                        }
                    }
                }
            }
        }*/

        var ab = minLength;
        var ac = minLength;
        var bc = minLength;

        console.log(maxLength);

        while (ab <= maxLength) {
            console.log("ab", ab);
            while (ac <= maxLength) {
                console.log("aC", ac);
                while (bc <= maxLength) {
                    console.log("bc", bc);
                    var triangle = new Triangle(ab, ac, bc);
                    var idCalc = triangle.getSortSides().join("|");
                    console.log(idCalc);

                    // Si le triangle est approprié
                    // et si ce triangle n'est pas déjà référencé
                    // ex : ab=1;ac=2; est équivalent à ab=2;ac=1;
                    if (
                        triangle.isAppropriate()
                        && o__TriCount.indexOf(idCalc) === -1
                    ) {
                        o__TriCount.push(idCalc);
                        o__count++;

                        if (o__count > 1000000000) {
                            return -1;
                        }
                    }
                    bc++;
                }
                bc = minLength;
                ac++;
            }
            ac = minLength;
            ab++;
        }
        console.log(o__count);

        // Fonction non fonctionnelle car fausse ; on incrémente jamais le côté BC
        /*var bc = minLength;
        for (var ab = minLength; ab <= maxLength; ab++) {
            // on incrémente ici les triangles équilatéraux
            o__count++;
            for (var ac = minLength; ac <= maxLength; ac++) {

                // on skip le premier triangle équilatéral ;
                if (ab === ac && ab === bc)
                {
                    continue;
                }

                var triangle = new Triangle(ab, ac, bc);
                var idCalc = triangle.getSortSides().join("|");
                
                // Si le triangle est approprié
                // et si ce triangle n'est pas déjà référencé
                // ex : ab=1;ac=2; est équivalent à ab=2;ac=1;
                if (
                    triangle.isAppropriate()
                    && o__TriCount.indexOf(idCalc) === -1
                ) {
                    o__TriCount.push(idCalc);
                    o__count++;

                    if (o__count > 1000000000) {
                        return -1;
                    }
                }
            }
        }*/

        return o__count;
    }
}

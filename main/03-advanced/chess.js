function tour(ligne, colonne) {
    console.log("La tour est placée sur : ligne = " + ligne + " | colonne = " + colonne)

    for (let i = 1; i <= 8; ++i) {
        if (i !== colonne) {
            console.log("Case accessible : [" + ligne + "; " + i + "]")
        }
    }

    
    for (let i = 1; i <= 8; ++i) {
        if (i !== ligne) {
           console.log("Case accessible : [" + i + "; " + colonne + "]")
        }
    }
}

tour(3, 2)
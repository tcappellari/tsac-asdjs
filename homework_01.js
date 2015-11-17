/*
Esercizio 1
Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore negativo
*/
// Iterative
// Spazio: O(1) 
// Tempo: O(n)
function sumwhileneg(myarray) {
    var tot = 0;
    for(i = 0; i < myarray.length; ++i) {
        var x = myarray[i];
        if (x > 0) {
            tot += x;
        } else {
            return tot;
        }
    }
    return tot;
}


// Ricorsive
// Spazio: O(n) 
// Tempo: O(n)
function sumwhilenegR(myarray) {
    if (myarray.length == 0 || myarray[0] < 0) {
        return 0;
    } else {
        return myarray[0] + sumwhilenegR(myarray.slice(1));
    }
}


// Per Tiziano.
function ex_1_I(myarray) {
    return sumwhileneg(myarray);
}

function ex_1_R(myarray) {
    return sumwhilenegR(myarray);
}

/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/
// Spazio: O(1) 
// Tempo: O(n)
function firstOdd(n) {
    var tot = 0;
    for(i = 0; i < n; ++i) {
        tot += 1 + 2 * i;
    }
    return tot;
}


// Spazio: O(n) 
// Tempo: O(n)
function firstOddR(n) {
    if (n == 0) {
        return 0;
    } else {
        return 2 * n - 1 + firstOddR(n - 1);
    }
}

function createArray(n) {
    var myarray = [];
    for(var i = 0; i < n; ++i) {
        myarray.push(i);
    }
    return myarray;
}

function firstOddF(n) {
    return createArray(2 * n)
           .filter(x => x % 2 != 0)
           .reduce((acc, x) => acc + x, 0);
}



// Per Tiziano.
function ex_2_I(x) {
    return firstOdd(x);
}

function ex_2_R(x) {
    return firstOddR(x);
}

function ex_2_F(x) {
    return firstOddF(x);
}


/*
Dato un array di 10 elementi, calcolarne la media
*/

function averageI(myarray) {
    var tot = 0;
    for(var i = 0; i < myarray.length; ++i) {
        tot += myarray[i];
    }
    return tot / myarray.length;
}

function averageR(myarray) {

    function averageSumR(myarray) {
        if (myarray.length == 0) {
            return 0;
        } else {
            return myarray[0] + averageSumR(myarray.slice(1));
        }
    }
    
    return averageSumR(myarray) / myarray.length;
}

function myForEach(myarray, c) {
    for(var i = 0; i < myarray.length; ++i) {
        c(myarray[i]);
    }
}

function averageFWithForEach(myarray) {
    var tot = 0;
    myarray.forEach(x => { tot += x});
    return tot / myarray.length;

    /*
    var tot = 0;
    for(var i = 0; i < myarray.length; ++i) {
        tot += myarray[i];
    }
    return tot / myarray.length;
    */
}

function averageF(myarray) {
    return myarray.reduce((acc, x) => acc + x, 0) / myarray.length
}


// Per Tiziano.
function ex_3_I(x) {
    return averageI(x);
}

function ex_3_R(x) {
    return averageR(x);
}

function ex_3_F(x) {
    return averageF(x);
}

/*
Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri
compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a,
calcolare la somma nell’intervallo [b,a]
*/
function sumAllI(a, b) {
    function sumAllInner(a, b) {
        var tot = 0;
        for(var x = a; x <=b; ++x) {
            tot += x;
        }
        /*
        while(a <= b){
            tot += a;
            ++a;
        }
        */
        return tot;
    }
    if (a > b)
        return sumAllInner(b, a);
    else
        return sumAllInner(a, b);
}

function sumAllR(a, b) {
    function sumAllInnerR(a, b) {
        if (a == b) {
            return b;
        } else {
            return a + sumAllInnerR(a + 1, b);
        }
    }
    if (a > b)
        return sumAllInnerR(b, a);
    else
        return sumAllInnerR(a, b);
}

function createArrayFromTo(a, b) {
    var myarray = [];
    for(var i = a; i <= b; ++i) {
        myarray.push(i);
    }
    return myarray;
}

function sumAllF(a, b) {
    if (a > b) {
        var t = a;
        a = b;
        b = t;
    }
    return createArrayFromTo(a, b).reduce((acc, x) => acc + x, 0);
}

// Per Tiziano.
function ex_4_I(x, y) {
    return averageI(x, y);
}

function ex_4_R(x, y) {
    return averageR(x, y);
}

function ex_4_F(x, y) {
    return averageF(x, y);
}

/*
Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo
operatore somma.
*/
function moltI(a, b) {
    // a * b = a + a + a for b times
    var tot = 0;
    for(var i = 0; i < b; ++i) {
        tot += a;
    }
    return tot;
}

function moltR(a, b) {
    // a * b = a + a + a for b times
    if (b == 0) {
        return 0;
    } else {
        return a + moltR(a, b - 1);
    }
}

function createArraySameValue(a, n) {
    var myarray = [];
    for(var i = 0; i < n; ++i) {
        myarray.push(a);
    }
    return myarray;
}

function moltF(a, b) {
    return createArraySameValue(a, b).reduce((acc, x) => acc + x, 0);
}

// Per Tiziano.
function ex_5_I(x, y) {
    return moltI(x, y);
}

function ex_5_R(x, y) {
    return moltR(x, y);
}

function ex_5_F(x, y) {
    return moltF(x, y);
}

/*
Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite
l’utilizzo dei soli operatori somma e sottrazione.
*/
function divI(a, b) {
    // a / b =  a - b - b - b for n time > 0
    var divi = 0;
    while(a >= b) {
        a -= b;
        divi++;
    }
    return [divi, a];
}

function divR(a, b) {
    // a / b =  a - b - b - b for n time > 0
    if (a < b) {
        return [0, a];
    } else {
        var result = divR(a - b, b);
        return [result[0] + 1, result[1]];
    }
}

function divF(a, b) {
    //
}

// Per Tiziano.
function ex_6_I(x, y) {
    return divI(x, y);
}

function ex_6_R(x, y) {
    return divR(x, y);
}

function ex_6_F(x, y) {
    return divF(x, y);
}

/*
Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli
operatori somma, sottrazione e della funzione mult.
*/


function powI(a, b) {
    // a ^ b = a * a * a for b times
    var tot = 1;
    for(var i = 0; i < b; ++i) {
        tot = moltI(tot, a);
    }
    return tot;
}

function powR(a, b) {
    // a ^ b = a * a * a for b times
    if (b == 0) {
        return 1;
    } else {
        return moltR(a, powR(a, b - 1));
    }
}

function powF(a, b) {
    return createArraySameValue(a, b).reduce((acc, x) => acc * x, 1);
}

// Per Tiziano.
function ex_7_I(x, y) {
    return powI(x, y);
}

function ex_7_R(x, y) {
    return powR(x);
}

function ex_7_F(x, y) {
    return powF(x, y);
}

/*
Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli
oggetti in un array bidimensionale n x n.
*/

function matI(myarray) {
    var m = [];
    var n = Math.sqrt(myarray.length);
    for(var row = 0; row < n; ++row) {
        //m[row] = myarray.slice(row * n, (row + 1) * n);
        var row = []
        for(var col = 0; col < n; ++col) {
            row[row, col] = myarray[row * n + col];
        }
    }
    return m;
}

// Per Tiziano.
function ex_7_I(x) {
    return matI(x);
}


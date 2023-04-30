function greet(language) {

    let dataBase = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    }

    for (let key in dataBase) {
        if (key === language) {
            return dataBase[key];
        }
    }
    return 'Welcome'

    // P: a string
    // R: return a string with the greeting
    // E: english: 'Welcome', czech: 'Vitejte',
    // P: we need to compare language parameter to all the languages and then return the according
    // greeting with for in loop and key

}
//SECOND SOLUTION
// if (dataBase[language]) {
//     return dataBase[language];
//   } else {
//     return dataBase['english']; // default to English
//   }
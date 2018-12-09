// Creates DOMContentLoaded event handler on document 
document.addEventListener('DOMContentLoaded', (event) => {
    // Should log, 'Start of app.js file!', to the console
    console.log(
        '%cStart%c of app.js file!', 
        'font-size: 12px; font-weight: 900; color: #17a2b8;',
        'font-size: 12px; font-weight: 500; color: #17a2b8;'
    )
    
    // Should log, 'Success, DOM fully loaded and parsed!', to the console
    console.log(
        "%cSuccess,%c DOM fully loaded and parsed!", 
        "font-size: 12px; font-weight: 900; color: #20c997;", 
        "font-size: 12px; font-weight: 500; color: #20c997;"
    )

    // Creates doMath() function
    const doMath = () => {
        return new Promise((resolve, reject) => {
            // Adds 6 by 2
            resolve(slowMath.add(6, 2));
            reject(new Error('Oops! Something went wrong with Task 1!'));
        }).then((result) => {
            // Should log, '6 + 2 = 8!', to the console
            console.log(
                `%c6 %c+%c 2%c = %c ${result} %c!`,
                'font-size: 12px; font-weight: 500; color: #343a40;',
                'font-size: 12px; font-weight: 900; color: #343a40;',
                'font-size: 12px; font-weight: 500; color: #343a40;',
                'font-size: 12px; font-weight: 400; color: #343a40;',
                'font-size: 12px; font-weight: 900; color: #343a40; background-color: rgba(255, 193, 7, 0.550);',
                'font-size: 12px; font-weight: 400; color: #343a40;'
            )
            return new Promise((resolve, reject) => {
                // Multiplies 8 by 2 
                resolve(slowMath.multiply(result, 2));
                reject(new Error('Oops! Something went wrong with Task 2!'));
            })
        }).then((result) => {
            // Should log, '8 * 2 = 16!', to the console
            console.log(
                `%c8 %c*%c 2%c = %c ${result} %c!`,
                'font-size: 12px; font-weight: 500; color: #343a40;',
                'font-size: 12px; font-weight: 900; color: #343a40;',
                'font-size: 12px; font-weight: 500; color: #343a40;',
                'font-size: 12px; font-weight: 400; color: #343a40;',
                'font-size: 12px; font-weight: 900; color: #343a40; background-color: rgba(255, 193, 7, 0.550);',
                'font-size: 12px; font-weight: 400; color: #343a40;'
            )
            return new Promise((resolve, reject) => {
                // Divides 16 by 4 
                resolve(slowMath.divide(result, 4));
                reject(new Error('Oops! Something went wrong with Task 3!'));
            })
        }).then((result) => {
            // Should log, '16 / 4 = 4!', to the console
            console.log(
                `%c16 %c/%c 4%c = %c ${result} %c!`,
                'font-size: 12px; font-weight: 500; color: #343a40;',
                'font-size: 12px; font-weight: 900; color: #343a40;',
                'font-size: 12px; font-weight: 500; color: #343a40;',
                'font-size: 12px; font-weight: 400; color: #343a40;',
                'font-size: 12px; font-weight: 900; color: #343a40; background-color: rgba(255, 193, 7, 0.550);',
                'font-size: 12px; font-weight: 400; color: #343a40;'
            )
            return new Promise((resolve, reject) => {
                // Subtracts 4 by 3 
                resolve(slowMath.subtract(result, 3));
                reject(new Error('Oops! Something went wrong with Task 4!'));
            })
        }).then((result) => {
            // Should log, '4 - 3 = 1!', to the console
            console.log(
                `%c4 %c-%c 3%c = %c ${result} %c!`,
                'font-size: 12px; font-weight: 500; color: #343a40;',
                'font-size: 12px; font-weight: 900; color: #343a40;',
                'font-size: 12px; font-weight: 500; color: #343a40;',
                'font-size: 12px; font-weight: 400; color: #343a40;',
                'font-size: 12px; font-weight: 900; color: #343a40; background-color: rgba(255, 193, 7, 0.550);',
                'font-size: 12px; font-weight: 400; color: #343a40;'
            )
        })
    }

    // Calls doMath() function
    doMath();

    // Should log, 'End of app.js file!', to the console
    console.log(
        '%cEnd%c of app.js file!', 
        'font-size: 12px; font-weight: 900; color: #17a2b8;',
        'font-size: 12px; font-weight: 500; color: #17a2b8;'
    )
})
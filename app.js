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
        "font-size: 12px; font-weight: 900; color: #28a745;", 
        "font-size: 12px; font-weight: 500; color: #28a745;"
    )

    

    // Should log, 'End of app.js file!', to the console
    console.log(
        '%cEnd%c of app.js file!', 
        'font-size: 12px; font-weight: 900; color: #17a2b8;',
        'font-size: 12px; font-weight: 500; color: #17a2b8;'
    )
})
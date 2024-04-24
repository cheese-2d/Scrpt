(function() {
    'use strict';

    // Remove all existing elements on the page
    document.body.innerHTML = '';

    // Create a new HTML structure based on your provided code
    const newHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Custom Theme</title>
            <style>
                body {
                    background-color: black;
                    color: #fff;
                    width: 100vw;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            </style>
        </head>
        <body>
            <h1>YOU HAVE BEEN HACKED</h1>
        </body>
        </html>
    `;

    // Add the new HTML to the document
    document.write(newHTML);
})();

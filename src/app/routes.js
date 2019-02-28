module.exports = (app) => {
    
    app.get('/', function(req, resp) {
        resp.send(
            `
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Testando a webpage </h1>
                    </body> 
                </html>
            `
        );
    });

}

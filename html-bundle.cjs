module.exports = {
  files: [{
  
    entryPoints: [
        'src/index.cjs',
    ],
    filename: 'index.html',
    htmlTemplate: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
          <div id="root">
          </div>
      </body>
      </html>
    `,
  }]
};

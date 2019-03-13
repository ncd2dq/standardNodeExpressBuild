const express = require('express');

const PORT = 5000;

const app = express();

app.listen(PORT, () => console.log(`Serving port: ${PORT}`));


/* 
To serve an angular app:
```ng build```

const express = require('express');
const path = require('path');

const app = express();

// PATH/TO/ALL/ANGULAR/APP/FILES
// Bare bones serving angular app
// use "ng build" to get the /dist directory with production code
app.use(express.static(path.join(__dirname, 'client/my-app/dist/my-app')))

// PATH/TO/SINGLE/INDEX.HTML
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/my-app/dist/my-app/index.html'))
})

app.listen(4000, () => console.log("Online"));
*/

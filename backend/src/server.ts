// Load env variables
require('dotenv').config()

import { app } from "./app"

const PORT = process.env.PORT || 5000;

// start the Express server
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});
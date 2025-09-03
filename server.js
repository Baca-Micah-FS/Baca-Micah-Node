const dotenv = require("dotenv").config();

const app = require("./src");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

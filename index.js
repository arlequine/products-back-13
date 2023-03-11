const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const app = express();
app.use(express.json());
console.log(process.env.HOLA)
const { productRouter } = require('./api')

app.use('/products', productRouter)

// app.get('/', (req, res) => {
//   res.send({
//     message: `it's works`
//   })
// })

app.listen(process.env.port, () => {
  console.log(`Server is running on port ${process.env.port}`);
})
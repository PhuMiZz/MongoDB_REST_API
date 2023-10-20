import express from 'express';
import cors from 'cors';
import './config/dotenv.js';
import 'express-async-errors';
import michelin from './routes/michelin.js';

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

//Load the michelin routes
app.use('/michelins', michelin);

// Global error handling
// app.use((err, req, res, next) => {
//     res.status(500).send('Unexpected error occured.')
// })

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express')
var cors = require('cors')

require('dotenv').config();

const dbConfig = require('./config/dbConfig')




const app = express()

const userRoutes = require('./routes/userRoutes')
const movieRoute = require('./routes/movieRoutes')
const theatreRoute = require('./routes/theatreRoute')
const showRoute = require('./routes/showRoute')
const bookingRoute = require('./routes/bookingRoute')


app.use(cors())
app.use(express.json())
app.use('/api/users' , userRoutes)
app.use('/api/movies' , movieRoute)
app.use('/api/theatres' , theatreRoute )
app.use('/api/shows' , showRoute )
app.use('/api/bookings' , bookingRoute )

app.get('/api/verify-role', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });
  
    try {
      const decoded = jwt.verify(token, 'your-secret-key');
      res.json({ role: decoded.role });
    } catch (err) {
      res.status(401).json({ message: 'Unauthorized' });
    }
  });

  
const PORT = process.env.PORT || 8081




app.listen(PORT , ()=>{
    console.log("server running")
})





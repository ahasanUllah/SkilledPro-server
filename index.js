const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;
app.use(cors())

const categories = require('./Data/categories.json')
const course = require('./Data/course.json')

app.get('/', (req, res) => {
    res.send('Hello express')
})

app.get('/category', (req,res) => {
    res.send(categories)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id 
    const selected_category = course.filter(c => c.category_id == id)
    res.send(selected_category)
})

app.get('/course', (req, res) => {
    res.send(course)
   
})

app.get('/course/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const single_course = course.find(c => c.id === id);
    res.send(single_course);
    
})

app.listen(port, () => {
    console.log(`Skilled pro running on port ${port}`);
})
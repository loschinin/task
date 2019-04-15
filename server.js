var express = require('express')
var app = express()

app.set('view engine', 'ejs')
app.use('/public', express.static(__dirname + '/public'))

var dataJson = '{"data": [{"user_id": 5341,"department_id": 51,"position_id": 67,"salary": 533.1},{"user_id": 5343,"department_id": 22,"position_id": 43,"salary": 755.5},{"user_id": 5646, "department_id": 33,"position_id": 77,"salary": 444.5}, {"user_id": 7897,"department_id": 44,"position_id": 67,"salary": 555.5},{"user_id": 4562,"department_id": 33,"position_id": 77,"salary": 888.5},{"user_id": 4564,"department_id": 51,"position_id": 43,"salary": 333.5},{"user_id": 4523,"department_id": 33,"position_id": 67,"salary": 344.5},{"user_id": 4564,"department_id": 85,"position_id": 43,"salary": 255.5},{"user_id": 2342,"department_id": 51,"position_id": 67,"salary": 345.5},{"user_id": 5546,"department_id": 51,"position_id": 77,"salary": 755.3},{"user_id": 5633,"department_id": 33,"position_id": 43,"salary": 898.5},{"user_id": 3456,"department_id": 85,"position_id": 77,"salary": 998.5}]}'

var parsdata = JSON.parse(dataJson)

// -----------count avarage salary per user (month, day, hour)--------------
var allUserMonth = parsdata.data.map(e => e.salary)
var avgUserMonth = allUserMonth.reduce((a, b) => a + b) / allUserMonth.length
var avgUserDay = avgUserMonth / 20
var avgUserHour = avgUserDay / 8

//------- count avarage salory in each department (month, day, hour)------------
var depId = 51
var sal = parsdata.data.filter(e => e.department_id == depId).map(e => e.salary)
var avgDepartmentMonth = sal.reduce((a, b) => a + b) / sal.length
var avgDepartmentDay = avgDepartmentMonth / 20
var avgDepartmentHour = avgDepartmentDay / 8 


app.get('/', function (req, res) {
  res.render('view', {
    parsdata,
    avgUserMonth,
    avgUserDay,
    avgUserHour,
    depId,
    avgDepartmentMonth,
    avgDepartmentDay,
    avgDepartmentHour
  })
})

app.listen(3000)
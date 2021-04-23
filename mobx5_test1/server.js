const express = require('express')
const app = express()

//解决跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
    res.send(200);
  }
  else {
    next();
  }
});
app.get('/users', (req, res) => {
  const users = [{ "id": 1, "name": "dyk1", "age": 21 }, { "id": 2, "name": "dyk2", "age": 22 }, { "id": 3, "name": "dyk3", "age": 23 }]
  res.send(users)
})
app.listen(5000, () => {
  console.log("服务开启成功"); //yellow
})
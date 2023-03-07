import express from 'express';
const app = express();
const port = 3000;

app.get('/', (_, res) => {
  res.send('Load balancer form NGINX-Server');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

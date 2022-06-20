const fs = require('fs');
const server = require('./app/server');
const watch = require('./app/watch');

server.http.listen(5004, () => console.log('Server start'));

watch('watch', ({ f, e }) => {
  const best = fs.readFileSync('./watch/best.txt', { encoding: 'utf-8' });
  const data = fs
    .readFileSync('./watch/genes.txt', { encoding: 'utf-8' })
    .split('\n')
    .slice(best * 257, best * 257 + 257);
  server.socketApp.emit('change', data);
});

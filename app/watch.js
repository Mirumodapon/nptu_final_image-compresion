const fs = require('fs');

const watch = (path, execute) => {
  fs.watch(path, (e, f) => {
    if (f) execute({ f, e });
  });
};

module.exports = watch;

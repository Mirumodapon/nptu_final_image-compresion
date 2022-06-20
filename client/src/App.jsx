import react, { useState, useEffect } from 'react';
import socketClient from 'socket.io-client';

import Block from './Block';

function App() {
  const [socket, setSocket] = useState(null);
  const [data, setData] = useState([]);
  const [img, setImg] = useState(null);

  useEffect(() => {
    initSocket();
  }, []);

  const initSocket = () => {
    const _socket = socketClient('http://localhost:5004');
    _socket.on('change', (data) => {
      const a = data.slice(1).map((x) => x.trim().split(/\ +/));
      // setData(data);
      // console.log(a);
      setData(a);
      fetch('http://localhost:5004/static/output.bmp')
        .then((x) => x.blob())
        .then((image) => {
          const localUrl = URL.createObjectURL(image);
          setImg(localUrl);
        });
    });

    setSocket(_socket);
  };

  return (
    <main>
      <section className="left">
        {data.map(([x, ...value]) => (
          <Block value={value} key={x} />
        ))}
      </section>
      <section className="right">
        <img src="http://localhost:5004/static/static.bmp" />
        {<img src={img} />}
      </section>
    </main>
  );
}

export default App;

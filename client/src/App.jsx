import react, { useState, useEffect } from 'react';
import socketClient from 'socket.io-client';

import Block from './Block';

function App() {
  const [socket, setSocket] = useState(null);
  const [data, setData] = useState([]);

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
    });

    setSocket(_socket);
  };

  return (
    <main>
      {data.map(([x, ...value]) => (
        <Block value={value} key={x} />
      ))}
    </main>
  );
}

export default App;

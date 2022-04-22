import io from 'socket.io-client';
import React from 'react';
import { useDispatch } from 'react-redux';
import { recorderTickers } from './states/tickersState';

function listenServer(callback) {
  const socket = io.connect('http://localhost:4000');
  socket.emit('start');
  socket.on('ticker', (response) => {
    callback([...response]);
  });

  return socket;
}

export default function getDataFromServer(delay) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    let timer = null;
    let socket = null;

    if (!delay) {
      socket = listenServer((data) => {
        dispatch(recorderTickers(data));
      });
    } else {
      timer = setInterval(() => {
        socket = listenServer((data) => {
          dispatch(recorderTickers(data));
          socket.close(true);
        });
      }, delay);
    }

    const stopTimerSocket = () => {
      clearInterval(timer);
      socket?.close();
    };
    return stopTimerSocket;
  }, [delay]);
}

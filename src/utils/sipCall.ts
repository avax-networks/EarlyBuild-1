/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import JsSIP from 'jssip';
import NodeWebSocket from 'jssip-node-websocket';

const socket = new NodeWebSocket('wss://sip.nexmo.com');

const ua = new JsSIP.UA({
  uri: 'sip:f788ffe7@sip.nexmo.com',
  password: 'TCkYtK5d9DJk4A7N',
  display_name: 'Alice',
  sockets: [socket],
});

ua.start();

// Register callbacks to desired call events
const eventHandlers = {
  progress: function (_e: any) {
    console.log('call is in progress');
  },
  failed: function (e: any) {
    console.log('call failed with cause: ' + e.data.cause);
  },
  ended: function (e: any) {
    console.log('call ended with cause: ' + e.data.cause);
  },
  confirmed: function (_e: any) {
    console.log('call confirmed');
  },
};

const options = {
  eventHandlers: eventHandlers,
  mediaConstraints: { audio: true, video: true },
};

// ua.call('27695033674', options);
// console.log(session.status);

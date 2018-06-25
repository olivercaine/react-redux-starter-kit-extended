import socketIoClient from 'socket.io-client'
import constants from '../constants'

class ClientSocket {
	constructor(url) {
		this.client = socketIoClient(url);
		this.client.on(constants.events.SOCKET_EVENT_CONNECT, this.handleSocketConnect.bind(this));
		this.client.on(constants.events.SOCKET_EVENT_DISCONNECT, this.handleSocketDisconnect.bind(this));
		this.client.on(constants.events.MESSAGE_EVENT, this.messageEventReceived.bind(this));
	}

	handleSocketConnect() {
		this.client.emit(constants.events.MESSAGE_EVENT, 'Hi server!');
	}

	handleSocketDisconnect() {
		this.client.emit(constants.events.MESSAGE_EVENT, 'Bye server!');
	}

	messageEventReceived(data) {
		console.log("Message received: ", data);
	}
}

export default ClientSocket

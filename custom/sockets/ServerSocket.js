const io = require('socket.io');
const constants = require('../constants')

function ServerSocket(server) {
	this.socket = io(server);

	this.handleSocketConnection = function(server) {
		this.server = server;
		this.messageAllClients(constants.events.MESSAGE_EVENT, 'A user has just connected!');
		server.emit(constants.events.MESSAGE_EVENT, 'Hi client!');
		server.on(constants.events.SOCKET_EVENT_DISCONNECT, this.handleSocketDisconnect.bind(this));
		server.on(constants.events.MESSAGE_EVENT, this.handleMessageReceived);
	}

	this.messageAllClients = function(eventName, data) {
		this.server.broadcast.emit(eventName, data);
	}

	this.handleSocketDisconnect = function(){
		console.log('A user has disconnected');
	}

	this.handleMessageReceived = function(data) {
		console.log('Message received: ' + data);
	}

	this.socket.on(constants.events.SOCKET_EVENT_CONNECTION, this.handleSocketConnection.bind(this));
}

module.exports = ServerSocket

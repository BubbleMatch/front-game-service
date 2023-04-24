const socket = new WebSocket('ws://game.bubblematch.io:8080/chat');

export function init() {
    try {
        socket.onopen = function (event) {
            console.log('WebSocket connection opened.');
            // Теперь можно отправлять сообщения
            let roomId = 'room1'; // ID комнаты, в которую нужно отправить сообщение
            let message = 'Hello server!'; // Текст сообщения
            socket.send({
                room: roomId,
                message: message
            }); // Отправляем сообщение в комнату с указанным ID
        };

        socket.onmessage = function (event) {
            console.log('Received message from server: ' + event.data);
        };

        socket.onerror = function (event) {
            console.error('WebSocket error: ' + event);
        };

        socket.onclose = function (event) {
            console.log('WebSocket connection closed with code ' + event.code);
        };
    } catch (e) {
        console.log(e);
    }
}
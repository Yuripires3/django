document.addEventListener('DOMContentLoaded', (event) => {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const socket = new WebSocket(protocol + '//' + window.location.host + '/ws/notifications/');

    socket.onopen = function(e) {
        console.log("WebSocket conectado");
    };

    socket.onmessage = function(e) {
        const data = JSON.parse(e.data);
        console.log("Mensagem recebida:", data.message);
        showToast(data.message);
    };

    socket.onerror = function(e) {
        console.log("Erro no WebSocket:", e);
    };

    socket.onclose = function(e) {
        console.log("WebSocket fechado");
    };

    function showToast(message) {
        const toastEl = document.getElementById('liveToast');
        const toastBody = toastEl.querySelector('.toast-body');
        toastBody.textContent = message;
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
    }
});

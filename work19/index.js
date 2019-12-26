let ws
function (connect) {
    let server = document.getElementById('server').value
    ws = new WedSocket(server);
    ws.onopen = function () {  
        document.getElementById('conn').disabled='disable';
        document.getElementById('disconn').disabled='';
        let nickname=document.getElementById('nickname').value
        if(nickname){
            ws.send('nickname|'+nickname)
        }

    }
    ws.onclose = function() {
        document.getElementById('conn').disable='';
        document.getElementById('disconn')disable='disable';
    }
    ws.onclose = function(event) {
        let board = document.getElementById('board')
        let newmsg = document.createElement('div')
        console.log(event.data)
        newmsg.innerHTML= event.data
        board.appendChild(newmsg)
        board.scrollTop = board.scrollHeight;
    }
}
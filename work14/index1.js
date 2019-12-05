var lamp = {
    red: {
        odj: document.getElementById('red'),
        timeout: 3,
        style: ['red','gray','gray'],
        next: 'green'
    },
    yellow: {
        odj: document.getElementById('yellow'),
        timeout: 2,
        style: ['gray','yellow','gray'],
        next: 'red'
    },
    green: {
        odj: document.getElementById('green'),
        timeout: 5,
        style: ['gray','gray','green'],
        next: 'yellow'
    },
    changeStyle(style) {
        this.red.odj.className = style[0];
        this.yellow.odj.className = style[1];
        this.green.odj.className = style[2];
    }
  };
  var
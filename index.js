let authorName = document.querySelector('.authorName').value;
let authorMessage = document.querySelector('.message').value;
let sendBtn = document.querySelector('.send');
let dateBtn = document.getElementById('date');
let dateArea = document.querySelector('.history');

class Message {
    constructor(author, sendDate, text) {
        this.author = author;
        this.sendDate = sendDate;
        this.text = text;
    }

    toHtml() {
        dateBtn.addEventListener('click', () => {
            dateArea.value = `${this.sendDate}`;
        })
    }
}

function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

class Messenger {
    constructor() {
        this.history = [];
    }

    show_history() {
        return `${this.history}`;
    }

    send(author, text) {
        let message = new Message(author, gettime(), text)

        this.history.push(message.toHtml());
    }
}

let message = new Message();
let messenger = new Messenger();
messenger.send(authorName, authorMessage);
messenger.show_history();
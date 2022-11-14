class Message {
    constructor(author, sendDate, text) {
        this.author = author;
        this.sendDate = sendDate;
        this.text = text;
    }

    toString() {
        this.sendDate = function gettime() {
            let now = new Date();
            return `${now.getHours()}:${now.getMinutes()}`
        }

    }
}

class Messenger {
    constructor() {
        this.history = [];
    }

    show_history() {
        function gettime() {
            let now = new Date();
            return `${now.getHours()}:${now.getMinutes()}`
        }

        console.log(`${gettime()} ${this.history[0]}: ${this.history[1]}`);
        console.log(`${gettime()} ${this.history[2]}: ${this.history[3]}`);
    }

    send(author, text) {
        this.author = author;
        this.text = text;

        this.history.push(this.author, this.text);
    }
}

let messenger = new Messenger();
messenger.send('Elnur', 'Salam Banu, necəsən?');
messenger.send('Banu', 'Salam Elnur, şükür Allaha yaxşılıqdı. Sən necəsən?');
messenger.show_history();
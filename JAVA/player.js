class Card {
    constructor(face) {
        this.face = face;
    }
}

class Deck {
    constructor() {
        this.cards = [];
        const faces = ['El gallo', 'El diablito', 'La dama', 'El catrín', 'El paraguas', 'La sirena', 'La escalera', 'La botella', 'El barril', 'El árbol', 'El melón', 'El valiente', 'El gorrito', 'La muerte', 'La pera', 'La bandera', 'El bandolón', 'El violoncello', 'La garza', 'El pájaro', 'La mano', 'La bota', 'La luna', 'El cotorro', 'El borracho', 'El negrito', 'El corazón', 'La sandía', 'El tambor', 'El camarón', 'Las jaras', 'El músico', 'La araña', 'El soldado', 'La estrella', 'El cazo', 'El mundo', 'El Apache', 'El nopal', 'El alacrán', 'La rosa ', 'La calavera', 'La campana', 'El cantarito', 'El venado', 'El Sol', 'La corona', 'La chalupa', 'El pino', 'El pescado', 'La palma', 'La maceta', 'El arpa', 'La rana'];

        faces.forEach(face => {
           this.cards.push(new Card(face));
        });
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    deal() {
        return this.cards.pop();
    }


}

const deck = new Deck();
deck.shuffle();


const gameBoard = document.getElementById('game-board'); 
 
for (let i = 0; i < 16; i++) {
        const card = deck.deal();
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerText = `${card.face}`;
        gameBoard.appendChild(cardElement); 
};

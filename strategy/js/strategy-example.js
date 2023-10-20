const data = [
    {
        name: "Dune",
        contry: "USA",
        info: "A science fiction novel by American author Frank Herbert, originally published as two separate serials in Analog magazine.",
        img: "https://example.com/dune.jpg"
    },
    {
        name: "Foundation",
        contry: "USA",
        info: "A science fiction novel by American author Isaac Asimov. It is the first published in his Foundation Trilogy.",
        img: "https://example.com/foundation.jpg"
    },
    {
        name: "Neuromancer",
        contry: "Canada",
        info: "A science fiction novel by American-Canadian writer William Gibson. It is one of the best-known works in the cyberpunk genre.",
        img: "https://example.com/neuromancer.jpg"
    }
]

class InfoContext {

    constructor(strategy, data, element) {
        this.strategy = strategy;
        this.data = data;
        this.element = element;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    show() {
        this.strategy.show(this.data, this.element);
    }
}
class ListStrategy {
    show(data, element) {
        element.innerHTML = data.reduce((ac, item) => {
            return ac + `
            <div>
                <h2>${item.name}</h2>
                <p>${item.contry}</p>
            </div>
            `;
        }, "")
    }
}

class DetailedListStrategy {
    show(data, element) {
        element.innerHTML = data.reduce((ac, item) => {
            return ac + `
            <div>
                <h2>${item.name}</h2>
                <p>${item.contry}</p>
                <p>${item.info}</p>
            </div>
            `;
        }, "")
    }
}

class ListWithImageStrategy {
    show(data, element) {
        element.innerHTML = data.reduce((ac, item) => {
            return ac + `
            <div>
                <img widht="10%" src="${item.img}">
                <h2>${item.name}</h2>
            </div>    
            `;
        }, "")
    }
}

const strategies = [
    new ListStrategy(),
    new DetailedListStrategy(),
    new ListWithImageStrategy()
]
const info = new InfoContext(new ListStrategy, data, content);
info.show();

slcOptions.addEventListener("change", (event) => {
    const op = event.target.value;
    info.setStrategy(strategies[op]);
    info.show();
});


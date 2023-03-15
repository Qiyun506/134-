class ButtonCount extends HTMLElement {
    constructor() {
        super();
        const shadowElement = this.attachShadow({ mode: "open" });
        const button = document.createElement("button");
        
        let counter = 0;
        button.innerHTML = `Times Clikced: ${counter}`;

        this.countTimes(counter,button);

        shadowElement.appendChild(button);
    }

    countTimes(c,obj){
        obj.addEventListener("click", () => {
            c++;
            obj.innerHTML = `Times Clikced: ${c}`;
        });
    }
}

customElements.define("button-count", ButtonCount);

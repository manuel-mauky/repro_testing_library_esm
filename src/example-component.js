

export class ExampleComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open"})

        this.shadowRoot.innerHTML = `
            <div>
                <label for="textfield">label</label>
                <input id="textfield" type="text"/>
            </div>
        `

        const label = this.shadowRoot.querySelector("label")
        const input = this.shadowRoot.querySelector("input")

        input.addEventListener('keydown', (e) => {
            label.textContent = e.target.value
        })
    }
}

window.customElements.define("example-component", ExampleComponent)

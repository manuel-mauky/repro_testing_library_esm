import { html, fixture, expect } from "@open-wc/testing"
import userEvent from "@testing-library/user-event";

import './example-component'

describe("My Component", () => {
    it('should display typed values in label', async () => {
        // given
        const component = await fixture(html`<example-component></example-component>`)
        const label = component.shadowRoot.querySelector("label");

        expect(label.textContent).to.equal("label")

        // when
        userEvent.type(component, "test")

        // then
        expect(label.textContent).to.equal("test")
    })
})

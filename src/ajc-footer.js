import { LitElement, html, css } from "lit";

/**
 * @author {Zach Dodson}
 * This component is NOT open source and not to be made open source for public use. This component is designed specifically for the ajc-portfolio project.
 */

export class AJCFooter extends LitElement {

    static get tag() {
        return 'ajc-footer';
    }

    constructor() {
        super();
    }

    static get styles() {
        return css`
        
        `
    }

    render() {
        return html`
            <a href="https://github.com/zdodson21/ajc-portfolio"><img src="" alt="GitHub Logo"></a>
            <a href="https://github.com/zdodson21/ajc-portfolio">GitHub Repository</a>
        `
    }

    static get properties() {
        return {

        }
    }
}

globalThis.customElements.define(AJCFooter.tag, AJCFooter)
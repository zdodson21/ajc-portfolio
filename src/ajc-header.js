import {LitElement, html, css} from 'lit';
import { directive } from 'lit/async-directive.js';

/**
 * @author {Zach Dodson}
 */

export class AJCHeader extends LitElement {

    static get tag() {
        return 'ajc-header';
    }

    constructor() {
        super();

    }

    static get styles() {
        return css`
            :host {
                display: grid;
                grid-template-areas:
                    "icon topbar    blank"
                    "icon bottombar blank";
                width: 100%;
                grid-template-columns: 128px 2fr 128px;
            }

            .icon {
                grid-area: icon;
            }

            h1 {
                grid-area: topbar;
                text-align: center;
            }

            nav {
                grid-area: bottombar;
            }
            
        `
    }

    render() {
        return html`
            <div class='header-container'>
                <a href="/index.html" class='icon'><img src="" alt="icon" ></a>
                    <h1><slot></slot></h1>
                    <nav>
                        <a href="Portfolio"></a>
                        <a href=""></a>
                        <a href=""></a>
                        <a href="About Me"></a>
                    </nav>
            </div>
        `
    }

    static get properties() {
        return {

        }
    }
}

globalThis.customElements.define(AJCHeader.tag, AJCHeader);
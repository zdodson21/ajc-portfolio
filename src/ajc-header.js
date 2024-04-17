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

            nav > a:visited, nav > a , .icon:visited, .icon {
                color: var(--ajc-color-default-link);
            }
            
            nav > a:hover, nav > a:focus, .icon:hover, .icon:focus {
                color: var(--ajc-color-default-visited);
                text-decoration: none;
            }
        `
    }

    render() {
        return html`
            <div class='header-container'>
                <a href="/index.html" class='icon'><img src="" alt="icon" ></a>
                    <h1><slot></slot></h1>
                    <nav>
                        <a href="">Portfolio</a>
                        <a href=""></a>
                        <a href=""></a>
                        <a href="/html/about-me.html">About Me</a>
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
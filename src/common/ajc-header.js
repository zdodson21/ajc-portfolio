import {LitElement, html, css} from 'lit';

/**
 * @author {Zach Dodson}
 * This component is NOT open source and not to be made open source for public use. This component is designed specifically for the ajc-portfolio project.
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
            .header-container {
                display: grid; 
                grid-template-columns: 128px 1fr 128px; 
                grid-template-rows: 0.15fr 0.15fr; 
                gap: 0px 0px; 
                grid-template-areas: 
                    "icon topbar blank"
                    "icon bottombar blank"; 
            }

            .icon {
                grid-area: icon;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 128px;
                height: 128px;
                padding: var(--ajc-spacing-default-2);
            }

            .topbar {
                grid-area: topbar;
                text-align: center;
                padding: var(--ajc-spacing-default-2);
            }

            .bottombar {
                grid-area: bottombar;
            }

            .blank {
                grid-area: blank;
            }

            nav {
                display: flex;
                justify-content: space-evenly;
                flex-wrap: wrap;
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
                <div class='icon'>
                    <a href="/index.html"><img src="/assets/test/images/Custom-Icon-Design-Flatastic-1-Add-1.svg" alt="icon" style="width: 100px;"></a>
                </div>
                <div class='topbar'>
                    <h1><slot></slot></h1>
                </div>
                <div class='bottombar'>
                    <nav>
                        <a href="">Portfolio</a>
                        <a href="">Template</a>
                        <a href="">Template</a>
                        <a href="/html/about-me.html">About Me</a>
                    </nav>
                </div>
                <div class='blank'></div>
            </div>
        `
    }

    static get properties() {
        return {

        }
    }
}

globalThis.customElements.define(AJCHeader.tag, AJCHeader);
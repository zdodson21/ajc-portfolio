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
            .footer-container {
                background-color: blue;
            }
            
            .github {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: var(--ajc-spacing-default-4);
            }
            
            a:visited, a {
                color: var(--ajc-color-default-link);
            }

            a:focus, a:hover {
                color: var(--ajc-color-default-visited);
                text-decoration: none;
            }


        `
    }

    render() {
        return html`
            <div class='footer-container'>
                <section>
                    <div class='github'>
                        <a href="https://github.com/zdodson21/ajc-portfolio" target='_blank'><img src="/assets/icons/GitHub/github-mark-white.svg" alt="GitHub Logo" style='width: 48px;'></a>
                        <a href="https://github.com/zdodson21/ajc-portfolio" target='_blank'>GitHub Repository</a>
                    </div>
                </section>
            </div>
            <!-- Write out a notice stating that all art work here belongs to the original owner and is not permitted to be used elsewhere unless otherwise stated -->
        `
    }

    static get properties() {
        return {

        }
    }
}

globalThis.customElements.define(AJCFooter.tag, AJCFooter)
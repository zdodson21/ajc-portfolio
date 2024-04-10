import {LitElement, html, css } from 'lit';

/**
 * @author {Zach Dodson}
 */
export class PictureFrame extends LitElement {

    static get tag() {
        return 'picture-frame';
    }

    constructor() {
        super();
        this.imgLocation = '';
    }

    static get styles() {
        return css`
        
        `
    }

    render() {
        console.log('rendering...')
        if (this.imgLocation === 'left' || this.imgLocation === 'l') {
            return this.imageLeft();
        } else if (this.imgLocation === 'right' || this.imgLocation === 'r'){
            return this.imageRight();
        } else {
            return html`
                <p><strong>Please set the 'img-location' attribute to either left or right</strong></p>
            `
        }
    }

    /**
     * Default
     */
    imageLeft() {
        return html`

        `
    }

    /**
     * Description text on left, art on the right
     */
    imageRight() {
        return html`
        
        `
    }

    static get properties() {
        return {
            textLocation: {
                type: String,
                attribute: 'img-location',
            }
        };
    }
}

globalThis.customElements.define(PictureFrame.tag, PictureFrame);
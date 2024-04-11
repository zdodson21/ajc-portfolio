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
        this.src = '';
        this.alt = '';
        this.caption = '';
        this.href = '';
        this.anchorText = '';
    }

    static get styles() {
        return css`
            
            .img-container {
                border-style: var(--ajc-border-default-frame1);
            }

            .img-container .frame-item {
                width: 50%;
            }

            :host([href = '']) a {
                display: none;
            }

            /* two image classes, image-tall & image-wide */
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
                <p><strong>Please set the 'img-location' attribute to either left (l) or right (r)</strong></p>
            `
        }
    }

    /**
     * Default
     */
    imageLeft() {
        return html`
            <div class='img-container'>
                <div class='frame-item'>
                    <img  src="${this.src}" alt="${this.alt}">
                </div>    
                <div class='frame-item'>
                    <p>${this.caption}</p>
                    <a href="${this.href}">${this.anchorText}</a>
                </div>
            </div>
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
            },
            src: {
                type: String,
            },
            alt: {
                type: String,
            },
            caption: {
                type: String,
            },
            href: {
                type: String,
            },
            anchorText: {
                type: String,
            },
        };
    }
}

globalThis.customElements.define(PictureFrame.tag, PictureFrame);
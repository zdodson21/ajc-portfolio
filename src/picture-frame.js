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
        this.border = true;
    }

    static get styles() {
        return css`
            
            :host([border]) .img-container {
                border-style: var(--ajc-border-default-frame1);
            }

            .img-container {
                display: flex;
                padding: var(--ajc-spacing-default-4);
            }

            .img-container .frame-item {
                width: 100%;
            }

            :host([href = '']) a {
                display: none;
            }

            /* two image classes, image-tall & image-wide */
        `
    }

    render() {
        if (this.imgLocation === 'left' || this.imgLocation === 'l') {
            return this.imageLeft();
        } else if (this.imgLocation === 'right' || this.imgLocation === 'r') {
            return this.imageRight();
        } else if (this.imgLocation === 'top' || this.imgLocation === 't') {
            return this.imageTop();
        } else {
            return html`
                <p><strong>Please set the 'img-location' attribute to either left (l), right (r), top (r)</strong></p>
            `
        }
    }

    /**
     * Default
     */
    imageLeft() {
        return html`
            <div class='img-container img-container-left'>
                <div class='frame-item frame-image'>
                    <img src="${this.src}" alt="${this.alt}">
                </div>    
                <div class='frame-item frame-text'>
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
            <div class='img-container img-container-right'>
                <div class='frame-item frame-text'>
                    <p>${this.caption}</p>
                    <a href="${this.href}">${this.anchorText}</a>
                </div>
                <div class='frame-item frame-image'>
                    <img src="${this.src}" alt="${this.alt}">
                </div>   
            </div>
        `
    }

    /**
     * Image above caption and anchor
     */
    imageTop() {
        return html`

        `
    }

    static get properties() {
        return {
            imgLocation: {
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
            border: {
                type: Boolean,
                reflect: true,
            }
        };
    }
}

globalThis.customElements.define(PictureFrame.tag, PictureFrame);
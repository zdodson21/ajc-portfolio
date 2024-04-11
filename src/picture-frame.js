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
        this.displayLocation = '';
        this.src = '';
        this.alt = '';
        this.caption = '';
        this.href = '';
        this.anchorText = '';
        this.type = ''; // maybe add document type if I can figure out how to make it work
        this.border = true;
    }

    static get styles() {
        return css`
            :host([type='image']) .frame-image img{
                display: content;
            } :host([type='image']) .frame-image video{
                display: none;
            } :host([type='image']) .frame-image iframe{
                display: none;
            }

            :host([type='video']) .frame-image img{
                display: none;
            } :host([type='video']) .frame-image video{
                display: content;
            } :host([type='video']) .frame-image iframe{
                display: none;
            }

            :host([type='youtube']) .frame-image img{
                display: none;
            } :host([type='youtube']) .frame-image video{
                display: none;
            } :host([type='youtube']) .frame-image iframe{
                display: content;
            }

            :host([border]) .img-container {
                border-style: var(--ajc-border-default-frame1);
            }

            .picture-frame-container {
                display: flex;
                justify-content: center;
            }

            .img-container {
                display: flex;
                padding: var(--ajc-spacing-default-4);
                margin: var(--ajc-spacing-default-7) var(--ajc-spacing-default-0);
                width: 920px;
            }

            .img-container .frame-item {
                width: 100%;
            }

            .frame-image video {
                width: 360px;
            }

            :host([href = '']) a {
                display: none;
            }

            /* two image classes, image-tall & image-wide */
        `
    }

    render() {
        if (this.type !== 'image' && this.type !== 'video' && this.type !== 'youtube') {
            return html `
                <p><strong> Please set the 'type' attribute to 'image', 'video', or 'youtube'!</strong></p>
            `
        } else if (this.displayLocation === 'left' || this.displayLocation === 'l') {
            return this.imageLeft();
        } else if (this.displayLocation === 'right' || this.displayLocation === 'r') {
            return this.imageRight();
        } else if (this.displayLocation === 'top' || this.displayLocation === 't') {
            return this.imageTop();
        } else {
            return html`
                <p><strong>Please set the 'display-location' attribute to either left (l), right (r), or top (r)!</strong></p>
            `
        }
    }

    imageLeft() {
        return html`
            <div class='picture-frame-container'>
                <div class='img-container img-container-left'>
                    <div class='frame-item frame-image'>
                        <img src="${this.src}" alt="${this.alt}">
                        <video src="${this.src}" controls></video>
                        <iframe width="360" height="202.5" src="${this.src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>    
                    <div class='frame-item frame-text'>
                        <p>${this.caption}</p>
                        <a href="${this.href}">${this.anchorText}</a>
                    </div>
                </div>
            </div>
        `
    }

    /**
     * Description text on left, art on the right
     */
    imageRight() {
        return html`
            <div class='picture-frame-container'>
                <div class='img-container img-container-right'>
                    <div class='frame-item frame-text'>
                        <p>${this.caption}</p>
                        <a href="${this.href}">${this.anchorText}</a>
                    </div>
                    <div class='frame-item frame-image'>
                        <img src="${this.src}" alt="${this.alt}">
                        <video src="${this.src}"></video>
                        <iframe src="${this.src}" frameborder="0"></iframe>
                    </div>   
                </div>
            </div>
        `
    }

    /**
     * Image above caption and anchor
     */
    imageTop() {
        return html`
            <div class='picture-frame-container'>
                <div class='img-container img-container-top'>
                    <div class='frame-item frame-image'>
                        <img src="${this.src}" alt="${this.alt}">
                        <video src="${this.src}" controls></video>
                        <iframe width="360" height="202.5" src="${this.src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>    
                    <div class='frame-item frame-text'>
                        <p>${this.caption}</p>
                        <a href="${this.href}">${this.anchorText}</a>
                    </div>
                </div>
            </div>
        `
    }

    static get properties() {
        return {
            displayLocation: {
                type: String,
                attribute: 'display-location',
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
                attribute: 'anchor-text',
            },
            border: {
                type: Boolean,
                reflect: true,
            },
            type: {
                type: String,
            },

        };
    }
}

globalThis.customElements.define(PictureFrame.tag, PictureFrame);
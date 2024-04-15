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
        // this.caption = '';
        this.href = '';
        this.anchorText = '';
        this.type = ''; // maybe add document type if I can figure out how to make it work
        this.border = true;
        this.fileName = '';
    }

    static get styles() {
        return css`
            :host([type='image']) .frame-image .image {
                display: content;
            } :host([type='image']) .frame-image .video {
                display: none;
            } :host([type='image']) .frame-image .youtube {
                display: none;
            } :host([type='image']) .frame-image .pdf {
                display: none;
            }

            :host([type='video']) .frame-image .image {
                display: none;
            } :host([type='video']) .frame-image .video {
                display: content;
            } :host([type='video']) .frame-image .youtube {
                display: none;
            } :host([type='video']) .frame-image .pdf {
                display: none;
            }

            :host([type='youtube']) .frame-image .image {
                display: none;
            } :host([type='youtube']) .frame-image .video {
                display: none;
            } :host([type='youtube']) .frame-image .youtube {
                display: content;
            } :host([type='youtube']) .frame-image .pdf {
                display: none;
            }

            :host([type='pdf']) .frame-image .image {
                display: none;
            } :host([type='pdf']) .frame-image .video {
                display: none;
            } :host([type='pdf']) .frame-image .youtube {
                display: none;
            } :host([type='pdf']) .frame-image .pdf {
                display: content;
            }

            :host([border]) .img-container {
                border-style: var(--ajc-border-default-frame1);
            }

            :host([caption='']) .caption {
                display: none;
            }

            :host([href = '']) .url {
                display: none;
            }

            .frame-item {
                margin: var(--ajc-spacing-default-0) var(--ajc-spacing-default-2) var(--ajc-spacing-default-0) var(--ajc-spacing-default-2);
                padding: var(--ajc-spacing-default-0) var(--ajc-spacing-default-2) var(--ajc-spacing-default-0) var(--ajc-spacing-default-2);
            }

            /* Create statement that will set display: none; when both caption & href are empty */

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

            .frame-image .video {
                width: 360px;
            }

            .pdf > iframe {
                border-style: var(--ajc-border-default-frame2);
            }

            .pdf-controls > a {
                text-align: center
            }

            .pdf-controls > .pdf-controls-flex-item > a:visited, .pdf-controls > .pdf-controls-flex-item > a {
                color: var(--ajc-color-default-link);
            }

            .pdf-controls > .pdf-controls-flex-item > a:hover, .pdf-controls > .pdf-controls-flex-item > a:focus {
                color: var(--ajc-color-default-visited);
                text-decoration: none;
            }

            .pdf-controls {
                display: flex;
                flex-direction: row;
                width: 100%;
            }

            .pdf-controls > .pdf-controls-flex-item {
                width: 100%;
                text-align: center;
            }

            /* two image classes, image-tall & image-wide */
        `
    }

    render() {
        if (this.type !== 'image' && this.type !== 'video' && this.type !== 'youtube' && this.type !== 'pdf') {
            return html `
                <p><strong> Please set the 'type' attribute to 'image', 'video', 'youtube', 'pdf'!</strong></p>
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
                        <img class='image' src="${this.src}" alt="${this.alt}">
                        <video class='video' src="${this.src}" controls></video>
                        <iframe class="youtube" width="360" height="202.5" src="${this.src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <div class='pdf'>
                            <iframe src="${this.src}" width='100%' height='500'></iframe>
                            <div class='pdf-controls'>
                                <div class='pdf-controls-flex-item'>
                                    <a href="${this.src}" target='_blank'>Preview</a>
                                </div>
                                <div class='pdf-controls-flex-item'> 
                                    <a href="${this.src}" download='${this.fileName}'>Download</a>
                                </div>
                            </div>
                        </div>
                    </div>    
                    <div class='frame-item frame-text'>
                        <p class='caption'><slot></slot></p>
                        <a class='url' href="${this.href}">${this.anchorText}</a>
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
                        <p class='caption'>${this.caption}</p>
                        <a class='url' href="${this.href}">${this.anchorText}</a>
                    </div>
                    <div class='frame-item frame-image'>
                        <img class='image' src="${this.src}" alt="${this.alt}">
                        <video class='video' src="${this.src}" controls></video>
                        <iframe class="youtube" width="360" height="202.5" src="${this.src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <!-- <iframe class="pdf" src="${this.src}" frameborder="0"></iframe> -->
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

    // Might need to make method that detects lack of text in both <p> and <a> in order to display only display the media item

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
            // caption: {
            //     type: String,
            // },
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
            fileName: {
                type: String,
                attribute: 'file-name',
            },
        };
    }
}

globalThis.customElements.define(PictureFrame.tag, PictureFrame);
import {LitElement, html, css } from 'lit';

/**
 * @customElement
 * @extends {LitElement}
 * @author {Zach Dodson}
 * This component is designed to enable users to easily create "picture frames" that can be used to display images, videos, youtube videos, or PDFs.
 */
export class PictureFrame extends LitElement {

    /**
     * Returns the tag name for the picture-frame custom element.
     *
     * @return {string} The tag name 'picture-frame'
     */
    static get tag() {
        return 'picture-frame';
    }

    /**
     * Constructor for setting initial values of displayLocation, src, alt, href, anchorText, type, border, and fileName.
     */
    constructor() {
        super();
        this.displayLocation = '';
        this.src = '';
        this.alt = '';
        this.href = '';
        this.anchorText = '';
        this.type = '';
        this.border = true;
        this.fileName = '';
    }

    /**
     * Returns the styles for the picture frame component.
     *
     * @return {string} The CSS styles for the picture frame component.
     */
    static get styles() {
        return css`
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

            .img-container-top {
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
            }

            .img-container-left .frame-item, .img-container-right .frame-item {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .frame-image .video {
                width: 360px;
            }

            .frame-text {
                display: flex;
                flex-direction: column;
            }

            .pdf > iframe {
                border-style: var(--ajc-border-default-frame2);
                width: 440px;
            }

            .pdf-controls > a {
                text-align: center
            }

            a:visited, a {
                color: var(--ajc-color-default-link);
            }

            a:hover, a:focus {
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
        `
    }

    /**
     * Renders the component based on the type and display location attributes.
     *
     * @return {TemplateResult} The rendered template result.
     */
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

    /**
     * Generates the left-aligned image content in a picture frame.
     *
     * @return {html} HTML content with image, video, YouTube video, or PDF based on 'type' property
     */
    imageLeft() {
        return html`
            <div class='picture-frame-container'>
                <div class='img-container img-container-left'>
                    <div class='frame-item frame-image'>
                        ${this.type === 'image' ? html`<img class='image' src="${this.src}" alt="${this.alt}">` : ''}
                        ${this.type === 'video' ? html`<video class='video' src="${this.src}" controls></video>` : ''}
                        ${this.type === 'youtube' ? html`<iframe class="youtube" width="360" height="202.5" src="${this.src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`: ''}
                        ${this.type === 'pdf' ? html`
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
                        ` : ''}
                    </div>    
                    ${this.innerHTML !== '' || this.href !== '' ? html`
                        <div class='frame-item frame-text'>
                            ${this.innerHTML !== '' ? html`<p class='caption'><slot></slot></p>` : ''}
                            ${this.href !== '' ? html`<a href="${this.href}" target='_blank'>${this.anchorText}</a>` : ''} 
                        </div>
                    ` : ''}
                </div>
            </div>
        `
    }

    /**
     * Generates the right-aligned image content in a picture frame.
     *
     * @return {html} HTML content with image, video, YouTube video, or PDF based on 'type' property
     */
    imageRight() {
        return html`
            <div class='picture-frame-container'>
                <div class='img-container img-container-right'>
                    ${this.innerHTML !== '' || this.href !== '' ? html`
                        <div class='frame-item frame-text'>
                            ${this.innerHTML !== '' ? html`<p class='caption'><slot></slot></p>` : ''}
                            ${this.href !== '' ? html`<a  href="${this.href}">${this.anchorText}</a>` : ''} 
                        </div>
                    ` : ''}
                    <div class='frame-item frame-image'>
                        ${this.type === 'image' ? html`<img class='image' src="${this.src}" alt="${this.alt}">` : ''}
                        ${this.type === 'video' ? html`<video class='video' src="${this.src}" controls></video>` : ''}
                        ${this.type === 'youtube' ? html`<iframe class="youtube" width="360" height="202.5" src="${this.src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`: ''}
                        ${this.type === 'pdf' ? html`
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
                        ` : ''}
                    </div>
                </div>
            </div>
        `
    }

    /**
     * Generates the top-aligned image content in a picture frame.
     *
     * @return {html} HTML content with image, video, YouTube video, or PDF based on 'type' property
     */
    imageTop() {
        return html`
            <div class='picture-frame-container'>
                <div class='img-container img-container-top'>
                    <div class='frame-item frame-image'>
                    ${this.type === 'image' ? html`<img class='image' src="${this.src}" alt="${this.alt}">` : ''}
                        ${this.type === 'video' ? html`<video class='video' src="${this.src}" controls></video>` : ''}
                        ${this.type === 'youtube' ? html`<iframe class="youtube" width="360" height="202.5" src="${this.src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`: ''}
                        ${this.type === 'pdf' ? html`
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
                        ` : ''}
                    </div>    
                    ${this.innerHTML !== '' || this.href !== '' ? html`
                        <div class='frame-item frame-text'>
                            ${this.innerHTML !== '' ? html`<p class='caption'><slot></slot></p>` : ''}
                            ${this.href !== '' ? html`<a href="${this.href}">${this.anchorText}</a>` : ''}
                        </div>
                    ` : ''}
                </div>
            </div>
        `
    }

    /**
     * Returns an object containing the properties of the component.
     *
     * @return {Object} An object with the following properties:
     *   - displayLocation: A string representing the display location of the file display in the component.
     *   - src: A string representing the source of the file display in the component.
     *   - alt: A string representing the alternate text of the file display in the component.
     *   - href: A string representing the hyperlink reference of the anchor in the component.
     *   - anchorText: A string representing the anchor text of the component.
     *   - border: A boolean indicating whether the component has a border.
     *   - type: A string representing the file type of the file display of the component.
     *   - fileName: A string representing the preferred file name of PDFs for downloading and previewing purposes.
     */
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
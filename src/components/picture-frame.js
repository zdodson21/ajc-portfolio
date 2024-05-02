import {LitElement, html, css } from 'lit';

/**
 * @author {Zach Dodson}
 * This web component serves the purpose of simplifying the process of importing images into this portfolio website, allowing the owner(s) to easily edit how pictures and their descriptions are displayed
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
        this.href = '';
        this.anchorText = '';
        this.type = '';
        this.border = true;
        this.fileName = '';
    }

    firstUpdated() {
        console.log('first updated called...');
        this.loadHandler();
    }

    static get styles() {
        return css`
            /* TODO Need to remove the below CSS as it will *hopefully* not be needed */
            
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

            .caption:empty {
                display: none;
            } /* Work on this later */

            .img-container-left > .frame-item {
                margin: var(--ajc-spacing-default-0) var(--ajc-spacing-default-2) var(--ajc-spacing-default-0) var(--ajc-spacing-default-0);
                padding: var(--ajc-spacing-default-0) var(--ajc-spacing-default-2) var(--ajc-spacing-default-0) var(--ajc-spacing-default-0);
            }

            .img-container-right > .frame-item {
                margin: var(--ajc-spacing-default-0) var(--ajc-spacing-default-0) var(--ajc-spacing-default-0) var(--ajc-spacing-default-0);
                padding: var(--ajc-spacing-default-0) var(--ajc-spacing-default-0) var(--ajc-spacing-default-0) var(--ajc-spacing-default-0);
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

            .img-container-top {
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
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

    // TODO switch this to render only the picture-frame-container wrapper, then the other called methods will do the rest
    render() {
        return html`
            <div class='picture-frame-container'>

            </div>
        `
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
                        <p class='caption'><slot></slot></p>
                        <a class='url' href="${this.href}">${this.anchorText}</a>
                    </div>
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

    // Logic handling
    loadHandler() {
        // TODO Create a diagram that will detail how to create the loading sequence, such as what will determine what orientation the picture frame is in, piecing everything together, etc.
        console.log('load handler called...');
        // Create proper wrapper
        switch(this.displayLocation) {
            case 'left' || 'l':
                this.wrapperCreator('left');
                break;
            case 'right' || 'r':
                this.wrapperCreator('right');
                break;
            case 'top' || 't':
                this.wrapperCreator('top');
                break;
            default:
                return html `Please set the 'display-location' attribute to either left (l), right (r), or top (r)!`;
        }

        // Generate based on filetype (fixes previous load efficiency issues)
        switch(this.type) {
            case 'image':
                this.image();
                break;
            case 'video':
                this.video();
                break;
            case 'youtube':
                this.youtube();
                break;
            case 'pdf':
                this.pdf();
                break;
            default:
                return html `Please set the 'type' attribute to either 'image', 'video', 'youtube', or 'pdf'!`;
        }

        this.text();

        if (this.href !== '') {
            this.anchor();
        }
    }
    




    // Blocks
    // TODO each code block should be generated through JS, not return HTMLs

    /**
     * Generates a wrapper based on the given file type, orientation, and href.
     *
     * @param {string} orientation - The orientation of the wrapper.
     * @return {type} The generated wrapper.
     */
    wrapperCreator(orientation) {
        // finds generic wrapper, plus will create wrappings for every other aspect based on what is passed in
        const componentWrap = this.shadowRoot.querySelector('.picture-frame-container');

        switch(orientation) {
            case 'left':
                this.mediaWrapper('left');
                break;
            case 'right':
                this.mediaWrapper('right');
                break;
            case 'top':
                this.mediaWrapper('top');
                break;
            default:
                console.error('no orientation specified');
        }

        const imgContainer = this.shadowRoot.querySelector('.img-container');
        const frameImage = this.shadowRoot.createElement('div');
        const frameText = this.shadowRoot.createElement('div');
        frameImage.setAttribute('class', 'frame-item frame-image');
        frameText.setAttribute('class', 'frame-item frame-text');

        switch(orientation) {
            case 'left' || 'top':
                imgContainer.appendChild(frameImage);
                imgContainer.appendChild(frameText);
                break;
            case 'right':
                imgContainer.appendChild(frameText);
                imgContainer.appendChild(frameImage);
                break;
            default:
                console.error('no orientation specified');
        }
    }

    mediaWrapper(orientation) {
        const container = this.shadowRoot.querySelector('.picture-frame-container');
        const wrapper = this.shadowRoot.createElement('div');

        wrapper.setAttribute('class', `img-container img-container-${orientation}`);

        container.appendChild(wrapper);
    }


    /**
     * Displays the image block
     */
    image() {
        return html`
            <img class='image' src="${this.src}" alt="${this.alt}">
        `
    }

    /**
     * Displays the video block
     */
    video() {
        return html`
            <video class='video' src="${this.src}" controls></video>
        `
    }

    /**
     * Displays the PDF block. Creates it's own wrappers since they are PDF specific
     */
    pdf() {
        return html`
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
        `
    }

    /**
     * Displays the youtube block
     */
    youtube() {
        return html`
            <iframe class="youtube" width="360" height="202.5" src="${this.src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `
    }

    /**
     * Displays the creator provided text
     */
    text() {
        return html`
            <p class='caption'><slot></slot></p>
        `
    }

    /**
     * Displays a link to another website (provided by creator)
     */
    anchor() {
        return html`
            <a class='url' href="${this.href}">${this.anchorText}</a>
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
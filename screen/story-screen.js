class StoryScreen extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode:"open"})
        this._shadowRoot.innerHTML = `
        <h1>Welcome ${firebase.auth().currentUser.displayName} to my web</h1>
        <style>
        *{
            font-size: 50px
            
        }
        </style>
        `
        
    }
}


window.customElements.define('story-screen',StoryScreen)
const css = `<style>
:root {
    --line-height: 10px;
    --primary-color: #fffa65;
}
        *{margin: 0;
        padding: 0;
        }
        
        body{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #17c0eb;
        }

        #root { 
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        font-family: 'Lexend Zetta', sans-serif;
        background-color: #67e6dc;
        height: 70vh;
        width: 50vw;
        min-width: 768px;
        text-align: center;
        padding: 3rem;
        h1 {
            color: #4b4b4b;
            font-size : 2.5rem;
            }
        }

    </style>`

    const head = document.querySelector("head")

    head.insertAdjacentHTML('beforeend', css)
const character = "imagens/Megamanmoving.png"

const megaman = Character`
width: 15%;
${character}
`

const WrapperCharacter = (css, children) => (
    `
    <div style="${css}">${children}</div>
    `
)

const wrapperCharacteres = WrapperCharacter `
display: flex;
justify-content: space-evenly;
margin-top: 3rem;
${megaman + megaman + megaman}
`


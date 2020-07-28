const root = document.querySelector('#root');
const textTitle = 'Dificuldade'


// Tagged template string
const title = Title `
${textTitle}
`
root.insertAdjacentHTML('beforeend', title) 
root.insertAdjacentHTML('beforeend', wrapperCharacteres)
root.insertAdjacentHTML('beforeend',slide)
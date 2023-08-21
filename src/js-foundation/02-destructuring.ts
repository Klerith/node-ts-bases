
// console.log( process.env );


const { SHELL, HOMEBREW_PREFIX, npm_lifecycle_script } = process.env;


// console.table({ SHELL, HOMEBREW_PREFIX, npm_lifecycle_script });


export const characters = ['Flash','Superman', 'Green Lantern', 'Batman'];


const [ , , ,batman ] = characters;

// console.log(batman);
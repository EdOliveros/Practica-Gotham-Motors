import myHeader from './myHeader.js'
import footer from './footer.js'

export default function page(page) {
    
    const app = document.getElementById('app')
    
    app.innerHTML = `
        ${myHeader}
        ${page}
        ${footer}
    `
}
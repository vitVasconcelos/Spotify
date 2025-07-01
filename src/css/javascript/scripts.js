document.addEventListener('DOMContentLoaded',()=>{
    const artiststData = [
        {name:'System Of a Down', image: '/src/imagens/systemofadown.jpg'},
        {name: 'Linkin Park', image:'/src/imagens/Linkin_Park.jpeg'},
        {name:'Avenged Sevenfold',image:'/src/imagens/a7x.jpg'},
        {name:'Metallica', image:'/src/imagens/metallica-1.jpg'},
        {name: 'Slipknot', image:'/src/imagens/slipknot.jpg'},
        {name:'Evanescence',image: '/src/imagens/EVANESCENCE.jpeg'},
        {name:'My Chemical Romance ',image: '/src/imagens/my-chemical-romance.jpg'}
        

    ];
    const albunsData = [
        {name:'Meteora', artista:'Linkin Park', image: '/src/imagens/meteora.jpg'},
        {name:'Fallen',artista:'Evanescence',image:'/src/imagens/fallen.jpg'},
        {name:'Americana',artista:'The Offspring ',image:'/src/imagens/cd-the-offspring-americana.webp'},
        {name:'Toxicity',artista:'System Of a Down ',image:'/src/imagens/toxicity.jpg'},
        {name:'Nightmare',artista:'Avenged Sevenfold',image:'/src/imagens/nightmare.jpg'},
    ];
    
    const artiasPopulares = document.querySelector('.artistas-populares')
    const albunsPopulares = document.querySelector('.albuns-populares')

    artiststData.forEach(artista =>{
        const artistaCard = document.createElement('div')
        artistaCard.classList.add('artista-card')
        artistaCard.innerHTML =`
        <img src="${artista.image}" alt= "imagem do ${artista.name}">
        <h3>${artista.name}</h3>
        <p>artista</p>
        `
        artiasPopulares.appendChild(artistaCard)
          
    })

    albunsData.forEach(album =>{
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')
        albumCard.innerHTML =`
        <img src="${album.image}" alt="imagem do album ${album.name}">
        <h3>${album.name}</h3>
        <p>${album.artista}</p>
        `
        albunsPopulares.appendChild(albumCard)
    })
})

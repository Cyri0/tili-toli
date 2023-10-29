const gameField = document.getElementById("gameField")

const SIZE = 5
const IMAGE = 'nagyi.jpg'

let tiles = []

for(let i = 0; i < SIZE; i++){
    tiles.push([])
}

const init = ()=>{
    generateGrid(gameField)
    generateTiles(gameField)
    loadImage()
    tiles[tiles.length-1][tiles[0].length-1].innerHTML = ""
}

const generateTiles = (ctx)=>{
    for(let x = 0; x < SIZE; x++){
        for(let y = 0; y < SIZE; y++){
            let tile = document.createElement('div')
            tile.classList.add('tile')
            
            tiles[x].push(tile)
            tile.posX = x
            tile.posY = y

            tile.addEventListener('click', ()=>{
                if(tile.innerHTML != "")
                    move(tile)
            })

            tile.title = `${x}|${y}`
            ctx.appendChild(tile)
        }
    }
}
const generateGrid = (ctx)=>{
    let gridColumns = ""
    for(let i = 0; i < SIZE; i++){
        gridColumns += '1fr '
    }
    ctx.style.gridTemplateColumns = gridColumns
}

const loadImage = ()=>{
    tiles.forEach(line => {
        line.forEach((tile, idx) => {
            let image = document.createElement("img")
            image.style.width = `${100*SIZE}%`
            image.src = IMAGE
    
            image.style.left = `-${tile.posY * 100}%`
            image.style.top = `-${tile.posX * 100}%`
    
            tile.appendChild(image);
        })
    })
}

const move = (tile) => {
    let x = tile.posX
    let y = tile.posY

    let image = tile.firstElementChild
    try{
        let nextTile = tiles[x+1][y]
        if(nextTile.innerHTML == ""){
            tiles[x+1][y].appendChild(image)
        }
    }
    catch (error) {
    }

    try {
        if(tiles[x-1][y].innerHTML == ""){
            tiles[x-1][y].appendChild(image)
            return 0
        }
    } catch (error) {
        
    }


    try {
        if(tiles[x][y+1].innerHTML == ""){
            tiles[x][y+1].appendChild(image)
            return 0
        }
    } catch (error) {}


    try {
        if(tiles[x][y-1].innerHTML == ""){
            tiles[x][y-1].appendChild(image)
            return 0
        }
    } catch (error) {}
}


// const mix = () => {

//     let allTiles = []

//     tiles.forEach(line => {
//         line.forEach(tile => {
//             allTiles.push(tile)
//         })
//     })

//     let count = 0

//     let intervalID = setInterval(()=>{
//         allTiles[Math.floor(Math.random()*allTiles.length-1)].click()
//         count++

//         if(count >= 100){
//             clearInterval(intervalID)
//         }
//     }, 10)

//     allTiles.forEach(tile => {
//         tile.click()
//     })
// }





init()

// mix()
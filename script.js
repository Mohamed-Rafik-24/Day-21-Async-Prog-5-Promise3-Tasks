let container = document.createElement('div')
container.className = 'container';

let row = document.createElement('div');
row.className = 'row';
container.append(row)


let button3 = document.createElement('button')
button3.setAttribute('type', 'button')
button3.setAttribute('id', 'butt3')
button3.innerHTML = 'Dog Random Images'
row.append(button3)

let br = document.createElement('br')
row.append(br)


document.body.append(container)





document.getElementById("butt3").onclick = async function randomCat () {
    try {

    let dogres = (await (fetch('https://random.dog/woof.json')))    //random dog
    let dogres2 = await dogres.json()
    console.log(dogres2.url)
    let images = document.createElement('img')
    images.setAttribute('src', dogres2.url)
    row.append(images)
    } catch (error) {
        
    }
}




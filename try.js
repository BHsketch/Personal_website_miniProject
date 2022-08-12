let str="mercedes"

console.log(str.substring(0, 5))

let str1="the man in black fled across the desert, and the gunslinger followed"
str1_extract=((str1.split(" "))[10]).substring(0, 3)
console.log(str1_extract)
console.log(str1.includes(str1_extract))
console.log(str1.replace(str1_extract, "fun"))

console.log(str1.match("gunslinger"))



console.log("gumgum devil fruit")

let str2="fruit"

console.log((((((str1.split(" "))[10]).substring(0, 3)).replace("n", "m")).repeat(2)).concat(" ", "fruit"))

console.log(((str1.split(" "))[3]).charCodeAt(0))

console.log(str1.match(/.s+e?/gi))

console.log(`to extract '${str1_extract}' from '${str1}' was not a task for the faint-hearted`)

//let number=prompt('enter number', 'number goes here')

let paragraph=document.querySelectorAll('p')

/*paragraph.forEach((a, i) => {
    if(i%2===0)
    {
        a.style.color="red"
    }else{
        a.style.color="green"
    }
})*/

//paragraph.forEach(para => console.log(para))

//paragraph.style.color="red"

let title1=document.createElement('h3')
title1.textContent="Idk what I'm doing here"
//document.body.appendChild(title1)
title1.style.color="yellow"
console.log(title1)

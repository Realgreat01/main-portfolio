const images = [
  'nodejs-3.svg',
  'express.svg',
  'mongodb.svg',
  'firebase.svg',
  'express.svg',
];

const arr = ['firebase.svg', 'express.svg'];

const updateIcons = arr => {
  const div = document.createElement("div");

    arr.map(item => div.innerHTML += `<img src="./images/skills/${item}" alt="${item}" height="50px" width="50px">`);
    
  return div.innerHTML
  }

  // if (arr.length > 0) {
  //   for (let i = arr.length; i > 0; i--) {
  //     arr.forEach(element => { p.textContent += `<span style="margin: 5px; padding:10px" class="job-skill" id="skill" onclick="filter(this)">${element}</span>` });
  //     const final = `<span  id="skilled" class="tools">${p.textContent} </span>`
  //     return final
  //   }
  // }
  // const toolsImage = icon.map(
  //   image =>
  //     (element.innerHTML += `<img src="./images/skills/${image}" alt="${image}" height="50px" width="50px">`)
  // );
  // return toolsImage[toolsImage.length-1]
console.log(updateIcons(images, 'test'));


// const div = document.getElementById('divided');
// div.innerHTML = `${updateIcons(images, 'divided')}`;

const test = document.getElementById('test');
test.innerHTML = `${updateIcons(arr, 'divided')}`;
// let img=["ade.jpg", "ola.khj", "sidndh.ldkdj", "hsjsjsj.lkd"]
// const image = (n) => {
//   let con = []
//   for (let i = 0; i < n.length; i++){
//     con.push(`<img src="${[n[i]]}">`)
//     test.innerHTML += (`<img src="${[n[i]]}">`);
//     console.log(n[i]);
//   }
//   return con
// }
// console.log(image(img));

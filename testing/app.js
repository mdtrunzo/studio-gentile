// const output = document.querySelector('.output')
// const input = document.querySelector('input')
// const burgerLists = []

// const loadContent = () => {
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Host': 'burgers1.p.rapidapi.com',
//       'X-RapidAPI-Key': '877b40d513mshf1d117bca8766adp1e94f2jsn78e069f41fa1',
//     },
//   }

//   fetch('https://burgers1.p.rapidapi.com/burgers', options)
//     .then((response) => response.json())
//     .then((response) =>
//       response.map((burger) => {
//        const div = document.createElement('div')
//        burgerLists.push(div)
//        div.classList.add('burger-div')
//        div.innerHTML = `
//        <h1>${burger.name}</h1>
//        <h2>${burger.restaurant}</h2>
//        `
//        output.appendChild(div)
//       })
//     )
//     .catch((err) => console.error(err))
// }
// loadContent()

// console.log(burgerLists)

// input.addEventListener('input', (e) => filterData(e.target.value))

// const filterData = (searchItem) => {
//   burgerLists.forEach(item => {
//     if(item.innerText.toLowerCase().includes(searchItem.toLowerCase())) {
//       item.classList.remove('hide')
//     }else{
//       item.classList.add('hide')
//     }
//   })
// }

//Binary search
const recursiveFunction = (arr, x, start, end) => {
  // Base Condition
  if (start > end) return false

  // Find the middle index
  let mid = Math.floor((start + end) / 2)

  // Compare mid with given key x
  if (arr[mid] === x) return true

  // If element at mid is greater than x,
  // search in the left half of mid
  if (arr[mid] > x) return recursiveFunction(arr, x, start, mid - 1)
  // If element at mid is smaller than x,
  // search in the right half of mid
  else return recursiveFunction(arr, x, mid + 1, end)
}

let arr = [1, 3, 4, 29, 49, 59, 28]
let newArr = arr.sort((a, b) => a - b)
let x = 49

if (recursiveFunction(arr, x, 0, newArr.length - 1)) {
  console.log('Element Found!')
} else {
  console.log('Element not found')
}

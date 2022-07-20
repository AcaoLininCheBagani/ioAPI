////////////////////////////////////
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(
      (entry) => {
        entry.target.classList.toggle(
          'transform', entry.isIntersecting
        )
      }
    )
  }
)
const elements = document.querySelectorAll('.card')
elements.forEach(
  (element) => {
    observer.observe(element)
  }
)

////////////////////////////////////
// const lastCardObserver = new IntersectionObserver(
//   (entries) => {
//     const lastCard = entries[0]

//     if (!lastCard.isIntersecting) {
//       return
//     }
//     document.getElementById('add').style.display = 'block'
//     lastCardObserver.unobserve(lastCard.target)

//     const newLastCard = document.querySelector('.card:last-child')
//     lastCardObserver.observe(newLastCard)
//     document.querySelector('image-container').classList.add('show-container')

//   }
// )

// const lastChildElement = document.querySelector('.card:last-child')
// lastCardObserver.observe(lastChildElement)



// function addMoreCards(e) {
//   loadNewCards()
//   e.target.style.display = 'none'
// }
// const cardContainer = document.querySelector('.container')
// function loadNewCards() {
//   for (let i = 0; i < 10; i++) {
//     const card = document.createElement('div')
//     card.textContent = 'New Card'
//     card.classList.add('card')
//     cardContainer.append(card)
//     observer.observe(card)
//     //<div>New Card</>
//   }
// }

// function closePopUp() {
//   const imageContainer = document.getElementsByClassName('image-container')
//   imageContainer[0].classList.remove('show-container')
// }
///
/// CREATE A NEW INSTANCE OBSERVER any name
/// CONST target = document.queryselector('#target-card')
///  if target.isIntersecting 
/// CONST container = document.querySelector('.image-container')
/// container.classList.add('show-container)




// const exampleInstance = new IntersectionObserver(
//   (entries) => {
//     
//   }
// )

// CONST target = document.querySelector('')
// exampleInstance.observe(target)
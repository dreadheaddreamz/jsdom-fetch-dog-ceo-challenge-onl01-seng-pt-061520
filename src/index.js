console.log('%c HI', 'color: firebrick')
document.addeventListener("DOMCOntentLoaded", () => {
  fetchDogs()
  fetchBreeds()
  let dropDown = document.querySelector('#breed-dropdown')
    dropDown.addeventListener('change', (e) => {
      let breedChildren = document.querySelector('#dog-breeds').children
      let breedsArray = [...breedChildren]
      console.log(`${breedsArray[0].innerText.charAt(0)}`)
      breedsArray.fir
    })
}
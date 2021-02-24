const showAnimal = (event, animal) => { //Функция просмотра для табов
  const text_items = document.getElementsByClassName("text_item");
  for (let i = 0; i < text_items.length; i++) {
    text_items[i].style.display = "none";
  }

  const tab_items = document.getElementsByClassName("tab_item");
  for (let i = 0; i < tab_items.length; i++) {
    tab_items[i].className = tab_items[i].className.replace("active", "");
  }

  document.getElementById(animal).style.display = "block";
  event.currentTarget.className += " active";
}

const deleteTab = document.querySelectorAll(".deleteTab") //Функция удаления табов
deleteTab.forEach(item => {  
	item.addEventListener('click', function(event){
		event.stopPropagation();
		let deleteElem = event.target.parentNode;
		let newSwitchElem = deleteElem.nextElementSibling || deleteElem.previousElementSibling;

		if (deleteElem.classList.value.includes('active')) {
			deleteElem.remove();
			document.getElementById(deleteElem.dataset.tabs).remove();

			newSwitchElem.click();
		} else {
			deleteElem.remove();
			document.getElementById(deleteElem.dataset.tabs).remove();
		}

		if (document.getElementById("tabs_block").children.length == 1) {
			deleteTab.forEach(function(item) {
				item.style.display = 'none';
			})
		}
	})
});
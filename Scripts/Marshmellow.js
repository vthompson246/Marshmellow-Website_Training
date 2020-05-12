
const pages = ["container_alone", "container_happier", "container_biba","container_everyday"]
var activePage = pages[0];

//to do:

/*  
- next button: make it dynamic, given when the page is loaded, when the user cliks the next button, then it scrolls to the page to the right.
and it will also animate the various elements. 
- update the active page 
- toggle (turn on/off) active_page 
- scroll to the next active_page (the page you go to)
*/


function onNextClick() {
    const curIndex = pages.indexOf(activePage)
    document.getElementById(activePage).classList.toggle("active_page")

    if (curIndex === (pages.length -1))
        {
            activePage = pages[0]
        } else {
            activePage = pages[curIndex +1]
        }

        document.getElementById(activePage).classList.toggle("active_page")
        document.getElementById(activePage).scrollIntoView({inline: "start"}) 
    }

function onPreviousClick() {
    const curIndex = pages.indexOf(activePage)
    document.getElementById(activePage).classList.toggle("active_page")

    if (curIndex === 0) 
        {
            activePage = pages[pages.length - 1]
        } else {
            activePage = pages[curIndex -1]
        }

        document.getElementById(activePage).classList.toggle("active_page")
        document.getElementById(activePage).scrollIntoView({inline: "start"}) 
}







// utility





// buy-ticket scroll
function forScrollToSection(){
    const section = document.getElementById('seatBookSection-ID')
    section.scrollIntoView({behavior:'smooth'})


}

let seatCount = 40
let bookingCount = 0
const seatContainer = document.getElementById('seatContainer-ID').addEventListener('click', function(event){
    const seats = this.querySelectorAll('.btn')
    
  for( let seat of seats ){
   if(seat === event.target) {
    seat.style.backgroundColor ='#1DD100'
    bookingCount = bookingCount + 1
    seatCount = seatCount - 1
    getInnerTextbyId('seat-booking', bookingCount)
    getInnerTextbyId('seatLeft-ID', seatCount)
    


   }

  }
})


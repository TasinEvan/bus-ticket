
// utility****************************

// apply btn enable-------
function enableApply (){
  if( selectedSeatCount === 4){
   const couponApply = document.getElementById('apply-btn-ID')
   couponApply.disabled = false

  }
 }



// modal---------
function openModal() {
  const modal = document.getElementById('my_modal_5');
  modal.showModal();
}
function closeModal() {
  const modal = document.getElementById('my_modal_5');
  modal.close();
}
document.getElementById('nextBtn-ID').addEventListener('click', function() {
  openModal();
});



// Inner text-collector-------
function getInnerTextbyId(elementID , value) {
  let element = document.getElementById(elementID);
  
    document.getElementById(elementID).innerText = value
  
     
  } 






// buy-ticket scroll
function forScrollToSection(){
    const section = document.getElementById('seatBookSection-ID')
    section.scrollIntoView({behavior:'smooth'})


}

// main funtions
let selectedSeatCount = 0
let seatCount = 16
let bookingCount = 0
const seatContainer = document.getElementById('seatContainer-ID').addEventListener('click', function(event){
    const seats = this.querySelectorAll('.btn')
    
  for( let seat of seats ){
    // not more than 4
    if( selectedSeatCount >= 4){
      alert('You can not select more than 4 seat')
      return
    }
  
    if(seat === event.target && !seat.classList.contains('selected')) {
      seat.classList.add('selected'); 
    seat.style.backgroundColor ='#1DD100'
    bookingCount = bookingCount + 1
    seatCount = seatCount - 1
    selectedSeatCount = selectedSeatCount + 1
    getInnerTextbyId('seat-booking', bookingCount)
    getInnerTextbyId('seatLeft-ID', seatCount)

     
  


    // table 
     const tableContainer = document.getElementById('table-ID')
      const row = document.createElement('tr')
      const seatNum = document.createElement('td')
     seatNum.textContent = event.target.innerText
     row.appendChild(seatNum)
     const seatClass = document.createElement('td')
     seatClass.textContent = 'Economy'
     row.appendChild(seatClass)
     const seatPrice = document.createElement('td')
     seatPrice.textContent = '550'
     row.appendChild(seatPrice)
     tableContainer.appendChild(row)

    //  costings
    let totalCost = 0
    let priceOfTicket = 550
    priceOfTicket = priceOfTicket * selectedSeatCount
     totalCost = totalCost + priceOfTicket
    getInnerTextbyId('total-cost', totalCost)
    getInnerTextbyId('grand-cost', totalCost)
      


// apply btn enable function
    enableApply ()

// coupon 
    document.getElementById('apply-btn-ID').addEventListener('click',function(){
      const inputText = document.getElementById('input-Id').value
      const couponElement = document.getElementById('couponBox')
      
    if( inputText === 'NEW15' ){
       
       getInnerTextbyId('grand-cost', totalCost * 0.85 )
       couponElement.classList.add('hidden')
      }
      else if (inputText === 'couple 20') {
        getInnerTextbyId('grand-cost', totalCost * 0.80 )
        couponElement.classList.add('hidden')
      }
      else{getInnerTextbyId('grand-cost', totalCost )
        alert('Invalid Coupon code')
         return
      }
    
    })
   
  





     return
  
   }


  }  
  
})


 

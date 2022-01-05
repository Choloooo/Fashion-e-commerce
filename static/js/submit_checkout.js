document.addEventListener("DOMContentLoaded", (event) => {
  // Add an event listener for when the user clicks the submit button to pay
  document.getElementById("submit").addEventListener("click", (e) => {
      e.preventDefault();
      const PBFKey = "FLWPUBK_TEST-d999325c1953ead250badcc4e522c86f-X"; // paste in the public key from your dashboard here
      const txRef = ''+Math.floor((Math.random() * 1000000000) + 1); //Generate a random id for the transaction reference
      const email = document.getElementById('email').value;
      var fullname= document.getElementById('fullName').value;
      var address1= document.getElementById('custAdd').value;
      var address2= document.getElementById('custAdd2').value;
      var country= document.getElementById('country').value;
      var state= document.getElementById('state').value;
      var address1= document.getElementById('postCode').value;
      const amount= document.getElementById('total').value;

      
      
      
     

      // getpaidSetup is Rave's inline script function. it holds the payment data to pass to Rave.
  getpaidSetup({
      PBFPubKey: PBFKey,
      customer_email: email,
      amount:"{{cart.get_total_price}}",
      currency: "USD",  // Select the currency. leaving it empty defaults to NGN
      txref: txRef, // Pass your UNIQUE TRANSACTION REFERENCE HERE.
  
      onclose: function() {},
      callback: function(response) {
          flw_ref = response.tx.flwRef;// collect flwRef returned and pass to a server page to complete status check.
          console.log("This is the response returned after a charge", response);
          if(response.tx.chargeResponse =='00' || response.tx.chargeResponse == '0') {
          // redirect to a success page
          } else {
          // redirect to a failure page.
          }
      }
    });
  });
});
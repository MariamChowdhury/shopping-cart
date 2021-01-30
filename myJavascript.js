const firstNumber=document.getElementById('first-number');
      const firstBtn=document.getElementById('first-plus');
      firstBtn.addEventListener('click',increaseValue);
      const firstMinus=document.getElementById('first-minus');
      firstMinus.addEventListener('click',decreaseValue);
      const secondNumber=document.getElementById("second-number");
      const secondBtn=document.getElementById('second-plus');
      secondBtn.addEventListener('click',increaseValue2);
      const secondMinus=document.getElementById('second-minus');
      secondMinus.addEventListener('click',decreaseValue2);
      const phonePrice=document.getElementById('phone-price').innerHTML;
      const phonePriceNumber=parseInt(phonePrice);
      const coverPrice=document.getElementById('cover-price').innerHTML;
      const coverPriceNumber=parseInt(coverPrice);
      const subTotal=document.getElementById('sub-total').innerText;
      const subTotalNumber=parseInt(subTotal);
      //for increasing phone
      function increaseValue(){
         firstNumber.value=parseInt(firstNumber.value)+1;
         const finalPhonePrice=phonePriceNumber*(parseInt(firstNumber.value));
         document.getElementById('phone-price').innerHTML=finalPhonePrice;
         // const final=subTotalNumber+finalPhonePrice;
         // document.getElementById('sub-total').innerHTML=final;
         return finalPhonePrice;
      }
      function increaseValue2(){
         secondNumber.value=parseInt(secondNumber.value)+1;
         const finalCoverPrice=coverPriceNumber*(parseInt(secondNumber.value));
         document.getElementById('cover-price').innerHTML=finalCoverPrice;
         return finalCoverPrice;
      }
      function decreaseValue(){
         firstNumber.value=parseInt(firstNumber.value)-1;
         const finalPhonePrice1=phonePriceNumber*(parseInt(firstNumber.value));
         document.getElementById('phone-price').innerHTML=finalPhonePrice1;
         // const final=finalPhonePrice-subTotalNumber;
         // document.getElementById('sub-total').innerHTML=final;
         return finalPhonePrice1; 
      }
      function decreaseValue2(){
         secondNumber.value=parseInt(secondNumber.value)-1;
         const finalCoverPrice1=coverPriceNumber*(parseInt(secondNumber.value));
         document.getElementById('cover-price').innerHTML=finalCoverPrice1;
         return finalCoverPrice1; 
      }
      function final(){
         const final=finalPhonePrice-subTotalNumber;
         // document.getElementById('sub-total').innerHTML=final;
      }
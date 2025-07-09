$(document).ready(function) {
    
    const DISCOUNT_CODE = "UIIAI" ;
    const DISCOUNT_PRESENTAGE = 0.25;

    $(".plus-btn").on("click",function(){
        let quantitySpan = $(this).siblings(".quantity");
        let currentQuantity = parseInt(quantitySpan.text());
        if (currentQuantity > 0){quantitySpan.text(currentQuantity+1);
    }});
    $(".minus-btn").on("click",function(){
        let quantitySpan = $(this).siblings(".quantity");
        let currentQuantity = parseInt(quantitySpan.text());
        if (currentQuantity > 0){quantitySpan.text(currentQuantity-1);
    }});
    
}
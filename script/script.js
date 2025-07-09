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

    function calculateTotal() {
        let total = 0;
        $(".product-item").each(function()
            let price = $(this).find(".price").data("price");
            let quantity = parseInt($(this).find("quantity").text()));
            total += price * quantity;
        };
        kode diskon tidak valid <br>
        <strong>total bayar:$${totalOriginal.toFixed(2)}</strong>
        ;
        resultDisplay.html(resultHTML).show();
        


        $("#reset-btn").on("click",function(){
            $("#order-form")[0].reset();
            $(".quantity").text("0");
            $("#result-display").hide().html("");
        })
        
};
    
    

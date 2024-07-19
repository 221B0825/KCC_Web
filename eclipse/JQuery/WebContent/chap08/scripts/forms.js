$(function() {
    $('.quantity input').change(function() {
	let totalCost = 0;
	let totalQuantity = 0;
        $('table tbody tr').each(function(index) {
            // 정규 표현식으로 맨 앞의 $표시 제거
            let price = parseFloat($(this).find('.price').text().replace(/^[^\d.]/,""));
            price = isNaN(price) ? 0 : price;
        
            let quantity = parseInt($(this).find('.quantity input').val());
            quantity = isNaN(quantity) ? 0 : quantity;
            
            const cost = price * quantity;
            $(this).find('.cost').text('$'+cost.toFixed(2));
            
            totalCost += cost;
            totalQuantity += quantity;
            
        });
        
        let totalShippingCost= totalQuantity*2;
        let totalTaxCost = totalCost*6/100;
        
        $('.subtotal .cost').text('$'+totalCost.toFixed(2));
        
        
        // shipping cost
        $('.shipping .quantity').text(totalQuantity);
        $('.shipping .cost').text('$'+totalShippingCost.toFixed(2));
    
        // tax cost
        $('.tax .cost').text('$'+totalTaxCost.toFixed(2));
        
        // total cost
        $('.total .cost').text('$'+(totalCost+totalShippingCost+totalTaxCost).toFixed(2));
    })
})

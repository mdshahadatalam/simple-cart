function handleProductChange(product,isIncrease){
    const productInput = document.getElementById(product);
    const productCount = parseInt(productInput.value);
    let newproductCount = productCount;
    if( isIncrease == true){
        newproductCount = productCount + 1;

    }
    if( isIncrease == false && productCount > 0){
        newproductCount = productCount - 1;
    }
    productInput.value = newproductCount;
    let productTotal;
    if(product == "laptop"){
        productTotal = newproductCount * 245000; 
    }
    else{
        productTotal = newproductCount * 176999;
    }
    document.getElementById(product+'-Total').innerText = productTotal;

}



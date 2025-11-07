export interface Product{
    description : string;
    price : number
}
const phone : Product = {
    description : 'Nokia A1',
    price : 150.0
}

const tablet : Product = {
    description : 'iPad Air',
    price : 250.0
}

interface TaxCalcuationOptions{
    tax: number;
    products : Product[];
}

//function taxCalculation({tax, products}:TaxCalcuationOptions):[number,number]{
export function taxCalculation(options:TaxCalcuationOptions):[number,number]{
    const {tax, products} = options;
    let total = 0;
    products.forEach((
        {price}) =>{
        total += price;
    })
    return [total,total*tax];
}

/*const ShoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculation({
    products:ShoppingCart,
    tax
})
*/
//console.log({total, taxTotal })

//export type {Product};
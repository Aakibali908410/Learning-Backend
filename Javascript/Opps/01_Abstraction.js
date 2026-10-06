 //*****************************************************************************************/
 //    Abstraction
//  class Coffee{
//     #waterLevel=0;

//     #checkWaterLevel(){
//         return this.#waterLevel > 0
//     }

//     makeCoffee(){
//         if(this.#checkWaterLevel()){
//             console.log("Making Coffee....!");
//             this.#waterLevel -=50;
//         }
//         else{
//             console.log("Please Add Some Water to make Coffee!");
//         }
//     }
//  }

//  const obj=new Coffee();
//  obj.makeCoffee();
 

// Abstraction before ES6

function OnlineShopping(){
    let products=[]; // this is private

    function AddProduct(product){
        products.push(product);
    }
    return{
        add : function(product){
            AddProduct(product);
            console.log(`${product} added to the store`);
        },
        list: function(){
            console.log("Available Products", products.join(', '))
        }
    }
}

const stores=new OnlineShopping();
stores.add("Iphone");
stores.add("Laptop");
stores.list();
 
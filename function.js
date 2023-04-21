//Create an array containing the
//  names of all items in the inventory.

// Create a separate array with the corresponding 
// stock quantities of each item.

// Write a function to add a new item to the inventory, updating both arrays.

// Write a function to update the stock quantity of an existing item.

// Write a function to calculate the total number of items in the inventory.

// Write a function to find the item with the lowest stock quantity.

let itemInventory=["banana","mango","biscuits"];
let quantity=[32,12,88];



function add(name,value){
    itemInventory.push(name);
    quantity.push(value);   
    console.log(itemInventory);
    console.log(quantity);
}
add("orange",100)



function update(itemInventory,quantity){
    newInventory= Object.assign(...itemInventory.map((k, i)=>({[k]: quantity[i]}) ))
    return newInventory
}
console.log(update(itemInventory,quantity))




function existingItem(name,value){
    newInventory[name]=value
    return newInventory
}
console.log(existingItem("orange",10))




function sum(){
let a=itemInventory.length
 console.log(a);
}
sum();




 function lowestItem(newInventory){
  itemquantities=Object.values(newInventory)
    value=(itemquantities.sort((a,b)=>a-b))[0]
    key=Object.keys(newInventory)
    i=key.find(key =>newInventory[key]===value)
    return i
   
 }
 console.log(lowestItem(newInventory));









 


 

 












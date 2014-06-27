//This is an extended version of the Codecademy JS Cash Register Exercise.

//Setup the cash register:

//Create staff member constructor:

function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

//Create all of the staff members:

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);
var me = new StaffMember("Rucheli",20);

//Build the cashRegister object:

var cashRegister = {
    //Initial Total = 0
    total:0,
    //Initial Last Transaction = 0
    lastTransactionAmount: 0,
    // 'Add' function will set lastTransactionAmount and also increase the total
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    // 'Scan' will calculate how much to add to total based on inventory cost and quant
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    // Void will remove the last transaction from the total
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Apply will discount the total based on the employee discounts set above
    applyStaffDiscount: function(employee) {
        this.total -= this.total * (employee.discountPercent / 100);
    }
};

//Setup is done, now use the cash register:

//SCAN A BUNCH OF ITEMS

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',4);

//OOPS, TOO MANY MAGAZINES! THERE SHOULD ONLY BE 2:

cashRegister.voidLastTransaction();
cashRegister.scan('magazine',2);


//APPLY MY DISCOUNT

cashRegister.applyStaffDiscount(me);


// SHOW THE TOTAL BILL

console.log('Your bill is '+cashRegister.total.toFixed(2));

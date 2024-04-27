import inquirer from "inquirer";
// data
const currency :any = {
    'USD': 1,      //BASE CURRENCYY
    'EUR':0.91,
    'GBP':0.76,
    'INR':74.57,
    'PKR':280,
 };
 let user_Answer = await inquirer.prompt([
    {

        name: 'from',
        message:'Entter From currency',
        type:'list',
        choices:['USD','EUR','GBP','INR','PKR'],
    },
    {
        name: 'To',
        message:'Entter To currency',
        type:'list',
        choices:['USD','EUR','GBP','INR','PKR'],
    }, 
    {
        name: 'Amount',
        message:'Entter Your Amount',
        type:'number',
        
    },
 ]);
 let FromAmount = currency[user_Answer.from]
 let ToAmount = currency[user_Answer.To]
 let Amount = user_Answer.Amount
 let baseAmount = Amount / FromAmount      // USD base currency //6
 let convertedAmount = baseAmount * ToAmount
  
 console.log(convertedAmount);
 
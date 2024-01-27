//Get Elements
const numberBtns = document.querySelectorAll(".numberBtn");
const operatorBtns = document.querySelectorAll(".operatorBtn");
const clearEntryBtn = document.querySelector("#ceBtn");
const entryScreen = document.querySelector("#entryScreen");
const equalsBtn = document.querySelector("#equalsBtn");
const deleteBtn = document.querySelector("#delBtn");

const operators = ['+', '-', 'x', '÷'];

//Enter Operators
operatorBtns.forEach((operatorBtn) =>
{
    operatorBtn.addEventListener("click", () => 
    {
        
        const entryScreenValue = entryScreen.value;
        const entryScreenLastValue = entryScreenValue[entryScreenValue.length - 1];
        
       
        //Handles operator insertion in case of zero length, operator(replace) & no operator(append).
        if(entryScreenValue.length === 0)
        {
            return;
        }else if(operators.includes(entryScreenLastValue))
        {
            entryScreen.value = entryScreenValue.slice(0, -1) + operatorBtn.textContent;
        }else if(operators.includes(entryScreenLastValue) == false)
        {
            entryScreen.value = `${entryScreenValue}${operatorBtn.textContent}`;
        }
    })
});
//Enter Numbers
numberBtns.forEach((numberBtn) => 
{
    numberBtn.addEventListener("click", () => 
    {
        //Handles . insertion in case of empty entry & already present.
        if(numberBtn.textContent === ".")
        {
            if(entryScreen.value.length === 0)
            {
                return;
            }
            if(entryScreen.value.includes(".")){
                return;
            }
        }
        entryScreen.value = `${entryScreen.value}${numberBtn.textContent}`;
    })
});

//Clear Entry Screen
clearEntryBtn.addEventListener("click", () => 
{
    entryScreen.value = "";
})
//Equals Function
equalsBtn.addEventListener("click", () =>
{
    let entryValue = entryScreen.value;
    //Handles results/equal btn in case of empty entry, divide by zero & evaluates entry expression.
    if(entryValue.length === 0){
        return;
    }
    entryValue = entryValue.replace("x", "*");
    entryValue = entryValue.replace("÷", "/");

    if(entryValue.includes("/0"))
    {
        alert("ERROR: Can't Divide By Zero. Try Again!");
        return;
    }
    entryScreen.value = eval(entryValue);
})
//Delete Function
deleteBtn.addEventListener("click", () => 
{
    //Removes Last Entry.
    let entryValue = entryScreen.value;
    if(entryValue.length === 0)
    {
        return;
    }
    entryValue = entryValue.slice(0, -1);
    entryScreen.value = entryValue;
})




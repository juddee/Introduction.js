// basic arithmetic calculator without a frontend
    // perform basic operations like Addition, Subtraction, Multiplication, & Division

    console.log('Basic arithmetic calculator without a frontend');
    console.log('Type add(first_number,second_number) in the console to add two numbers.  ');
    console.log('');
    console.log("Use add/subtract/divide/multiply like multiply(firstNumber,secondNumber) then hit enter to show result");

    function add(firstNum, secondNum)
    {
        var sum = firstNum + secondNum;
        console.log("The sum of",firstNum,"and ",secondNum," is",sum);
    }

    function subtract(firstNum, secondNum)
    {
        var subtration = firstNum - secondNum;
        console.log("",firstNum,"-",secondNum,"=",subtration);
    }

    function divide(firstNum, secondNum)
    {
        var division = firstNum / secondNum;
        console.log("",firstNum,"/",secondNum,"=",division);
    
    }

    function multiply(firstNum, secondNum)
    {
        var multiplication = firstNum / secondNum;
        console.log("",firstNum,"*",secondNum,"=",multiplication);
    }
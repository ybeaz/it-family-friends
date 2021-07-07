(()=>{
    const task5 = () => {  
      let array = [];
      let sum = 0;
      let check = true;
      let input;
      while(check)  {
        input = prompt();
        if (isNaN(input) || !input || input === ' ')    {
          for (i = 0; i < array.length; i++)      {
            sum += array[i];
          }
          check = false;
        }
        else 
        {
          input = Number(input);
          array.push(input);
        }
      }
      alert(sum);
    }
    task5();
    })()  
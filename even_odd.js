function even_odd(number)
{
    if(number<2)
        console.log(number%2 == 0);
    console.log(even_odd(number-2));
    if(even_odd == 2)
        console.log("no. is prime!!!");
    else
        console.log("no. is odd!!!");

}
even_odd(4);
   
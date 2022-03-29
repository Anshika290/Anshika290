sharma_total("Aman", 40, 40, 35)   //function call
sharma_total("Anshika", 85, 70, 95)   //function call
sharma_total("Arpita", 75, 90, 95) 
sharma_total("Shreya", 95, 79, 95) 

function sharma_total(student_name, hindi, eng, math)   //Declaration
{
   let sum;
   sum = hindi + eng + math;
   console.log ("Result of " + student_name);
   console.log("Sum = " + sum);   //////sum = 147
   aman_percentage(sum);
}

function aman_percentage(sum)
{
    let per;
    per = (sum/300) * 100;
    console.log ("Percentage = " + per);
    sahil_result(per);
}

function sahil_result(per)
{
    if (per > 0 && per < 33)
    {
        console.log("Fail Ho Gaye");
        console.log("To phir se study karo...");
    }

    if (per >= 33 && per < 45)
    {
        console.log("Pass with third division");
    }
    
    if (per >= 45 && per < 60)
        console.log("Pass with second division");
    
    if (per >= 60 && per <=100)
        console.log ("Pass with first division"); 
    
    console.log("========================================");
}
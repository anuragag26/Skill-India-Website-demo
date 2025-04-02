function func()
{
    message();
    redirect1();
}

function redirect2()
{
    window.open("login.html");
}

function redirect1()
{
    window.open("https://app.powerbi.com/view?r=eyJrIjoiMmU0MDllMDctMDM1OS00MWY2LWI0NmItZDRhMTVmZGE2YzM0IiwidCI6IjcyNGI4ZWQxLTgxODMtNGNiOS1iNWIwLTFlZDY3YWZlYWNmMSIsImMiOjEwfQ%3D%3D");
}

function message()
{
    alert("You are being redirected to an external website.");
}
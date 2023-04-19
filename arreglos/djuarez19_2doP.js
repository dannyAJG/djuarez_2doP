
var arreglo = [7,7,7];
var total = 0;

for(var i = 0;i < arreglo.length;i++)
{
    if ((arreglo[i] % 2) == 0)
    {
        total += 2;
    }
    else if (((arreglo[i] % 2) != 0) && (arreglo[i] != 7))
    {
        total += 1;
    }
    else if (arreglo[i] == 7)
    {
        total += 3;
    }
}
console.log(total);
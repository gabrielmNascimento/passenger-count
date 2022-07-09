// Count Variable
let count = 0

function increment() 
{
    // Incrementing Variable
    count++

    // Writing on the site
    document.getElementById("counter").innerText = count
}

function save()
{
    // Adding the number of the count to the 'Previous Count' paragraph
    document.getElementById("save").textContent += count + " - "

    //Restarting the count
    count = 0
    document.getElementById("counter").innerText = count
}



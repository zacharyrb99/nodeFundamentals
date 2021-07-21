numbersURL = 'http://numbersapi.com'
favNumber = 9
favNumbers = [9, 14, 67]

// Part 1
async function partOne(int){
    let response = await axios.get(`${numbersURL}/${int}?json`)
    $('.part1').append(`<li>${response.data.text}</li>`)
}

// Part 2
async function partTwo(array){
    numString = array.join()
    let response = await axios.get(`${numbersURL}/${numString}?json`)
    
    for(num in response.data){
        $('.part2').append(`<li>${response.data[num]}</li>`)
    }
}

// Part 3
async function partThree(int){
    let res1 = await axios.get(`${numbersURL}/${int}?json`)
    let res2 = await axios.get(`${numbersURL}/${int}?json`)
    let res3 = await axios.get(`${numbersURL}/${int}?json`)
    let res4 = await axios.get(`${numbersURL}/${int}?json`)

    let responses = [res1, res2, res3, res4]
    for(response in responses){
        $('.part3').append(`<li>${responses[response].data.text}</li>`)
    }
}

partOne(favNumber)
partTwo(favNumbers)
partThree(favNumber)
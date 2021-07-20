let numbersURL = 'http://numbersapi.com';
num = 9
nums = [9,42,67]

// Part 1
function partOne(int){
    axios.get(`${numbersURL}/${int}?json`)
        .then(response => {
            $('#part1').append(`<li>${response.data.text}</li>`)
        })
}

// Part 2
function partTwo(array){
    numsString = nums.join()
    console.log(numsString)
    axios.get(`${numbersURL}/${nums}?json`)
        .then(response => {
            for(num in response.data){
                $('#part2').append(`<li>${response.data[num]}</li>`)
            }
        })
}

// Part 3
function partThree(int){
    axios.get(`${numbersURL}/${num}?json`)
        .then(response => {
            $('#part3').append(`<li>${response.data.text}</li>`)
            return axios.get(`${numbersURL}/${int}?json`)
        })
        .then(response => {
            $('#part3').append(`<li>${response.data.text}</li>`)
            return axios.get(`${numbersURL}/${int}?json`)
        })
        .then(response => {
            $('#part3').append(`<li>${response.data.text}</li>`)
            return axios.get(`${numbersURL}/${int}?json`)
        })
        .then(response => $('#part3').append(`<li>${response.data.text}</li>`))
}



partOne(num);
partTwo(nums);
partThree(num);
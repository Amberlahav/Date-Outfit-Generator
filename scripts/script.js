
// RANDOMIZING FUNCTION: // takes an array and then returns a random index in that array (for use later on in the code);
function randomItemInArray(outputArray) {
    const randomItem = Math.floor(Math.random() * outputArray.length);
    return outputArray[randomItem];
}

$(function () {
    
    // STEP ONE: listen for the user to click submit.

    $('form').on('submit', function (e) {

        // statement to ensure that all questions are answered. If value of the input is undefined(meaning they did not select anything), they will get an alert:
         if ($('input[name=clothingSection]:checked').val() !== undefined && $('input[name=weather]:checked').val() !== undefined && $('input[name=dateType]:checked').val() !== undefined) {
             
            // overriding the default event of the page refreshing when someone clicks on submit:
            e.preventDefault();
            console.log('form submitted');

        // STEP TWO: Find out which option was checked for each question and store inside a variable (still inside of the submit event).

            const chosenSection = $('input[name=clothingSection]:checked').val();

            const chosenWeather = $('input[name=weather]:checked').val();

            const chosenDateType = $('input[name=dateType]:checked').val();
           
        // STEP THREE:  Depending on which option is checked, grab an array (selection of clothing items) to choose the output from. 

        // this function makes sure we start with an empty output so that we don't keep appending more items:
            $('.tops').empty();
            $('.bottoms').empty();

        // tops:

        // from tops objects, creates a new array with the items based on "chosenSection" (men or women)
            const topsArray = tops[chosenSection];
            console.log(topsArray);
        // starting with an empty array, this function looks at the new array we just made, and pushes the objects with the matching "weather" and "dateType" values into the new empty array using a for loop.
            const topOptions = [];
            for (let i = 0; i < topsArray.length; i = i + 1) {
                if (topsArray[i]['weather'] === chosenWeather && topsArray[i]['dateType'] === chosenDateType) {
                    topOptions.push(topsArray[i]);
                } 
            }

        // STEP FOUR: use the randomizing function created earlier to append a random item inside the new generated array onto the page in the form of an image tag.
            $('.tops').append(`<img class="topImage" src=${randomItemInArray(topOptions)['url']}>`);
            
        // Now we repeat the same steps for our bottoms:

        // bottoms:
            const bottomsArray = bottoms[chosenSection];
            console.log(bottomsArray);

            const bottomOptions = [];
            for (let i = 0; i < bottomsArray.length; i = i + 1) {
                if (bottomsArray[i]['weather'] === chosenWeather && bottomsArray[i]['dateType'] === chosenDateType) {
                    bottomOptions.push(bottomsArray[i]);
                }
            }

            $('.bottoms').append(`<img class="bottomImage" src=${randomItemInArray(bottomOptions)['url']}>`);

            
         } else {
             // if all radio buttons are not clicked, it will evaluate to false and alert the user:
             alert('Answer all the questions!')
         }

    });

    $('.startOver').on('click', function(){
        $('.tops').empty();
        $('.bottoms').empty();
        $('input[type=radio]').attr('checked', false);
    }); 

    

    //  smooth scroll code: 
        $(function () {

                // this code initializes smooth scroll:
                $('a').smoothScroll({
                    speed: 650,
                });
            
        });
    
});

// STRETCH GOALS:

// append the images that match the options that were selected:
        // $('.tops').append(`<img src=${topOptions[0]['url']}>`,`<img src=${topOptions[1]['url']}>`,`<img src=${topOptions[2]['url']}>`);

// displaythe images in the form of a flickity slider so users can mix and match their outfits.

        // $('.tops').flickity();

// repeat for bottoms:
        // $('.bottoms').append(`<img src=${bottomOptions[0]['url']}>`, `<img src=${bottomOptions[1]['url']}>`, `<img src=${bottomOptions[2]['url']}>`);

    // $('.bottoms').flickity();
// Main JS File for Cat Lady Scale

$(document).ready(function(){

    /*
     * Behavior Class
     * constructor - needs the description and pointValue to construct
     * listItem function - returns the behavior as an html string
     */
    function Behavior (description, pointValue) {
        this.description = description;
        this.pointValue = pointValue;
    }
    Behavior.prototype = {
        getListItem: function () {
            return '<div class="behavior-item">' +
                '<div class="description">' + this.description + '</div>' +
                '<div class="points">' + this.pointValue + '</div>' +
                '</div>';
        },
    }

    /*
     * Status Class
     * constructor - needs the title for the status and a corresponding image
     * imagePath function - returns local path to the image (for using in the src attr)
     */
    function Status (title, image) {
        this.title = title;
        this.image = image;
    }
    Status.prototype = {
        imagePath: function (){
            return 'images/' + this.image;
        }
    }

    /*
     * Cat Lady Behaviors
     * list of all possible behaviors to fill the drop down form
     */
    var catLadyBehaviors = [
        new Behavior("agrees that there's a cat gif for everything", 3),
        new Behavior("own one dog", -1),
        new Behavior("own one cat", 1),
        new Behavior("own more than one cat", 3),
        new Behavior("own more than one dog", -3),
        new Behavior("your cat(s) have a kitty condo", 4),
        new Behavior("regularly attend dog shows", -4),
        new Behavior("photos of cats on your phone", 1),
        new Behavior("take selfies with cats", 2),
        new Behavior("allergic to cats", -6),
        new Behavior("allergic to cats but own cats anyway", 6),
        new Behavior("buy christmas gifts for your cat(s)", 2),
        new Behavior("talk to your cat(s) when alone", 2),
        new Behavior("talk to your cat(s) in front of other humans", 3),
        new Behavior("have strong opinions about cat food", 2),
    ];

    /*
     * Cat Lady Scale
     * description: the cat lady scale is indexed by the number on the scale. Each
     * scale number has an object with a title and image name associated with it.
     */
    var CAT_LADY_SCALE = {
        10: new Status("Cat-sylum", 'cat_lady.jpg' ),
        9: new Status("ALL OF THE CATS", 'all_kittens.jpg' ),
        8: new Status("Takin Selfies With Cats", 'cat_selfie.jpg' ),
        7: new Status("A One-Cat Kind of Human", 'one_cat.jpg' ),
        6: new Status("Cat Gifs Are...Alright", 'grumpy.jpg' ),
        5: new Status("Indifferent", 'cat_dog_friends.jpg' ),
        4: new Status("Ehh, Dogs Greater...", 'cat_backseat.jpg' ),
        3: new Status("Dogs are where it's at", 'dogs.jpg' ),
        2: new Status("I wish I were allergic", 'allergic.jpg' ),
        1: new Status("Cats...like, the musical?", 'cats.jpg' ),
        0: new Status("What's a cat? Never heard of 'em", 'dog_heaven.jpg' ),
    };
    // -----------------------------------------------------------------------------------------
          // TODO: CHALLENGE 1 < DONE!!!!
          // add some more behaviors cat lady behaviors here to customize your app!
          // -----------------------------------------------------------------------------------------

    /*
     * Cat Lady Object
     * behaviors - array of behavior objects
     * addBehavior - function that adds behavior and updates cat lady object as necessary
     * status - the current cat lady status object
     * updateStatus - function that updates the cat lady objects status
     */
    var catLady = {
        behaviors: [],
        addBehavior : function (newBehavior) {
          this.behaviors.push(newBehavior);
          this.updateStatus();
        },

          //--------------------------------------------------------------------------------------
                    // TODO: CHALLENGE 2 < DONE!!!
                    // Implement the add behavior function. This function should:
                    // 1. add the behavior object to the behaviors list in *this* catLady object (<- that
                    //    is a hint)...
                    // 2. now that a new behavior is added... update *this* cat lady's status (hint you
                    //    should just call a function in this object)
                    //--------------------------------------------------------------------------------------


        status: CAT_LADY_SCALE[5], // just the inital status... INDIFFERENT
        statusNumber: 5,
        updateStatus: function () {
              var total = 5;
              for (var i = 0; i < this.behaviors.length; i++){
                total += this.behaviors[i].pointValue;
              console.log("Total is: " + total);
          };
          this.statusNumber = total;
          this.status = CAT_LADY_SCALE[total];
        },
      };

          //--------------------------------------------------------------------------------------
            // TODO: CHALLENGE 8  DONE
            // Implement the evaluate function to calculate where on the scale this cat lady
            // is. This function should:
            // 1. Loop through this catLady's behaviors array, to calculate the sum of all behavior
            //    point values. ** when adding up the point values, start the sum at 5 (indifferent)
            //    on the scale.
            //--------------------------------------------------------------------------------------

            //--------------------------------------------------------------------------------------
            // TODO: CHALLENGE 9 DONE??
            // Use the pointValue sum to determine where on the scale this cat lady is. Match the
            // sum to a value in the CAT_LADY_SCALE object. Get the Status object, located at the
            // corresponding scale position. And then update this catLady status property.
            //--------------------------------------------------------------------------------------

    /*
     * Add Behavior Click Event
     * handles when the user adds a behavior
     */
     //---------------------------------------------------------------------------------------------
     // TODO:
     // Implement the add-behavior event listener. This event listener should use js AND
     // jQuery to update the Cat Lady Scale page upon a user adding a behavior to their cat lady.
     // (see individual challenges below)
     //---------------------------------------------------------------------------------------------
    $('#add-behavior').click(function(e){
        e.preventDefault();
        //------------------------------------------------------------------------------------------
        // TODO: CHALLENGE 4 < DONE??
        // 1. Prevent the default page reload using jquery.
        //------------------------------------------------------------------------------------------
        var x = $('#behavior-select').val();
        var y = catLadyBehaviors[x];
        catLady.addBehavior(y);
        displayNewBehavior(y);
        displayStatus(catLady.status);
        //------------------------------------------------------------------------------------------
        // TODO: CHALLENGE 5 DONE??
        // 2. Grab the catLadyBehavior index value from the behavior option in the behavior-select
        //    field located in the html. This will be tricky... before you start try selecting
        //    different options in dropdown and observe what happens to the html.
        //------------------------------------------------------------------------------------------

        //------------------------------------------------------------------------------------------
        // TODO: CHALLENGE 6 DONE.
        // 3. Use the index value from step 2, to get the correct cat lady behavior from the
        //    catLadyBehaviors array.
        // 4. Now add the behavior to the catLady object.
        //------------------------------------------------------------------------------------------

        //------------------------------------------------------------------------------------------
        // TODO: CHALLENGE 7   DONE.
        // 5. Display the newly added behavior with the displayNewBehavior function.
        //------------------------------------------------------------------------------------------

        //------------------------------------------------------------------------------------------
        // TODO: CHALLENGE 10 DONE??
        // 1. Display the cat lady status, with the displayStatus function;
        //------------------------------------------------------------------------------------------

    });

    /*
     * Display New Behavior
     * add the passed in behavior to the display in the behavior list in the html
     */
    function displayNewBehavior (behavior){
      $(".behavior-list").append(behavior.getListItem());

        //------------------------------------------------------------------------------------------
        // TODO: CHALLENGE 3 < DONE !!!
        // Here you should use jquery to to add the correct behavior item div to the behavior-list
        // element (see html file). To do this:
        // 1. get the list item from the behavior object (see the behavior prototype)
        // 2. append the list item to the behavior list element in the html
        //------------------------------------------------------------------------------------------
    }

    /*
     * Update Status Display
     * updates the cat lady status display in the html with the cat status object it was passed
     */
    function displayStatus (catLadyStatus){
      console.log("this is running");
      $('.status-image').children('img').attr("src", catLadyStatus.imagePath());
      $('.status-title').text(catLadyStatus.title);
      $('.circle').removeClass('filled');
      $('#circle' + catLady.statusNumber).addClass('filled');
      
        //------------------------------------------------------------------------------------------
        // TODO: CHALLENGE 11 DONE??
        // Here you should use jquery to to update the Cat Lady Status Display. To do this:
        // 1. update the status image src in the html
        // 2. update the status title in the html
        // ** make sure to checkout the status object for help!
        //------------------------------------------------------------------------------------------


    }

    /*
     * Fill Behavior Drop Down
     * adds all behaviors from the catLadyBehaviors array as options in the html dropdown
     */
    function fillBehaviorDropDown ()
    {
        for (var i = 0; i < catLadyBehaviors.length; i++) {
            var description = catLadyBehaviors[i].description;
            var points = catLadyBehaviors[i].pointValue;
            var option = '<option value="' + i +'">' + description + '</option>';
            $('#new-behavior-form .behaviors').append(option);
        }
    }

    /*
     * Updates the selected options in the add behavior drop down
     * the current selected option, will have a select attribute associated with it.
     */
    $('body').on('change', 'select', function(){
        $('option[selected]').removeAttr('selected');
        $("option[value=" + this.value + "]").attr('selected', true);
    });

//var c=document.getElementById("canvas");
//var ctx=c.getContext("2d");
//var coords = [[15,15], [95,15], [175,15],[255,15], [335,15], [415,15], [495,15], [575,15], [655,15], [735,15]];
//for(var i = 0; i < coords.length; i++){
//    ctx.beginPath();
//    ctx.arc(coords[i][0], coords[i][1], 10, 0, 2*Math.PI);
//    ctx.stroke();
//}


    // initial setup
    fillBehaviorDropDown(); // fill drop down
    displayStatus(catLady.status); // display initial cat lady status
});

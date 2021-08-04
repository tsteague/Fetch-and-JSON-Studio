// TODO: add code here
window.addEventListener( "load", function() {
  fetch( "https://handlers.education.launchcode.org/static/astronauts.json" ).then( function(response) {
    response.json().then( function(json) {
      let container = document.getElementById( "container" );

      for ( let astronaut of json )
      {
        let astroDiv = document.createElement( "div" );
        astroDiv.className = "astronaut";

        let infoDiv = document.createElement( "div" );

        let astroH3 = document.createElement( "h3" );
        let text = document.createTextNode(`${astronaut.firstName} ${astronaut.lastName}`);
        astroH3.appendChild( text );
        infoDiv.appendChild( astroH3 );

        let ul = document.createElement( "ul" );
        let li = document.createElement( "li" );
        text = document.createTextNode(`Hours in space: ${astronaut.hoursInSpace}`);
        li.appendChild( text );
        ul.appendChild( li );

        li = document.createElement( "li" );
        text = document.createTextNode(`Active: ${astronaut.active}`);
        li.appendChild( text );
        ul.appendChild( li );

        li = document.createElement( "li" );
        text = document.createTextNode(`Skills: ${astronaut.skills}`);
        li.appendChild( text );
        ul.appendChild( li );
        
        infoDiv.appendChild( ul );

        let img = document.createElement( "img" );
        img.src = astronaut.picture;
        img.className = "avatar";
   
        astroDiv.appendChild( infoDiv );
        astroDiv.appendChild( img );
        container.appendChild( astroDiv );
      }
    });
  });
});

        document.querySelector('#bagikan')
        .addEventListener('click', event => {
  
            // Fallback, Tries to use API only
            // if navigator.share function is
            // available.
			// This API only support HTTPS !!!
            if (navigator.share) {
                navigator.share({
  
                    // Judul Yang Di Share
                    title: document.title,
					text: "More info about {{ page.title }} at " + window.location.href + "",
                    // url: window.location.href + " Thanks U..!. ",
					
                }).then(() => {
                    console.log('Thank you for sharing!');
                }).catch(err => {
  
                    // Handle errors, if occured
                    console.log(
                    "An error occured when using Web API:");
                    console.log(err);
                });
            } else {
  
                // Alerts user if API not available 
                alert("Use HTTPS, or another browser.");
            }
        })

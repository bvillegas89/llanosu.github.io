/*--- Captcha JS Start ---*/
// ref: http://diveintohtml5.org/detect.html
function supports_input_placeholder()
{ 
    var i = document.createElement('input');
	return 'placeholder' in i;
}

if(!supports_input_placeholder()) {
	var fields = document.getElementsByTagName('INPUT');
	for(var i=0; i < fields.length; i++) {
	  if(fields[i].hasAttribute('placeholder')) {
		fields[i].defaultValue = fields[i].getAttribute('placeholder');
		fields[i].onfocus = function() { if(this.value == this.defaultValue) this.value = ''; }
		fields[i].onblur = function() { if(this.value == '') this.value = this.defaultValue; }
	  }
	}
};

$(".clear").click(function () {
	  location.reload();
});
/*--- Captcha JS End ---*/


/*--- iPhone Validation JS Start ---*/
$('form').submit(function(){
    var required = $('[required]'); // change to [required] if not using true option as part of the attribute as it is not really needed.
    var error = false;

    for(var i = 0; i <= (required.length - 1);i++)
    {
        if(required[i].value == '') // tests that each required value does not equal blank, you could put in more stringent checks here if you wish.
        {
            required[i].style.border = '1px solid red';
            error = true; // if any inputs fail validation then the error variable will be set to true;     
        }
    }

    if(error) // if error is true;
    {
        return false; // stop the form from being submitted.
    }
});
/*--- iPhone Validation JS End ---*/
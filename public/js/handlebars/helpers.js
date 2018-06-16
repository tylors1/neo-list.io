
Handlebars.registerHelper('equal', function(lvalue, rvalue, options) {
  if (arguments.length < 3)
      throw new Error("Handlebars Helper equal needs 2 parameters");
  if( lvalue!=rvalue ) {
      return options.inverse(this);
  } else {
      return options.fn(this);
  }

});

Handlebars.registerHelper('trim', function(text) {
  text = text.replace(/ /g, '');
  return new Handlebars.SafeString(text);
});

Handlebars.registerHelper('rating', function(text) {
  if (text === "0"){
  	return new Handlebars.SafeString('rating-green');
  }
  else if (text === "1"){
  	return new Handlebars.SafeString('rating-yellow');
  }
  else if (text === "2"){
  	return new Handlebars.SafeString('rating-red');
  }
  else{
  	return new Handlebars.SafeString('rating-none');
  }
});

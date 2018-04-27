$(document).ready(function(){
  // your code goes here.
  // 1. **retrieving** the values from the form,
  const selector = $("input[name='selector']")
  const property = $("input[name='property']")
  const value = $("input[name='value']")
  // 2. **passing** those values into the correct jQuery function for manipulating CSS, and
  // 3. **binding** the previous two parts to a particular event using an event handler.
  $('form').submit(function(){
    $(selector.val()).css(property.val(), value.val())
    event.preventDefault()
  })
});

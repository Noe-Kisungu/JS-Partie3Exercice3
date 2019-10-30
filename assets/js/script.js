window.onload = function()
{
  var test = document.getElementsByClassName('color');
  for(var i= 0; i < test.length; i++)
  {    test[i].addEventListener('click', function()
    {
      document.getElementById('text').style.color = this.className.substr(6);
    });
  }
}
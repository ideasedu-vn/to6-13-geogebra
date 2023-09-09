function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5oEiir8tu3F":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var e1 = player.GetVar('B51_ô1_NC3');
var e2 = e1.replace(/\s+/g, ''); 
player.SetVar('B51_ô1_NC3',e2);
}


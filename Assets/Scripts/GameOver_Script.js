#pragma strict

var sair: Texture2D;
var select: Texture2D;

static var pontoFinal = 0;

function Start () {

}

function Update () {

}

function OnGUI(){
	if (GUI.Button(Rect(Screen.width/2 - 30,430,60,30), sair)){
		Application.Quit();
	
	}
	
	if (GUI.Button(Rect(Screen.width/2 - 30,400,60,30), select)){
		Application.LoadLevel("selectNave");
	
	}
	
	GUI.Label (Rect (Screen.width/2-150,300,400,30), "VOCE PERDEU! SUA PONTUAÇAO FOI: "+ pontoFinal+" pontos." );

}
#pragma strict

var player1 = false;
var player2 = false;
static var playerS = 1;

function Start () {

}

function Update () {

}

function OnMouseOver(){
	
	if (player1 == true){
		if (Input.GetButton ("Fire1")){
			playerS = 1;
			Debug.LogWarning("selecionou o P1");
			Application.LoadLevel("level1");
		}
	}
	
	if (player2 == true){
		if (Input.GetButton ("Fire1")){
			playerS = 2;
			Debug.LogWarning("selecionou o P2");
			Application.LoadLevel("level1");
		}
	}
	//Debug.LogWarning("passou o mouse sobre o objeto"); Verifica no Log se ha colisao entre o mouse e a nave
	//Obs: E necessario um rigid body
}
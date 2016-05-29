#pragma strict

var nave1: Transform;
var nave2: Transform;

function Start () {

	if (Click_Nave.playerS == 1){
		Instantiate(nave1,transform.position, transform.rotation);
	}
	if (Click_Nave.playerS == 2){
		Instantiate(nave2,transform.position, transform.rotation);
	}
}

function Update () {

}
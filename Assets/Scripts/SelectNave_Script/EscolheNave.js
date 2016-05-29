#pragma strict

var velRot = 30;
var sentido = 1;

function Start () {

}

function Update () {
	transform.Rotate(0,0,velRot*Time.deltaTime*sentido);
}
#pragma strict

var vel:float;
var inicio = 19;
var fim = -5;

function Start () {
	vel = Random.Range(0.2, 1.2);
}

function Update () {

	transform.Translate(0,0,vel*Time.deltaTime*-1);

	if (transform.position.z <= fim){
		transform.position.z = inicio;
		//transform.position.x = Random.Range(-4,4);
	}
}
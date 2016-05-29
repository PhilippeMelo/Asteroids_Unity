#pragma strict

var explosao: Transform;
var vel = 12;
var fim = 28;

function Start () {

}

function Update () {

	transform.Translate(0,vel*Time.deltaTime,0);
	
	if (transform.position.z >= fim){
		Destroy(gameObject);
	}
}

function OnTriggerEnter(other: Collider){
	if(other.CompareTag("Meteoro")){
		Instantiate(explosao,transform.position, transform.rotation);
		Destroy(gameObject);
	}
}	

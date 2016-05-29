#pragma strict

var tiro: Transform;

function Start () {

}

function Update () {

	if(Input.GetButtonDown("Fire1")){
		Instantiate(tiro,transform.position,transform.rotation);
	}
		
}
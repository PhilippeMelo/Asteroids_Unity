#pragma strict

var explosao: Transform;
var vel = 15;
static var vida = 5;
static var pontos = 0;

function Start () {
	vida = 5;
	pontos = 0;
}

function Update () {

	if (transform.position.x >= -4){
		if(Input.GetKey("up")){
			transform.Translate(vel*Time.deltaTime,0,0);
		}
	}
	
	if (transform.position.x <= 4){
		if(Input.GetKey("down")){
			transform.Translate(vel*Time.deltaTime*-1,0,0);
		}
	}
	
	if (transform.position.z <= 14){
		if(Input.GetKey("right")){
			transform.Translate(0,vel*Time.deltaTime,0);
		}
	}
	
	if (transform.position.z >= -2){
		if(Input.GetKey("left")){
			transform.Translate(0,vel*Time.deltaTime*-1,0);
		}
	}
 
	if (vida <= 0){
	
		GameOver_Script.pontoFinal = pontos;
		Application.LoadLevel("gameOver");
	}
	
}

function OnTriggerEnter(other: Collider){
	if(other.CompareTag("Meteoro")){
			Instantiate(explosao,transform.position, transform.rotation);

	}
}

function OnGUI(){
	
	GUI.Label (Rect (5,5,100,30), "Vidas: "+ vida);
	GUI.Label (Rect (5,20,100,30), "Pontos: "+ pontos);
}
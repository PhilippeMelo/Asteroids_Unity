#pragma strict


var vel = 4;
var velRot = 140;
var inicio = 19;
var fim = -5;

function Start () {
 vel = 4;
}

function Update () {

transform.Translate(0,0,vel*Time.deltaTime*-1);
transform.Rotate(0,0,velRot*Time.deltaTime);

if (transform.position.z <= fim){
	transform.position.z = inicio;
	transform.position.x = Random.Range(-4,4);
}
}

function OnTriggerEnter(other: Collider){
	if(other.CompareTag("Player")){
			transform.position.z = inicio;
			transform.position.x = Random.Range(-4,4);
			Controle_Nave.vida -= 1;
			
			
	}
	
	if(other.CompareTag("Tiro")){
			transform.position.z = inicio;
			transform.position.x = Random.Range(-4,4);
			Controle_Nave.pontos += 5;
			
			
	}
	
	//Implementando o aumento de dificuldade conforme o jogador ganha pontos
	if (Controle_Nave.pontos >= 35){
		vel = 6;
	}
	if (Controle_Nave.pontos >= 70){
		vel = 9;
	}
	if (Controle_Nave.pontos >= 105){
		vel = 12;
	}
	if (Controle_Nave.pontos >= 140){
		vel = 15;
	}
	if (Controle_Nave.pontos >= 175){
		vel = 20;
	}
	if (Controle_Nave.pontos >= 210){
		vel = 25;
	}
	if (Controle_Nave.pontos >= 245){
		vel = 30;
	}
	if (Controle_Nave.pontos >= 280){
		vel = 35;
	}
}


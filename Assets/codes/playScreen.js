#pragma strict

function StartMenu(){
	Application.LoadLevel("scene1");
}

function exitGame(){
	Debug.Log("Game to be exiting");
	Application.Quit();
}
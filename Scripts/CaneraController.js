#pragma strict

var player : GameObject;
var offset : Vector3;

function Start () {
    offset = transform.position - player.transform.position;
}

function LateUpdate () {
    print(player.transform.position.x);
    transform.position = player.transform.position + offset;
}

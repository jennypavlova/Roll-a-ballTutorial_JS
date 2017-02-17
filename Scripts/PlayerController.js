#pragma strict


public class PlayerController extends MonoBehaviour {
    var rb: Rigidbody;
    var speed : float = 30.0;

    function Start() {
        rb = GetComponent.<Rigidbody>();
    }

    function FixedUpdate () {
        var horizontal : float= Input.GetAxis ("Horizontal");
        var vertical : float= Input.GetAxis ("Vertical");
        rb.AddForce(Vector3(horizontal, 0.0, vertical)*speed);
    }

    function OnTriggerEnter (other : Collider) {
        if(other.gameObject.CompareTag ("Pick Up")){
            other.gameObject.SetActive (false);
        }
    }
}

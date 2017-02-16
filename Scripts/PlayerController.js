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
        Debug.Log(horizontal);
        Debug.Log(vertical);
        rb.AddForce(Vector3(horizontal, 0.0, vertical)*speed);
    }
}
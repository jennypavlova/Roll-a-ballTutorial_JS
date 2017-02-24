#pragma strict
import UnityEngine.UI;


public class PlayerController extends MonoBehaviour {
    var rb : Rigidbody;
    var speed : float = 30.0;
    var count : int;
    var countText : UI.Text;
    function SetCountText () {
        countText.text = "Count:" + count.ToString();
    }
    function Start() {
        rb = GetComponent.<Rigidbody>();
        count = 0;
        SetCountText ();
    }

    function FixedUpdate () {
        var horizontal : float= Input.GetAxis ("Horizontal");
        var vertical : float= Input.GetAxis ("Vertical");
        rb.AddForce(Vector3(horizontal, 0.0, vertical)*speed);
    }

    function OnTriggerEnter (other : Collider) {
        if(other.gameObject.CompareTag ("Pick Up")){
            other.gameObject.SetActive (false);
            count = count + 1;
            SetCountText ();
        }
    }

}

import React from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
//const User = require("./models/user");
import "../../utilities.css";
import "./Profile_edit.css";
import { post } from "../../utilities";
//import "./Skeleton.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "847255392628-tdlh0r7m9s9vq6isrb54ind9k7sk34hg.apps.googleusercontent.com";


 const saveInfo = () =>{
  alert('submitted');
  post('/api/pfedit',{name: document.getElementById("Name"),
  institution: document.getElementById("Institutions"),
  resume: document.getElementById("Resume"),
  linkedin: document.getElementById("Linkedin"),
  location: document.getElementById("Location"),
  bio: document.getElementById("Bio")}).then((response)=>{
  console.log(response)
  
 })   
}

const Profile_edit = () => {
  return (
    <form>
    <div className="personal_info">
        <label for="Name">Name:
        <input type="text" id="Name" name="Name" />
        </label>

        <label for="Institutions">Institutions:
        <input type="text" id="Institutions" name="Institution"/>
        </label>

        <label for="Resume">Resume:
        <input type="text" id="Resume" name="Resume"/>
        </label>

        <label for="Linkedin">Linkedin:
        <input type="text" id="Linkedin" name="Linkedin"/>
        </label>

        <label for="Location">Location:
        <input type="text" id="Location" name="Location"/>
        </label>

        <label for="Bio">Bio:
        <input type="text" id="Bio" name="Bio"/>
        </label>
        

        <div> 
          <button id='submit' type="submit"  onClick={saveInfo}>save</button>
        </div>
        
        
        
    </div>
    </form>
    

    


    
  );
};

export default Profile_edit;

import React from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

import "../../utilities.css";
import "./Profile_edit.css";
//import "./Skeleton.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "847255392628-tdlh0r7m9s9vq6isrb54ind9k7sk34hg.apps.googleusercontent.com";

const Profile_edit = () => {
  return (
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
    </div>


    
  );
};

export default Profile_edit;

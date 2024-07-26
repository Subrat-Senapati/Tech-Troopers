import React from "react";
import ArtHead from "../components/ArtHead";
import ArtBody from "../components/ArtBody";

function Article (){
    return(
        <div className="Article">
           <ArtHead/>
           <ArtBody/>
        </div>
    );
}

export default Article;
import "./styles.css";

import home from "./home";
import menu from "./menu";
import about from "./about";


function cleanContent(){
    const content = document.querySelector("#content")
    while (content.firstChild){
        content.removeChild(content.firstChild);
    }
}


let buttons = document.querySelectorAll("nav button")
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        cleanContent();
        switch (button.getAttribute("id")){
            case "home":
                home()
                document.querySelector("button#hmenu").addEventListener("click",()=>{
                    cleanContent();menu();
                });
                break;
            case "menu":
                menu();
                break;
            case "about":
                about();
                break;
        }
    })
});
home();
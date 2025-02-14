function about(){
    const text = document.createElement("p");
    text.innerText = `This is a test for home`
    document.querySelector("#content").appendChild(text);
}
export default about;
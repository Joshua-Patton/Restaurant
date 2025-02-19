function home(){
    const text = document.createElement("p");
    text.innerHTML =
`
 <header>
        <h1>Welcome to Epicurean Delight</h1>
    <main>
        <section>
            <h2>Our Culinary Mission</h2>
            <p>At Epicurean Delight, we strive to provide an unforgettable dining experience with delectable dishes, exceptional service, and a welcoming ambiance.</p>
        </section>
        <section>
            <h2>Explore Our Menu</h2>
            <p>Our diverse menu is crafted to delight every palate, offering a blend of classic flavors and innovative culinary creations.</p>
            <button id="hmenu">View Menu</button>
        </section>
    </main>
`

    document.querySelector("#content").appendChild(text);
    
}
export default home;

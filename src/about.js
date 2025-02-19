function about(){
    const text = document.createElement("p");
    text.innerHTML = `
    <main>
        <section>
            <h2>Our Story</h2>
            <p>Epicurean Delight was founded with a passion for exquisite cuisine and a commitment to exceptional hospitality. Our chefs blend traditional techniques with modern innovation to create unforgettable dishes.</p>
        </section>
        <section>
            <h2>Our Team</h2>
            <p>Our talented team of culinary experts and dedicated staff work together to ensure that every visit to Epicurean Delight is a memorable one.</p>
        </section>
    </main>`;
    document.querySelector("#content").appendChild(text);
}
export default about;
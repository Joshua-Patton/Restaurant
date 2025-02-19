function menu(){
    const text = document.createElement("p");
    text.innerHTML = `
        <main>
        <section>
            <h2>Appetizers</h2>
            <ul>
                <li><strong>Garlic Bread:</strong> Crusty bread with garlic butter and herbs</li>
                <li><strong>Bruschetta:</strong> Toasted bread topped with fresh tomatoes, basil, and mozzarella</li>
            </ul>
        </section>
        <section>
            <h2>Main Courses</h2>
            <ul>
                <li><strong>Grilled Salmon:</strong> Fresh salmon fillet served with lemon dill sauce</li>
                <li><strong>Filet Mignon:</strong> Premium beef tenderloin with a red wine reduction</li>
                <li><strong>Vegetarian Pasta:</strong> Seasonal vegetables tossed with olive oil and garlic</li>
            </ul>
        </section>
        <section>
            <h2>Desserts</h2>
            <ul>
                <li><strong>Chocolate Lava Cake:</strong> Warm chocolate cake with a gooey center</li>
                <li><strong>Cheesecake:</strong> Classic cheesecake with a berry compote</li>
            </ul>
        </section>`;
    document.querySelector("#content").appendChild(text);
}
export default menu;
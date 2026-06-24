export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        if (url.pathname === "/register" && request.method === "POST") {
            const { username, email, password } = await request.json();
            const hash = await hashPassword(password);

            await env.DB.prepare(
                "INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)"
            ).bind(username, email, hash).run();

            return new Response("User registered successfully");
        }

        if (url.pathname === "/login" && request.method === "POST") {
            const { email, password } = await request.json();
            const user = await env.DB.prepare(
                "SELECT * FROM users WHERE email = ?"
            ).bind(email).first();

            if (user && await verifyPassword(password, user.password_hash)) {
                return new Response("Login successful");
            }
            return new Response("Invalid credentials", { status: 401 });
        }
    }
};
const toggle = document.getElementById("chat-toggle");
const container = document.getElementById("chat-container");

toggle.addEventListener("click", () => {
    container.style.display = container.style.display === "flex" ? "none" : "flex";
});

if (url.pathname === "/chat" && request.method === "POST") {
    const { message } = await request.json();

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${env.OPENAI_API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }]
        })
    });

    const data = await response.json();
    const reply = data.choices[0].message.content;

    return new Response(JSON.stringify({ reply }), {
        headers: { "Content-Type": "application/json" }
    });
}

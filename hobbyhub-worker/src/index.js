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


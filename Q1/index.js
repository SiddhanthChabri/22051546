import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const BASE = "http://20.244.56.144/evaluation-service";
const BASE_URL = `${BASE}/posts`;
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNjAzNzMyLCJpYXQiOjE3NDM2MDM0MzIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImMyMzM4MTM2LWI0NzktNGQ0NS04NjcxLTA1N2EyMWUyNmJjNSIsInN1YiI6IjIyMDUxNTQ2QGtpaXQuYWMuaW4ifSwiZW1haWwiOiIyMjA1MTU0NkBraWl0LmFjLmluIiwibmFtZSI6InNpZGRoYW50aCBjaGFicmkiLCJyb2xsTm8iOiIyMjA1MTU0NiIsImFjY2Vzc0NvZGUiOiJud3B3cloiLCJjbGllbnRJRCI6ImMyMzM4MTM2LWI0NzktNGQ0NS04NjcxLTA1N2EyMWUyNmJjNSIsImNsaWVudFNlY3JldCI6Im5nYWNCY0FuUFF2UmNteWcifQ.g7vXTmDcLQ-UMnxCPiohVg3xPDFFWTN--o3ihZ_s5Ig"; 

// Middleware
app.use(express.json());

// Function to get headers
const getHeaders = () => ({
    "Authorization": `Bearer ${ACCESS_TOKEN}`,
    "Content-Type": "application/json"
});

// Get Top 5 Users with Most Posts
app.get("/users", async (req, res) => {
    try {
        console.log("Fetching users...");
        const usersResponse = await axios.get(`${BASE}/users`, { headers: getHeaders() });

        if (!usersResponse.data || !usersResponse.data.users) {
            console.error("No users found:", usersResponse.data);
            return res.status(500).json({ error: "No users data received" });
        }

        // Extract users object
        const users = usersResponse.data.users; 
        console.log("Users received:", users);

        // Return users in the expected format
        res.json({ users });

    } catch (error) {
        console.error("Error fetching users:", error.response?.data || error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



// Get Posts (Latest or Popular)
app.get("/users/:userid/posts", async (req, res) => {
    try {
        const userId = req.params.userid;
        console.log(`Fetching posts for user ID: ${userId}...`);

        const response = await axios.get(`${BASE}/users/${userId}/posts`, { headers: getHeaders() });

        if (!response.data || !Array.isArray(response.data.posts)) {
            console.error("No posts found:", response.data);
            return res.status(404).json({ error: "No posts found for this user" });
        }

        console.log("Posts Retrieved:", response.data.posts);

        res.json({ posts: response.data.posts });
    } catch (error) {
        console.error(`Error fetching posts for user ${req.params.userid}:`, error.response?.data || error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/posts/:postid/comments", async (req, res) => {
    try {
        const postId = req.params.postid;
        console.log(`Fetching comments for post ID: ${postId}...`);

        const response = await axios.get(`${BASE}/posts/${postId}/comments`, { headers: getHeaders() });

        if (!response.data || !Array.isArray(response.data.comments)) {
            console.error("No comments found:", response.data);
            return res.status(404).json({ error: "No comments found for this post" });
        }

        console.log("Comments Retrieved:", response.data.comments);

        res.json({ comments: response.data.comments });
    } catch (error) {
        console.error(`Error fetching comments for post ${req.params.postid}:`, error.response?.data || error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


// Starting the Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

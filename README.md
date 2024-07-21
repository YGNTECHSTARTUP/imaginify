<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Imaginify README</title>
</head>
<body>
    <h1>Imaginify</h1>
    <p>Imaginify is a web application that leverages AI to generate images based on user prompts. It uses Hugging Face models for AI image generation and Clerk for user authentication.</p>

    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#tech-stack">Tech Stack</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#environment-variables">Environment Variables</a></li>
        <li><a href="#contributing">Contributing</a></li>
        <li><a href="#license">License</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>

    <h2 id="features">Features</h2>
    <ul>
        <li>User authentication with Clerk</li>
        <li>AI-powered image generation using Hugging Face models</li>
        <li>Interactive chat interface for prompt input</li>
        <li>Responsive design with Tailwind CSS</li>
    </ul>

    <h2 id="tech-stack">Tech Stack</h2>
    <ul>
        <li><strong>Frontend</strong>: Next.js, React</li>
        <li><strong>Styling</strong>: Tailwind CSS</li>
        <li><strong>Authentication</strong>: Clerk</li>
        <li><strong>AI Integration</strong>: Hugging Face</li>
        <li><strong>Deployment</strong>: Vercel</li>
    </ul>

    <h2 id="installation">Installation</h2>
    <p>To run the project locally, follow these steps:</p>
    <ol>
        <li><strong>Clone the repository</strong>:
            <pre><code>git clone https://github.com/YGNTECHSTARTUP/imaginify.git
cd imaginify
            </code></pre>
        </li>
        <li><strong>Install dependencies</strong>:
            <pre><code>npm install
            </code></pre>
        </li>
        <li><strong>Set up environment variables</strong>:
            <p>Create a <code>.env.local</code> file in the root directory and add the necessary environment variables (see <a href="#environment-variables">Environment Variables</a>).</p>
        </li>
        <li><strong>Run the development server</strong>:
            <pre><code>npm run dev
            </code></pre>
            <p>Open <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> to view it in the browser.</p>
        </li>
    </ol>

    <h2 id="usage">Usage</h2>
    <ol>
        <li><strong>Sign up / Log in</strong>:
            <p>Use the Clerk-powered authentication to sign up or log in.</p>
        </li>
        <li><strong>Generate Images</strong>:
            <p>Enter a prompt in the chat interface to generate an image using the Hugging Face model.</p>
        </li>
    </ol>

    <h2 id="environment-variables">Environment Variables</h2>
    <p>The following environment variables need to be set up in your <code>.env.local</code> file:</p>
    <pre><code>
NEXT_PUBLIC_CLERK_FRONTEND_API=&lt;your-clerk-frontend-api&gt;
CLERK_API_KEY=&lt;your-clerk-api-key&gt;
NEXT_PUBLIC_HUGGING_FACE_API_KEY=&lt;your-hugging-face-api-key&gt;
    </code></pre>

    <h2 id="contributing">Contributing</h2>
    <p>Contributions are welcome! Follow these steps to contribute:</p>
    <ol>
        <li>Fork the repository.</li>
        <li>Create a new branch (<code>git checkout -b feature/your-feature-name</code>).</li>
        <li>Make your changes.</li>
        <li>Commit your changes (<code>git commit -m 'Add some feature'</code>).</li>
        <li>Push to the branch (<code>git push origin feature/your-feature-name</code>).</li>
        <li>Open a pull request.</li>
    </ol>

    <h2 id="license">License</h2>
    <p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for more information.</p>

    <h2 id="contact">Contact</h2>
    <ul>
        <li><strong>Portfolio</strong>: <a href="https://ygntech.vercel.app/" target="_blank">ygntech.vercel.app</a></li>
        <li><strong>Project</strong>: <a href="https://ygn-imaginify.vercel.app/" target="_blank">ygn-imaginify.vercel.app</a></li>
        <li><strong>GitHub</strong>: <a href="https://github.com/YGNTECHSTARTUP/imaginify/" target="_blank">github.com/YGNTECHSTARTUP/imaginify</a></li>
    </ul>
</body>
</html>

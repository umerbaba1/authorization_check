
<html lang="en">
<body>
  <h1>User Authentication API</h1>
  <p>A simple Node.js and Express API for user authentication.</p>

  <h2>Features</h2>
  <ul>
    <li><strong>User Signup</strong>: Register a new user with a username and password.</li>
    <li><strong>User Signin</strong>: Log in and receive a session token.</li>
    <li><strong>User Profile</strong>: Access user info with a valid token.</li>
  </ul>

  <h2>Getting Started</h2>
  <p>Follow these steps to set up the API:</p>
  <ol>
    <li><strong>Clone the Repository</strong>
      <pre><code>git clone https://github.com/your-repo-name.git
cd your-repo-name</code></pre>
    </li>
    <li><strong>Install Dependencies</strong>
      <pre><code>npm install</code></pre>
    </li>
    <li><strong>Run the Server</strong>
      <pre><code>node app.js</code></pre>
    </li>
  </ol>

  <h2>API Endpoints</h2>

  <h3>1. Signup</h3>
  <p><strong>POST</strong> <code>/signup</code></p>
  <ul>
    <li><strong>Body Parameters</strong>: 
      <ul>
        <li><code>username</code>: <code>string</code></li>
        <li><code>password</code>: <code>string</code></li>
      </ul>
    </li>
    <li><strong>Description</strong>: Registers a new user.</li>
  </ul>

  <h3>2. Signin</h3>
  <p><strong>POST</strong> <code>/signin</code></p>
  <ul>
    <li><strong>Body Parameters</strong>: 
      <ul>
        <li><code>username</code>: <code>string</code></li>
        <li><code>password</code>: <code>string</code></li>
      </ul>
    </li>
    <li><strong>Description</strong>: Logs in a user and returns a session token.</li>
  </ul>

  <h3>3. Profile Access</h3>
  <p><strong>GET</strong> <code>/me</code></p>
  <ul>
    <li><strong>Headers</strong>: 
      <ul>
        <li><code>token</code>: <code>string</code></li>
      </ul>
    </li>
    <li><strong>Description</strong>: Returns the username and password if the token is valid.</li>
  </ul>

  <h2>Future Improvements</h2>
  <p><strong>JWT Integration</strong>: Future versions will use JSON Web Tokens (JWT) for secure, standard token handling.</p>
</body>
</html>

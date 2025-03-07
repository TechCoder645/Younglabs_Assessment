# Younglabs_Assessment

# Express.js Greeting API

This project is a simple Express.js API that returns a greeting message including your name.

## Modified Response Message

The response message in the `/api/greet` endpoint has been updated to include your name: **From Shashi Bhushan**.

## Running the Project

### Start the Backend Server

1. Open your terminal.
2. Navigate to your project directory:
   ```sh
   cd /path/to/your/project
   cd backend
   ```
3. Start the server:
   ```sh
   nodemon app.js
   ```
   or, if using `nodemon` for automatic restarts:
   ```sh
    nodemon app.js
   ```

### Open the Webpage

1. Open your web browser.
2. Navigate to:
   ```
   http://localhost:3000
   ```

## Testing the Functionality

1. Enter your name in the input field.
2. Click the **"Get Greeting"** button.
3. The greeting message should be displayed on the page, including your name.

## Testing the API Endpoint Directly

You can test the `/api/greet` endpoint using a web browser, Postman, or cURL.

### Using a Web Browser

1. Open your web browser.
2. Navigate to the following URL, replacing `YourName` with your actual name:
   ```
   http://localhost:3000/api/greet?name=YourName
   ```
3. You should see a JSON response with a greeting message.

### Using Postman

1. Open Postman.
2. Create a new **GET** request.
3. Enter the following URL, replacing `YourName` with your actual name:
   ```
   http://localhost:3000/api/greet?name=YourName
   ```
4. Click the **"Send"** button.
5. You should see a JSON response with a greeting message.

### Using cURL

1. Open your terminal or command prompt.
2. Run the following command, replacing `YourName` with your actual name:
   ```sh
   curl "http://localhost:3000/api/greet?name=YourName"
   ```
3. You should see a JSON response with a greeting message.

## Git Setup

To initialize and push the project to GitHub, follow these steps:

### Initialize Git Repository

```sh
 git init
 git add .
 git commit -m "Initial commit"
```

### Add Remote Repository

Replace `your-repo-url` with your actual GitHub repository URL:

```sh
 git remote add origin your-repo-url
```

### Push the Project to GitHub

```sh
 git branch -M main
 git push -u origin main
```

### Save the README File

Save the above content in a file named `README.md` in the root directory of your project.

### Commit and Push the Changes

1. **Add the changes**:
   ```sh
   git add README.md
   ```



## Conclusion

By following these steps, you should be able to run your Express server, test the `/api/greet` endpoint successfully, and push your project to GitHub.

## Output

### 1️⃣ API Response in Postman
Below is a screenshot of the API response when tested in Postman:

![Postman Response](screenshots/postman_response.png)

---

### 2️⃣ Frontend UI Output
Here’s how the greeting appears on the webpage:

![Webpage Output](screenshots/webpage_output.png)

---

### 3️⃣ Browser API Request
When tested in the browser:

![Browser API Response](screenshots/browser_response.png)

---

## 🎉 Project Successfully Working!
Everything is working correctly. Now, you can **deploy the project on Vercel or Render** and update the README with the **live demo link**.



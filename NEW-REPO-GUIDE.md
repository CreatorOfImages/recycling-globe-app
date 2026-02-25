# Push This Project to a New GitHub Repository

Follow these steps to create a **new** GitHub repo and push this code there (no merge conflicts).

---

## Step 1: Create a new repo on GitHub (empty)

1. Go to **https://github.com** and log in as **CreatorOfImages**.
2. Click the **+** (top right) → **New repository**.
3. Set:
   - **Repository name:** e.g. `recycling-globe-app` (or any name you like).
   - **Public** or **Private** — your choice.
   - **Leave unchecked:** “Add a README file,” “Add .gitignore,” “Choose a license” (we already have code and want an empty repo).
4. Click **Create repository**.

---

## Step 2: Point this project at the new repo

In Terminal, from this project folder, run (replace `YOUR-NEW-REPO-NAME` with the name you used in Step 1):

```bash
cd "/Users/adamb/Documents/cursor projects/StateFarm Project"
git remote set-url origin https://github.com/CreatorOfImages/YOUR-NEW-REPO-NAME.git
```

Example: if the new repo is `recycling-globe-app`:

```bash
git remote set-url origin https://github.com/CreatorOfImages/recycling-globe-app.git
```

---

## Step 3: Push your code

```bash
git push -u origin main
```

Use your GitHub username and **Personal Access Token** if prompted. Your code will be on the new repo only.

---

## Check the remote (optional)

To see which repo `origin` points to:

```bash
git remote -v
```

You should see your new repository URL.

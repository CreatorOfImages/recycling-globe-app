# Push to GitHub – Step-by-Step Guide

Your Git is already set up correctly for **CreatorOfImages/Recycling-App**. The only thing that can fail is **authentication**. Private repos work the same as public for pushing—you just must be logged in.

---

## 1. What’s Already Correct

| Setting        | Your value                                      | Status   |
|----------------|--------------------------------------------------|----------|
| Remote         | `https://github.com/CreatorOfImages/Recycling-App.git` | Correct  |
| Git user.name  | CreatorOfImages                                 | Correct  |
| Git user.email | adambelhareth.121@gmail.com                      | Correct  |
| Credential helper | osxkeychain (macOS)                           | Correct  |

You do **not** need to change these for pushing.

---

## 2. Why Push Fails

GitHub no longer accepts your **account password** over HTTPS. You must use a **Personal Access Token (PAT)** instead. Think of it as a special app password that Git uses to prove it’s you.

---

## 3. Create a Personal Access Token (PAT)

### Step 3.1 – Open GitHub token settings

1. In a browser, go to: **https://github.com**
2. Log in as **CreatorOfImages**.
3. Click your **profile picture** (top right) → **Settings**.
4. In the left sidebar, scroll to the very bottom → click **Developer settings**.
5. Click **Personal access tokens** → **Tokens (classic)**.  
   (If you see “Fine-grained tokens,” use “Tokens (classic)” for simplicity.)

### Step 3.2 – Generate a new token

1. Click **Generate new token** → **Generate new token (classic)**.
2. GitHub may ask for your password; enter it.
3. Fill in:
   - **Note:** e.g. `Recycling-App push from Mac`
   - **Expiration:** e.g. **90 days** or **No expiration** (your choice).
   - **Scopes:** Enable **only**:
     - **repo** (full control of private repositories)  
       – This one checkbox is enough for push/pull to your repo.
4. Scroll down and click **Generate token**.

### Step 3.3 – Copy the token immediately

- You’ll see a token that starts with `ghp_...`.
- **Copy it now.** You won’t be able to see it again.
- Store it somewhere safe (e.g. password manager). You’ll paste it once when you push; macOS Keychain can remember it after that.

**Permissions summary:** For your own private repo, the only scope you need is **repo**.

---

## 4. Push Your Code (Terminal)

### Step 4.1 – Open Terminal

- On Mac: **Terminal** app, or in Cursor use the integrated terminal (**View → Terminal** or backtick `` ` ``).

### Step 4.2 – Go to your project folder

```bash
cd "/Users/adamb/Documents/cursor projects/StateFarm Project"
```

### Step 4.3 – Push to GitHub

Run:

```bash
git push -u origin main
```

When prompted:

1. **Username for 'https://github.com':** type **CreatorOfImages** and press Enter.
2. **Password for 'https://CreatorOfImages@github.com':** **paste your PAT** (the `ghp_...` token), then press Enter.  
   (Nothing will appear as you paste—that’s normal.)

If you’re on macOS and use the default credential helper, the **first** successful push can store the token in Keychain so you may not be asked again next time.

---

## 5. If It Still Fails

### “Authentication failed” or “Bad credentials”

- Double-check: **Username** = `CreatorOfImages` (exact spelling/caps).
- **Password** = the **token** (`ghp_...`), not your GitHub account password.
- Make sure the **repo** scope was selected when you created the token.

### “Repository not found” or 404

- Confirm the repo exists: **https://github.com/CreatorOfImages/Recycling-App**
- Confirm you’re logged into GitHub in the browser as **CreatorOfImages** and that you own this repo (or have write access).

### Clear stored credentials and try again

If an old wrong password is cached:

1. Open **Keychain Access** (Mac).
2. Search for **github.com**.
3. Delete the “github.com” entry (or edit it and replace the password with your new PAT).
4. Run `git push -u origin main` again and enter **CreatorOfImages** and the new token when asked.

---

## 6. Optional: Use SSH Instead of HTTPS

If you prefer not to use a token over HTTPS, you can use SSH:

1. [Add an SSH key to your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).
2. In your project folder, run:
   ```bash
   git remote set-url origin git@github.com:CreatorOfImages/Recycling-App.git
   git push -u origin main
   ```
   With SSH, you use your SSH key (and passphrase, if any) instead of a PAT.

---

## Quick Checklist

- [ ] Logged into GitHub in the browser as **CreatorOfImages**
- [ ] Created a **Personal Access Token (classic)** with **repo** scope
- [ ] Copied the token (`ghp_...`) and kept it somewhere safe
- [ ] Opened Terminal and ran `cd "/Users/adamb/Documents/cursor projects/StateFarm Project"`
- [ ] Ran `git push -u origin main`
- [ ] Entered **CreatorOfImages** as username
- [ ] Pasted the **token** as the password (not account password)

After a successful push, your code will be at: **https://github.com/CreatorOfImages/Recycling-App**

---

## 7. If Push Says "rejected" or "behind remote"

This means GitHub has commits (e.g. a README created when you made the repo) that your laptop doesn’t have. Merge them in, then push:

```bash
cd "/Users/adamb/Documents/cursor projects/StateFarm Project"
git pull origin main --no-edit
```

- If that works, then run: **`git push -u origin main`** and you’re done.
- If Git says **"refusing to merge unrelated histories"**, run instead:
  ```bash
  git pull origin main --allow-unrelated-histories --no-edit
  ```
  Then run **`git push -u origin main`**. Your app and GitHub’s README will both be in the repo.

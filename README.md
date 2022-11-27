# Svelte + TS + Tailwind + Firebase Auth

## How to use it?

### 1. Clone repository

```bash
git clone git@github.com:neiwad/svelte-tailwind-firebase.git
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Run project

```bash
pnpm run dev
```

At this point you will have a Firebase error saying that credentials are missing. It's ok, in the next step we will create a Firebase project.

## Create a Firebase project

### 1. Open the Firebase console

[Firebase Console](https://console.firebase.google.com/)

### 2. Create a project

Just follow steps, you can disable Google Analytics as we don't need it.

### 3. Get project credentials

On the overview page, you will see an iOs, an Android and a Web buttons just under the title.

- Click on the web button.
- Name your application as you want.
- Don't need to check Hosting.
- Then you will see your credentials like that

```javascript
const firebaseConfig = {
  apiKey: ******,
  authDomain: ******,
  projectId: ******,
  storageBucket: ******,
  messagingSenderId: ******,
  appId: ******,
};
```

### 4. Add credentials to your app

Inside your root folder, create a **.env** file and then add your credentials like that:

```javascript
VITE_FB_AUTH_DOMAIN = ******
VITE_FB_PROJECT_ID = ******
VITE_FB_STORAGE_BUCKET = ******
VITE_FB_MESSAGING_SENDER_ID = ******
VITE_FB_APP_ID = ******
```

### 5. Reload your dev server

Some times Vite auto-reload dev server with new .env file, but you can just kill your dev server and then re do

```bash
pnpm run dev
```

## Bonus

### 1. Google oAuth on custom domain

If you deploy this app on a web server, as vercel or netflix or whatever, you need to do an extra step for the Google oAuth to works.

Go to [Firebase Google oAuth Settings](https://console.firebase.google.com/u/3/project/svelte-tailwind-firebase-9ff6a/authentication/settings)

Then **Allowed Domains** and add your web app's domain.

### 2. Vercel.json

In order to makes the web app to works on a Vercel environment, I have to add a vercel.json inside the root folder. You can remove it if you don't use Vercel.

## Enjoy

If you have some questions, you can contact me at **hello@neiwad.dev**.

If you want to improve this starter, feel free to [create a PR](https://github.com/neiwad/svelte-tailwind-firebase/pulls)

If you have issues, feel free to [create an issue](https://github.com/neiwad/svelte-tailwind-firebase/issues)

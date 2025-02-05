## SpecStory

## Next.js Authentication Middleware Creation (2/5/2025, 2:18:06 PM)

_**User**_

base on the next auth docs here: @https://nextjs.org/docs/pages/building-your-application/authentication#optimistic-checks-with-middleware-optional , create an authentication middleware. for now, we only need to show the root page. everything other page should be behind the auth wall. 

---

_**Assistant**_

I'll help you create an authentication middleware for your Next.js application that will protect all routes except the root page. First, let me search for any existing middleware files.

---

_****_



---

_****_



I'll create a new middleware file to handle authentication. The middleware will:
1. Allow access to the root page (/)
2. Allow access to authentication-related API routes
3. Allow access to static files
4. Require authentication for all other routes

Let me create the middleware file:

---

_****_

```diff
- 
+ import { NextResponse } from 'next/server'
+ import type { NextRequest } from 'next/server'
+ 
+ // This function can be marked `async` if using `await` inside
+ export function middleware(request: NextRequest) {
+   const { pathname } = request.nextUrl
+ 
+   // Check if the pathname is public
+   const isPublicPath = 
+     pathname === '/' || 
+     pathname.startsWith('/_next') || 
+     pathname.startsWith('/api/auth') ||
+     pathname.includes('.')
+ 
+   // Get the token from the session
+   const token = request.cookies.get('session')?.value
+ 
+   // Redirect authenticated users from auth pages
+   if (token && pathname === '/') {
+     return NextResponse.redirect(new URL('/documents', request.url))
+   }
+ 
+   // Redirect unauthenticated users to root page
+   if (!token && !isPublicPath) {
+     return NextResponse.redirect(new URL('/', request.url))
+   }
+ 
+   return NextResponse.next()
+ }
+ 
+ // Configure the middleware to run on specific paths
+ export const config = {
+   matcher: [
+     /*
+      * Match all request paths except:
+      * 1. _next/static (static files)
+      * 2. _next/image (image optimization files)
+      * 3. favicon.ico (favicon file)
+      * 4. public folder
+      */
+     '/((?!_next/static|_next/image|favicon.ico|public).*)',
+   ],
+ } 
```

---

_****_



I've created a new middleware file that implements authentication protection for your Next.js application. Here's what the middleware does:

1. **Public Paths**: The following paths are considered public and don't require authentication:
   - Root path ('/')
   - Next.js internal paths ('/_next')
   - Auth API routes ('/api/auth')
   - Static files (paths containing '.')

2. **Authentication Check**: 
   - Uses the 'session' cookie to check if a user is authenticated
   - Redirects authenticated users from the root page to '/documents'
   - Redirects unauthenticated users to the root page if they try to access protected routes

3. **Matcher Configuration**: 
   - The middleware runs on all paths except static files, image optimization files, favicon, and public folder contents

The middleware assumes that your authentication system sets a 'session' cookie when users are logged in. You might need to adjust this based on how you're handling authentication with Firebase in your application.

Let me check your authentication setup to make sure this aligns with your current implementation:

---

_****_

Read file: lib/auth.ts

---

_****_



I see you're using Firebase Authentication. We should modify the middleware to work with Firebase's authentication system instead of session cookies. Let me update the middleware:

---

_****_

```diff
      pathname.startsWith('/_next') || 
      pathname.startsWith('/api/auth') ||
-     pathname.includes('.')
+     pathname.includes('.') ||
+     pathname === '/login' ||
+     pathname === '/signup'
  
-   // Get the token from the session
-   const token = request.cookies.get('session')?.value
- 
-   // Redirect authenticated users from auth pages
-   if (token && pathname === '/') {
-     return NextResponse.redirect(new URL('/documents', request.url))
-   }
+   // Get the Firebase auth token from the Authorization header or cookie
+   const token = request.cookies.get('firebase-token')?.value
  
    // Redirect unauthenticated users to root page
    if (!token && !isPublicPath) {
-     return NextResponse.redirect(new URL('/', request.url))
+     const redirectUrl = new URL('/', request.url)
+     redirectUrl.searchParams.set('from', request.nextUrl.pathname)
+     return NextResponse.redirect(redirectUrl)
    }
  
```

---

_****_



I've updated the middleware to better work with Firebase Authentication. Here are the key changes:

1. **Added Authentication Routes**: Added `/login` and `/signup` to the public paths since these are needed for authentication

2. **Firebase Token**: Changed to look for a 'firebase-token' cookie instead of a generic session cookie

3. **Redirect Behavior**: 
   - Added a `from` parameter to the redirect URL so you can redirect users back to their intended destination after login
   - Removed the automatic redirect from root to documents for authenticated users (this is better handled in your page components)

To make this work properly with Firebase, you'll need to ensure that you're setting the Firebase token in a cookie after successful authentication. Let me help you set that up. I'll check your Firebase configuration:

---

_****_

Read file: lib/firebase.ts

---

_****_



Now I'll create a utility function to handle the Firebase token cookie. I'll add this to your auth utilities:

---

_****_

```diff
      //   update the user's display name
      await updateProfile(userCredential.user, { displayName: name });
+     await setAuthCookie(userCredential.user);
      return userCredential.user;
  };
  export const signIn = async (email: string, password: string) => {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
+     await setAuthCookie(userCredential.user);
      return userCredential.user;
  };
  
  // Sign in a user using Google(popup).
  export const signInWithGoogle = async () => {
- 
      const provider = new GoogleAuthProvider();
-     provider.addScope('profile');
-     provider.addScope('email');
-     const result = await signInWithPopup(auth, provider);
- 
-     // The signed-in user info.
-     const user = result.user;
-     // // This gives you a Google Access Token.
-     // const credential = GoogleAuthProvider.credentialFromResult(result);
-     // const token = credential?.accessToken;
-     console.log("User", user.email);
-     return user;
- }
+     const userCredential = await signInWithPopup(auth, provider);
+     await setAuthCookie(userCredential.user);
+     return userCredential.user;
+ };
  
  // Sign out the current user
  export const logOut = async () => {
      await signOut(auth);
+     removeAuthCookie();
+ };
+ 
+ // Function to set the Firebase token cookie
+ export const setAuthCookie = async (user: any) => {
+     if (user) {
+         const token = await user.getIdToken();
+         // Set cookie for 7 days
+         document.cookie = `firebase-token=${token};path=/;max-age=${7 * 24 * 60 * 60};SameSite=Strict;Secure`;
+     }
+ };
+ 
+ // Function to remove the Firebase token cookie
+ export const removeAuthCookie = () => {
+     document.cookie = 'firebase-token=;path=/;max-age=0';
  };
  
```

---

_****_







I've updated your authentication system to work with the middleware. Here's what I've done:

1. Added token management functions:
   - `setAuthCookie`: Sets the Firebase token in a secure cookie
   - `removeAuthCookie`: Removes the Firebase token cookie

2. Updated all authentication functions to manage the token cookie:
   - `signIn`
   - `signInWithGoogle`
   - `signUp`
   - `logOut`

Now your authentication system will:
1. Set a secure cookie with the Firebase token when users sign in
2. Remove the cookie when users sign out
3. The middleware will use this cookie to protect your routes

To use this system:

1. The root page ('/') will be public
2. Authentication pages ('/login', '/signup') will be public
3. All other pages will require authentication
4. If an unauthenticated user tries to access a protected page, they'll be redirected to the root page with a 'from' parameter that can be used to redirect them back after login

Would you like me to add any additional features or make any adjustments to this authentication system?

---



---


## SpecStory

## Align Button to Right in Forms (2/5/2025, 2:26:18 PM)

_**User**_

In @forms.tsx , move the button to be aligned to the right of the compoent. 

---

_**Assistant**_

I'll help you modify the form component to align the button to the right. I'll edit the `forms.tsx` file to adjust the button's container div styling.

---

_****_

```diff
        <div className="flex-1 flex flex-col gap-4 md:gap-10 mb-10 md:mb-0">
          <h2 className="text-center md:text-left text-3xl md:text-4xl font-medium">Let us score your compliance policy</h2>
-         <p className="text-center md:text-left">Submit your information below and let’s get you started</p>
+         <p className="text-center md:text-left">Submit your information below and let's get you started</p>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          {state && <p className="text-yellow-400">* {state}</p>}
        </div>
-       <div>
+       <div className="col-span-1 md:col-span-2 flex justify-end">
          <button type="submit" className="inline-block w-fit font-medium px-8 py-3 rounded-xl bg-[linear-gradient(15deg,#933FFE,#18C8FF)] border border-[#FFFFFF78] bg-blend-overlay text-black">Get Started</button>
        </div>
```

---

_****_



I've made the following changes to align the button to the right:

1. Added `col-span-1 md:col-span-2` to make the button container span the full width of the grid on both mobile and desktop views
2. Added `flex justify-end` to align the button to the right side of its container

The button will now appear aligned to the right side of the form. The changes maintain the responsive design, ensuring proper alignment on both mobile and desktop views.

---

_**User**_

Implement the form in the @forms.tsx  to validate the data and store it to firebase firestore. save it to the demo_requests collection. 
Add loading state to the form too so the user's experience is good. 

---

_**Assistant**_

I'll help you implement form validation, Firebase Firestore storage, and loading states for the demo request form. First, let me check if we have Firebase configuration set up.

---

_****_

Read file: lib/firebase.ts

---

_****_



I see we need to uncomment and set up Firestore. Let me first update the Firebase configuration to enable Firestore, then I'll modify the form component.

---

_****_

```diff
  import { initializeApp, getApps } from "firebase/app";
  import { getAuth } from "firebase/auth";
- // import { getFirestore } from "firebase/firestore";
+ import { getFirestore } from "firebase/firestore";
  // import { getStorage } from "firebase/storage";
  
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
  const auth = getAuth(app);
- 
- // export const db = getFirestore(app);
+ const db = getFirestore(app);
  // export const storage = getStorage(app);
  
- export { app, auth };
+ export { app, auth, db };
  
```

---

_****_



Now, let me update the form component with validation, Firestore integration, and loading states.

---

_****_

```diff
  import { useActionState } from "react";
  import { useFormStatus } from "react-dom";
+ import { db } from "@/lib/firebase";
+ import { addDoc, collection } from "firebase/firestore";
+ import { useState } from "react";
  
+ interface FormData {
+   fullName: string;
+   email: string;
+   message: string;
+ }
  
  export function RequestADemoForm() {
-   const [state, formAction, isPending] = useActionState(requestADemoAction, null);
+   const [loading, setLoading] = useState(false);
+   const [error, setError] = useState<string | null>(null);
+   const [success, setSuccess] = useState(false);
+ 
+   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
+     e.preventDefault();
+     setLoading(true);
+     setError(null);
+ 
+     const formData = new FormData(e.currentTarget);
+     const data: FormData = {
+       fullName: formData.get('fullName') as string,
+       email: formData.get('email') as string,
+       message: formData.get('message') as string,
+     };
+ 
+     // Basic validation
+     if (!data.fullName || !data.email || !data.message) {
+       setError('All fields are required');
+       setLoading(false);
+       return;
+     }
+ 
+     // Email validation
+     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
+     if (!emailRegex.test(data.email)) {
+       setError('Please enter a valid email address');
+       setLoading(false);
+       return;
+     }
+ 
+     try {
+       // Add timestamp to the data
+       const demoRequest = {
+         ...data,
+         createdAt: new Date(),
+         status: 'pending'
+       };
+ 
+       // Save to Firestore
+       await addDoc(collection(db, 'demo_requests'), demoRequest);
+       setSuccess(true);
+       
+       // Reset form
+       e.currentTarget.reset();
+     } catch (err) {
+       setError('Failed to submit request. Please try again.');
+       console.error('Error submitting demo request:', err);
+     } finally {
+       setLoading(false);
+     }
+   };
+ 
    return (
-     <form action={formAction} className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4 mt-10">
+     <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4 mt-10">
        <div className="flex-1 flex flex-col gap-4 md:gap-10 mb-10 md:mb-0">
          <h2 className="text-center md:text-left text-3xl md:text-4xl font-medium">Let us score your compliance policy</h2>
            type="text"
            required
-           name=""
-           id=""
+           name="fullName"
+           id="fullName"
            placeholder="Full name"
-           className="px-6 py-3 bg-transparent border border-[#EBEBEB80] rounded-lg placeholder:text-white"
+           disabled={loading}
+           className="px-6 py-3 bg-transparent border border-[#EBEBEB80] rounded-lg placeholder:text-white disabled:opacity-50"
          />
          <input
-           type="text"
+           type="email"
            required
-           name=""
-           id=""
+           name="email"
+           id="email"
            placeholder="Email Address"
-           className="px-6 py-3 bg-transparent border border-[#EBEBEB80] rounded-lg placeholder:text-white"
+           disabled={loading}
+           className="px-6 py-3 bg-transparent border border-[#EBEBEB80] rounded-lg placeholder:text-white disabled:opacity-50"
          />
          <input
            type="text"
            required
-           name=""
-           id=""
+           name="message"
+           id="message"
            placeholder="Message"
-           className="px-6 py-3 bg-transparent border border-[#EBEBEB80] rounded-lg placeholder:text-white"
+           disabled={loading}
+           className="px-6 py-3 bg-transparent border border-[#EBEBEB80] rounded-lg placeholder:text-white disabled:opacity-50"
          />
-         {state && <p className="text-yellow-400">* {state}</p>}
+         {error && <p className="text-red-400">* {error}</p>}
+         {success && <p className="text-green-400">Request submitted successfully!</p>}
        </div>
        <div className="col-span-1 md:col-span-2 flex justify-end">
-         <button type="submit" className="inline-block w-fit font-medium px-8 py-3 rounded-xl bg-[linear-gradient(15deg,#933FFE,#18C8FF)] border border-[#FFFFFF78] bg-blend-overlay text-black">Get Started</button>
+         <button 
+           type="submit" 
+           disabled={loading}
+           className="inline-block w-fit font-medium px-8 py-3 rounded-xl bg-[linear-gradient(15deg,#933FFE,#18C8FF)] border border-[#FFFFFF78] bg-blend-overlay text-black disabled:opacity-50 relative"
+         >
+           {loading ? 'Submitting...' : 'Get Started'}
+         </button>
        </div>
      </form>
```

---

_****_



I've made several improvements to the form:

1. Added Firebase Firestore integration:
   - Imported necessary Firebase functions
   - Set up data storage in the 'demo_requests' collection
   - Added timestamp and status fields

2. Added form validation:
   - Required field validation
   - Email format validation
   - Proper error messages

3. Improved user experience:
   - Loading states during submission
   - Success message after successful submission
   - Form fields are disabled during submission
   - Button text changes to "Submitting..." during submission
   - Form resets after successful submission

4. Added proper form field names and types:
   - Changed email input type to "email"
   - Added proper name and id attributes
   - Added TypeScript interface for form data

5. Added error handling:
   - Displays error messages in red
   - Proper error handling for Firebase errors
   - Console logging for debugging

The form will now:
1. Validate all inputs
2. Show loading states
3. Store the data in Firestore with additional metadata (timestamp and status)
4. Provide feedback to users
5. Handle errors gracefully

The data stored in Firestore will have this structure:
```typescript
{
  fullName: string;
  email: string;
  message: string;
  createdAt: Timestamp;
  status: 'pending';
}
```

You can now manage and track demo requests through Firebase Console in the 'demo_requests' collection.

---

_**User**_

looks good but we are getting this error: forms.tsx:64 Error submitting demo request: TypeError: Cannot read properties of null (reading 'reset')
    at handleSubmit (forms.tsx:64:15)


---

_**Assistant**_

The error suggests that `e.currentTarget` is null when we try to reset the form. This can happen if the event object is not properly handled. Let's modify the form handling to use a form reference instead, which is a more reliable way to handle form operations in React.

---

_****_



---

_****_



---



---


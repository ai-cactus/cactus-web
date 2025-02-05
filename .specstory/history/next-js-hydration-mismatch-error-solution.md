## SpecStory

## Next.js Hydration Mismatch Error Solution (2/5/2025, 2:09:40 PM)

_**User**_

running this nextjs project loclaly, I get this error: hook.js:608 A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch `if (typeof window !== 'undefined')`.
- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch

  ...
    <HotReload assetPrefix="">
      <ReactDevOverlay state={{nextId:1, ...}} dispatcher={{...}}>
        <DevRootNotFoundBoundary>
          <NotFoundBoundary notFound={<NotAllowedRootNotFoundError>}>
            <NotFoundErrorBoundary pathname="/" notFound={<NotAllowedRootNotFoundError>} notFoundStyles={undefined} ...>
              <RedirectBoundary>
                <RedirectErrorBoundary router={{...}}>
                  <Head>
                  <link>
                  <RootLayout>
                    <html lang="en">
                      <body
                        className="__variable_1e4310 __variable_c3aa02 antialiased max-w-[1440px] m-auto"
-                       data-new-gr-c-s-check-loaded="14.1220.0"
-                       data-gr-ext-installed=""
                      >
                  ...
        ...

---

_**Assistant**_

```markdown
This error is occurring because Grammarly (or a similar browser extension) is modifying your HTML by adding attributes `data-new-gr-c-s-check-loaded` and `data-gr-ext-installed` to the `body` tag. This causes a hydration mismatch since these attributes don't exist in the server-rendered HTML.

To fix this, you can either:

1. Disable Grammarly for your development environment, or
2. Add these attributes to your body tag in the server-side rendering

Here's how to implement the second option:

```javascript:app/layout.tsx
// ... existing code ...
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="antialiased max-w-[1440px] m-auto"
        suppressHydrationWarning={true}  // Add this line
      >
        {children}
      </body>
    </html>
  );
}
```

Adding `suppressHydrationWarning={true}` to the body tag will prevent React from showing warnings about hydration mismatches for this specific element. This is a safe solution since the Grammarly attributes don't affect your application's functionality.

Note that this warning only appears in development mode and won't affect your production build.
```

---



---


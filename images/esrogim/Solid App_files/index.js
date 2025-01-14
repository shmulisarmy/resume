import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/index.tsx");import.meta.env = {"BASE_URL": "/", "DEV": true, "MODE": "development", "PROD": false, "SSR": false};import { createComponent as _$createComponent } from "/node_modules/.vite/deps/solid-js_web.js?v=7c359356";
import { $$decline as _$$decline } from "/@solid-refresh";
import { render } from "/node_modules/.vite/deps/solid-js_web.js?v=7c359356";
import "/src/index.css";
import App from "/src/App.tsx?t=1736061089914";
const root = document.getElementById("root");
if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error("Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?");
}
const _cleanup = render(() => _$createComponent(App, {}), root);
if (import.meta.hot) import.meta.hot.dispose(_cleanup);
if (import.meta.hot) {
  _$$decline("vite", import.meta.hot);
  import.meta.hot.accept();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7QUFDQSxTQUFTQSxjQUFjO0FBRXZCLE9BQU87QUFDUCxPQUFPQyxTQUFTO0FBRWhCLE1BQU1DLE9BQU9DLFNBQVNDLGVBQWUsTUFBTTtBQUUzQyxJQUFJQyxZQUFZQyxJQUFJQyxPQUFPLEVBQUVMLGdCQUFnQk0sY0FBYztBQUN6RCxRQUFNLElBQUlDLE1BQ1IsZ0hBQ0Y7QUFDRjtBQUFDLE1BQUFDLFdBRURWLE9BQU8sTUFBQVcsa0JBQU9WLEtBQUcsS0FBS0MsSUFBSztBQUFDLElBQUFHLFlBQUFPLElBQUFQLGFBQUFPLElBQUFDLFFBQUFILFFBQUE7QUFBQSxJQUFBTCxZQUFBTyxLQUFBO0FBQUFFLGFBQUEsUUFBQVQsWUFBQU8sR0FBQTtBQUFBUCxjQUFBTyxJQUFBRyxPQUFBO0FBQUEiLCJuYW1lcyI6WyJyZW5kZXIiLCJBcHAiLCJyb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImltcG9ydCIsImVudiIsIkRFViIsIkhUTUxFbGVtZW50IiwiRXJyb3IiLCJfY2xlYW51cCIsIl8kY3JlYXRlQ29tcG9uZW50IiwiaG90IiwiZGlzcG9zZSIsIl8kJGRlY2xpbmUiLCJhY2NlcHQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIEByZWZyZXNoIHJlbG9hZCAqL1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnc29saWQtanMvd2ViJztcblxuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cbmlmIChpbXBvcnQubWV0YS5lbnYuREVWICYmICEocm9vdCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ1Jvb3QgZWxlbWVudCBub3QgZm91bmQuIERpZCB5b3UgZm9yZ2V0IHRvIGFkZCBpdCB0byB5b3VyIGluZGV4Lmh0bWw/IE9yIG1heWJlIHRoZSBpZCBhdHRyaWJ1dGUgZ290IG1pc3NwZWxsZWQ/JyxcbiAgKTtcbn1cblxucmVuZGVyKCgpID0+IDxBcHAgLz4sIHJvb3QhKTtcbiJdLCJmaWxlIjoiL1VzZXJzL3NobXVsaS9yZXBvc2l0b3JpZXMvdHJlbGxvMi9zcmMvaW5kZXgudHN4In0=
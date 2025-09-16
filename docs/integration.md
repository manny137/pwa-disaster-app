Integration instructions for feature owners:

- Each feature folder must export a default React component at src/features/<feature>/index.jsx
- Add any sample data at src/features/<feature>/*.sample.json
- If you add a Redux slice, put it under src/store/slices/<feature>Slice.js and register in src/store/store.js
- Update docs/schemas/* when you change data shapes

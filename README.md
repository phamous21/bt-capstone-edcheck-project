# EdCheck — Vite + Bootstrap port

A Vite + React 18 + Bootstrap 5 rebuild of the EdCheck app (converted from the
earlier Next.js port), with the rest of the Figma flow implemented:
onboarding, explore/search, curriculum, the in-lesson module experience
(video/overview/notes/resources tabs), a knowledge-check quiz with results,
course completion, a certificate, and a profile screen.

## Run it

```bash
npm install
npm run dev
```

Open the printed local URL (typically http://localhost:5173).

## Navigation map

- **Sign up** → onboarding (learning goals → interests → study time →
  reminders) → **Home**. **Sign in** skips onboarding and goes straight to
  Home (returning user).
- Bottom nav: **Home / Progress / Learn** go to their own screens.
  **Achievement** opens the course-completion ("Congratulations!") screen.
  **Profile** opens the profile screen. (Per your instructions.)
- **Learn** screen: tapping the search field opens **Search & Filter** (per
  your instructions). "Resume" opens the lesson **Module** screen (video +
  Overview/Notes/Resources tabs) → **Next** goes to the **Knowledge check**
  intro → **Start Quiz** → 5-question **Quiz** → **Quiz results** →
  "Back to Lesson" opens the lesson detail (mark-as-completed) screen, whose
  "Mark as Completed"/"Next Lesson" buttons lead to the **Congratulations**
  screen → "View Certificate" opens the **Certificate**.
- **Learn**'s "View full curriculum" opens **Curriculum** → "Start Course"
  opens the Module screen.
- **Home**'s "Recommended for you → View all" opens **Explore** → its search
  field and "Next" both open Search & Filter.
- **Profile**'s "Log Out" returns to Sign up.

## Notes on the port

- **Screen styles**: Home, Progress, Learn, the lesson Module screen, quiz
  flow, lesson-detail, course-complete, certificate, and profile all use the
  original fixed 1440×1024 absolute-pixel canvas (via
  `components/ResponsiveCanvas.jsx`), scaled to fit the viewport. Sign
  up/in, onboarding, Explore, Search, and Curriculum use a compact,
  normal-flow scrollable card (`.edcheck-card` in `globals.css`) since their
  Figma frames run taller than 1024px and read better as scrollable content
  than a shrink-to-fit canvas.
- **Quiz content**: the Figma quiz frame had obvious placeholder copy
  ("What is python? A: water / B: water / C: water / D: water"). Swapped in
  a real 5-question Python quiz so the flow demos sensibly; the results
  screen ("Great job — 80%, 4 of 5 correct") is still driven by whatever the
  user actually answers.
- **Ad content removed**: as in the earlier Next.js port, the real
  third-party ad pasted into the original "lesson" Figma frame isn't
  reproduced — `LessonDetail.jsx` keeps the same layout slot with placeholder
  lesson content instead. Swap in your own content/ad provider there.
- **Search & Filter**: the Figma frame had what looks like a duplicated
  leftover filter bar + "Next" button stacked below the course grid (the
  same kind of loose/duplicate content noted on the "Desktop-6" frame in the
  previous port). Simplified to one coherent search/filter/results flow.
- **Image URLs will expire.** A few images (the module hero card, home
  stats) still point at temporary `figma.com/api/mcp/asset/...` URLs from
  the original export — valid for about 7 days. Download and move them into
  `public/` before shipping.
- **ContinueLearning.jsx** ("Desktop-6", a near-duplicate of Learn) is kept
  in the codebase but has no nav entry point, same as before.

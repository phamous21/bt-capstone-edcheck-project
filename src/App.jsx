import { useState } from "react";
import ResponsiveCanvas from "./components/ResponsiveCanvas";
import * as api from "./lib/api";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { idOf } from "./lib/normalize";

import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import LearningGoals from "./screens/onboarding/LearningGoals";
import Interests from "./screens/onboarding/Interests";
import StudyTime from "./screens/onboarding/StudyTime";
import ReminderSetup from "./screens/onboarding/ReminderSetup";

import Home from "./screens/Home";
import Progress from "./screens/Progress";
import Learn from "./screens/Learn";
import Explore from "./screens/Explore";
import Search from "./screens/Search";
import Curriculum from "./screens/Curriculum";
import Module from "./screens/Module";
import KnowledgeCheckIntro from "./screens/KnowledgeCheckIntro";
import Quiz from "./screens/Quiz";
import QuizResults from "./screens/QuizResults";
import LessonDetail from "./screens/LessonDetail";
import CourseComplete from "./screens/CourseComplete";
import Certificate from "./screens/Certificate";
import Profile from "./screens/Profile";

// Maps bottom-nav keys to a page for that tab.
const NAV_TO_PAGE = {
  home: "home",
  progress: "progress",
  learn: "learn",
  achievement: "courseComplete",
  profile: "profile",
};

// Compact, normal-flow "card" screens — not the fixed 1440x1024 app canvas.
const CARD_PAGES = new Set([
  "signup",
  "signin",
  "goals",
  "interests",
  "time",
  "reminder",
  "explore",
  "search",
  "curriculum",
]);

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

function AppRoutes() {
  const { logout, restoring } = useAuth();
  const [page, setPage] = useState("signup");
  const [searchReturnTo, setSearchReturnTo] = useState("learn");
  const [quizResult, setQuizResult] = useState({ correct: 4, total: 5 });
  // Onboarding answers accumulate here, then go up in one PATCH at Finish.
  const [onboarding, setOnboarding] = useState({});
  // The course whose curriculum / modules we're currently viewing.
  const [courseId, setCourseId] = useState(null);

  const goTo = (key) => setPage(NAV_TO_PAGE[key] ?? key);

  const openCourse = (course) => {
    setCourseId(idOf(course));
    setPage("curriculum");
  };

  const finishOnboarding = async (reminder) => {
    const payload = { ...onboarding, reminder };
    try {
      await api.updateOnboarding(payload);
    } catch {
      // Don't trap the user in onboarding if the PATCH fails — they can
      // update these later from Profile.
    }
    setPage("home");
  };

  const handleLogOut = () => {
    logout();
    setOnboarding({});
    setCourseId(null);
    setPage("signup");
  };

  const openSearch = (from) => {
    setSearchReturnTo(from);
    setPage("search");
  };

  let Screen;
  switch (page) {
    // --- Auth ---
    case "signin":
      Screen = <SignIn onSignIn={() => setPage("home")} onGoToSignUp={() => setPage("signup")} />;
      break;
    case "signup":
    default:
      Screen = <SignUp onSignUp={() => setPage("goals")} onGoToSignIn={() => setPage("signin")} />;
      break;

    // --- Onboarding ---
    case "goals":
      Screen = (
        <LearningGoals
          onNext={(goals) => {
            setOnboarding((o) => ({ ...o, goals }));
            setPage("interests");
          }}
          onSkip={() => setPage("home")}
        />
      );
      break;
    case "interests":
      Screen = (
        <Interests
          onNext={(interests) => {
            setOnboarding((o) => ({ ...o, interests }));
            setPage("time");
          }}
          onBack={() => setPage("goals")}
        />
      );
      break;
    case "time":
      Screen = (
        <StudyTime
          onNext={(studyTime) => {
            setOnboarding((o) => ({ ...o, studyTime }));
            setPage("reminder");
          }}
          onBack={() => setPage("interests")}
        />
      );
      break;
    case "reminder":
      Screen = <ReminderSetup onFinish={finishOnboarding} onBack={() => setPage("time")} />;
      break;

    // --- Main app ---
    case "home":
      Screen = <Home onNavigate={goTo} onStartLearning={() => setPage("learn")} onExplore={() => setPage("explore")} />;
      break;
    case "progress":
      Screen = <Progress onNavigate={goTo} />;
      break;
    case "learn":
      Screen = (
        <Learn
          onNavigate={goTo}
          onOpenLesson={() => setPage("module")}
          onOpenSearch={() => openSearch("learn")}
          onOpenCurriculum={() => setPage("curriculum")}
        />
      );
      break;

    // --- Explore / search / curriculum ---
    case "explore":
      Screen = (
        <Explore
          onSearch={() => openSearch("explore")}
          onNext={() => openSearch("explore")}
          onBack={() => setPage("home")}
          onOpenCourse={openCourse}
        />
      );
      break;
    case "search":
      Screen = (
        <Search
          onBack={() => setPage(searchReturnTo)}
          onShowResults={() => setPage(searchReturnTo)}
          onOpenCourse={openCourse}
        />
      );
      break;
    case "curriculum":
      Screen = (
        <Curriculum
          courseId={courseId}
          onBack={() => setPage("learn")}
          onStartCourse={() => setPage("module")}
          onOpenModule={() => setPage("module")}
        />
      );
      break;

    // --- Lesson / quiz flow ---
    case "module":
      Screen = <Module onBack={() => setPage("learn")} onNext={() => setPage("knowledgeCheckIntro")} />;
      break;
    case "knowledgeCheckIntro":
      Screen = <KnowledgeCheckIntro onStartQuiz={() => setPage("quiz")} />;
      break;
    case "quiz":
      Screen = (
        <Quiz
          onFinish={(result) => {
            setQuizResult(result);
            setPage("quizResults");
          }}
        />
      );
      break;
    case "quizResults":
      Screen = (
        <QuizResults
          result={quizResult}
          onBack={() => setPage("module")}
          onReview={() => setPage("quiz")}
          onBackToLesson={() => setPage("lessonDetail")}
        />
      );
      break;
    case "lessonDetail":
      Screen = <LessonDetail onBack={() => setPage("learn")} onFinishLesson={() => setPage("courseComplete")} />;
      break;

    // --- Completion ---
    case "courseComplete":
      Screen = <CourseComplete onNavigate={goTo} onViewCertificate={() => setPage("certificate")} />;
      break;
    case "certificate":
      Screen = <Certificate onBack={() => setPage("courseComplete")} />;
      break;

    // --- Profile ---
    case "profile":
      Screen = <Profile onNavigate={goTo} onLogOut={handleLogOut} />;
      break;
  }

  if (restoring) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <p className="fw-bold m-0" style={{ fontSize: 15, color: "#666" }}>Loading…</p>
      </div>
    );
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", width: "100%", overflow: "auto", padding: "16px" }}
    >
      {CARD_PAGES.has(page) ? Screen : <ResponsiveCanvas>{Screen}</ResponsiveCanvas>}
    </div>
  );
}

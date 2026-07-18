import { useState } from "react";
import Props from "./components/component-fundamentals/Props";
import ConditionalRendering from "./components/component-fundamentals/ConditionalRendering";
import EventHandling from "./components/component-fundamentals/EventHandling";
import State from "./components/state-and-data-flow/State";
import StateObjectsArrays from "./components/state-and-data-flow/StateObjectsArrays";
import UseContext from "./components/hooksSection/UseContext";
import UseRef from "./components/hooksSection/UseRef";
import UseEffect from "./components/hooksSection/UseEffect";
import CustomHooks from "./components/hooksSection/customHook";
import UseMemoLesson from "./components/performanceSection/UseMemoLesson";
import UseCallbackLesson from "./components/performanceSection/useCallbackLesson";
import ReactMemoLesson from "./components/performanceSection/ReactMemoLesson";

const LESSONS = [
  { id: "props", title: "Props", component: Props },
  {
    id: "conditional",
    title: "Conditional Rendering",
    component: ConditionalRendering,
  },
  { id: "events", title: "Event Handling", component: EventHandling },
  { id: "state", title: "State", component: State },
  {
    id: "state-objects",
    title: "State: Objects & Arrays",
    component: StateObjectsArrays,
  },
  { id: "context", title: "useContext", component: UseContext },
  { id: "ref", title: "useRef", component: UseRef },
  { id: "effect", title: "useEffect", component: UseEffect },
  { id: "custom-hooks", title: "Custom Hooks", component: CustomHooks },
  { id: "use-memo", title: "useMemo", component: UseMemoLesson },
  { id: "use-callback", title: "useCallback", component: UseCallbackLesson },
  { id: "react-memo", title: "React.memo", component: ReactMemoLesson },
];

const App = () => {
  const [currentLessonId, setCurrentLessonId] = useState(LESSONS[0].id);

  const CurrentComponent = LESSONS.find(
    (lesson) => lesson.id === currentLessonId,
  ).component;

  return (
    <div className="app">
      <nav className="lesson-nav">
        <h2>React Lessons</h2>
        <ul>
          {LESSONS.map((lesson) => (
            <li key={lesson.id}>
              <button
                className={currentLessonId === lesson.id ? "active" : ""}
                onClick={() => setCurrentLessonId(lesson.id)}
              >
                {lesson.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <main className="lesson-content">
        <CurrentComponent />
      </main>
    </div>
  );
};

export default App;

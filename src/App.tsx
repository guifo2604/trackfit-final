import { Welcome } from './components/Welcome';
import { ExerciseList } from './components/ExerciseList';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Welcome />
      <ExerciseList />
    </div>
  );
}
export default App;
import { Welcome } from './components/Welcome';
import { ExerciseList } from './components/ExerciseList';
import { MotivationalMessage } from './components/MotivationalMessage';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Welcome />
      <ExerciseList />
      <MotivationalMessage
        message="O único treino ruim é aquele que não acontece."
        author="Anônimo"
      />
    </div>
  );
}
export default App;
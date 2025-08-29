interface MotivationalMessageProps {
  message: string;
  author: string;
}

export function MotivationalMessage({ message, author }: MotivationalMessageProps) {
  return (
    <div style={{ textAlign: 'center', margin: '20px auto', fontStyle: 'italic', color: '#666' }}>
      <p style={{ margin: '0 0 5px' }}>"{message}"</p>
      <p style={{ fontWeight: 'bold' }}>- {author}</p>
    </div>
  );
};
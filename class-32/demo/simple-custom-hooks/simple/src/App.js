import Header from './header';

function App() {
  const [bananas, setBananas] = useState(true)
  return (
    <div className="App">
      <Header 
        bananas={bananas}
      />
    </div>
  );
}

export default App;

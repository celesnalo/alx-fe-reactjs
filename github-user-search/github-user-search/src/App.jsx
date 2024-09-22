
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
      </Routes>
    </Router>
  )
}

export default App

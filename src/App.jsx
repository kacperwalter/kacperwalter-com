import Hero from './components/Hero/Hero'
import AnimatedCursor from "react-animated-cursor"

// TODO
// Animated cursor -> you cen differentiate between themes so the cursor can change the color depending on parent element
// check out docs -> https://github.com/stephenscaff/react-animated-cursor#-features

function App() {

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)'
        }}
        outerStyle={{
          border: '2px solid var(--cursor-color)'
        }}
      />
      <Hero />
    </>
  )
}

export default App

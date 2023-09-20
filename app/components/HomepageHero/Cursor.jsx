import AnimatedCursor from "react-animated-cursor"

const Cursor = () => {
  return (
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
  )
}

export default Cursor
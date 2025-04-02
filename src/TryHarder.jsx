import { useEffect, useLayoutEffect, useRef } from "react";

function ExploringReactRefs() {
  // Why does this ref start as null?
  // When does it get its actual value?
  const divRef = useRef(null);

  // This feels like it should work... but does it?
  // When exactly does this effect run?
  useEffect(() => {
    console.log("Effect:", divRef.current?.getBoundingClientRect());
  }, []);

  // What's different about this effect?
  // Why might we need this instead of useEffect?
  useLayoutEffect(() => {
    console.log("Layout Effect:", divRef.current?.getBoundingClientRect());
  }, []);

  // What's special about this callback ref approach?
  // When does this function actually get called?
  // See the second div below where handleRef is used.
  const handleRef = (node) => {
    if (node) {
      console.log("Callback ref:", node.getBoundingClientRect());
    }
  };

  return (
    <div className="flex gap-4">
      {/* When can we actually access this element via divRef? */}
      <div ref={divRef}>Using useRef</div>

      {/* How is this different from useRef? */}
      <div ref={handleRef}>Using callback ref</div>
    </div>
  );
}

export default ExploringReactRefs;

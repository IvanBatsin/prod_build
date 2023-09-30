import React from "react";

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type SpringType = typeof import("@react-spring/web");
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type GestureType = typeof import("@use-gesture/react");

interface AnimationProviderContextPaylaod {
  Gesture?: GestureType
  Spring?: SpringType
  isLoaded?: boolean
}

const AnimationContext = React.createContext<AnimationProviderContextPaylaod>({});

interface AnimationProviderProps {
  children?: React.ReactNode
}

const getLibraries = async (): Promise<[SpringType, GestureType]> => {
  return await Promise.all([
    import("@react-spring/web"),
    import("@use-gesture/react")
  ]);
};

export const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
  const SpringRef = React.useRef<SpringType>();
  const GestureRef = React.useRef<GestureType>();
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    void getLibraries().then(data => {
      SpringRef.current = data[0];
      GestureRef.current = data[1];
      setIsLoaded(true);
    });
  });

  const contextValue = React.useMemo<AnimationProviderContextPaylaod>(() => {
    return {
      Gesture: GestureRef.current,
      Spring: SpringRef.current,
      isLoaded
    };
  }, [isLoaded]);

  return (
    <AnimationContext.Provider value={contextValue}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationLibs = (): Required<AnimationProviderContextPaylaod> => React.useContext(AnimationContext) as Required<AnimationProviderContextPaylaod>;

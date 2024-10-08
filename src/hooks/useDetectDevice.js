import { useMediaQuery } from "hooks";

function useDetectDevice() {
  const [isDesktop] = useMediaQuery("(min-width: 1280px)");
  const [isTablet] = useMediaQuery("(min-width: 768px)");
  const [isPhone] = useMediaQuery("(min-width: 0px)");

  const responsive = (values) => {
    if (isDesktop) return values[2];
    if (isTablet) return values[1];
    if (isPhone) return values[0];
    return values[0];
  };

  return {
    responsive,
    isDesktop,
    isTablet: isTablet && !isDesktop,
    isPhone: isPhone && !isTablet && !isDesktop,
  };
}

export default useDetectDevice;

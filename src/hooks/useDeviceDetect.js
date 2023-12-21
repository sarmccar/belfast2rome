import useMediaQuery from '@mui/material/useMediaQuery';

export default function useDeviceDetect() {
  const isDesktop = useMediaQuery('(min-width:720px)');
  console.log(isDesktop);
  return { isDesktop };
}

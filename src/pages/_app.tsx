import theme from "@/lib/theme";
import { ThemeProvider, GlobalStyles } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
          },
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

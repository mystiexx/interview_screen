import { extendTheme } from "@chakra-ui/react";

export const Theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        fontFamily: "Lato",
        color: "#464E5F",
        fontWeight: 400,
      },
      colors: {
        orange: '#F18651'
      },
      input: {
        background: '#EBF0F5',
        borderRadius: '9px'
      }
    
    }),
  },
});

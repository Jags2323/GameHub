import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";

const UserLoginSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginMode, setLoginMode] = useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Perform login or signup logic based on isLoginMode and the input values
    if (isLoginMode) {
      // Perform login with email and password
      console.log("Logging in...", email, password);
    } else {
      // Perform signup with email and password
      console.log("Signing up...", email, password);
    }

    // Reset form fields
    setEmail("");
    setPassword("");
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            {isLoginMode ? "Login" : "Sign Up"}
          </Button>
        </Stack>
      </form>
      <Button mt={4} variant="link" onClick={() => setLoginMode(!isLoginMode)}>
        {isLoginMode ? "Create an account" : "Already have an account? Log in"}
      </Button>
    </Box>
  );
};

export default UserLoginSignup;

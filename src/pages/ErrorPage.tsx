import { Box, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={6}>
        <Heading>OOps</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This Page doesn't exist../"
            : "An Unexpected error occurred..!"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;

import { Box, Button, HStack, Image, Spinner, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ThemeSwitch from "./ThemeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleImageClick = () => {
    setIsLoading(true);

    // Simulate loading delay
    setTimeout(() => {
      // Redirect to the default homepage
      window.location.href = "/";
    }, 0);
  };

  return (
    <div>
      <HStack padding="10px">
        {isLoading ? (
          <Spinner size="sm" />
        ) : (
          <Link to="/" replace={true} onClick={handleImageClick}>
            <Image src={logo} boxSize="60px" />
          </Link>
        )}
        <SearchInput onSearch={onSearch} />
        <Link to ={'/login'}>
          <Button type="submit">SignOut</Button>
        </Link>
        <ThemeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;

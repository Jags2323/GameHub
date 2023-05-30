import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ThemeSwitch from "./ThemeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const handleImageClick = () => {
    // Redirect to the default homepage
    window.location.href = "/";
  };
  return (
    <div>
      <HStack padding="10px">
        <Link to="/" replace={true} onClick={handleImageClick}>
          <Image src={logo} boxSize="60px"></Image>
        </Link>
        <SearchInput onSearch={onSearch} />
        <ThemeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;

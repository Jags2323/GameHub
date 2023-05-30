import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ThemeSwitch from "./ThemeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <div>
      <HStack padding="10px">
        <Link to="/" replace={true} onClick={() => window.location.reload()}>
          <Image src={logo} boxSize="60px"></Image>
        </Link>
        <SearchInput onSearch={onSearch} />
        <ThemeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;

import {
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuOptionGroup,
  useMediaQuery,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FaPenAlt, FaSprayCan, FaTshirt } from 'react-icons/fa';
import { MdOutlineMenu, MdPermContactCalendar } from 'react-icons/md';
import Logo from '../Logo';

const Header: React.FC = () => {
  const { pathname } = useRouter();
  const [isLargerThan700] = useMediaQuery('(max-width: 700px)');

  return (
    <Flex
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      paddingX="3rem"
      height="100px"
      bg="#f4efec"
    >
      {!isLargerThan700 && (
        <Link href="/home#contact" passHref>
          <Heading
            fontSize="sm"
            _hover={{ textDecoration: 'underline' }}
            cursor="pointer"
            fontWeight="semibold"
          >
            Contatos
          </Heading>
        </Link>
      )}
      <Logo />

      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<MdOutlineMenu />}
          variant="outline"
        />
        <MenuList bg="#f4efec">
          <MenuOptionGroup defaultValue="asc" title="Menu" type="radio">
            <Link href="/home#me" passHref>
              <MenuItem icon={<FaPenAlt />}>Quem sou eu</MenuItem>
            </Link>
            <Link href="/fashion" passHref>
              <MenuItem icon={<FaTshirt />}>Moda</MenuItem>
            </Link>
            <Link href="/makeUp" passHref>
              <MenuItem icon={<FaSprayCan />}>Make Up</MenuItem>
            </Link>
            <Link
              href={pathname === '/home' ? '#contact' : '/home#contact'}
              passHref
            >
              <MenuItem icon={<MdPermContactCalendar />}>Contatos</MenuItem>
            </Link>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Header;

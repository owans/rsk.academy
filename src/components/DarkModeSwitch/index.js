import { useColorMode, IconButton, useColorModeValue } from '@chakra-ui/react'
import { FiSun, FiMoon } from 'react-icons/fi'

export const DarkModeSwitch = props => {
  const { toggleColorMode } = useColorMode()
  const ColorModeIcon = useColorModeValue(FiMoon, FiSun)

  return (
    <IconButton
      isRound
      variant='inversed'
      icon={<ColorModeIcon />}
      onClick={toggleColorMode}
      {...props}
    />
  )
}

export default DarkModeSwitch

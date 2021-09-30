import { ReactNode } from 'react';
import { Box } from '@mui/material';

interface Props {
  children: ReactNode;
}
const AppLayout = ({ children }: Props) => <Box sx={{ p: 2 }}>{children}</Box>;

export default AppLayout;

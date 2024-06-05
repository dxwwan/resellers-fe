import { Box, Divider, Text } from '@chakra-ui/react';

interface DescriptionBoxProps {
  description: string;
}

export const DescriptionBox = ({ description }: DescriptionBoxProps) => {
  return (
    <Box bgColor="#F5F5F5" mb={[4, 8, 12]} borderRadius="0.5rem">
      <Text mb={[4, 8]} p={[4, 8]} fontSize={['md', 'lg', 'xl']}>
        {description}
      </Text>
      <Divider orientation="horizontal" />
    </Box>
  );
};

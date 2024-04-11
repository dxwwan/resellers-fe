import React from 'react';
import {
  Heading,
  Flex,
  Text,
  Th,
  Td,
  Tr,
  Thead,
  Tbody,
  TableContainer,
  Table,
} from '@chakra-ui/react';

const ProductInformation = () => {
  return (
    <div>
      <Heading mt="24" as="h2" size="md">
        구매 상품 정보
      </Heading>
      <TableContainer
        mt="4"
        borderRadius="lg"
        border="1px"
        borderColor="gray.200"
      >
        <Table mt="2" variant="simple">
          <Thead>
            <Tr>
              <Th fontSize="16" fontWeight="900">
                제품명
              </Th>
              <Th fontSize="16" fontWeight="900">
                가격
              </Th>
              <Th textAlign="right" fontSize="16" fontWeight="900">
                설명
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>레전드 냉장고</Td>
              <Td>240,000원</Td>
              <Td textAlign="right">국가권력급 냉장고입니다.</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Flex mt="4" justify="flex-end">
        <Heading as="h2" size="md">
          <Text as="span" mr="24">
            총 금액
          </Text>
          240,000원
        </Heading>
      </Flex>
    </div>
  );
};

export default ProductInformation;

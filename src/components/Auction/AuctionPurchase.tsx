import { Box, Flex, Text, Divider } from '@chakra-ui/react';
import { getAuctionPurchase } from 'src/apis/auctions';
import { useQuery } from '@tanstack/react-query';
import { AuctionPurchaseDetails } from './AuctionPurchaseDetails';
import { useParams } from 'react-router-dom';

export interface AuctionPurchaseProps {
  imageNames: string[];
  itemType: string;
  productName: string;
  bidCount: number;
  startAt: string;
  endAt: string;
  startPrice: number;
  nowPrice: number;
  writer: string;
  description: string;
  defect: string;
  priceUnit: number;
}

export const AuctionPurchase = () => {
  const { id } = useParams();
  const auctionId = Number(id);
  const { data: auction, status } = useQuery({
    queryKey: ['auction', id],
    queryFn: () => getAuctionPurchase(auctionId),
    refetchInterval: 3000,
    refetchIntervalInBackground: false,
  });

  if (status === 'error') return <>에러 상태</>;
  if (status === 'pending') return <>로딩 중 ...</>;

  return (
    <Box w="100%" p={[4, 8, 12]}>
      <Flex justifyContent="start" alignItems="center" flexWrap="wrap">
        <Text fontSize={['2xl', '3xl', '4xl']} fontWeight="600" mr="2rem">
          기자재 거래
        </Text>
        <Text fontSize={['lg', 'xl']}>상품 카테고리 : {auction.itemType}</Text>
      </Flex>
      <Divider orientation="horizontal" my={[2, 4]} />
      <Flex flexDirection="column">
        <Box w="100%" mr={[0, 0, '8rem']}>
          <AuctionPurchaseDetails
            imageNames={auction.imageNames}
            productName={auction.productName}
            itemType={auction.itemType}
            bidCount={auction.bidCount}
            startAt={auction.startAt}
            endAt={auction.endAt}
            startPrice={auction.startPrice}
            nowPrice={auction.nowPrice}
            writer={auction.writer}
            description={auction.description}
            defect={auction.defect}
            priceUnit={auction.priceUnit}
          />
        </Box>
      </Flex>
    </Box>
  );
};

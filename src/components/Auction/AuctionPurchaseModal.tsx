import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Flex,
  Box,
  Button,
  theme,
} from '@chakra-ui/react';
import { patchAuctionPrice } from 'src/apis/auctions';
import { useAuction } from '@/hooks/Auction/useAuction';
import { useParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

interface AuctionPurchaseModalProps {
  priceUnit: number;
  nowPrice: number;
  closeModal: () => void;
}

export const AuctionPurchaseModal = ({
  priceUnit,
  nowPrice,
  closeModal,
}: AuctionPurchaseModalProps) => {
  const memberId = localStorage.getItem('userId');
  const { id } = useParams();
  const auctionId = Number(id);
  const { addedPrice, addPriceUnit, subtractPriceUnit } = useAuction();
  const { mutate } = useMutation({
    mutationKey: ['auction'],
    mutationFn: patchAuctionPrice,
    onSuccess: () => {
      alert('입찰에 성공했습니다.');
      closeModal();
    },
    onError: () => {
      alert('입찰에 실패했습니다.');
    },
  });

  return (
    <Modal isOpen={true} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>입찰하기</ModalHeader>
        <ModalBody>
          <Flex
            justifyContent="center"
            textAlign="center"
            flexDirection="column"
          >
            <Box fontSize={['xl', '2xl', '3xl']} fontWeight="600">
              입찰가 선정
            </Box>
            {addedPrice ? (
              <Box fontSize={['lg', 'xl', '2xl']}>{addedPrice}원</Box>
            ) : (
              <Box fontSize={['lg', 'xl', '2xl']}>{nowPrice}원</Box>
            )}
            <Flex justifyContent="center">
              <Button
                color="white"
                bgColor={theme.colors.red[500]}
                py="1rem"
                px="2rem"
                m="1rem"
                onClick={() => subtractPriceUnit(priceUnit, nowPrice)}
              >
                입찰가 감소
              </Button>
              <Button
                color="white"
                bgColor={theme.colors.green[400]}
                py="1rem"
                px="2rem"
                m="1rem"
                onClick={() => addPriceUnit(priceUnit, nowPrice)}
              >
                입찰가 증가
              </Button>
            </Flex>
            <Flex justifyContent="flex-end" mr="2rem">
              단위 : {priceUnit}원
            </Flex>
          </Flex>
        </ModalBody>
        <Flex justifyContent="flex-end" p="2rem">
          <Button onClick={closeModal} mx="1rem">
            취소
          </Button>
          <Button
            bgColor={theme.colors.blue[500]}
            mx="1rem"
            color="white"
            onClick={() => {
              if (!memberId) {
                alert('로그인이 필요한 서비스입니다.');
                return;
              }

              if (addedPrice === 0) {
                alert('현재가 보다 높은 입찰가를 설정해주세요.');
                return;
              }
              mutate({
                auctionId,
                price: addedPrice,
                memberId: +memberId,
              });
            }}
          >
            입찰하기
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

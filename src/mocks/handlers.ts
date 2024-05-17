import { http, HttpResponse } from 'msw';

const getMentoringQuestion = http.get('/api/question', () => {
  // ...and respond to them using this JSON response.
  return HttpResponse.json({
    success: true,
    response: {
      questions: {
        '1': '질문',
        '2': '질문',
        '3': '질문',
        '4': '질문',
        '5': '질문',
      },
    },
    error: null,
  });
});
const id = 1;
const getMaterial = http.get(`/api/board/materials/${id}`, () => {
  return HttpResponse.json({
    success: true,
    response: {
      writer: 'yunseng',
      product: {
        preSignedUrl: [
          'https://test-bucket.s3.ap-northeast-2.amazonaws.com/13_?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240411T172245Z&X-Amz-SignedHeaders=content-type%3Bhost&X-Amz-Expires=600&X-Amz-Credential=test-key%2F20240411%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=4e081486e21a911f27b7dff27ad5156fb042c3201755493ac8f0a52cd7e3db91',
          'https://test-bucket.s3.ap-northeast-2.amazonaws.com/14_?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240411T172245Z&X-Amz-SignedHeaders=content-type%3Bhost&X-Amz-Expires=600&X-Amz-Credential=test-key%2F20240411%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=8ecdd0ec5e349c2893611907ee6e584f1d7a59816f368f4b804fac89c1c304ea',
        ],
        id: 1,
        productName: 'LG 냉장고',
        price: 1200000,
        description: '2년쓴 냉장고 입니다.',
        defect: '문이 잘 안열려요.',
      },
    },
    error: {
      code: 'string',
      reason: 'string',
      status: 'string',
    },
  });
});

export const handlers = [getMentoringQuestion, getMaterial];

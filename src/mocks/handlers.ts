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

const getMaterials = http.get('/api/board/materials', () => {
  return HttpResponse.json({
    success: true,
    response: {
      materials: [
        {
          preSignedUrl:
            'https://test-bucket.s3.ap-northeast-2.amazonaws.com/1_?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240405T134134Z&X-Amz-SignedHeaders=host&X-Amz-Expires=600&X-Amz-Credential=test-key%2F20240405%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=d55632edf221054bde206601d44a25f86100017c8a1aa816972fb675dd38ce41',
          id: 1,
          title: '응애글자넘어갔을시화면표시되는부분테스트를위한타이틀',
          jobType: '응애',
          totalPrice: 2000,
        },
        {
          preSignedUrl: null,
          id: 2,
          title: '응애2',
          jobType: '응애2',
          totalPrice: 1000,
        },
        {
          preSignedUrl: null,
          id: 3,
          title: '응애3',
          jobType: '응애3',
          totalPrice: 1000,
        },
        {
          preSignedUrl: null,
          id: 4,
          title: '응애3',
          jobType: '응애3',
          totalPrice: 1000,
        },
        {
          preSignedUrl: null,
          id: 5,
          title: '응애3',
          jobType: '응애3',
          totalPrice: 1000,
        },
      ],
    },
    error: null,
  });
});

export const handlers = [getMentoringQuestion, getMaterials];
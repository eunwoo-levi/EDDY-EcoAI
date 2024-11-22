import Image from 'next/image';
import ContactButton from './_components/ContactButton';

export default function About() {
  return (
    <div className='relative min-h-screen flex flex-col items-center bg-gray-50'>
      <Image src='/nature.webp' fill priority alt='nature background' className='object-cover' />

      <div className='z-10 bg-white/80 backdrop-blur-lg shadow-lg rounded-lg p-6 text-center max-w-3xl mt-[100px]'>
        <div className='flex justify-center text-sm md:text-lg mb-[20px] gap-2'>
          안녕하세요, 경북대학교 컴퓨터학부 <h1 className='font-bold text-green-500'> Eddy </h1> 입니다.
        </div>
        <h1 className='text-3xl font-bold text-green-600'>우리의 환경을 지키는 스마트 재활용 웹 서비스</h1>
        <p className='text-lg text-gray-700 mt-4'>
          대구 환경청과의 협업으로 탄생한 스마트 재활용 웹 서비스는 재활용에 대한 올바른 정보를 제공하고, 생활 속
          환경보호를 실천할 수 있도록 돕습니다.
        </p>
        <div className='mt-6 text-left'>
          <h2 className='text-xl font-bold text-green-500'>재활용의 모든 것, 한눈에</h2>
          <p className='text-gray-700 mt-2'>
            다양한 재활용품의 분류 방법과 처리 방법에 대해 명확하고 간단한 설명을 제공합니다. 복잡하게 느껴질 수 있는
            재활용을 쉽게 이해하고 실천할 수 있도록 도와줍니다.
          </p>
          <h2 className='text-xl font-bold text-green-500 mt-4'>AI 챗봇으로 궁금증 해결</h2>
          <p className='text-gray-700 mt-2'>
            재활용과 관련된 궁금증이 있다면 AI 챗봇에게 물어보세요! 실시간으로 질문에 답변하며, 사용자 맞춤형 정보를
            제공합니다.
          </p>
          <h2 className='text-xl font-bold text-green-500 mt-4'>경북대학교 재활용 쓰레기통 지도</h2>
          <p className='text-gray-700 mt-2'>
            경북대학교 내에 위치한 재활용 쓰레기통의 위치를 지도로 확인할 수 있어 더욱 편리하고 실질적인 재활용 실천이
            가능합니다.
          </p>
          <p className='text-gray-800 mt-4 font-semibold'>
            환경을 생각하는 작은 실천이 모여 큰 변화를 만듭니다. 스마트 재활용 웹 서비스와 함께 지속 가능한 미래를
            만들어가세요!
          </p>
        </div>
      </div>

      <div className='relative mt-8'>
        <ContactButton />
      </div>
    </div>
  );
}

// 예외처리
// try ~ catch
// throw : 인위적으로 예외 발생
// finally : 예외의 발생 유무와 상관없이 반드시 실행

function runner (){
  try {
    console.log('hello');
    // 인위적 에러 발생
    throw new Error('error');
  } catch (error) {
    console.log('error catch');
  } finally{
    console.log('done');
  }
}

runner();
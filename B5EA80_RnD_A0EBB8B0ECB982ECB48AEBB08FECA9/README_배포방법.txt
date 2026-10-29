국가 R&D 전문가 Pool Finder — 웹사이트 배포용

※ index.html만 더블클릭하면 웹 검색이 작동하지 않습니다. 반드시 Netlify에 전체 프로젝트를 배포해야 합니다.

권장 배포: GitHub + Netlify (최초 1회 설정)
1. github.com에 로그인 후 새 저장소(New repository)를 만듭니다.
2. 저장소의 Add file > Upload files에서 이 ZIP을 압축 해제한 폴더의 index.html, netlify.toml, netlify/functions/openalex.mjs 파일을 동일한 폴더 구조로 업로드하고 Commit changes를 누릅니다.
3. app.netlify.com에 가입 또는 로그인합니다.
4. Add new project > Import an existing project > GitHub에서 저장소를 연결합니다.
5. Build command는 비워두고 Publish directory는 . (마침표)로 설정합니다.
6. Deploy를 누르면 https://...netlify.app 주소가 생성됩니다.
7. 해당 주소로 접속해 검색합니다. OpenAlex 사용량 한도에 걸리면 OpenAlex 무료 API 키를 발급받아 STEP 1에 입력합니다.

주의
- Netlify의 단순 파일 드래그앤드롭 배포는 서버 함수 포함 여부를 보장하지 않으므로 GitHub 연동을 권장합니다.
- OpenAlex 무료 API 사용량 및 Netlify 무료 요금제 제한이 적용될 수 있습니다.
- 개인 API 키는 웹페이지 입력창에서만 입력하고 GitHub 코드에 직접 적지 마세요.
- 키는 서버 함수에서 OpenAlex로만 전달됩니다.
- 결과는 실제 OpenAlex 데이터이며 가상 전문가를 생성하지 않습니다.

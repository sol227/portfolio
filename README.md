## 포트폴리오 작업 일지(231227~240122)

### https://sol227.github.io/portfolio/

---

#### 240115

- html - 파비콘 수정
- html/css - 상단 메뉴를 클릭해 이동했을 시 각페이지들의 애매한 위치 조정
- css - 프로젝트의 마지막 리스트의 마우스 이벤트가 제대로 일어나지 않음  
  -&gt; 컨텍트 페이지의 일부가 프로젝트 영역에 겹쳐서 생김
- css - 프로젝트와 컨텍트 페이지가 컨텍트 페이지에 height 값을 없애면 겹침  
  -&gt; 프로젝트에 position: sticky를 주면서 height를 너무 크게 주면서 생긴 문제
  -&gt; 컨텍트 페이지에 position: relative를 주어 위치를 맞추고 height 값 조절
- js - 마우스 이동에 따라 가로 스크롤이 생기는 현상  
  -&gt; 마우스 커스텀을 코드의 문제였음
- js - 메인/서브에 lenis 플러그인으로 스크롤에 부드러운 효과 추가
- js - 프로젝트 페이지에서 마우스를 올리면 관련 이미지가 생성되도록 하고 싶었으나 마우스 이슈로 인해 정상적으로 작동이 되지 않아 실패

#### 240104

- 각 팀프로젝트 완료보고서 개요 부분 수정
- html - 스킬 페이지 내용 정리
- css - 상세페이지 수정 -&gt; 페이지 어바웃 중요 키워드 부분 가독성을 위해 크기를 키우고, 색상 변경
- js - 프로젝트 부분에 gsap scrollTrigger로 스크롤을 내리면 리스트가 하나씩 나타는 효과 적용  
  -&gt; 프로젝트 인트로에 position sticky를 주면서 생긴 스크롤 위치가 생각한 위치와 달라서 스크롤을 조절하는데 애를 엄청 먹음
- js - 프로젝트 부분에서 마우스를 올리면 프로젝트 부분의 전체 배경색이 프로젝트의 메인 색상 바뀌면서 마우스 커서에 해당 프로젝트 이미지 띄우는 이벤트 적용
- js - 메인 인트로의 마우스 커서의 오차를 해결하기 위해 &lt;canvas&gt; 대신 &lt;svg&gt; 사용
- js - 커스텀한 마우스 커서가 스크롤을 내리면 안 따라오는 문제 발생  
  -&gt; 컴스텀할 마우스를 &lt;body&gt; 가장 하단에 작성하니 해결

#### 240103

- html / css - 싱싱고, mfunch 상세페이지 작업 (문제 해결 / 이미지 추가 + 보고서 pdf 연결)
  -&gt; 디자인 시안에 맞게 전체적으로 border 값을 주어 섹션을 나누기 위해 &lt;body&gt;에 width 값을 지정했으나,
  &lt;section&gt; width 값이랑 오차가 생겨 &lt;main&gt; 태그로 한번 더 감싸 해결
- html - github / 상세페이지 / 싱싱고, mfunch 등 연결할 링크 추가
- js - gsap scrollTrigger로 탑버튼에 스무스한 효과 추가
- js - 프로젝트 상세페이지 jQury aos 이벤트 효과 적용

#### 240102

- 디자인 - 인트로 페이지 효과에 어울리도록 디자인 수정
- js - 인트로 페이지 애니메이션이 애매해서 &lt;canvas&gt;를 이용한 적용하려 했던 기존 효과로 적용 시도  
  -&gt; 적용은 했으나 스크롤을 내리면 마우스 커서와 오차가 생김
  -&gt; 배경의 색상이 변경되면 메인 타이틀의 색상이 흰색으로 변경되어야 하는데 스크립트로  
  해보려했으나 실패 후 css mix-blend-mode로 시도했으나 흰색으로 변경이 안됨
- js - 어바웃 페이지 @keyframe으로 해시태그 부분 애니메이션 적용
- js - 마우스 커서 커스텀 시도 -&gt; 커서의 움직임이 부자연스러움
- js - 어바웃 / 스킬 / 프로젝트 인트로 페이지에 jQury aos 이벤트 효과 적용

#### 240101

- css - 프로젝트 / 콘텍트 페이지 스타일 작업 (기본적인 css는 마무리)
- css - 콘덱트 페이지 @keyframe으로 애니메이션 적용
- css - 모든 페이지에서 이미지 레이아웃을 position을 이용해 작업했는데,  
  모니터의 크기가 작아지면 레이아웃이 무너지는 문제  
   -&gt; position px값을 %로 수정하여 해결
- js - 상단 메뉴에 gsap scrollTrigger를 이용하여 메뉴 이동 효과 적용

#### 231231

- 각 페이지별 들어갈 이벤트 효과 정리
- 디자인 - 스킬과 프로젝트 페이지의 들어갈 내용을 고려해 레이아웃을 서로 변경
- css - 스킬 페이지 스타일 작업

#### 231230

- css - 인트로
  -&gt; 기존에 작용하려 했던 그림판 효과가 디자인한 시안과 잘 맞지 않아 사용하지 않고,  
  @keyframe으로 나무가 커지는 애니메이션으로 일단 대체
- css - 어바웃 페이지 작업

#### 231229

- js - 인트로 파트에서 사용할 마우스 위치에 따라 원의 형태로 배경이 채워지는 &lt;canvas&gt;로 구현 공부

#### 231228

- 디자인 - 시안 작업 완료
- html - 마크업 작업 후 css 스타일 작업
- css - 배경에 노이즈 이펙트를 주었는데, 최상위에 위치해 다른 버튼이 안 눌리는 문제 발생
  -&gt; z-index 값을 최상위로 오게 했기 때문에 문 없애버림

#### 231227

- 디자인 - 레퍼런스 사이트 서치 후 디자인 시안 작업  
  (사용할 폰트 선정 / 컨셉)

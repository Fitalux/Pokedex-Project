<h1>Pokedex Project</h1><br>

<img src="https://github.com/Fitalux/Portfolio/blob/main/src/assets/image/workread/redux-project.png"><br>
VIEW SITE : https://fitalux-pokedex-project.netlify.app/<br><br>

<h2>DESC</h2><br>
Pokedex Project는 포켓몬 도감 사이트로, React와 TypeScript, Redux Toolkit을 통합하여 개발되었습니다.
이 프로젝트에서는 Poke API를 활용하여 포켓몬의 상세한 정보를 효과적으로 다루었습니다.<br><br>

TypeScript를 사용함으로써 타입 안정성을 강화하고, 개발 과정에서 발생할 수 있는 오류를 사전에 방지하도록 처리하였습니다.<br><br>
Redux Toolkit은 상태 관리를 간편하게 처리하기 위하여 사용되었습니다. 이를 통해 앱의 상태를 중앙에서 효과적으로 관리하고, 컴포넌트 간의 데이터 전달을 보다 체계적으로 구현할 수 있었습니다.
또한 Redux Toolkit의 기능을 활용하여 비동기 작업 및 상태 변화를 관리하면서 코드의 가독성과 유지보수성을 높이는 데에 주력하였습니다.<br><br>
Firebase Realtime Database는 상용자 정보를 실시간으로 동기화하고 효과적으로 관리하기 위하여 활용되었습니다. 사용자 정보를 안전하게 저장하고 필요한 경우 Google 로그인을 통하여 신속하게 인증을 처리하여 사용자 경험을 향상시켰습니다. Firebase의 실시간 데이터 베이스를 활용함으로써 데이터의 동기화와 업ㄷ데이트를 효율적으로 관리하여 웹 애플리케이션의 실시간 성능을 보장하도록 작성되었습니다.<br><br><br>
이 프로젝트를 통해 TypeScript, Redux Toolkit, Firebase를 활용하는 방법을 학습하면서 안정적이고 확장 가능한 웹 애플리케이션을 개발하는 기술과 노하우를 습득하게 되었습니다.<br><br><br><br>

<h2>사용 스택</h2><br>
Axios for API: Axios는 Javascript 및 TypeScript에서 HTTP 요청을 만들기 위한 라이브러리로, RESTful API와 통신하는 데에 사용됩니다. 비동기 작업을 효과적으로 처리할 수 있습니다.<br><br>
CSS&SCSS: CSS3는(은) 웹 페이지의 스타일을 꾸미기 위한 스타일 시트 언어이며, SCSS는 CSS의 확장된 문법을 제공하는 CSS 프리프로세서입니다. SCSS는 변수, 중첩, 함수 등을 통해 코드 재사용과 유지보수성을 높여줍니다.<br><br>
Firebase&FireStore: Firebase는 개발자가 서버 없이 애플리케이션을 빠르게 개발할 수 있도록 하는 플랫폼이며, Firebase는 Firebase의 NoSQL 데이터 서비스입니다. 실시간 데이터 동기화와 사용자 인증을 쉽게 구현할 수 있습니다.<br><br>
React: React는 Facebook에서 개발한 JavaScript 라이브러리로, 사용자 인터페이스를 만들기 위한 도구입니다. 컴포넌트 기반 아키텍처를 통해 UI를 간편하게 구축할 수 있으며, 가상 DOM을 통해 효율적인 업데이트를 제공합니다.<br><br>
React Hooks: Hooks는 함수형 컴포넌트에서 상태와 생명주기 기능을 사용할 수 있게 해주는 React의 새로운 기능입니다. useState, useEffect 등의 훅을 사용하여 코드를 더 간결하고 재사용 가능하게 작성할 수 있습니다.<br><br>
React Router: React Router는 React 애플리케이션에서 네비게이션을 관리하기 위한 라이브러리입니다. 라우팅을 통해 다양한 페이지 간에 이동하고 URL에 대한 라우팅을 처리할 수 있습니다.<br><br>
TypeScript: TypeScript는 JavaScript에 정적 타입을 도입한 언어로, 개발자에게 코드 안정성과 가독성을 제공합니다. 특히 대규모 프로젝트에서 타입 추론과 강력한 에디터 지원을 통해 생산성을 높이는 데 도움이 됩니다.<br><br><br>

<h2>주요 기능</h2>
Browser Router - Histroy Router: HTML5의 History API를 사용하여 브라우저 URL을 동적으로 변경할 수 있는 라우터.<br><br>
React-router-dom: React 프로젝트에서 라우팅을 효과적으로 관리하는 도구. <br><br>
Redux - State Management Framework: Flux 아키텍처를 기반으로 한 상태 관리 패턴을 제공하는 프레임 워크.<br><br>
Route, Routers - Route Configuration: 특정 URL 경로에 대한 컴포넌트 매핑을 정의하는데 사용되며, 여러 개의 라우트를 관리하는 컨테이너. <br><br>
Link - Navigation Link: 페이지 간의 링크를 생성하여 라우터의 경로 전환을 촉진. <br><br>
useLocation- Location Hook: 현재 URL의 정보를 반환하여 라우터의 위치 정보를 다룸.<br><br>
useParams - RouteParameters Hook: URL에서 동적으로 전달되는 매개변수를 다루기 위한 훅. <br><br><br><br><br>

Action - Event Descriptor: 상태 변화를 일으킬 때, 애플리케이션에서 발생한 사건을 설명하는 객체입니다. 이는 상태 변경에 대한 정보를 가지고 있으며, 주로 type 속성을 통해 어떤 종류의 액션인지 식별됩니다.<br><br>
Reducer - State Updater: 액션에 따라 상태를 갱신하는 함수로, 현재 상태와 액션을 받아 새로운 상태를 반환합니다.<br><br>
Store - State Container: 애플리케이션의 전역 상태를 저장하고 관리하는 컨테이너입니다. 스토어는 리듀서에 의해 갱신된 상태를 보유하고, 해당 상태에 접근할 수 있는 메서드 및 이벤트를 제공합니다. <br><br>
Dispatch - Action Trigger: 스토어에게 액션을 전달하여 상태를 갱신하도록 하는 함수입니다. 디스패치는 액션을 스토어에 보내고, 해당 애견에 따라 리듀서를 호출하여 상태를 업데이트합니다.<br><br>
useAppDispatch - Redux Action Dispatcher Hook: Redux를 사용하는 React 애플리케이션에서 액션을 Redux Store에 디스패치(dispatch)하는데 사용되는 커스텀 훅입니다.<br><br>
useSelector - Redux State Selector Hook: Redux를 사용하는 리액트 애플리케이션에서 Redux Store의 상태(state)를 선택하기 위해 사용되는 커스텀 훅입니다. 선택된 상태에 접근하여 컴포넌트에서 해당 상태를 활용할 수 있도록 도와줍니다.<br><br>
useDispatch - Redux Action Dispatcher Hook: Redux를 사용하는 리액트 애플리케이션에서 Redux Store에 액션을 디스패치하는데 사용되는 커스텀 훅입니다. 액션을 디스패치하여 상태를 변경하거나 비동기 작업을 처리하는데 활용됩니다.<br><br>
useStore -  Redux Store Accessor Hook: Redux Store 객체에 직접 접근하기 위해 사용되는 커스텀 훅입니다. 주로 상태나 액션을 직접 다루어야 할 경우에 사용되며, 스토어의 내부에 직접 접근할 수 있도록 도와줍니다.

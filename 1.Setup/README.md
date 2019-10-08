# TypeScript Example!

이 Repository는 TypeScript 예제를 위한 페이지입니다.

만약 TypeScript를 처음 쓰는데 조금 어려움을 겪고 있다면, 여기 예제를 따라하세요!

1. Node.js 설치
    
    먼저, Node.js를 설치해야 합니다.

    ```
    Windows의 경우 아래의 링크에서 설치할 수 있습니다.

    https://nodejs.org/en/
    ```

    ```
    Mac의 경우, 다음과 같이 설치하세요.

    1. 터미널에 다음 명령어를 입력해 nvm(Node Version Manager)을 설치합니다.
        $ curl https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash

    2. 다음 명령어를 입력해 변경 사항을 적용합니다.
        $ source ~/.bash_profile

        또는 터미널을 재시작해도 됩니다.

    3. 다음 명령어를 입력해 nvm이 제대로 설치됐는지 확인합니다.
        $ nvm --version

        버전 정보가 제대로 나오면 정상적으로 설치된 것입니다.

    4. 다음 명령어를 통해 Node.js를 설치합니다.
        $ nvm install stable
    ```

2. IDE 설치

    IDE는, 통합 개발 환경 (Integrated Development Environment)의 약자로 프로그래밍을 편하게 할 수 있게 도와주는 툴입니다.

    TypeScript 개발은 다양한 IDE를 사용할 수 있는데, atom과 같은 Text Editor, WebStorm과 같은 Jetbrain Intellij 시리즈, Visual Studio Code 같은 것도 이용할 수 있습니다. (저는 Visual Studio Code를 이용하고 있습니다.)

3. TypeScript 설치

    Node.js를 설치하면 npm(Node Package Manager)이라는 패키지 매니져가 같이 설치됩니다. 이를 이용하여 TypeScript를 설치해야 합니다.

    터미널(윈도우, Mac 동일)에 다음과 같은 명령어를 입력하여 설치합니다.
    ```
    $ npm install -g typescript 
    ```
    설치가 완료되었다면, 다음 명령어를 통해 제대로 설치되었는지 확인합니다.
    ```
    $ tsc -v
    ```
    버전이 제대로 나온다면, 정상적으로 설치된 것입니다.

4. TypeScript 파일 작성
    
    TypeScript 파일의 확장자는 .ts입니다.

    example.ts 라는 파일을 만들고 다음과 같이 작성해봅니다.

    ```ts
    console.log("Hi!");
    ```

5. TypeScript 파일 트랜스파일링
    
    TypeScript로 작성된 파일은 트랜스파일링을 통해, .js 형식의 파일로 변경됩니다.

    터미널을 키고, 위의 example.ts를 작성한 디렉토리로 이동한 후, 다음과 같이 입력해봅니다.

    ```
    $tsc example
    ```

    그러면 동일 디렉토리에, `example.js` 파일이 생성된 것을 확인할 수 있습니다.

6. JavaScript파일 실행

    이제, 변환된 파일을 실행해봅시다.

    터미널에서 다음과 같은 명령어를 입력합니다.

    ```
    $ node example
    ```

    출력하려는 `Hi!` 라는 문구가 터미널에 출력되면, 정상적으로 TypeScript 코드를 실행한 것입니다.



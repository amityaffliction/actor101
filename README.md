## 현재 상태
- 홍보를 올리는것 구현완료
- 포트폴리오 페이지 및 프로필 편집 페이지 뷰 완료

rails server로 서버 킨다음에 
위에 보면 TESTCONTACT라는거 눌러야 actor101 나옴. 현재 홈은 
이 프로젝트가 포크한 flaperNews라는거의 홈으로 되어있음.

## 추후 구현사항
1. (_profile.html)
- 사진 업로드하는 것 (Flow.js)
- 프로필을 편집하고 서버에 업로드

2. (_portfolio.html)
- 더미데이터 작성
- '더알아보기' 버튼을 누르면 해당 프로필 페이지로 이동하기

3. 로그인 / 회원가입 뷰를 좀 이쁘게 만들기..




## Forked project from flapper-news by Thinkster

- Angular single page architecture
- User authentication with Devise
- Material design lite(getmdl.io)

## System dependencies

Ruby version 2, Rails Version 4.1.1, sqlite3, Bootstrap, email account

## Deployment to your Local Machine

    Install Rails 4.0 and Ruby 2.0
    $ git clone <This-Repository> <your-folder>
    $ cd <your-folder>
    create your repository on github
    $ git remote set-url origin https://github.com/<new repository>

    $ bundle install
    $ rake db:create
    $ rake db:migrate
    $ rake bower:install


## Running in Development Mode
    rails s
    navigate browser to localhost:3000


## Running the test suites

    rake test rspec spec
